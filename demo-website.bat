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
echo 🌟 Features Ready:
echo    ✅ FULL WEBSITE Multi-language support (EN/ES/FR)
echo    ✅ Real-time language switching on ALL pages
echo    ✅ Multi-currency conversion with live rates
echo    ✅ PDF Invoice generation with download/email
echo    ✅ Translated navigation, content, and buttons
echo    ✅ Currency conversion on all product prices
echo    ✅ Professional UI/UX with i18n support
echo    ✅ Persistent language/currency preferences
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
echo 🔗 Try these pages (Switch languages to see real-time translation!):
echo    • Homepage: http://localhost:3000 (Language/Currency selector in header)
echo    • Categories: http://localhost:3000/categories (Fully translated)
echo    • Product Details: http://localhost:3000/products/diamond-engagement-ring
echo    • Dashboard: http://localhost:3000/dashboard (Complete translation)
echo    • My Orders: http://localhost:3000/orders (Translated + PDF invoices)
echo    • Login: http://localhost:3000/login (demo@example.com / password)
echo    • Admin CMS: http://localhost:3000/admin
echo.
echo 🌍 TEST TRANSLATION: Click language selector and watch ALL text change!
echo.
pause