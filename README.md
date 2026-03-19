# Kenshi Angular PWA - Admin Dashboard

A Progressive Web App (PWA) built with Ionic + Angular + Tailwind CSS for the Kenshi project. This serves as the admin dashboard that will connect to the WisdomVault API.

## 🚀 Live Demo
**https://admin.toybits.cloud/**

## 📱 Features

### ✅ PWA Features
- **Installable** on iOS, Android, Windows, macOS
- **Offline Support** via service worker
- **Native-like Experience** with splash screens
- **Push Notifications** ready
- **Theme Color** adaptation

### ✅ Design Features
- **Ionic Framework** for mobile-optimized UI
- **Tailwind CSS** for utility-first styling
- **Dark/Light Mode** with automatic switching
- **Responsive Design** for all screen sizes
- **Bottom Navigation** tabs (Home, Components, Settings)

### ✅ Technical Features
- **Angular-based** architecture
- **Service Worker** for offline caching
- **Device Detection** for platform-specific features
- **Theme Toggle** with system preference detection
- **HTTPS** with Let's Encrypt SSL

## 🏗️ Architecture

```
admin.toybits.cloud/
├── public/                    # Compiled PWA files
│   ├── index.html            # Main entry point
│   ├── manifest.webmanifest  # PWA manifest
│   ├── sw.js                # Service worker
│   └── icons/               # All platform icons
├── angular-skeleton/         # Angular source code
│   ├── src/
│   │   ├── app/             # Angular components
│   │   ├── environments/    # Configuration
│   │   └── styles.scss     # Global styles
│   └── package.json         # Dependencies
└── README.md                # This documentation
```

## 🔗 WisdomVault API Integration

### Planned Integration Points

1. **Authentication**
   - Connect to WisdomVault Django backend
   - JWT token-based authentication
   - User session management

2. **Data Management**
   - CRUD operations via REST API
   - Real-time updates via WebSocket
   - File upload/download

3. **Admin Features**
   - User management dashboard
   - Content moderation tools
   - Analytics and reporting
   - System configuration

### API Endpoints (To Be Implemented)

```typescript
// Example API service structure
const WISDOMVAULT_API = {
  BASE_URL: 'https://wisdomvault.welfareph.com/api/',
  ENDPOINTS: {
    AUTH: {
      LOGIN: 'auth/login/',
      REGISTER: 'auth/register/',
      REFRESH: 'auth/refresh/',
    },
    USERS: {
      LIST: 'users/',
      DETAIL: 'users/{id}/',
      UPDATE: 'users/{id}/',
    },
    CONTENT: {
      POSTS: 'posts/',
      COMMENTS: 'comments/',
      MEDIA: 'media/',
    }
  }
};
```

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ and npm
- Angular CLI 17+
- Git

### Installation
```bash
# Clone the repository
git clone git@github.com:cyddalupan/kenshi_angular.git
cd kenshi_angular

# Navigate to Angular source
cd angular-skeleton

# Install dependencies
npm install

# Start development server
ng serve
```

### Building for Production
```bash
# Build the Angular app
ng build --configuration production

# The built files will be in dist/ directory
# Copy to public/ directory for serving
cp -r dist/browser/* ../public/
```

## 🌐 Deployment

### Current Deployment
- **Server**: DigitalOcean Ubuntu 22.04
- **Web Server**: Apache 2.4
- **SSL**: Let's Encrypt (auto-renewing)
- **Domain**: admin.toybits.cloud

### Apache Configuration
```apache
# /etc/apache2/sites-available/admin.toybits.cloud-le-ssl.conf
<VirtualHost *:443>
    ServerName admin.toybits.cloud
    DocumentRoot /var/www/admin.toybits.cloud/public
    
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/admin.toybits.cloud/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/admin.toybits.cloud/privkey.pem
    
    # PWA headers
    Header always set Service-Worker-Allowed "/"
    Header always set X-Content-Type-Options "nosniff"
</VirtualHost>
```

## 🎨 Theme System

### Light Mode
- Background: Ionic default light theme
- Primary Color: `#4f46e5` (purple)
- Text: Dark for readability
- Theme Color: `#4f46e5`

### Dark Mode
- Background: `#121212` (true dark)
- Primary Color: `#818cf8` (light purple)
- Text: White for contrast
- Theme Color: `#121212`

### Theme Toggle
- Click moon/sun icon in top-right corner
- Automatically follows system preference
- Updates meta theme-color for browser/OS

## 📱 PWA Installation

### iOS
1. Open in Safari
2. Tap Share button
3. Tap "Add to Home Screen"

### Android
1. Open in Chrome
2. Tap menu (3 dots)
3. Tap "Install app" or "Add to Home Screen"

### Windows/macOS
1. Open in Chrome/Edge
2. Click install icon in address bar
3. Confirm installation

## 🔧 Service Worker

### Caching Strategy
- **App Shell**: Cache-first for core files
- **API Calls**: Network-first with cache fallback
- **Images**: Cache-first with expiration

### Cache Management
```javascript
// Clear cache manually
navigator.serviceWorker.getRegistration()
  .then(registration => {
    if (registration) {
      return caches.delete('angular-ionic-pwa-skeleton-v3-skeleton-icons');
    }
  })
```

## 📊 Project Status

### ✅ Completed
- [x] PWA setup with all icons
- [x] HTTPS configuration
- [x] Theme toggle (dark/light mode)
- [x] Mobile-optimized design
- [x] Service worker for offline use
- [x] Code pushed to GitHub repository

### 🔄 In Progress
- [ ] WisdomVault API integration
- [ ] Authentication system
- [ ] Admin dashboard features
- [ ] Real-time updates

### 📋 Planned
- [ ] User management interface
- [ ] Content moderation tools
- [ ] Analytics dashboard
- [ ] Push notifications
- [ ] Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is part of the TOYBITS Business Process Automation as a Service (BPAaaS).

## 📞 Support

For issues and questions:
- GitHub Issues: [cyddalupan/kenshi_angular](https://github.com/cyddalupan/kenshi_angular/issues)
- Email: support@toybits.cloud

---

**Last Updated**: 2026-03-19  
**Version**: 1.0.0  
**Live URL**: https://admin.toybits.cloud/