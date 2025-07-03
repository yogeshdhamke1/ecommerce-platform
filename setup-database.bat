@echo off
echo Setting up E-Commerce Database...

echo.
echo 1. Installing PostgreSQL (if not installed)
echo Please install PostgreSQL from: https://www.postgresql.org/download/windows/
echo.

echo 2. Creating database...
psql -U postgres -c "CREATE DATABASE ecommerce_db;"

echo.
echo 3. Installing backend dependencies...
cd backend
call npm install

echo.
echo 4. Setting up database schema...
call npx prisma generate
call npx prisma migrate dev --name init

echo.
echo 5. Installing frontend dependencies...
cd ../frontend
call npm install

echo.
echo Setup complete! 
echo.
echo To start the servers:
echo Backend: cd backend && npm run dev
echo Frontend: cd frontend && npm run dev
echo.
pause