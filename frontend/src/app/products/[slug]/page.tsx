'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StarIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid, HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import { sampleProducts } from '@/lib/sampleData'
import { convertCurrency, formatCurrency } from '@/components/common/LanguageCurrencySelector'

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = sampleProducts.find(p => p.slug === params.slug)
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [currentCurrency, setCurrentCurrency] = useState('USD')

  useEffect(() => {
    const handleCurrencyChange = (event: any) => {
      setCurrentCurrency(event.detail)
    }
    
    const savedCurrency = localStorage.getItem('currency') || 'USD'
    setCurrentCurrency(savedCurrency)
    
    window.addEventListener('currencyChange', handleCurrencyChange)
    return () => {
      window.removeEventListener('currencyChange', handleCurrencyChange)
    }
  }, [])

  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <Link href="/" className="btn-primary">← Back to Home</Link>
      </div>
    )
  }

  const relatedProducts = sampleProducts
    .filter(p => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href={`/?category=${product.category.slug}`} className="hover:text-blue-600">
              {product.category.name}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    i < Math.floor(product.averageRating || 0) ? (
                      <StarIconSolid key={i} className="h-5 w-5 text-yellow-400" />
                    ) : (
                      <StarIcon key={i} className="h-5 w-5 text-gray-300" />
                    )
                  ))}
                  <span className="ml-2 text-gray-600">
                    {product.averageRating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>
              <p className="text-6xl font-bold text-blue-600 mb-6">
                {formatCurrency(convertCurrency(product.price, 'USD', currentCurrency), currentCurrency)}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="flex items-center space-x-4 mb-6">
                <label className="text-gray-700 font-medium">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-500">
                  {product.stock} in stock
                </span>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 btn-primary text-lg py-4">
                  <ShoppingCartIcon className="h-6 w-6 mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  {isFavorite ? (
                    <HeartIconSolid className="h-6 w-6 text-red-500" />
                  ) : (
                    <HeartIcon className="h-6 w-6 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/products/${relatedProduct.slug}`}>
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="aspect-square bg-gray-100 overflow-hidden">
                      <Image
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                      <p className="text-blue-600 font-bold">
                        {formatCurrency(convertCurrency(relatedProduct.price, 'USD', currentCurrency), currentCurrency)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}