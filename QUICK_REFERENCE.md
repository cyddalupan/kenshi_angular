# Quick Reference - Kenshi Angular PWA

## 🚀 Quick Start

### Access the PWA
- **Live URL**: https://admin.toybits.cloud/
- **GitHub Repo**: git@github.com:cyddalupan/kenshi_angular.git
- **Local Dev**: `ng serve` (port 4200)

### Key Features
- ✅ **PWA** - Installable on all devices
- ✅ **Dark/Light Mode** - Click moon/sun icon
- ✅ **Mobile Optimized** - Ionic framework
- ✅ **Offline Support** - Service worker
- ✅ **HTTPS** - Let's Encrypt SSL

## 📁 Directory Structure

```
/var/www/admin.toybits.cloud/
├── public/                    # Served by Apache
│   ├── index.html           # Main PWA
│   ├── sw.js               # Service worker
│   └── icons/              # Platform icons
├── angular-skeleton/        # Source code
│   ├── src/app/           # Angular components
│   └── package.json       # Dependencies
└── *.md                   # Documentation
```

## 🔧 Common Commands

### Development
```bash
# Start dev server
cd angular-skeleton && ng serve

# Build for production
ng build --configuration production

# Run tests
ng test
```

### Deployment
```bash
# Deploy script
./deploy.sh

# Manual deployment
rm -rf public/*
cp -r angular-skeleton/dist/browser/* public/
sudo systemctl reload apache2
```

### Maintenance
```bash
# Check SSL certificate
sudo certbot certificates

# Check Apache logs
tail -f /var/log/apache2/admin.toybits.cloud-ssl-error.log

# Backup
tar -czf backup-$(date +%Y%m%d).tar.gz public/
```

## 🎨 Theme System

### Toggle Theme
- Click **moon/sun icon** (top-right)
- Or change OS dark/light mode

### Theme Colors
| Mode | Background | Text | Primary Color |
|------|------------|------|---------------|
| Light | Ionic default | Black | #4f46e5 |
| Dark | #121212 | White | #818cf8 |

## 📱 PWA Installation

### iOS (Safari)
1. Open https://admin.toybits.cloud/
2. Tap Share button (📤)
3. Tap "Add to Home Screen"

### Android (Chrome)
1. Open https://admin.toybits.cloud/
2. Tap menu (⋮)
3. Tap "Install app" or "Add to Home Screen"

### Desktop (Chrome/Edge)
1. Open https://admin.toybits.cloud/
2. Click install icon in address bar
3. Confirm installation

## 🔗 WisdomVault API Integration

### API Base URL
```
https://wisdomvault.welfareph.com/api/
```

### Key Endpoints
- `POST /auth/login/` - User authentication
- `GET /users/` - List users
- `GET /posts/` - List posts
- `GET /analytics/overview/` - Dashboard data

### Authentication Flow
1. User logs in via PWA
2. Get JWT tokens from WisdomVault
3. Store tokens securely
4. Include `Authorization: Bearer <token>` in headers

## 🚨 Troubleshooting

### PWA Not Installing?
1. Check HTTPS is working
2. Verify manifest.webmanifest is accessible
3. Clear browser cache
4. Check service worker registration

### Theme Not Switching?
1. Click moon/sun icon (top-right)
2. Check browser console for errors
3. Verify CSS variables are loading

### API Connection Issues?
1. Check CORS configuration on WisdomVault
2. Verify API endpoint is accessible
3. Check authentication tokens

### Performance Issues?
1. Clear service worker cache
2. Check network tab in DevTools
3. Verify asset compression is enabled

## 📊 Monitoring

### Log Locations
- **Apache Error**: `/var/log/apache2/admin.toybits.cloud-ssl-error.log`
- **Apache Access**: `/var/log/apache2/admin.toybits.cloud-ssl-access.log`
- **Application**: `/var/www/admin.toybits.cloud/logs/`

### Status Checks
```bash
# Check if site is up
curl -I https://admin.toybits.cloud/

# Check SSL
openssl s_client -connect admin.toybits.cloud:443

# Check service worker
curl https://admin.toybits.cloud/sw.js
```

## 🔄 Update Process

### Minor Updates (CSS/Content)
1. Edit files in `angular-skeleton/src/`
2. Run `ng build --configuration production`
3. Run `./deploy.sh`

### Major Updates (Dependencies)
1. Update `package.json`
2. Run `npm install`
3. Test locally with `ng serve`
4. Deploy with `./deploy.sh`

### Emergency Rollback
```bash
# List backups
ls -la backups/

# Rollback to specific backup
./rollback.sh public-backup-20240319_120000.tar.gz
```

## 🔒 Security

### Required Actions
- [ ] Keep SSL certificate renewed (auto)
- [ ] Regular system updates
- [ ] Monitor access logs
- [ ] Regular backups

### File Permissions
```bash
# Correct permissions
sudo chown -R www-data:www-data /var/www/admin.toybits.cloud
sudo chmod -R 755 /var/www/admin.toybits.cloud
```

## 📞 Support

### Immediate Issues
1. Check logs: `tail -f /var/log/apache2/*.log`
2. Test access: `curl -I https://admin.toybits.cloud/`
3. Check SSL: `sudo certbot certificates`

### Contact
- **Developer**: Cyd Dalupan
- **Email**: cyd@toybits.cloud
- **GitHub Issues**: https://github.com/cyddalupan/kenshi_angular/issues

### Documentation
- **Full Guide**: README.md
- **API Integration**: WISDOMVAULT_INTEGRATION.md
- **Deployment**: DEPLOYMENT.md

## ⚡ Quick Fixes

### Clear Service Worker Cache
```javascript
// In browser console
navigator.serviceWorker.getRegistrations().then(function(registrations) {
  for(let registration of registrations) {
    registration.unregister();
  }
});
localStorage.clear();
location.reload();
```

### Force Theme Update
```javascript
// In browser console
document.body.classList.toggle('dark');
```

### Test API Connection
```javascript
// In browser console
fetch('https://wisdomvault.welfareph.com/api/auth/login/', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({username: 'test', password: 'test'})
}).then(r => r.json()).then(console.log).catch(console.error);
```

---

**Last Updated**: 2026-03-19  
**Version**: 1.0.0  
**Status**: ✅ Production Ready