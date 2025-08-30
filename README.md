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

### Frontend
- **React.js 19** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Headless UI** - UI components

## 📁 Project Structure

```
perfin/
├── backend/                 # Spring Boot API
│   ├── src/
│   │   ├── main/java/com/financeapp/
│   │   │   ├── config/     # Configuration classes
│   │   │   ├── controller/ # REST controllers
│   │   │   ├── dto/        # Data Transfer Objects
│   │   │   ├── entity/     # JPA entities
│   │   │   ├── exception/  # Exception handlers
│   │   │   ├── repository/ # Data repositories
│   │   │   ├── security/   # Security configuration
│   │   │   └── service/    # Business logic
│   │   └── resources/
│   │       ├── application.yml
│   │       └── application-render.yml
│   ├── pom.xml
│   ├── Dockerfile
│   └── mvnw, mvnw.cmd
├── frontend/               # React Application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── auth/      # Authentication components
│   │   │   ├── dashboard/ # Dashboard components
│   │   │   └── layout/    # Layout components
│   │   ├── contexts/      # React contexts
│   │   ├── services/      # API services
│   │   └── types/         # TypeScript types
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── .env.*
├── render.yaml             # Deployment configuration
└── README.md
```

## 📋 Prerequisites

- Java 17 or higher
- Maven 3.6+
- Node.js 18+
- PostgreSQL 12+ (for production)

## 🚀 Quick Start

### 1. Development Environment

#### Option A: Full Stack Development (Recommended)
```bash
# Run both frontend and backend together
./start-dev-full.ps1
```

This will start:
- Backend: http://localhost:8080/api
- Frontend: http://localhost:3000
- Swagger: http://localhost:8080/api/swagger-ui.html

#### Option B: Individual Services

**Backend Only:**
```bash
./start-backend.bat     # Windows
./start-dev.ps1         # PowerShell
```

**Frontend Only:**
```bash
./start-frontend.bat    # Windows
# Or manually:
cd frontend && npm run dev
```

#### Option C: Manual Start

**Backend:**
```bash
cd backend
docker-compose up -d    # Start PostgreSQL
./mvnw spring-boot:run  # Start Spring Boot
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

### 2. Database Setup

For development, the application uses H2 in-memory database by default.

For production with PostgreSQL:
```sql
CREATE DATABASE finance_tracker;
```

Update `backend/src/main/resources/application.yml` with your database credentials.

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/test` - Test endpoint (authenticated)

### Health
- `GET /api/health` - Health check

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

### Backend Tests
```bash
cd backend
./mvnw test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 🚀 Deployment

### Render (Recommended)

This project is configured for easy deployment on Render with both backend and frontend services.

1. **Fork/Clone the repository**
2. **Connect to Render**
   - Go to [render.com](https://render.com)
   - Create new "Blueprint"
   - Connect your repository
   - Render will automatically deploy both services

3. **Environment Variables**
   - Backend environment variables are configured in `render.yaml`
   - Frontend automatically points to the backend API
   - Database is automatically provisioned

4. **URLs after deployment:**
   - Backend API: `https://finance-tracker-api.onrender.com/api`
   - Frontend: `https://finance-tracker-frontend.onrender.com`
   - Swagger: `https://finance-tracker-api.onrender.com/api/swagger-ui.html`

### Manual Deployment

#### Backend
```bash
cd backend
./mvnw clean package
java -jar target/finance-tracker-0.0.1-SNAPSHOT.jar
```

#### Frontend
```bash
cd frontend
npm run build
npm run preview
```

## 🔧 Configuration

### Backend Configuration

Key configuration in `backend/src/main/resources/application.yml`:
- **Database**: PostgreSQL connection settings
- **JWT**: Secret key and expiration time
- **CORS**: Allowed origins for frontend
- **Server**: Port and context path

### Frontend Configuration

Environment variables in `frontend/.env.*`:
- `VITE_API_URL`: Backend API URL

## 🛡️ Security Features

- JWT-based authentication
- CORS configuration for frontend
- Password hashing with BCrypt
- Role-based access control
- HTTPS enforced in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- **Documentation**: Check this README and inline comments
- **Issues**: Create GitHub issues for bugs or feature requests
- **API Documentation**: Visit `/api/swagger-ui.html` when running locally

## 🔄 Changelog

### v0.2.0 (Current)
- ✅ Separated frontend and backend
- ✅ Vite React frontend with TypeScript
- ✅ Tailwind CSS styling
- ✅ JWT authentication flow
- ✅ Render deployment configuration
- ✅ CORS configuration for separated services

### v0.1.0
- ✅ Initial Spring Boot backend
- ✅ JWT authentication
- ✅ PostgreSQL integration
- ✅ Basic security configuration