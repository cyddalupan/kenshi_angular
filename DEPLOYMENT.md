# Deployment Guide - Kenshi Angular PWA

This guide covers the deployment process for the Kenshi Angular PWA to admin.toybits.cloud.

## 🏗️ Current Deployment

### Server Details
- **Provider**: DigitalOcean
- **Instance**: Ubuntu 22.04 LTS
- **Specs**: 2 vCPU, 4GB RAM, 80GB SSD
- **IP Address**: (Redacted for security)

### Domain Configuration
- **Primary Domain**: admin.toybits.cloud
- **SSL**: Let's Encrypt (auto-renewing)
- **DNS**: Cloudflare (optional for CDN)

## 📁 Directory Structure

```
/var/www/admin.toybits.cloud/
├── public/                    # Compiled PWA files (served by Apache)
│   ├── index.html            # Main entry point
│   ├── manifest.webmanifest  # PWA manifest
│   ├── sw.js                # Service worker
│   └── icons/               # Platform icons
├── angular-skeleton/         # Angular source code
│   ├── src/                 # Source files
│   ├── dist/               # Build output
│   └── package.json        # Dependencies
├── logs/                    # Application logs
├── README.md               # Project documentation
├── WISDOMVAULT_INTEGRATION.md  # API integration guide
└── DEPLOYMENT.md           # This file
```

## 🔧 Apache Configuration

### Virtual Host Files

#### HTTP Configuration (`/etc/apache2/sites-available/admin.toybits.cloud.conf`)
```apache
<VirtualHost *:80>
    ServerName admin.toybits.cloud
    ServerAdmin webmaster@toybits.cloud
    
    DocumentRoot /var/www/admin.toybits.cloud/public
    
    # Logging
    ErrorLog ${APACHE_LOG_DIR}/admin.toybits.cloud-error.log
    CustomLog ${APACHE_LOG_DIR}/admin.toybits.cloud-access.log combined
    
    # Redirect to HTTPS
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</VirtualHost>
```

#### HTTPS Configuration (`/etc/apache2/sites-available/admin.toybits.cloud-le-ssl.conf`)
```apache
<VirtualHost *:443>
    ServerName admin.toybits.cloud
    ServerAdmin webmaster@toybits.cloud
    
    DocumentRoot /var/www/admin.toybits.cloud/public
    
    # SSL Configuration
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/admin.toybits.cloud/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/admin.toybits.cloud/privkey.pem
    
    # PWA Headers
    Header always set Service-Worker-Allowed "/"
    Header always set X-Content-Type-Options "nosniff"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    
    # CORS Headers (for API integration)
    Header always set Access-Control-Allow-Origin "https://admin.toybits.cloud"
    Header always set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
    Header always set Access-Control-Allow-Headers "Authorization, Content-Type"
    
    # Security Headers
    Header always set X-Frame-Options "DENY"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Content-Security-Policy "default-src 'self' https:; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://unpkg.com; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https://wisdomvault.welfareph.com;"
    
    # Logging
    ErrorLog ${APACHE_LOG_DIR}/admin.toybits.cloud-ssl-error.log
    CustomLog ${APACHE_LOG_DIR}/admin.toybits.cloud-ssl-access.log combined
    
    # Directory settings
    <Directory /var/www/admin.toybits.cloud/public>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        # Cache static assets
        <FilesMatch "\.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf|eot)$">
            Header set Cache-Control "public, max-age=31536000"
        </FilesMatch>
        
        # Don't cache HTML files
        <FilesMatch "\.(html|htm)$">
            Header set Cache-Control "no-cache, no-store, must-revalidate"
        </FilesMatch>
    </Directory>
</VirtualHost>
```

## 📜 SSL Certificate Management

### Initial Certificate Setup
```bash
# Install Certbot
sudo apt update
sudo apt install certbot python3-certbot-apache

# Obtain certificate
sudo certbot certonly --standalone -d admin.toybits.cloud

# Configure Apache
sudo a2enmod ssl
sudo a2enmod headers
sudo a2enmod rewrite
sudo a2ensite admin.toybits.cloud-le-ssl.conf
sudo systemctl reload apache2
```

### Auto-renewal
Certbot automatically sets up a cron job for renewal:
```bash
# Check renewal status
sudo certbot renew --dry-run

# Manual renewal
sudo certbot renew
```

## 🚀 Deployment Process

### 1. Build Angular Application
```bash
# Navigate to Angular source
cd /var/www/admin.toybits.cloud/angular-skeleton

# Install dependencies (if needed)
npm install

# Build for production
ng build --configuration production

# The built files will be in dist/browser/
```

### 2. Deploy to Public Directory
```bash
# Backup current public directory (optional)
cp -r /var/www/admin.toybits.cloud/public /var/www/admin.toybits.cloud/public-backup-$(date +%Y%m%d)

# Copy new build to public directory
rm -rf /var/www/admin.toybits.cloud/public/*
cp -r /var/www/admin.toybits.cloud/angular-skeleton/dist/browser/* /var/www/admin.toybits.cloud/public/

# Ensure proper permissions
chown -R www-data:www-data /var/www/admin.toybits.cloud/public
chmod -R 755 /var/www/admin.toybits.cloud/public
```

### 3. Update Service Worker Cache Version
```bash
# Update sw.js cache version to force update
sed -i "s/CACHE_VERSION = '.*'/CACHE_VERSION = 'v$(date +%Y%m%d%H%M)'/" /var/www/admin.toybits.cloud/public/sw.js
```

### 4. Restart Apache
```bash
# Test configuration
sudo apache2ctl configtest

# Reload Apache
sudo systemctl reload apache2

# Or restart if needed
sudo systemctl restart apache2
```

## 🔄 Continuous Deployment Script

Create a deployment script at `/var/www/admin.toybits.cloud/deploy.sh`:

```bash
#!/bin/bash
# deploy.sh - Automated deployment script

set -e  # Exit on error

echo "🚀 Starting deployment of Kenshi Angular PWA"
echo "============================================"

# Variables
PROJECT_DIR="/var/www/admin.toybits.cloud"
ANGULAR_DIR="$PROJECT_DIR/angular-skeleton"
PUBLIC_DIR="$PROJECT_DIR/public"
BACKUP_DIR="$PROJECT_DIR/backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

echo "📦 Step 1: Creating backup..."
tar -czf "$BACKUP_DIR/public-backup-$TIMESTAMP.tar.gz" -C "$PROJECT_DIR" public/

echo "🔧 Step 2: Building Angular application..."
cd "$ANGULAR_DIR"
npm ci  # Clean install
ng build --configuration production

echo "📁 Step 3: Deploying to public directory..."
rm -rf "$PUBLIC_DIR"/*
cp -r "$ANGULAR_DIR/dist/browser/"* "$PUBLIC_DIR"/

echo "🔄 Step 4: Updating service worker cache version..."
CACHE_VERSION="v$(date +%Y%m%d%H%M)"
sed -i "s/CACHE_VERSION = '.*'/CACHE_VERSION = '$CACHE_VERSION'/" "$PUBLIC_DIR/sw.js"

echo "🔒 Step 5: Setting permissions..."
chown -R www-data:www-data "$PUBLIC_DIR"
chmod -R 755 "$PUBLIC_DIR"

echo "🔄 Step 6: Restarting Apache..."
sudo systemctl reload apache2

echo "✅ Deployment completed successfully!"
echo "🌐 Live at: https://admin.toybits.cloud/"
echo "📊 Cache version: $CACHE_VERSION"
echo "💾 Backup saved: $BACKUP_DIR/public-backup-$TIMESTAMP.tar.gz"
```

Make it executable:
```bash
chmod +x /var/www/admin.toybits.cloud/deploy.sh
```

## 📊 Monitoring & Logs

### Apache Logs
```bash
# Error logs
tail -f /var/log/apache2/admin.toybits.cloud-ssl-error.log

# Access logs
tail -f /var/log/apache2/admin.toybits.cloud-ssl-access.log
```

### Application Logs
Create application-specific logs:
```bash
# Create log directory
mkdir -p /var/www/admin.toybits.cloud/logs

# Monitor logs
tail -f /var/www/admin.toybits.cloud/logs/application.log
```

### SSL Certificate Status
```bash
# Check certificate expiration
sudo certbot certificates

# Check SSL configuration
sudo apache2ctl -S
```

## 🚨 Troubleshooting

### Common Issues

#### 1. SSL Certificate Issues
```bash
# Check if certificate is valid
openssl s_client -connect admin.toybits.cloud:443 -servername admin.toybits.cloud

# Renew certificate manually
sudo certbot renew --force-renewal
```

#### 2. Apache Configuration Errors
```bash
# Test configuration
sudo apache2ctl configtest

# Check enabled sites
sudo apache2ctl -S
```

#### 3. Service Worker Not Updating
1. Clear browser cache
2. Unregister service worker in DevTools → Application → Service Workers
3. Update CACHE_VERSION in sw.js

#### 4. PWA Not Installable
1. Check manifest.webmanifest is accessible
2. Verify HTTPS is working
3. Check service worker registration

### Debug Commands
```bash
# Check if site is accessible
curl -I https://admin.toybits.cloud/

# Check SSL certificate
curl -v https://admin.toybits.cloud/

# Check service worker
curl https://admin.toybits.cloud/sw.js

# Check manifest
curl https://admin.toybits.cloud/manifest.webmanifest
```

## 🔄 Rollback Procedure

### Manual Rollback
```bash
# Stop Apache
sudo systemctl stop apache2

# Restore from backup
cd /var/www/admin.toybits.cloud
rm -rf public
tar -xzf backups/public-backup-20240319_120000.tar.gz

# Restart Apache
sudo systemctl start apache2
```

### Automated Rollback Script
Create `/var/www/admin.toybits.cloud/rollback.sh`:

```bash
#!/bin/bash
# rollback.sh - Rollback to previous version

if [ -z "$1" ]; then
    echo "Usage: $0 <backup-file>"
    echo "Available backups:"
    ls -la /var/www/admin.toybits.cloud/backups/
    exit 1
fi

BACKUP_FILE="/var/www/admin.toybits.cloud/backups/$1"

if [ ! -f "$BACKUP_FILE" ]; then
    echo "Error: Backup file not found: $BACKUP_FILE"
    exit 1
fi

echo "🔄 Rolling back to: $1"
sudo systemctl stop apache2

cd /var/www/admin.toybits.cloud
rm -rf public
tar -xzf "$BACKUP_FILE"

sudo systemctl start apache2
echo "✅ Rollback completed!"
```

## 📈 Performance Optimization

### Apache Tuning
```apache
# /etc/apache2/mods-available/mpm_prefork.conf
<IfModule mpm_prefork_module>
    StartServers             5
    MinSpareServers          5
    MaxSpareServers         10
    MaxRequestWorkers      150
    MaxConnectionsPerChild   0
</IfModule>
```

### Enable Compression
```bash
sudo a2enmod deflate
```

Add to Apache config:
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

### Enable Browser Caching
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/html "access plus 1 hour"
</IfModule>
```

## 🔒 Security Hardening

### File Permissions
```bash
# Set proper ownership
sudo chown -R www-data:www-data /var/www/admin.toybits.cloud
sudo chmod -R 755 /var/www/admin.toybits.cloud

# Protect sensitive files
chmod 600 /var/www/admin.toybits.cloud/*.env 2>/dev/null || true
```

### Firewall Configuration
```bash
# Allow HTTP/HTTPS only
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

### Regular Updates
```bash
# Update system weekly
sudo apt update
sudo apt upgrade -y

# Update Node.js dependencies
cd /var/www/admin.toybits.cloud/angular-skeleton
npm audit fix
```

## 📋 Maintenance Checklist

### Daily
- [ ] Check Apache error logs
- [ ] Verify SSL certificate validity
- [ ] Monitor disk space
- [ ] Check backup status

### Weekly
- [ ] Update system packages
- [ ] Rotate log files
- [ ] Test backup restoration
- [ ] Review security logs

### Monthly
- [ ] Review Apache configuration
- [ ] Update Angular dependencies
- [ ] Performance testing
- [ ] Security audit

## 📞 Support Contacts

### Technical Support
- **Server Admin**: Cyd Dalupan
- **Email**: cyd@toybits.cloud
- **GitHub**: @cyddalupan

### Emergency Contacts
- **Hosting Provider**: DigitalOcean Support
- **Domain Registrar**: Namecheap
- **SSL Certificate**: Let's Encrypt Community

---

**Last Updated**: 2026-03-19  
**Deployment Status**: Production  
**Next Scheduled Maintenance**: 2026-04-01