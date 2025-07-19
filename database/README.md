# Database Setup Instructions

## Prerequisites
- PostgreSQL 13+ installed
- Node.js 18+ installed
- npm or yarn

## Setup Steps

### 1. Install Prisma CLI
```bash
npm install -g prisma
```

### 2. Configure Database Connection
Edit the `.env` file in the root directory and update the `DATABASE_URL` with your PostgreSQL connection details:

```
DATABASE_URL="postgresql://username:password@localhost:5432/cdstore"
```

### 3. Create Database
```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE cdstore;

# Exit psql
\q
```

### 4. Run Migrations
```bash
# Navigate to project root
cd ecommerce-platform

# Run migrations
npx prisma migrate dev --name init
```

### 5. Seed Database (Optional)
```bash
# Run seed script
npx prisma db seed
```

### 6. Generate Prisma Client
```bash
npx prisma generate
```

## Database Schema

The database includes the following models:
- User - Customer accounts and admin users
- Product - Product catalog
- Category - Product categories
- Order - Customer orders
- OrderItem - Individual items in orders
- Review - Product reviews
- Address - Customer addresses
- WishlistItem - Customer wishlist
- Content - Website content
- Setting - System settings

## Prisma Studio

To view and edit your database using a GUI:
```bash
npx prisma studio
```

This will open Prisma Studio at http://localhost:5555

## Troubleshooting

### Connection Issues
- Verify PostgreSQL is running
- Check credentials in `.env` file
- Ensure database exists
- Check firewall settings

### Migration Issues
- Run `npx prisma migrate reset` to reset the database
- Check for syntax errors in schema.prisma

## Production Deployment

For production:
1. Set up a production PostgreSQL database
2. Update the `DATABASE_URL` in production environment
3. Run `npx prisma migrate deploy` to apply migrations
4. Ensure secure database credentials