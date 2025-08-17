@echo off
echo Starting Finance Tracker Development Environment...
echo.

echo 1. Starting PostgreSQL database with Docker...
docker-compose up -d

echo.
echo 2. Waiting for database to be ready...
timeout /t 10 /nobreak > nul

echo.
echo 3. Starting Spring Boot application...
mvn spring-boot:run

echo.
echo Development environment started!
echo - Backend API: http://localhost:8080/api
echo - Swagger UI: http://localhost:8080/api/swagger-ui.html
echo - Database: localhost:5432

