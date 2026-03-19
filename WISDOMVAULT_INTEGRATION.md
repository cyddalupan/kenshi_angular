# WisdomVault API Integration Guide

This document outlines the integration plan between the Kenshi Angular PWA (admin.toybits.cloud) and the WisdomVault Django backend (wisdomvault.welfareph.com).

## 🔗 Overview

The Kenshi Angular PWA will serve as the admin dashboard for managing content, users, and analytics, while connecting to the WisdomVault Django backend for data persistence and business logic.

## 🏗️ System Architecture

```
┌─────────────────┐     REST API     ┌─────────────────────┐
│                 │◄────────────────►│                     │
│  Angular PWA    │   WebSocket      │  WisdomVault Django │
│  (Frontend)     │◄────────────────►│  (Backend)          │
│  admin.toybits.cloud │   Auth Tokens  │  wisdomvault.welfareph.com │
│                 │◄────────────────►│                     │
└─────────────────┘                  └─────────────────────┘
        │                                      │
        ▼                                      ▼
   Browser/Device                          PostgreSQL
   PWA Installation                         Redis Cache
                                          Celery Workers
```

## 🔐 Authentication

### JWT Token Flow
1. User logs in via Angular PWA
2. PWA sends credentials to WisdomVault `/api/auth/login/`
3. WisdomVault returns JWT tokens (access + refresh)
4. PWA stores tokens in secure storage
5. All subsequent requests include Authorization header

### Token Storage Strategy
```typescript
// Secure token storage service
@Injectable()
export class AuthService {
  private readonly ACCESS_TOKEN_KEY = 'wisdomvault_access_token';
  private readonly REFRESH_TOKEN_KEY = 'wisdomvault_refresh_token';
  
  // Store tokens securely
  setTokens(access: string, refresh: string): void {
    // Use secure storage (localStorage with encryption or HTTP-only cookies)
    localStorage.setItem(this.ACCESS_TOKEN_KEY, access);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, refresh);
  }
  
  // Auto-refresh token when expired
  refreshToken(): Observable<any> {
    const refreshToken = this.getRefreshToken();
    return this.http.post(`${API_URL}/auth/refresh/`, { refresh: refreshToken });
  }
}
```

## 📡 API Endpoints

### Base URL
```
https://wisdomvault.welfareph.com/api/
```

### Authentication
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/auth/login/` | POST | User login, returns JWT tokens |
| `/auth/register/` | POST | User registration |
| `/auth/refresh/` | POST | Refresh access token |
| `/auth/logout/` | POST | Invalidate tokens |

### User Management
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/users/` | GET | List all users |
| `/users/{id}/` | GET | Get user details |
| `/users/{id}/` | PUT | Update user |
| `/users/{id}/` | DELETE | Delete user |
| `/users/profile/` | GET | Current user profile |

### Content Management
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/posts/` | GET | List all posts |
| `/posts/` | POST | Create new post |
| `/posts/{id}/` | GET | Get post details |
| `/posts/{id}/` | PUT | Update post |
| `/posts/{id}/` | DELETE | Delete post |
| `/posts/{id}/comments/` | GET | Get post comments |

### Analytics
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/analytics/overview/` | GET | Dashboard overview |
| `/analytics/users/` | GET | User statistics |
| `/analytics/content/` | GET | Content statistics |
| `/analytics/engagement/` | GET | Engagement metrics |

## 🛠️ Angular Service Implementation

### API Service
```typescript
// wisdomvault-api.service.ts
@Injectable({
  providedIn: 'root'
})
export class WisdomVaultApiService {
  private readonly BASE_URL = 'https://wisdomvault.welfareph.com/api';
  
  constructor(private http: HttpClient) {}
  
  // Generic GET request with auth
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.BASE_URL}${endpoint}`, {
      headers: this.getAuthHeaders()
    });
  }
  
  // Generic POST request
  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.BASE_URL}${endpoint}`, data, {
      headers: this.getAuthHeaders()
    });
  }
  
  // Get auth headers
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getAccessToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }
}
```

### User Service
```typescript
// user.service.ts
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private api: WisdomVaultApiService) {}
  
  // Get all users
  getUsers(): Observable<User[]> {
    return this.api.get<User[]>('/users/');
  }
  
  // Get user by ID
  getUser(id: number): Observable<User> {
    return this.api.get<User>(`/users/${id}/`);
  }
  
  // Update user
  updateUser(id: number, userData: Partial<User>): Observable<User> {
    return this.api.put<User>(`/users/${id}/`, userData);
  }
}
```

## 🔄 Real-time Updates

### WebSocket Integration
```typescript
// websocket.service.ts
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: WebSocket;
  private readonly WS_URL = 'wss://wisdomvault.welfareph.com/ws/';
  
  connect(): void {
    const token = this.authService.getAccessToken();
    this.socket = new WebSocket(`${this.WS_URL}?token=${token}`);
    
    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.handleMessage(data);
    };
    
    this.socket.onopen = () => {
      console.log('WebSocket connected');
    };
  }
  
  private handleMessage(data: any): void {
    // Handle different message types
    switch (data.type) {
      case 'NEW_POST':
        this.postService.addPost(data.post);
        break;
      case 'NEW_COMMENT':
        this.commentService.addComment(data.comment);
        break;
      case 'USER_UPDATE':
        this.userService.updateUser(data.user);
        break;
    }
  }
}
```

## 🗄️ Data Models

### User Model
```typescript
interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
  last_login: string;
}
```

### Post Model
```typescript
interface Post {
  id: number;
  title: string;
  content: string;
  author: User;
  created_at: string;
  updated_at: string;
  status: 'draft' | 'published' | 'archived';
  tags: string[];
  media_urls: string[];
}
```

### Comment Model
```typescript
interface Comment {
  id: number;
  post: number;
  author: User;
  content: string;
  created_at: string;
  updated_at: string;
  parent_comment?: number;
}
```

## 🚀 Implementation Phases

### Phase 1: Authentication & Basic API (Week 1-2)
- [ ] Set up Angular HTTP interceptor
- [ ] Implement login/logout flows
- [ ] Create auth guard for protected routes
- [ ] Test token refresh mechanism

### Phase 2: User Management (Week 3-4)
- [ ] User listing with pagination
- [ ] User detail view
- [ ] User creation/editing forms
- [ ] Role-based permissions

### Phase 3: Content Management (Week 5-6)
- [ ] Post listing and filtering
- [ ] Post creation/editing interface
- [ ] Media upload functionality
- [ ] Comment moderation tools

### Phase 4: Analytics & Real-time (Week 7-8)
- [ ] Dashboard with charts
- [ ] Real-time notifications
- [ ] WebSocket integration
- [ ] Export functionality

## 🔒 Security Considerations

### Frontend Security
1. **Token Storage**: Use secure storage with encryption
2. **XSS Protection**: Sanitize all user inputs
3. **CORS**: Configure proper CORS headers
4. **HTTPS**: Enforce HTTPS for all API calls

### API Security
1. **Rate Limiting**: Implement on sensitive endpoints
2. **Input Validation**: Validate all incoming data
3. **SQL Injection**: Use Django ORM to prevent
4. **CSRF Protection**: Use Django's CSRF middleware

## 🧪 Testing Strategy

### Unit Tests
- Test individual services and components
- Mock API responses
- Test authentication flows

### Integration Tests
- Test complete user journeys
- Test API integration
- Test error handling

### E2E Tests
- Test complete workflows
- Cross-browser testing
- Mobile device testing

## 📊 Monitoring & Logging

### Frontend Logging
```typescript
// Logging service
@Injectable()
export class LoggingService {
  logError(error: any, context?: string): void {
    console.error(`[${context}]`, error);
    // Send to error tracking service (Sentry, etc.)
  }
  
  logApiCall(endpoint: string, method: string, status: number): void {
    console.log(`API: ${method} ${endpoint} - ${status}`);
  }
}
```

### Performance Monitoring
- Track page load times
- Monitor API response times
- Track user interactions
- Monitor WebSocket connections

## 🚨 Error Handling

### HTTP Error Interceptor
```typescript
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Handle unauthorized - redirect to login
          this.authService.logout();
          this.router.navigate(['/login']);
        } else if (error.status === 403) {
          // Handle forbidden - show access denied
          this.notificationService.showError('Access denied');
        } else if (error.status >= 500) {
          // Handle server errors
          this.notificationService.showError('Server error. Please try again later.');
        }
        
        return throwError(error);
      })
    );
  }
}
```

## 📈 Performance Optimization

### Caching Strategy
1. **API Response Caching**: Cache frequent API calls
2. **Image Optimization**: Lazy load and compress images
3. **Bundle Optimization**: Code splitting and tree shaking
4. **Service Worker**: Cache static assets for offline use

### Lazy Loading
```typescript
// Route configuration with lazy loading
const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  }
];
```

## 🔄 Deployment Checklist

### Pre-deployment
- [ ] All tests passing
- [ ] API integration tested
- [ ] Security review completed
- [ ] Performance optimized

### Deployment Steps
1. Build Angular app: `ng build --configuration production`
2. Copy files to public directory
3. Restart Apache server
4. Verify HTTPS is working
5. Test all functionality

### Post-deployment
- [ ] Monitor error logs
- [ ] Check API connectivity
- [ ] Verify mobile functionality
- [ ] Test PWA installation

## 📞 Support & Troubleshooting

### Common Issues
1. **CORS Errors**: Check WisdomVault CORS configuration
2. **Authentication Failures**: Verify token storage and refresh
3. **WebSocket Disconnects**: Check network and token validity
4. **Performance Issues**: Monitor API response times

### Debug Tools
- Browser DevTools Network tab
- Angular Augury extension
- Django debug toolbar
- Server logs

---

**Last Updated**: 2026-03-19  
**Integration Status**: Planning Phase  
**Next Steps**: Implement Phase 1 (Authentication)