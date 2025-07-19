# 🛍️ E-Commerce Platform - Complete Business Solution

A modern, full-featured e-commerce platform built with Next.js, featuring multi-language support, currency conversion, CRM system, admin dashboard, and PDF invoice generation.

## 🌟 Key Features

### 💱 **Multi-Currency Support**
- **6 Currencies**: USD, EUR, GBP, JPY, CAD, AUD with live conversion
- **Real-time Conversion**: Instant price updates across all products
- **Persistent Preferences**: Currency selection saved across sessions
- **Professional Formatting**: Proper currency symbols and localization

### 🛒 **E-Commerce Core**
- **25 Products** across 5 categories (Jewelry, Electronics, Fashion, Home & Garden, Sports)
- **Advanced Search & Filtering**: Category-based filtering and search functionality
- **Shopping Cart**: Full cart management with quantity controls
- **Secure Checkout**: Complete checkout flow with payment processing
- **Order Management**: Order tracking with status updates

### 👥 **Customer Management**
- **User Authentication**: Login, register, forgot/reset password
- **User Dashboard**: Personal account management with statistics
- **User Profile**: Complete profile management with editable information
- **Address Book**: Multiple address management with CRUD operations
- **Order History**: Complete purchase history with tracking
- **Wishlist**: Save favorite products
- **Reviews System**: Product rating and review management

### 📄 **Invoice System**
- **PDF Generation**: Professional invoice creation
- **Download & Email**: Multiple delivery options
- **Multi-currency Support**: Invoices in selected currency
- **Order Integration**: Automatic invoice generation

### 🔧 **Admin CMS**
- **Product Management**: Add, edit, delete products with images and category filtering
- **Category Management**: Organize products into categories
- **Order Management**: Track orders, update status, manage shipping
- **User Management**: Customer database and account management
- **Analytics Dashboard**: Sales reports and performance metrics
- **Content Management**: Website content and SEO settings
- **Reports System**: Generate and export business reports
- **Settings Panel**: Complete system configuration
- **Database Integration**: Live PostgreSQL database connection

### 👥 **CRM System**
- **Customer Database**: Complete customer profiles and segmentation
- **Email Campaigns**: Marketing automation and communication tools
- **Sales Analytics**: Revenue tracking and customer insights
- **Support Tickets**: Customer service management
- **Customer Journey**: Behavior tracking and analysis

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yogeshdhamke1/ecommerce-platform.git
cd ecommerce-platform
```

2. **Install dependencies**
```bash
cd frontend
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Quick Demo Launch**
```bash
# Windows
demo-website.bat

# Manual start
cd frontend && npm run dev
```

Visit `http://localhost:3000` to see the application.

## 📱 Demo Credentials

**Customer Login:**
- Email: `demo@example.com`
- Password: `password`

**Test Features:**
- Language switching (header selector)
- Currency conversion (header selector)
- PDF invoice download (orders page)
- Admin dashboard access
- CRM system features

## 🏗️ Project Structure

```
ecommerce-platform/
├── frontend/                 # Next.js React application
│   ├── src/
│   │   ├── app/             # App router pages
│   │   │   ├── admin/       # Admin dashboard & CMS
│   │   │   ├── crm/         # Customer relationship management
│   │   │   ├── products/    # Product catalog
│   │   │   └── ...          # Other pages
│   │   ├── components/      # Reusable UI components
│   │   │   ├── common/      # Shared components
│   │   │   ├── layout/      # Layout components
│   │   │   └── ...          # Feature components
│   │   └── lib/             # Utilities and configurations
│   │       ├── translations.ts  # i18n system
│   │       ├── sampleData.ts    # Demo data
│   │       └── invoiceGenerator.ts # PDF generation
├── backend/                 # Node.js Express API (ready for integration)
├── database/               # Database schema (Prisma)
├── config/                 # Configuration files
└── docs/                   # Documentation
```

## 🌐 Pages & Features

### **Customer Pages** (25 pages)
- **Homepage** (`/`) - Hero section, featured products, categories
- **Products** (`/products`) - Product catalog with filtering
- **Categories** (`/categories`) - Category showcase
- **Product Details** (`/products/[slug]`) - Individual product pages
- **Cart** (`/cart`) - Shopping cart management
- **Checkout** (`/checkout`) - Secure checkout process
- **Orders** (`/orders`) - Order history and tracking with PDF invoices
- **Invoices** (`/invoices`) - Invoice management and downloads
- **Dashboard** (`/dashboard`) - User account dashboard with statistics
- **Profile** (`/profile`) - Complete profile management with editing
- **Addresses** (`/addresses`) - Address book with CRUD operations
- **Wishlist** (`/wishlist`) - Saved products
- **Reviews** (`/reviews`) - Product reviews

### **Authentication**
- **Login** (`/login`) - User authentication
- **Register** (`/register`) - Account creation
- **Forgot Password** (`/forgot-password`) - Password recovery
- **Reset Password** (`/reset-password`) - Password reset

### **Admin CMS** (`/admin`) (11 pages)
- **Dashboard** - Overview and quick actions
- **Products** - Product management (CRUD) with category filtering
- **Categories** - Category management
- **Orders** - Order processing and tracking
- **Users** - Customer management
- **Analytics** - Sales and performance reports
- **Content** - Website content and SEO management
- **Reports** - Business report generation and export
- **Settings** - Complete system configuration

### **CRM System** (`/admin/crm`)
- **Dashboard** - CRM overview and metrics
- **Customers** - Customer database and profiles
- **Communications** - Email campaigns and support
- **Analytics** - Customer insights and segmentation

## 🛠️ Technology Stack

### **Frontend**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Heroicons** - Beautiful SVG icons

### **Backend & Database**
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Prisma** - Database ORM with active connection
- **PostgreSQL** - Relational database with complete schema
- **JWT** - Authentication system
- **Stripe** - Payment processing integration
- **Database Models** - Users, Products, Orders, Categories, etc.

### **Features**
- **i18n System** - Custom internationalization
- **PDF Generation** - Invoice creation
- **Currency Conversion** - Real-time exchange rates
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Search engine friendly

## 🌍 Internationalization (Ready for Activation)

The platform has a complete translation system ready for multi-language support:

```typescript
// Translation system ready for activation
const { t } = useTranslation(currentLang)
return <h1>{t('welcomeBack')}</h1>

// Translation files prepared for:
- English (en) 🇺🇸 - Active
- Spanish (es) 🇪🇸 - Ready
- French (fr) 🇫🇷 - Ready
- German (de) 🇩🇪 - Ready
- Chinese (zh) 🇨🇳 - Ready
- Japanese (ja) 🇯🇵 - Ready
```

## 💱 Currency Support

Multi-currency support with live conversion:

```typescript
// Supported currencies
USD, EUR, GBP, JPY, CAD, AUD

// Usage
const convertedPrice = convertCurrency(price, 'USD', 'EUR')
const formattedPrice = formatCurrency(convertedPrice, 'EUR')
```

## 📊 Analytics & Reporting

### **Sales Analytics**
- Revenue tracking by time period
- Top-selling products analysis
- Customer segmentation reports
- Conversion rate monitoring

### **Customer Analytics**
- Customer lifetime value
- Retention and churn rates
- Behavior tracking
- Acquisition channel analysis

## 🔒 Security Features

- **JWT Authentication** - Secure user sessions
- **Password Encryption** - bcrypt hashing
- **Rate Limiting** - API protection
- **CORS Protection** - Cross-origin security
- **Input Validation** - Data sanitization
- **SQL Injection Prevention** - Parameterized queries

## 📱 Mobile Responsive

- **Mobile-first Design** - Optimized for all devices
- **Touch-friendly Interface** - Easy mobile navigation
- **Responsive Images** - Optimized loading
- **Progressive Web App** - App-like experience

## 🚀 Deployment

### **Frontend (Vercel)**
```bash
npm run build
# Deploy to Vercel
```

### **Backend (Railway/Heroku)**
```bash
cd backend
npm install
npm start
```

### **Database (PostgreSQL)**
```bash
npx prisma migrate deploy
npx prisma generate
```

## 📈 Performance

- **34 Pages Total** - Complete e-commerce platform
- **Optimized Bundle Size** - Code splitting and lazy loading
- **Image Optimization** - Next.js Image component
- **Caching Strategy** - Static generation and ISR
- **SEO Optimized** - Meta tags and structured data
- **Mobile Responsive** - Perfect on all devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Tailwind CSS** - Beautiful utility-first CSS
- **Heroicons** - Excellent icon library
- **Unsplash** - High-quality placeholder images

## 📞 Support

For support and questions:
- **Email**: support@estore.com
- **GitHub Issues**: [Create an issue](https://github.com/yogeshdhamke1/ecommerce-platform/issues)

---

**Built with ❤️ by [Yogesh Dhamke](https://github.com/yogeshdhamke1)**

🌟 **Star this repository if you found it helpful!**

## 🎉 **Complete E-Commerce Solution**

A **professional, production-ready e-commerce platform** featuring:
- **34 Total Pages** - Complete business solution
- **Multi-currency support** (6 currencies with live conversion)
- **PDF invoice system** (download/email functionality)
- **Complete user management** (profile, addresses, orders)
- **Advanced CRM system** (customer relationship management)
- **Full admin panel** (11 admin pages with all features)
- **Business intelligence** (reports, analytics, insights)
- **Mobile responsive** (perfect on all devices)
- **Production ready** (enterprise-level quality)

### 📊 **Platform Statistics**
- **Total Pages**: 34 pages
- **Admin Pages**: 11 pages
- **Customer Pages**: 25 pages
- **Features**: 50+ major features
- **Currencies**: 6 supported currencies
- **Languages**: Translation system ready (currently English)
- **Database Models**: 10 fully defined models
- **API Routes**: RESTful API with database integration
- **Build Size**: Optimized for production

### 🚀 **Quick Test Guide**
```bash
# Clone and run
git clone https://github.com/yogeshdhamke1/ecommerce-platform.git
cd ecommerce-platform/frontend
npm install
npm run dev

# Or use quick demo
demo-website.bat

# Test key features:
# 1. Currency conversion (header selector)
# 2. User profile management (/profile)
# 3. Address book (/addresses)
# 4. PDF invoice downloads (/orders)
# 5. Complete admin panel (/admin)
# 6. CRM system (/admin/crm)
# 7. Database connection (PostgreSQL)

# Database setup:
# 1. Configure PostgreSQL in .env file
# 2. Run: npm run db:migrate
# 3. Run: npm run db:seed
```

**🌟 Ready for immediate deployment and business use!**