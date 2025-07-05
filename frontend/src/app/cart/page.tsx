'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline'

const sampleCartItems = [
  {
    id: '1',
    name: 'Diamond Engagement Ring',
    price: 2999.99,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300',
    quantity: 1,
    slug: 'diamond-engagement-ring'
  },
  {
    id: '2',
    name: 'Wireless Headphones',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
    quantity: 2,
    slug: 'wireless-headphones'
  }
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(sampleCartItems)

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id))
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 15.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl mb-6">🛒</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Add some products to get started!</p>
          <Link href="/products" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">🛒 Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <Link href={`/products/${item.slug}`} className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                      {item.name}
                    </Link>
                    <p className="text-blue-600 font-bold">${item.price}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 rounded-lg border border-gray-300 hover:bg-gray-50"
                    >
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded-lg border border-gray-300 hover:bg-gray-50"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <Link href="/checkout" className="block w-full btn-primary text-lg py-4 mb-4 text-center">
              Proceed to Checkout
            </Link>
            
            <Link href="/products" className="block text-center text-blue-600 hover:text-blue-700">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}