'use client'

import Link from 'next/link'
import Image from 'next/image'
import { sampleCategories, sampleProducts } from '@/lib/sampleData'

export default function CategoriesPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Shop by Category</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of products across different categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleCategories.map((category) => {
            const categoryProducts = sampleProducts.filter(p => p.categoryId === category.id)
            const featuredProduct = categoryProducts[0]

            return (
              <Link
                key={category.id}
                href={`/?category=${category.slug}`}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Category Image */}
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden relative">
                    {featuredProduct && (
                      <Image
                        src={featuredProduct.images[0]}
                        alt={category.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h2 className="text-2xl font-bold mb-1">{category.name}</h2>
                      <p className="text-sm opacity-90">{category._count.products} Products</p>
                    </div>
                  </div>

                  {/* Category Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    
                    {/* Featured Products Preview */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {categoryProducts.slice(0, 3).map((product) => (
                        <div key={product.id} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        Starting from <span className="font-bold text-blue-600">
                          ${Math.min(...categoryProducts.map(p => p.price))}
                        </span>
                      </span>
                      <span className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                        Shop Now →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{sampleCategories.length}</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{sampleProducts.length}</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.6★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}