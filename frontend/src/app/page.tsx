'use client'

import { useState, useEffect } from 'react'
import { ProductGrid } from '@/components/products/ProductGrid'
import { CategoryFilter } from '@/components/filters/CategoryFilter'
import { SearchBar } from '@/components/common/SearchBar'
import { Hero } from '@/components/home/Hero'
import { FeaturedCategories } from '@/components/home/FeaturedCategories'
import { sampleCategories, sampleProducts } from '@/lib/sampleData'

export default function HomePage() {
  const [products, setProducts] = useState(sampleProducts)
  const [categories] = useState(sampleCategories)
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    sort: 'createdAt'
  })

  useEffect(() => {
    filterProducts()
  }, [filters])

  const filterProducts = () => {
    let filtered = [...sampleProducts]
    
    // Filter by category
    if (filters.category) {
      filtered = filtered.filter(product => product.category.slug === filters.category)
    }
    
    // Filter by search
    if (filters.search) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.search.toLowerCase())
      )
    }
    
    // Sort products
    filtered.sort((a, b) => {
      switch (filters.sort) {
        case 'price':
          return a.price - b.price
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })
    
    setProducts(filtered)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Shop by Category</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover our wide range of products across different categories</p>
          </div>
          <FeaturedCategories categories={categories} />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-80 space-y-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
                  🔍 Search Products
                </h3>
                <SearchBar
                  value={filters.search}
                  onChange={(value) => setFilters(prev => ({ ...prev, search: value }))}
                  placeholder="Search products..."
                />
              </div>
              
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
                  📂 Categories
                </h3>
                <CategoryFilter
                  categories={categories}
                  selected={filters.category}
                  onChange={(category) => setFilters(prev => ({ ...prev, category }))}
                />
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
                  🔄 Sort By
                </h3>
                <select
                  value={filters.sort}
                  onChange={(e) => setFilters(prev => ({ ...prev, sort: e.target.value }))}
                  className="input-field"
                >
                  <option value="createdAt">🆕 Newest First</option>
                  <option value="price">💰 Price: Low to High</option>
                  <option value="name">🔤 Name: A to Z</option>
                </select>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 md:mb-0">🛍️ Featured Products</h2>
                <div className="flex items-center space-x-4">
                  <p className="text-gray-600 bg-blue-50 px-4 py-2 rounded-full font-medium">
                    {products.length} of {sampleProducts.length} products found
                  </p>
                  <div className="text-sm text-gray-500">
                    🏪 {categories.length} Categories Available
                  </div>
                </div>
              </div>
              
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
                      <div className="bg-gray-200 h-64"></div>
                      <div className="p-6">
                        <div className="bg-gray-200 h-6 rounded mb-4"></div>
                        <div className="bg-gray-200 h-4 rounded w-2/3 mb-4"></div>
                        <div className="bg-gray-200 h-8 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <ProductGrid products={products} />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}