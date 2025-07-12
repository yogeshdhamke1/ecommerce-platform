'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const router = useRouter()
  const [stats, setStats] = useState({
    totalProducts: 25,
    totalOrders: 156,
    totalUsers: 1247,
    totalRevenue: 45678.90,
    pendingOrders: 12,
    lowStockProducts: 5
  })

  useEffect(() => {
    // Check admin access (simplified)
    const user = localStorage.getItem('user')
    if (!user) {
      router.push('/login')
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-gray-900">🛠️ Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-blue-600 hover:text-blue-700">
                View Website
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem('user')
                  router.push('/')
                }}
                className="btn-secondary"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Revenue</p>
                <p className="text-3xl font-bold text-green-600">${stats.totalRevenue.toLocaleString()}</p>
              </div>
              <div className="text-4xl">💰</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Orders</p>
                <p className="text-3xl font-bold text-blue-600">{stats.totalOrders}</p>
              </div>
              <div className="text-4xl">📦</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Users</p>
                <p className="text-3xl font-bold text-purple-600">{stats.totalUsers}</p>
              </div>
              <div className="text-4xl">👥</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Products</p>
                <p className="text-3xl font-bold text-indigo-600">{stats.totalProducts}</p>
              </div>
              <div className="text-4xl">🛍️</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-8">
          <Link href="/admin/products" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Product Management</h3>
                <p className="text-gray-600">Add, edit, delete products</p>
              </div>
            </div>
          </Link>

          <Link href="/admin/orders" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Order Management</h3>
                <p className="text-gray-600">Track and update orders</p>
              </div>
            </div>
          </Link>

          <Link href="/admin/users" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">User Management</h3>
                <p className="text-gray-600">Manage customers</p>
              </div>
            </div>
          </Link>

          <Link href="/admin/categories" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📂</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
                <p className="text-gray-600">Organize products</p>
              </div>
            </div>
          </Link>

          <Link href="/admin/analytics" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Analytics</h3>
                <p className="text-gray-600">Sales reports & insights</p>
              </div>
            </div>
          </Link>

          <Link href="/admin/content" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Content Management</h3>
                <p className="text-gray-600">Website content & SEO</p>
              </div>
            </div>
          </Link>

          <Link href="/admin/crm" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">CRM System</h3>
                <p className="text-gray-600">Customer relationship management</p>
              </div>
            </div>
          </Link>

          <Link href="/admin/reports" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Reports</h3>
                <p className="text-gray-600">Generate business reports</p>
              </div>
            </div>
          </Link>

          <Link href="/admin/settings" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
                <p className="text-gray-600">System configuration</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Orders</h2>
            <div className="space-y-4">
              {[
                { id: 'ORD-001', customer: 'John Doe', amount: 299.99, status: 'pending' },
                { id: 'ORD-002', customer: 'Jane Smith', amount: 599.99, status: 'shipped' },
                { id: 'ORD-003', customer: 'Bob Johnson', amount: 149.99, status: 'delivered' }
              ].map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${order.amount}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Alerts</h2>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <span className="text-red-500 text-xl mr-3">⚠️</span>
                  <div>
                    <p className="font-medium text-red-800">Low Stock Alert</p>
                    <p className="text-sm text-red-600">{stats.lowStockProducts} products running low</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center">
                  <span className="text-yellow-500 text-xl mr-3">📋</span>
                  <div>
                    <p className="font-medium text-yellow-800">Pending Orders</p>
                    <p className="text-sm text-yellow-600">{stats.pendingOrders} orders need attention</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}