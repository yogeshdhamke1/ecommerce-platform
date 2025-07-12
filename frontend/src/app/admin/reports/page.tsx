'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AdminReports() {
  const [dateRange, setDateRange] = useState('30d')
  
  const reports = [
    {
      title: 'Sales Report',
      description: 'Revenue, orders, and sales performance',
      icon: '💰',
      data: { value: '$45,678', change: '+12.5%' },
      color: 'green'
    },
    {
      title: 'Product Performance',
      description: 'Best selling products and inventory',
      icon: '📦',
      data: { value: '156 sold', change: '+8.3%' },
      color: 'blue'
    },
    {
      title: 'Customer Analytics',
      description: 'Customer behavior and demographics',
      icon: '👥',
      data: { value: '1,247 users', change: '+15.2%' },
      color: 'purple'
    },
    {
      title: 'Traffic Report',
      description: 'Website visits and conversion rates',
      icon: '📊',
      data: { value: '23,456 visits', change: '+5.7%' },
      color: 'indigo'
    }
  ]

  const generateReport = (reportType: string) => {
    alert(`Generating ${reportType} report...`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">📊 Reports & Analytics</h1>
            <p className="text-gray-600">Generate and view business reports</p>
          </div>
          <div className="flex space-x-4">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
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

        {/* Report Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {reports.map((report, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{report.icon}</div>
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  report.color === 'green' ? 'bg-green-100 text-green-800' :
                  report.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                  report.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                  'bg-indigo-100 text-indigo-800'
                }`}>
                  {report.data.change}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{report.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{report.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">{report.data.value}</span>
                <button
                  onClick={() => generateReport(report.title)}
                  className="btn-primary text-sm py-2 px-4"
                >
                  Generate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Reports */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Reports</h2>
            <div className="space-y-4">
              <button
                onClick={() => generateReport('Daily Sales')}
                className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📈</span>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Daily Sales Report</p>
                    <p className="text-sm text-gray-600">Today's sales performance</p>
                  </div>
                </div>
                <span className="text-blue-600">→</span>
              </button>

              <button
                onClick={() => generateReport('Inventory')}
                className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📦</span>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Inventory Report</p>
                    <p className="text-sm text-gray-600">Stock levels and alerts</p>
                  </div>
                </div>
                <span className="text-blue-600">→</span>
              </button>

              <button
                onClick={() => generateReport('Customer')}
                className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👥</span>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Customer Report</p>
                    <p className="text-sm text-gray-600">Customer activity and trends</p>
                  </div>
                </div>
                <span className="text-blue-600">→</span>
              </button>

              <button
                onClick={() => generateReport('Financial')}
                className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💰</span>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Financial Report</p>
                    <p className="text-sm text-gray-600">Revenue and profit analysis</p>
                  </div>
                </div>
                <span className="text-blue-600">→</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Export Options</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">📄 PDF Reports</h3>
                <p className="text-sm text-blue-800 mb-3">Professional formatted reports</p>
                <button className="btn-primary text-sm">Export as PDF</button>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-medium text-green-900 mb-2">📊 Excel Reports</h3>
                <p className="text-sm text-green-800 mb-3">Spreadsheet format for analysis</p>
                <button className="btn-primary text-sm bg-green-600 hover:bg-green-700">Export as Excel</button>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-medium text-purple-900 mb-2">📧 Email Reports</h3>
                <p className="text-sm text-purple-800 mb-3">Schedule automated reports</p>
                <button className="btn-primary text-sm bg-purple-600 hover:bg-purple-700">Setup Email</button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Reports</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Report Name</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Generated</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: 'Monthly Sales Report', type: 'Sales', date: '2024-12-20', status: 'Ready' },
                  { name: 'Inventory Analysis', type: 'Inventory', date: '2024-12-19', status: 'Ready' },
                  { name: 'Customer Insights', type: 'Customer', date: '2024-12-18', status: 'Processing' }
                ].map((report, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{report.name}</td>
                    <td className="px-6 py-4 text-gray-600">{report.type}</td>
                    <td className="px-6 py-4 text-gray-600">{report.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        report.status === 'Ready' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-700 text-sm">Download</button>
                        <button className="text-red-600 hover:text-red-700 text-sm">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}