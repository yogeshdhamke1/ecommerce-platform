'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CRMAnalytics() {
  const [timeRange, setTimeRange] = useState('30d')
  
  const crmData = {
    customerMetrics: {
      totalCustomers: 1247,
      newCustomers: 156,
      activeCustomers: 892,
      churnRate: 5.2,
      retentionRate: 78.5,
      averageLifetimeValue: 485.50
    },
    segmentData: [
      { segment: 'VIP', count: 89, revenue: 45678.90, percentage: 7.1 },
      { segment: 'High Value', count: 234, revenue: 78901.23, percentage: 18.8 },
      { segment: 'Regular', count: 567, revenue: 34567.89, percentage: 45.5 },
      { segment: 'At Risk', count: 198, revenue: 12345.67, percentage: 15.9 },
      { segment: 'New', count: 159, revenue: 8901.23, percentage: 12.7 }
    ],
    behaviorData: [
      { behavior: 'Email Opens', value: 24.5, trend: '+2.3%' },
      { behavior: 'Website Visits', value: 67.8, trend: '+5.1%' },
      { behavior: 'Purchase Frequency', value: 3.2, trend: '+0.8%' },
      { behavior: 'Cart Abandonment', value: 68.4, trend: '-3.2%' },
      { behavior: 'Support Tickets', value: 1.8, trend: '-0.5%' }
    ],
    revenueBySegment: [
      { month: 'Jan', vip: 15000, high: 25000, regular: 18000, risk: 8000 },
      { month: 'Feb', vip: 18000, high: 28000, regular: 20000, risk: 7500 },
      { month: 'Mar', vip: 22000, high: 32000, regular: 22000, risk: 9000 },
      { month: 'Apr', vip: 25000, high: 35000, regular: 24000, risk: 8500 },
      { month: 'May', vip: 28000, high: 38000, regular: 26000, risk: 9500 },
      { month: 'Jun', vip: 32000, high: 42000, regular: 28000, risk: 10000 }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">📊 CRM Analytics</h1>
            <p className="text-gray-600">Customer insights and performance metrics</p>
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
            <Link href="/admin/crm" className="btn-secondary">
              ← Back to CRM
            </Link>
          </div>
        </div>

        {/* Key CRM Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Customer Lifetime Value</p>
                <p className="text-3xl font-bold text-purple-600">${crmData.customerMetrics.averageLifetimeValue}</p>
                <p className="text-sm text-green-600">↗ +12.5% vs last month</p>
              </div>
              <div className="text-4xl">💎</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Customer Retention</p>
                <p className="text-3xl font-bold text-green-600">{crmData.customerMetrics.retentionRate}%</p>
                <p className="text-sm text-green-600">↗ +3.2% vs last month</p>
              </div>
              <div className="text-4xl">🔄</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Churn Rate</p>
                <p className="text-3xl font-bold text-red-600">{crmData.customerMetrics.churnRate}%</p>
                <p className="text-sm text-green-600">↘ -1.8% vs last month</p>
              </div>
              <div className="text-4xl">📉</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Customer Segments */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Customer Segments</h2>
            <div className="space-y-4">
              {crmData.segmentData.map((segment, index) => (
                <div key={segment.segment} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full ${
                      index === 0 ? 'bg-purple-500' :
                      index === 1 ? 'bg-blue-500' :
                      index === 2 ? 'bg-green-500' :
                      index === 3 ? 'bg-yellow-500' : 'bg-gray-500'
                    }`}></div>
                    <div>
                      <p className="font-medium text-gray-900">{segment.segment}</p>
                      <p className="text-sm text-gray-600">{segment.count} customers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">${segment.revenue.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">{segment.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Behavior */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Customer Behavior</h2>
            <div className="space-y-4">
              {crmData.behaviorData.map((behavior, index) => (
                <div key={behavior.behavior} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{behavior.behavior}</p>
                    <p className="text-2xl font-bold text-blue-600">{behavior.value}%</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-medium ${
                      behavior.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {behavior.trend}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue by Segment Chart */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Revenue by Customer Segment</h2>
          <div className="space-y-4">
            {crmData.revenueBySegment.map((month, index) => (
              <div key={month.month} className="flex items-center space-x-4">
                <div className="w-12 text-sm font-medium text-gray-600">{month.month}</div>
                <div className="flex-1 flex space-x-1">
                  <div 
                    className="bg-purple-500 h-8 rounded-l flex items-center justify-center text-white text-xs font-medium"
                    style={{ width: `${(month.vip / 50000) * 100}%`, minWidth: '60px' }}
                  >
                    VIP ${(month.vip / 1000).toFixed(0)}k
                  </div>
                  <div 
                    className="bg-blue-500 h-8 flex items-center justify-center text-white text-xs font-medium"
                    style={{ width: `${(month.high / 50000) * 100}%`, minWidth: '60px' }}
                  >
                    High ${(month.high / 1000).toFixed(0)}k
                  </div>
                  <div 
                    className="bg-green-500 h-8 flex items-center justify-center text-white text-xs font-medium"
                    style={{ width: `${(month.regular / 50000) * 100}%`, minWidth: '60px' }}
                  >
                    Regular ${(month.regular / 1000).toFixed(0)}k
                  </div>
                  <div 
                    className="bg-yellow-500 h-8 rounded-r flex items-center justify-center text-white text-xs font-medium"
                    style={{ width: `${(month.risk / 50000) * 100}%`, minWidth: '60px' }}
                  >
                    Risk ${(month.risk / 1000).toFixed(0)}k
                  </div>
                </div>
                <div className="w-20 text-right text-sm font-medium text-gray-900">
                  ${((month.vip + month.high + month.regular + month.risk) / 1000).toFixed(0)}k
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Journey Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Acquisition Channels</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Organic Search</span>
                <span className="font-bold text-gray-900">35%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Social Media</span>
                <span className="font-bold text-gray-900">28%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Email Marketing</span>
                <span className="font-bold text-gray-900">22%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Direct Traffic</span>
                <span className="font-bold text-gray-900">15%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Customer Satisfaction</h2>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>5 stars</span>
                <span>68%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>4 stars</span>
                <span>22%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>3 stars</span>
                <span>7%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>2 stars</span>
                <span>2%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>1 star</span>
                <span>1%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full btn-primary text-sm py-2">
                📊 Export CRM Report
              </button>
              <button className="w-full btn-secondary text-sm py-2">
                📧 Send Segment Campaign
              </button>
              <button className="w-full btn-secondary text-sm py-2">
                🎯 Create Customer Journey
              </button>
              <button className="w-full btn-secondary text-sm py-2">
                📈 Schedule Report
              </button>
              <button className="w-full btn-secondary text-sm py-2">
                🔍 Advanced Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}