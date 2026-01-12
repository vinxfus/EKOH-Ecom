# PowerShell script to initialize and push EKOH to GitHub
# Make sure Git is installed before running this script

Write-Host "Initializing Git repository..." -ForegroundColor Cyan
git init

Write-Host "Adding all files to Git..." -ForegroundColor Cyan
git add .

Write-Host "Creating initial commit..." -ForegroundColor Cyan
git commit -m "Initial commit: EKOH project"

Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Go to https://github.com/new and create a new repository named 'EKOH'" -ForegroundColor White
Write-Host "2. DO NOT initialize it with README, .gitignore, or license" -ForegroundColor White
Write-Host "3. Copy the repository URL (e.g., https://github.com/username/EKOH.git)" -ForegroundColor White
Write-Host "4. Run the following commands:" -ForegroundColor White
Write-Host "   git remote add origin YOUR_REPOSITORY_URL" -ForegroundColor Green
Write-Host "   git branch -M main" -ForegroundColor Green
Write-Host "   git push -u origin main" -ForegroundColor Green
