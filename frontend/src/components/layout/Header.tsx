'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { CurrencySelector } from '@/components/common/LanguageCurrencySelector'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            🛍️ E-Store
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Home</Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Products</Link>
            <Link href="/categories" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Categories</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">About</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <CurrencySelector />
            <Link href="/cart" className="p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all relative">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </Link>
            <Link href="/orders" className="p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="My Orders">
              📦
            </Link>
            <Link href="/admin" className="p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Admin">
              🔧
            </Link>
            <Link href="/dashboard" className="p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Dashboard">
              <UserIcon className="h-6 w-6" />
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-gray-50">
            <nav className="flex flex-col space-y-1">
              <Link href="/" className="py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-white rounded-lg transition-all">🏠 Home</Link>
              <Link href="/products" className="py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-white rounded-lg transition-all">🛍️ Products</Link>
              <Link href="/categories" className="py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-white rounded-lg transition-all">📂 Categories</Link>
              <Link href="/about" className="py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-white rounded-lg transition-all">ℹ️ About</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}