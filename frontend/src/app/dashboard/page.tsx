'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTranslation } from '@/lib/translations'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [currentLang, setCurrentLang] = useState('en')
  const { t } = useTranslation(currentLang)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/login')
    } else {
      setUser(JSON.parse(userData))
    }
    
    const handleLanguageChange = (event: any) => {
      setCurrentLang(event.detail)
    }
    
    const savedLang = localStorage.getItem('language') || 'en'
    setCurrentLang(savedLang)
    
    window.addEventListener('languageChange', handleLanguageChange)
    return () => window.removeEventListener('languageChange', handleLanguageChange)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/')
  }

  if (!user) return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-2xl">Loading...</div></div>

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {t('welcomeBack')}, {user.name}! 👋
              </h1>
              <p className="text-gray-600">{t('manageAccount')}</p>
            </div>
            <button
              onClick={handleLogout}
              className="mt-4 md:mt-0 btn-secondary"
            >
              🚪 Logout
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="text-3xl mb-2">📦</div>
            <div className="text-2xl font-bold text-blue-600">3</div>
            <div className="text-gray-600">{t('totalOrders')}</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="text-3xl mb-2">❤️</div>
            <div className="text-2xl font-bold text-red-600">5</div>
            <div className="text-gray-600">{t('wishlistItems')}</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-yellow-600">2</div>
            <div className="text-gray-600">{t('reviewsWritten')}</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-2xl font-bold text-green-600">$4,515</div>
            <div className="text-gray-600">{t('totalSpent')}</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/orders" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{t('myOrders')}</h3>
                <p className="text-gray-600">{t('trackPackage')}</p>
              </div>
            </div>
          </Link>

          <Link href="/wishlist" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">❤️</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{t('wishlist')}</h3>
                <p className="text-gray-600">{t('viewOrderDetails')}</p>
              </div>
            </div>
          </Link>

          <Link href="/reviews" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{t('myReviews')}</h3>
                <p className="text-gray-600">{t('viewOrderDetails')}</p>
              </div>
            </div>
          </Link>

          <Link href="/profile" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{t('profileSettings')}</h3>
                <p className="text-gray-600">{t('update')}</p>
              </div>
            </div>
          </Link>

          <Link href="/addresses" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Addresses</h3>
                <p className="text-gray-600">Manage shipping addresses</p>
              </div>
            </div>
          </Link>

          <Link href="/products" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🛍️</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{t('continueShopping')}</h3>
                <p className="text-gray-600">{t('browseCategories')}</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl">📦</div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Order #ORD-1703123456 delivered</p>
                <p className="text-gray-600 text-sm">2 days ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl">⭐</div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">You reviewed Diamond Engagement Ring</p>
                <p className="text-gray-600 text-sm">1 week ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl">❤️</div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Added Gold Necklace to wishlist</p>
                <p className="text-gray-600 text-sm">2 weeks ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}