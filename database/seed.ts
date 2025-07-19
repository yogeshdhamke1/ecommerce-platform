import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')
  
  // Create categories
  const categories = [
    { name: 'Jewelry', slug: 'jewelry', description: 'Fine jewelry and accessories', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=300' },
    { name: 'Electronics', slug: 'electronics', description: 'Latest gadgets and electronics', image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=300' },
    { name: 'Fashion', slug: 'fashion', description: 'Trendy clothing and accessories', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=300' },
    { name: 'Home & Garden', slug: 'home-garden', description: 'Home decor and garden supplies', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=300' },
    { name: 'Sports', slug: 'sports', description: 'Sports equipment and accessories', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=300' }
  ]
  
  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category
    })
  }
  console.log('Categories seeded')
  
  // Get category IDs
  const jewelryCategory = await prisma.category.findUnique({ where: { slug: 'jewelry' } })
  const electronicsCategory = await prisma.category.findUnique({ where: { slug: 'electronics' } })
  const fashionCategory = await prisma.category.findUnique({ where: { slug: 'fashion' } })
  const homeCategory = await prisma.category.findUnique({ where: { slug: 'home-garden' } })
  const sportsCategory = await prisma.category.findUnique({ where: { slug: 'sports' } })
  
  if (!jewelryCategory || !electronicsCategory || !fashionCategory || !homeCategory || !sportsCategory) {
    throw new Error('Failed to find categories')
  }
  
  // Create products
  const products = [
    {
      name: 'Diamond Engagement Ring',
      slug: 'diamond-engagement-ring',
      description: 'Beautiful 1 carat diamond engagement ring with platinum band',
      price: 2999.99,
      stock: 10,
      images: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300'],
      categoryId: jewelryCategory.id
    },
    {
      name: 'Wireless Headphones',
      slug: 'wireless-headphones',
      description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
      price: 299.99,
      stock: 50,
      images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300'],
      categoryId: electronicsCategory.id
    },
    {
      name: 'Designer Handbag',
      slug: 'designer-handbag',
      description: 'Luxury designer handbag made from genuine leather',
      price: 899.99,
      stock: 15,
      images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300'],
      categoryId: fashionCategory.id
    }
  ]
  
  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product
    })
  }
  console.log('Products seeded')
  
  // Create admin user
  const adminPassword = await hash('admin123', 10)
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'admin'
    }
  })
  
  // Create demo user
  const demoPassword = await hash('password', 10)
  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@example.com' },
    update: {},
    create: {
      email: 'demo@example.com',
      name: 'John Doe',
      password: demoPassword,
      phone: '+1 (555) 123-4567',
      dateOfBirth: new Date('1990-01-15'),
      gender: 'male',
      bio: 'Passionate online shopper who loves discovering new products and great deals.'
    }
  })
  console.log('Users seeded')
  
  // Create addresses for demo user
  await prisma.address.create({
    data: {
      userId: demoUser.id,
      type: 'home',
      name: 'John Doe',
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      phone: '+1 (555) 123-4567',
      isDefault: true
    }
  })
  
  await prisma.address.create({
    data: {
      userId: demoUser.id,
      type: 'work',
      name: 'John Doe',
      street: '456 Business Ave, Suite 200',
      city: 'New York',
      state: 'NY',
      zipCode: '10002',
      country: 'United States',
      phone: '+1 (555) 987-6543',
      isDefault: false
    }
  })
  console.log('Addresses seeded')
  
  // Create system settings
  const settings = [
    { key: 'siteName', value: 'E-Store' },
    { key: 'siteEmail', value: 'admin@estore.com' },
    { key: 'currency', value: 'USD' },
    { key: 'timezone', value: 'UTC' },
    { key: 'taxRate', value: '8.5' },
    { key: 'shippingRate', value: '15.99' },
    { key: 'lowStockAlert', value: '5' }
  ]
  
  for (const setting of settings) {
    await prisma.setting.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: setting
    })
  }
  console.log('Settings seeded')
  
  console.log('Database seeding completed')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })