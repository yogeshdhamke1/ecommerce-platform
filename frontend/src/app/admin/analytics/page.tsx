'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AdminAnalytics() {
  const [timeRange, setTimeRange] = useState('30d')
  
  const salesData = {
    totalRevenue: 45678.90,
    totalOrders: 156,
    averageOrderValue: 292.81,
    conversionRate: 3.2,
    topProducts: [
      { name: 'Diamond Engagement Ring', sales: 15, revenue: 44999.85 },
      { name: 'Wireless Headphones', sales: 45, revenue: 13499.55 },
      { name: 'Gold Necklace', sales: 12, revenue: 10799.88 },
      { name: 'Smart Watch', sales: 28, revenue: 11199.72 },
      { name: 'Designer Handbag', sales: 8, revenue: 4799.92 }
    ],
    recentActivity: [
      { date: '2024-12-20', orders: 12, revenue: 3456.78 },
      { date: '2024-12-19', orders: 8, revenue: 2345.67 },
      { date: '2024-12-18', orders: 15, revenue: 4567.89 },
      { date: '2024-12-17', orders: 10, revenue: 2987.65 },
      { date: '2024-12-16', orders: 18, revenue: 5432.10 }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">📊 Analytics Dashboard</h1>
            <p className="text-gray-600">Sales insights and performance metrics</p>
          </div>
          <div className="flex space-x-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="input-field w-auto"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <Link href="/admin" className="btn-secondary">
              ← Back to Dashboard
            </Link>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Revenue</p>
                <p className="text-3xl font-bold text-green-600">${salesData.totalRevenue.toLocaleString()}</p>
                <p className="text-sm text-green-600">↗ +12.5% vs last month</p>
              </div>
              <div className="text-4xl">💰</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Orders</p>
                <p className="text-3xl font-bold text-blue-600">{salesData.totalOrders}</p>
                <p className="text-sm text-blue-600">↗ +8.3% vs last month</p>
              </div>
              <div className="text-4xl">📦</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Avg Order Value</p>
                <p className="text-3xl font-bold text-purple-600">${salesData.averageOrderValue}</p>
                <p className="text-sm text-purple-600">↗ +3.7% vs last month</p>
              </div>
              <div className="text-4xl">💳</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Conversion Rate</p>
                <p className="text-3xl font-bold text-indigo-600">{salesData.conversionRate}%</p>
                <p className="text-sm text-red-600">↘ -0.5% vs last month</p>
              </div>
              <div className="text-4xl">📈</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Sales Chart */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Daily Sales</h2>
            <div className="space-y-4">
              {salesData.recentActivity.map((day, index) => (
                <div key={day.date} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{new Date(day.date).toLocaleDateString()}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">${day.revenue.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">{day.orders} orders</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Top Selling Products</h2>
            <div className="space-y-4">
              {salesData.topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.sales} sold</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">${product.revenue.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Customer Segments</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">New Customers</span>
                <span className="font-bold text-blue-600">35%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Returning Customers</span>
                <span className="font-bold text-green-600">45%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">VIP Customers</span>
                <span className="font-bold text-purple-600">20%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Traffic Sources</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Direct</span>
                <span className="font-bold text-gray-900">40%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Search Engines</span>
                <span className="font-bold text-gray-900">35%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Social Media</span>
                <span className="font-bold text-gray-900">15%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Email</span>
                <span className="font-bold text-gray-900">10%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full btn-primary text-sm py-2">
                📊 Export Sales Report
              </button>
              <button className="w-full btn-secondary text-sm py-2">
                📈 View Detailed Analytics
              </button>
              <button className="w-full btn-secondary text-sm py-2">
                📧 Email Weekly Report
              </button>
              <button className="w-full btn-secondary text-sm py-2">
                🎯 Set Sales Goals
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}