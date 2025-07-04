@echo off
echo ========================================
echo    📤 GITHUB UPLOAD HELPER
echo ========================================
echo.

echo 🔗 To upload this project to GitHub:
echo.
echo 1. Go to: https://github.com/new
echo 2. Repository name: ecommerce-platform
echo 3. Make it Public or Private
echo 4. DO NOT initialize with README (we already have one)
echo 5. Click "Create repository"
echo.
echo 6. Copy the repository URL (should look like):
echo    https://github.com/YOUR_USERNAME/ecommerce-platform.git
echo.

set /p repo_url="📝 Paste your GitHub repository URL here: "

echo.
echo 📤 Uploading to GitHub...

git remote add origin %repo_url%
git push -u origin main

echo.
echo ✅ Upload complete!
echo.
echo 🌐 Your repository is now available at:
echo %repo_url%
echo.
pause