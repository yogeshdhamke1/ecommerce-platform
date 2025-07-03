@echo off
echo ========================================
echo    🚀 E-COMMERCE WEBSITE LAUNCHER
echo ========================================
echo.

echo 📦 Starting Backend Server (Port 5000)...
start "Backend API" cmd /k "cd backend && echo Backend Server Starting... && npm run dev"

echo ⏳ Waiting for backend to initialize...
timeout /t 5

echo 🌐 Starting Frontend Server (Port 3000)...
start "Frontend Website" cmd /k "cd frontend && echo Frontend Server Starting... && npm run dev"

echo.
echo ✅ Servers are starting up!
echo.
echo 🔗 Website URLs:
echo    Frontend: http://localhost:3000
echo    Backend API: http://localhost:5000
echo.
echo 📝 Note: Wait 10-15 seconds for servers to fully start
echo.
echo Press any key to open website in browser...
pause

start http://localhost:3000

echo.
echo 🎉 Website launched successfully!
echo.
pause