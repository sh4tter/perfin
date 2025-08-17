# Render Deployment Preparation Script
# This script helps prepare your application for Render deployment

Write-Host "Preparing Finance Tracker for Render Deployment..." -ForegroundColor Green

# Check if all required files exist
$requiredFiles = @(
    "Dockerfile",
    "render.yaml",
    ".dockerignore",
    "src/main/resources/application-render.yml",
    "src/main/java/com/financeapp/controller/HealthController.java"
)

Write-Host "`nChecking required files..." -ForegroundColor Yellow
foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "OK: $file" -ForegroundColor Green
    } else {
        Write-Host "MISSING: $file" -ForegroundColor Red
    }
}

# Check if Git repository is initialized
Write-Host "`nChecking Git repository..." -ForegroundColor Yellow
if (Test-Path ".git") {
    Write-Host "OK: Git repository found" -ForegroundColor Green
    
    # Check for uncommitted changes
    $gitStatus = git status --porcelain
    if ($gitStatus) {
        Write-Host "WARNING: You have uncommitted changes:" -ForegroundColor Yellow
        Write-Host $gitStatus -ForegroundColor Gray
        Write-Host "`nConsider committing your changes before deploying:" -ForegroundColor Cyan
        Write-Host "   git add ." -ForegroundColor White
        Write-Host "   git commit -m 'Prepare for Render deployment'" -ForegroundColor White
    } else {
        Write-Host "OK: No uncommitted changes" -ForegroundColor Green
    }
} else {
    Write-Host "ERROR: Git repository not found" -ForegroundColor Red
    Write-Host "Initialize Git repository:" -ForegroundColor Cyan
    Write-Host "   git init" -ForegroundColor White
    Write-Host "   git add ." -ForegroundColor White
    Write-Host "   git commit -m 'Initial commit'" -ForegroundColor White
}

# Check if Render CLI is installed (optional)
Write-Host "`nChecking Render CLI..." -ForegroundColor Yellow
try {
    $renderVersion = render --version 2>$null
    if ($renderVersion) {
        Write-Host "OK: Render CLI is installed" -ForegroundColor Green
    } else {
        Write-Host "INFO: Render CLI not found (optional)" -ForegroundColor Yellow
        Write-Host "Install Render CLI (optional):" -ForegroundColor Cyan
        Write-Host "   npm install -g @render/cli" -ForegroundColor White
    }
} catch {
    Write-Host "INFO: Render CLI not found (optional)" -ForegroundColor Yellow
    Write-Host "Install Render CLI (optional):" -ForegroundColor Cyan
    Write-Host "   npm install -g @render/cli" -ForegroundColor White
}

Write-Host "`nNext Steps:" -ForegroundColor Cyan
Write-Host "1. Push your code to GitHub/GitLab" -ForegroundColor White
Write-Host "2. Go to https://render.com" -ForegroundColor White
Write-Host "3. Create a new web service and connect your repository" -ForegroundColor White
Write-Host "4. Add a PostgreSQL database service" -ForegroundColor White
Write-Host "5. Configure environment variables" -ForegroundColor White
Write-Host "6. Deploy!" -ForegroundColor White

Write-Host "`nFor detailed instructions, see: RENDER_DEPLOYMENT.md" -ForegroundColor Cyan
Write-Host "Good luck with your deployment!" -ForegroundColor Green
