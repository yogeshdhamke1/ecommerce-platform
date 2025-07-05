'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HeartIcon, ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'

const sampleWishlistItems = [
  {
    id: '1',
    name: 'Gold Necklace',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
    slug: 'gold-necklace',
    inStock: true,
    rating: 4.6
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    slug: 'smart-watch',
    inStock: true,
    rating: 4.4
  },
  {
    id: '3',
    name: 'Designer Handbag',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    slug: 'designer-handbag',
    inStock: false,
    rating: 4.8
  },
  {
    id: '4',
    name: 'Wireless Headphones',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    slug: 'wireless-headphones',
    inStock: true,
    rating: 4.5
  },
  {
    id: '5',
    name: 'Running Shoes',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    slug: 'running-shoes',
    inStock: true,
    rating: 4.6
  }
]

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(sampleWishlistItems)

  const removeFromWishlist = (id: string) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id))
  }

  const addToCart = (item: any) => {
    // Simulate adding to cart
    alert(`${item.name} added to cart!`)
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl mb-6">💔</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Wishlist is Empty</h1>
          <p className="text-gray-600 mb-8">Save items you love to your wishlist!</p>
          <Link href="/products" className="btn-primary">
            Browse Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">❤️ My Wishlist</h1>
            <p className="text-gray-600">{wishlistItems.length} items saved</p>
          </div>
          <Link href="/products" className="btn-primary">
            Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <Link href={`/products/${item.slug}`}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                </div>
                
                {!item.inStock && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Out of Stock
                  </div>
                )}
                
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors"
                >
                  <HeartIconSolid className="h-5 w-5 text-red-500" />
                </button>
              </div>

              <div className="p-6">
                <Link href={`/products/${item.slug}`}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                </Link>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                        ⭐
                      </span>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({item.rating})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">${item.price}</span>
                  {item.inStock && (
                    <span className="text-green-600 text-sm font-medium">✅ In Stock</span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => addToCart(item)}
                    disabled={!item.inStock}
                    className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-sm py-2"
                  >
                    <ShoppingCartIcon className="h-4 w-4 mr-2" />
                    {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-red-50 hover:border-red-300 transition-colors"
                  >
                    <TrashIcon className="h-4 w-4 text-gray-600 hover:text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Wishlist Actions */}
        <div className="mt-12 bg-white rounded-2xl shadow-sm p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Wishlist</h2>
            <p className="text-gray-600 mb-6">Let friends and family know what you're wishing for</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                📧 Share via Email
              </button>
              <button className="btn-secondary">
                🔗 Copy Link
              </button>
              <button className="btn-secondary">
                📱 Share on Social
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}