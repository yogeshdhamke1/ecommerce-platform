# 🛍️ E-Commerce Platform - Complete Business Solution

A modern, full-featured e-commerce platform built with Next.js, featuring multi-language support, currency conversion, CRM system, admin dashboard, and PDF invoice generation.

## 🌟 Key Features

### 🌍 **Internationalization & Localization**
- **6 Languages**: English, Spanish, French, German, Chinese, Japanese
- **Real-time Translation**: Instant language switching without page reload
- **6 Currencies**: USD, EUR, GBP, JPY, CAD, AUD with live conversion
- **Persistent Preferences**: Language and currency saved across sessions

### 🛒 **E-Commerce Core**
- **25 Products** across 5 categories (Jewelry, Electronics, Fashion, Home & Garden, Sports)
- **Advanced Search & Filtering**: Category-based filtering and search functionality
- **Shopping Cart**: Full cart management with quantity controls
- **Secure Checkout**: Complete checkout flow with payment processing
- **Order Management**: Order tracking with status updates

### 👥 **Customer Management**
- **User Authentication**: Login, register, forgot/reset password
- **User Dashboard**: Personal account management
- **Order History**: Complete purchase history with tracking
- **Wishlist**: Save favorite products
- **Reviews System**: Product rating and review management

### 📄 **Invoice System**
- **PDF Generation**: Professional invoice creation
- **Download & Email**: Multiple delivery options
- **Multi-currency Support**: Invoices in selected currency
- **Order Integration**: Automatic invoice generation

### 🔧 **Admin CMS**
- **Product Management**: Add, edit, delete products with images
- **Category Management**: Organize products into categories
- **Order Management**: Track orders, update status, manage shipping
- **User Management**: Customer database and account management
- **Analytics Dashboard**: Sales reports and performance metrics
- **Content Management**: Website content and SEO settings

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

### **Customer Pages**
- **Homepage** (`/`) - Hero section, featured products, categories
- **Products** (`/products`) - Product catalog with filtering
- **Categories** (`/categories`) - Category showcase
- **Product Details** (`/products/[slug]`) - Individual product pages
- **Cart** (`/cart`) - Shopping cart management
- **Checkout** (`/checkout`) - Secure checkout process
- **Orders** (`/orders`) - Order history and tracking
- **Invoices** (`/invoices`) - Invoice management
- **Dashboard** (`/dashboard`) - User account dashboard
- **Wishlist** (`/wishlist`) - Saved products
- **Reviews** (`/reviews`) - Product reviews

### **Authentication**
- **Login** (`/login`) - User authentication
- **Register** (`/register`) - Account creation
- **Forgot Password** (`/forgot-password`) - Password recovery
- **Reset Password** (`/reset-password`) - Password reset

### **Admin CMS** (`/admin`)
- **Dashboard** - Overview and quick actions
- **Products** - Product management (CRUD)
- **Categories** - Category management
- **Orders** - Order processing and tracking
- **Users** - Customer management
- **Analytics** - Sales and performance reports
- **Content** - Website content and SEO management

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

### **Backend** (Ready for Integration)
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **JWT** - Authentication
- **Stripe** - Payment processing

### **Features**
- **i18n System** - Custom internationalization
- **PDF Generation** - Invoice creation
- **Currency Conversion** - Real-time exchange rates
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Search engine friendly

## 🌍 Internationalization

The platform supports multiple languages with real-time switching:

```typescript
// Usage in components
const { t } = useTranslation(currentLang)
return <h1>{t('welcomeBack')}</h1>

// Supported languages
- English (en) 🇺🇸
- Spanish (es) 🇪🇸  
- French (fr) 🇫🇷
- German (de) 🇩🇪
- Chinese (zh) 🇨🇳
- Japanese (ja) 🇯🇵
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

- **Optimized Bundle Size** - Code splitting and lazy loading
- **Image Optimization** - Next.js Image component
- **Caching Strategy** - Static generation and ISR
- **SEO Optimized** - Meta tags and structured data

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