# Finance Tracker - Full Stack Application

A comprehensive personal finance tracking application built with Spring Boot backend and React frontend.

## 🚀 Features

### Week 1: Authentication ✅
- User registration and login with JWT
- Password hashing with BCrypt
- Role-based access control (USER, ADMIN)
- PostgreSQL database integration
- Swagger/OpenAPI documentation

### Week 2: Transactions (CRUD) 🔄
- Add, update, delete transactions
- Income and expense tracking
- Category management
- Transaction history

### Week 3: Dashboard & Insights 📊
- Monthly summaries
- Category breakdown charts
- Smart financial recommendations
- Interactive analytics

### Week 4: Reports & Deployment 🚀
- PDF/CSV export functionality
- Pagination support
- Production deployment ready
- Mobile-responsive design

## 🛠️ Tech Stack

### Backend
- **Spring Boot 3.2.0** - Main framework
- **Spring Security** - Authentication & authorization
- **Spring Data JPA** - Database operations
- **PostgreSQL** - Database
- **JWT** - Token-based authentication
- **Swagger/OpenAPI** - API documentation
- **Maven** - Dependency management

### Frontend (Coming Soon)
- **React.js** - Frontend framework
- **Axios** - HTTP client
- **Chart.js** - Data visualization
- **Tailwind CSS** - Styling

## 📋 Prerequisites

- Java 17 or higher
- Maven 3.6+
- PostgreSQL 12+
- Node.js 16+ (for frontend)

## 🚀 Quick Start

### 1. Database Setup

Create a PostgreSQL database:
```sql
CREATE DATABASE finance_tracker;
```

### 2. Backend Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd finance-tracker
```

2. Update database configuration in `src/main/resources/application.yml`:
```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/finance_tracker
    username: your_username
    password: your_password
```

3. Run the application:
```bash
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### 3. API Documentation

Access Swagger UI at: `http://localhost:8080/api/swagger-ui.html`

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/test` - Test endpoint

### Example Usage

#### Register a new user:
```bash
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john_doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

#### Login:
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john_doe",
    "password": "password123"
  }'
```

## 🧪 Testing

Run tests with Maven:
```bash
mvn test
```

## 📁 Project Structure

```
src/
├── main/
│   ├── java/com/financeapp/
│   │   ├── config/          # Configuration classes
│   │   ├── controller/      # REST controllers
│   │   ├── dto/            # Data Transfer Objects
│   │   ├── entity/         # JPA entities
│   │   ├── exception/      # Exception handlers
│   │   ├── repository/     # Data repositories
│   │   ├── security/       # Security configuration
│   │   ├── service/        # Business logic
│   │   └── FinanceTrackerApplication.java
│   └── resources/
│       └── application.yml
└── test/                   # Test files
```

## 🔧 Configuration

Key configuration options in `application.yml`:

- **Database**: PostgreSQL connection settings
- **JWT**: Secret key and expiration time
- **Server**: Port and context path
- **Logging**: Debug levels for development

## 🚀 Deployment

### Backend Deployment
1. Build the JAR file:
```bash
mvn clean package
```

2. Run the JAR:
```bash
java -jar target/finance-tracker-0.0.1-SNAPSHOT.jar
```

### Environment Variables
Set these environment variables for production:
- `SPRING_DATASOURCE_URL`
- `SPRING_DATASOURCE_USERNAME`
- `SPRING_DATASOURCE_PASSWORD`
- `JWT_SECRET`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@financetracker.com or create an issue in the repository.

---

**Note**: This is a work in progress. Frontend implementation and additional features will be added in subsequent weeks.

