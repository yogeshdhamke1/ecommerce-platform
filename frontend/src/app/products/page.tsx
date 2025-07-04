'use client'

import { useState, useEffect } from 'react'
import { ProductGrid } from '@/components/products/ProductGrid'
import { CategoryFilter } from '@/components/filters/CategoryFilter'
import { SearchBar } from '@/components/common/SearchBar'
import { sampleCategories, sampleProducts } from '@/lib/sampleData'

export default function ProductsPage() {
  const [products, setProducts] = useState(sampleProducts)
  const [categories] = useState(sampleCategories)
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
    
    if (filters.category) {
      filtered = filtered.filter(product => product.category.slug === filters.category)
    }
    
    if (filters.search) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.search.toLowerCase())
      )
    }
    
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
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">All Products</h1>
          <p className="text-xl text-gray-600">Discover our complete collection</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-80 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-900">
                🔍 Search Products
              </h3>
              <SearchBar
                value={filters.search}
                onChange={(value) => setFilters(prev => ({ ...prev, search: value }))}
                placeholder="Search products..."
              />
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-900">
                📂 Categories
              </h3>
              <CategoryFilter
                categories={categories}
                selected={filters.category}
                onChange={(category) => setFilters(prev => ({ ...prev, category }))}
              />
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-900">
                🔄 Sort By
              </h3>
              <select
                value={filters.sort}
                onChange={(e) => setFilters(prev => ({ ...prev, sort: e.target.value }))}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="createdAt">🆕 Newest First</option>
                <option value="price">💰 Price: Low to High</option>
                <option value="name">🔤 Name: A to Z</option>
              </select>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Products</h2>
                <p className="text-gray-600 bg-blue-50 px-4 py-2 rounded-full font-medium">
                  {products.length} of {sampleProducts.length} products
                </p>
              </div>
            </div>
            
            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </div>
  )
}