# Admin Dashboard for TOYBITS

A simple admin dashboard application that connects to the WisdomVault database.

## 🚀 Quick Start

1. **Access the dashboard:** `https://admin.toybits.cloud/`
2. **Admin login:** `https://admin.toybits.cloud/admin.php`
   - Username: `admin`
   - Password: `toybits123`

## 📁 File Structure

```
/var/www/admin.toybits.cloud/
├── public/
│   ├── index.php          # Main dashboard (public)
│   ├── admin.php          # Admin dashboard (login required)
│   └── db-test.php        # Database connection test
└── README.md
```

## 🔗 URLs

- **Main Dashboard:** `https://admin.toybits.cloud/`
- **Admin Login:** `https://admin.toybits.cloud/admin.php`
- **Database Test:** `https://admin.toybits.cloud/db-test.php`

## 🔐 Security Notes

1. **SSL Certificate:** Currently using abroad.toybits.cloud's certificate (will show warning)
2. **Admin Credentials:** Hardcoded for demo purposes
3. **Database Access:** Read-only connection to WisdomVault database
4. **Session Management:** Basic PHP sessions

## 🗄️ Database Connection

The app connects to the WisdomVault MySQL database:

```php
$host = 'localhost';
$dbname = 'wisdomvault_db';
$username = 'cleddrence';
$password = 'limangminutolangsapatna';
```

## 📊 Features

### 1. **Public Dashboard** (`index.php`)
- System status display
- HTTPS verification
- Server information
- Responsive design

### 2. **Admin Dashboard** (`admin.php`)
- Login-protected area
- Facebook pages overview
- Recent chat messages
- Database statistics
- System information

### 3. **Database Test** (`db-test.php`)
- Connection verification
- Table listing with counts
- Facebook pages display
- Chat statistics

## 🛠️ Apache Configuration

- **HTTP Config:** `/etc/apache2/sites-available/admin.toybits.cloud.conf`
- **HTTPS Config:** `/etc/apache2/sites-available/admin.toybits.cloud-le-ssl.conf`
- **Document Root:** `/var/www/admin.toybits.cloud/public`

## 🔧 Future Enhancements

1. **Proper SSL Certificate:** Get Let's Encrypt certificate for admin.toybits.cloud
2. **User Management:** Real user authentication system
3. **Write Access:** Safe database modification capabilities
4. **API Endpoints:** REST API for external integration
5. **Advanced Analytics:** Charts and graphs for business insights

## 📝 Notes

- This is a demo application showing database connectivity
- All database operations are currently read-only
- The admin credentials are for demonstration only
- The app demonstrates how to create a separate admin interface for WisdomVault

## 🚨 Troubleshooting

If the database connection fails:

1. Check if MySQL is running: `systemctl status mysql`
2. Verify database credentials match WisdomVault's `.env` file
3. Test connection manually: `mysql -u cleddrence -p wisdomvault_db`
4. Check Apache error logs: `tail -f /var/log/apache2/admin_error.log`

## 📞 Support

For issues with this admin dashboard, check:
- Apache configuration files
- Database connectivity
- PHP error logs
- SSL certificate configuration