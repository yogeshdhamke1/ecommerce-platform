import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    
    let products
    
    if (category && category !== 'all') {
      // Get category by slug
      const categoryData = await prisma.category.findUnique({
        where: { slug: category }
      })
      
      if (!categoryData) {
        return NextResponse.json({ error: 'Category not found' }, { status: 404 })
      }
      
      // Get products by category
      products = await prisma.product.findMany({
        where: { categoryId: categoryData.id },
        include: {
          category: true
        }
      })
    } else {
      // Get all products
      products = await prisma.product.findMany({
        include: {
          category: true
        }
      })
    }
    
    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Validate required fields
    if (!data.name || !data.price || !data.categoryId) {
      return NextResponse.json(
        { error: 'Name, price, and category are required' },
        { status: 400 }
      )
    }
    
    // Create slug from name
    const slug = data.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    
    // Create product
    const product = await prisma.product.create({
      data: {
        name: data.name,
        slug,
        description: data.description || '',
        price: parseFloat(data.price),
        stock: parseInt(data.stock) || 0,
        images: data.images || [],
        categoryId: data.categoryId
      }
    })
    
    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 })
  }
}