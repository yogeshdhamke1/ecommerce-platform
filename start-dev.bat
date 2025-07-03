@echo off
echo Starting E-Commerce Platform...

echo.
echo Starting Backend Server...
start "Backend" cmd /k "cd backend && npm run dev"

timeout /t 3

echo.
echo Starting Frontend Server...
start "Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo Servers starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Press any key to exit...
pause