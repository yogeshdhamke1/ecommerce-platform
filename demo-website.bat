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
echo    ✅ Beautiful product cards with images
echo    ✅ Category filtering and search
echo    ✅ Individual product detail pages
echo    ✅ Related products suggestions
echo    ✅ Responsive mobile design
echo    ✅ Professional UI/UX
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
echo    • Homepage: http://localhost:3000
echo    • All Products: http://localhost:3000/products  
echo    • Categories: http://localhost:3000/categories
echo    • Shopping Cart: http://localhost:3000/cart
echo    • About Us: http://localhost:3000/about
echo    • Ruby Ring: http://localhost:3000/products/ruby-ring
echo    • Candle Set: http://localhost:3000/products/candle-set
echo.
pause