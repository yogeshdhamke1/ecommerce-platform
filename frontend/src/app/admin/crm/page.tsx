'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CRMDashboard() {
  const [stats] = useState({
    totalCustomers: 1247,
    activeCustomers: 892,
    newCustomersThisMonth: 156,
    customerRetentionRate: 78.5,
    averageLifetimeValue: 485.50,
    totalRevenue: 156789.45,
    emailsSent: 2340,
    emailOpenRate: 24.5
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">👥 CRM Dashboard</h1>
            <p className="text-gray-600">Customer Relationship Management</p>
          </div>
          <Link href="/admin" className="btn-secondary">
            ← Back to Admin
          </Link>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Customers</p>
                <p className="text-3xl font-bold text-blue-600">{stats.totalCustomers.toLocaleString()}</p>
                <p className="text-sm text-green-600">↗ +12% this month</p>
              </div>
              <div className="text-4xl">👥</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Customers</p>
                <p className="text-3xl font-bold text-green-600">{stats.activeCustomers}</p>
                <p className="text-sm text-green-600">↗ +8% this month</p>
              </div>
              <div className="text-4xl">✅</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Avg Lifetime Value</p>
                <p className="text-3xl font-bold text-purple-600">${stats.averageLifetimeValue}</p>
                <p className="text-sm text-purple-600">↗ +15% this month</p>
              </div>
              <div className="text-4xl">💰</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Retention Rate</p>
                <p className="text-3xl font-bold text-indigo-600">{stats.customerRetentionRate}%</p>
                <p className="text-sm text-indigo-600">↗ +3% this month</p>
              </div>
              <div className="text-4xl">🔄</div>
            </div>
          </div>
        </div>

        {/* CRM Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link href="/admin/crm/customers" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Customer Database</h3>
                <p className="text-gray-600">Manage customer profiles & data</p>
              </div>
            </div>
          </Link>

          <Link href="/admin/crm/communications" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Communications</h3>
                <p className="text-gray-600">Email campaigns & support</p>
              </div>
            </div>
          </Link>

          <Link href="/admin/crm/analytics" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">CRM Analytics</h3>
                <p className="text-gray-600">Customer insights & reports</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Activity & Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Customer Activity</h2>
            <div className="space-y-4">
              {[
                { customer: 'John Doe', action: 'Placed order #ORD-001', time: '2 hours ago', type: 'order' },
                { customer: 'Jane Smith', action: 'Updated profile', time: '4 hours ago', type: 'profile' },
                { customer: 'Bob Johnson', action: 'Left product review', time: '6 hours ago', type: 'review' },
                { customer: 'Alice Brown', action: 'Subscribed to newsletter', time: '8 hours ago', type: 'subscription' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl">
                    {activity.type === 'order' && '🛒'}
                    {activity.type === 'profile' && '👤'}
                    {activity.type === 'review' && '⭐'}
                    {activity.type === 'subscription' && '📧'}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.customer}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                  </div>
                  <div className="text-sm text-gray-500">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Communication Stats</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Emails Sent This Month</span>
                <span className="font-bold text-blue-600">{stats.emailsSent.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Email Open Rate</span>
                <span className="font-bold text-green-600">{stats.emailOpenRate}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Support Tickets</span>
                <span className="font-bold text-yellow-600">23 Open</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Customer Satisfaction</span>
                <span className="font-bold text-purple-600">4.8/5.0</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="w-full btn-primary">
                📧 Send Campaign
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}