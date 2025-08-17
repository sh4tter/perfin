# Finance Tracker - Setup Guide

## 🚀 Quick Setup (5 minutes)

### Prerequisites
- Java 17+ installed
- Maven 3.6+ installed
- Docker Desktop installed
- Git installed

### Step 1: Clone and Setup
```bash
git clone <your-repo-url>
cd finance-tracker
```

### Step 2: Start Database
```bash
# Using Docker Compose (recommended)
docker-compose up -d

# Or manually create PostgreSQL database:
# CREATE DATABASE finance_tracker;
```

### Step 3: Run Application
```bash
# Using Maven
mvn spring-boot:run

# Or using the provided scripts:
# Windows: start-dev.bat
# PowerShell: .\start-dev.ps1
```

### Step 4: Test the API
1. Open browser: `http://localhost:8080/api/swagger-ui.html`
2. Test the endpoints or use the provided Postman collection

## 📋 Manual Database Setup

If you prefer not to use Docker:

1. Install PostgreSQL
2. Create database:
```sql
CREATE DATABASE finance_tracker;
CREATE USER postgres WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE finance_tracker TO postgres;
```

3. Update `application.yml` with your database credentials

## 🧪 Testing

### Using Postman
1. Import `postman_collection.json` into Postman
2. Run the test requests in order:
   - Test API
   - Register User
   - Login User

### Using curl
```bash
# Test API
curl http://localhost:8080/api/auth/test

# Register
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"password123"}'
```

## 🔧 Configuration

### Environment Variables
Set these for production:
```bash
SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/finance_tracker
SPRING_DATASOURCE_USERNAME=postgres
SPRING_DATASOURCE_PASSWORD=password
JWT_SECRET=your-secure-secret-key
```

### Application Properties
Key settings in `application.yml`:
- Database connection
- JWT secret and expiration
- Server port (8080)
- Logging levels

## 🐛 Troubleshooting

### Common Issues

1. **Port 8080 already in use**
   ```bash
   # Change port in application.yml
   server:
     port: 8081
   ```

2. **Database connection failed**
   - Check if PostgreSQL is running
   - Verify credentials in `application.yml`
   - Ensure database exists

3. **JWT errors**
   - Check JWT secret in `application.yml`
   - Ensure secret is at least 256 bits

4. **CORS issues**
   - CORS is configured for all origins in development
   - Update `SecurityConfig.java` for production

### Logs
Check application logs for detailed error messages:
```bash
# View logs
tail -f logs/application.log
```

## 📚 Next Steps

### Week 2: Transactions
- [ ] Create Transaction entity
- [ ] Add CRUD endpoints
- [ ] Implement validation
- [ ] Add service layer tests

### Week 3: Dashboard
- [ ] Create summary endpoints
- [ ] Add chart data endpoints
- [ ] Implement insights engine

### Week 4: Reports & Deployment
- [ ] Add export functionality
- [ ] Implement pagination
- [ ] Create frontend
- [ ] Deploy to production

## 🆘 Support

- Check the main README.md for detailed documentation
- Review the API documentation at `/swagger-ui.html`
- Create an issue for bugs or feature requests

