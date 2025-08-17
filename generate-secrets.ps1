# Generate Secure Secrets for Production
# This script generates secure random values for your environment variables

Write-Host "Generating secure secrets for production deployment..." -ForegroundColor Green

# Generate JWT Secret (64+ characters)
$jwtSecret = -join ((33..126) | Get-Random -Count 64 | ForEach-Object {[char]$_})
Write-Host "`nJWT_SECRET:" -ForegroundColor Yellow
Write-Host $jwtSecret -ForegroundColor White

# Generate Admin Password (16 characters)
$adminPassword = -join ((48..57) + (65..90) + (97..122) | Get-Random -Count 16 | ForEach-Object {[char]$_})
Write-Host "`nADMIN_PASSWORD:" -ForegroundColor Yellow
Write-Host $adminPassword -ForegroundColor White

# Generate Database Password (16 characters)
$dbPassword = -join ((48..57) + (65..90) + (97..122) | Get-Random -Count 16 | ForEach-Object {[char]$_})
Write-Host "`nDB_PASSWORD:" -ForegroundColor Yellow
Write-Host $dbPassword -ForegroundColor White

Write-Host "`nCopy these values to your Render environment variables:" -ForegroundColor Cyan
Write-Host "1. Go to your Render service dashboard" -ForegroundColor White
Write-Host "2. Click on 'Environment' tab" -ForegroundColor White
Write-Host "3. Add these variables with the generated values" -ForegroundColor White
Write-Host "4. Redeploy your service" -ForegroundColor White

Write-Host "`nIMPORTANT: Keep these secrets secure and don't commit them to your repository!" -ForegroundColor Red
