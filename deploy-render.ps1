# Render Deployment Preparation Script
# This script helps prepare your application for Render deployment

Write-Host "🚀 Preparing Finance Tracker for Render Deployment..." -ForegroundColor Green

# Check if all required files exist
$requiredFiles = @(
    "Dockerfile",
    "render.yaml",
    ".dockerignore",
    "src/main/resources/application-render.yml",
    "src/main/java/com/financeapp/controller/HealthController.java"
)

Write-Host "`n📋 Checking required files..." -ForegroundColor Yellow
foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "✅ $file" -ForegroundColor Green
    } else {
        Write-Host "❌ $file (Missing)" -ForegroundColor Red
    }
}

# Check if Git repository is initialized
Write-Host "`n🔍 Checking Git repository..." -ForegroundColor Yellow
if (Test-Path ".git") {
    Write-Host "✅ Git repository found" -ForegroundColor Green
    
    # Check for uncommitted changes
    $gitStatus = git status --porcelain
    if ($gitStatus) {
        Write-Host "⚠️  You have uncommitted changes:" -ForegroundColor Yellow
        Write-Host $gitStatus -ForegroundColor Gray
        Write-Host "`n💡 Consider committing your changes before deploying:" -ForegroundColor Cyan
        Write-Host "   git add ." -ForegroundColor White
        Write-Host "   git commit -m 'Prepare for Railway deployment'" -ForegroundColor White
    } else {
        Write-Host "✅ No uncommitted changes" -ForegroundColor Green
    }
} else {
    Write-Host "❌ Git repository not found" -ForegroundColor Red
    Write-Host "💡 Initialize Git repository:" -ForegroundColor Cyan
    Write-Host "   git init" -ForegroundColor White
    Write-Host "   git add ." -ForegroundColor White
    Write-Host "   git commit -m 'Initial commit'" -ForegroundColor White
}

# Check if Render CLI is installed (optional)
Write-Host "`n🔧 Checking Render CLI..." -ForegroundColor Yellow
try {
    $renderVersion = render --version 2>$null
    if ($renderVersion) {
        Write-Host "✅ Render CLI is installed" -ForegroundColor Green
    } else {
        Write-Host "ℹ️  Render CLI not found (optional)" -ForegroundColor Yellow
        Write-Host "💡 Install Render CLI (optional):" -ForegroundColor Cyan
        Write-Host "   npm install -g @render/cli" -ForegroundColor White
    }
} catch {
    Write-Host "ℹ️  Render CLI not found (optional)" -ForegroundColor Yellow
    Write-Host "💡 Install Render CLI (optional):" -ForegroundColor Cyan
    Write-Host "   npm install -g @render/cli" -ForegroundColor White
}

Write-Host "`n📚 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Push your code to GitHub/GitLab" -ForegroundColor White
Write-Host "2. Go to https://render.com" -ForegroundColor White
Write-Host "3. Create a new web service and connect your repository" -ForegroundColor White
Write-Host "4. Add a PostgreSQL database service" -ForegroundColor White
Write-Host "5. Configure environment variables" -ForegroundColor White
Write-Host "6. Deploy!" -ForegroundColor White

Write-Host "`n📖 For detailed instructions, see: RENDER_DEPLOYMENT.md" -ForegroundColor Cyan
Write-Host "🎉 Good luck with your deployment!" -ForegroundColor Green
