@echo off
echo ========================================
echo    🎨 E-COMMERCE DEMO WEBSITE
echo ========================================
echo.
echo ✅ COMPLETE DESIGN WITH SAMPLE DATA:
echo.
echo 📦 5 Categories Available:
echo    💎 Jewelry (5 products)
echo    📱 Electronics (5 products) 
echo    👕 Fashion (5 products)
echo    🏠 Home & Garden (5 products)
echo    ⚽ Sports (5 products)
echo.
echo ✅ Features Ready:
echo    ✅ Multi-currency conversion (USD/EUR/GBP/JPY/CAD/AUD)
echo    ✅ PDF Invoice generation with download/email
echo    ✅ Complete CRM system with customer analytics
echo    ✅ Advanced Admin dashboard with business intelligence
echo    ✅ Currency conversion on all product prices
echo    ✅ Professional UI/UX with responsive design
echo    ✅ Complete e-commerce flow from cart to invoices
echo    ✅ 30 pages with full functionality
echo.
echo 🚀 Starting Demo Website...
echo.

cd frontend
start "E-Commerce Demo" cmd /k "npm run dev"

echo ⏳ Website starting on http://localhost:3000
echo.
timeout /t 5
start http://localhost:3000

echo.
echo 🎉 Demo website launched!
echo.
echo 🔗 Try these pages:
echo    • Homepage: http://localhost:3000 (Try currency selector!)
echo    • Categories: http://localhost:3000/categories
echo    • Product Details: http://localhost:3000/products/diamond-engagement-ring
echo    • Dashboard: http://localhost:3000/dashboard
echo    • My Profile: http://localhost:3000/profile (Edit profile info!)
echo    • My Addresses: http://localhost:3000/addresses (Manage addresses!)
echo    • My Orders: http://localhost:3000/orders (Download PDF invoices!)
echo    • Login: http://localhost:3000/login (demo@example.com / password)
echo.
echo 🔧 COMPLETE ADMIN PANEL:
echo    • Admin Dashboard: http://localhost:3000/admin
echo    • Product Management: http://localhost:3000/admin/products (with category filter!)
echo    • Order Management: http://localhost:3000/admin/orders
echo    • User Management: http://localhost:3000/admin/users
echo    • CRM System: http://localhost:3000/admin/crm
echo    • Analytics: http://localhost:3000/admin/analytics
echo    • Reports: http://localhost:3000/admin/reports
echo    • Settings: http://localhost:3000/admin/settings
echo.
echo 💱 TEST CURRENCY: Click currency selector in header and watch prices change!
echo.
pause