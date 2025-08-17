Write-Host "Starting Finance Tracker Development Environment..." -ForegroundColor Green
Write-Host ""

Write-Host "1. Starting PostgreSQL database with Docker..." -ForegroundColor Yellow
docker-compose up -d

Write-Host ""
Write-Host "2. Waiting for database to be ready..." -ForegroundColor Yellow
Start-Sleep -Seconds 10

Write-Host ""
Write-Host "3. Starting Spring Boot application..." -ForegroundColor Yellow
mvn spring-boot:run

Write-Host ""
Write-Host "Development environment started!" -ForegroundColor Green
Write-Host "- Backend API: http://localhost:8080/api" -ForegroundColor Cyan
Write-Host "- Swagger UI: http://localhost:8080/api/swagger-ui.html" -ForegroundColor Cyan
Write-Host "- Database: localhost:5432" -ForegroundColor Cyan

