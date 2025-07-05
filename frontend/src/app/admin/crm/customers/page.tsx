'use client'

import { useState } from 'react'
import Link from 'next/link'
import { EyeIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

const sampleCustomers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, New York, NY 10001',
    joinDate: '2024-01-15',
    lastOrder: '2024-12-20',
    totalOrders: 12,
    totalSpent: 2456.78,
    lifetimeValue: 3200.00,
    status: 'VIP',
    segment: 'High Value',
    tags: ['Jewelry Lover', 'Frequent Buyer'],
    notes: 'Prefers premium products, responds well to email campaigns'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1 (555) 987-6543',
    address: '456 Oak Ave, Los Angeles, CA 90210',
    joinDate: '2024-02-20',
    lastOrder: '2024-12-18',
    totalOrders: 8,
    totalSpent: 1234.56,
    lifetimeValue: 1800.00,
    status: 'Active',
    segment: 'Regular',
    tags: ['Electronics', 'Tech Enthusiast'],
    notes: 'Interested in latest gadgets, price-sensitive'
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    phone: '+1 (555) 456-7890',
    address: '789 Pine Rd, Chicago, IL 60601',
    joinDate: '2024-03-10',
    lastOrder: '2024-11-15',
    totalOrders: 3,
    totalSpent: 567.89,
    lifetimeValue: 750.00,
    status: 'Inactive',
    segment: 'At Risk',
    tags: ['Sports', 'Seasonal Buyer'],
    notes: 'Buys mainly during sales, needs re-engagement'
  }
]

export default function CustomerDatabase() {
  const [customers, setCustomers] = useState(sampleCustomers)
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [segmentFilter, setSegmentFilter] = useState('all')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'VIP': return 'bg-purple-100 text-purple-800'
      case 'Active': return 'bg-green-100 text-green-800'
      case 'Inactive': return 'bg-gray-100 text-gray-800'
      case 'At Risk': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSegment = segmentFilter === 'all' || customer.segment === segmentFilter
    return matchesSearch && matchesSegment
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">👤 Customer Database</h1>
            <p className="text-gray-600">{customers.length} customers in database</p>
          </div>
          <Link href="/admin/crm" className="btn-secondary">
            ← Back to CRM
          </Link>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <select
                value={segmentFilter}
                onChange={(e) => setSegmentFilter(e.target.value)}
                className="input-field"
              >
                <option value="all">All Segments</option>
                <option value="High Value">High Value</option>
                <option value="Regular">Regular</option>
                <option value="At Risk">At Risk</option>
                <option value="New">New</option>
              </select>
            </div>
            <div>
              <button className="btn-primary w-full">
                📊 Export Customer Data
              </button>
            </div>
          </div>
        </div>

        {/* Customer Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {customers.filter(c => c.status === 'VIP').length}
            </div>
            <div className="text-gray-600">VIP Customers</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {customers.filter(c => c.status === 'Active').length}
            </div>
            <div className="text-gray-600">Active Customers</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">
              {customers.filter(c => c.segment === 'At Risk').length}
            </div>
            <div className="text-gray-600">At Risk</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              ${Math.round(customers.reduce((sum, c) => sum + c.lifetimeValue, 0) / customers.length)}
            </div>
            <div className="text-gray-600">Avg LTV</div>
          </div>
        </div>

        {/* Customer Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Customer</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Segment</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Orders</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Total Spent</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">LTV</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Last Order</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">{customer.name}</p>
                        <p className="text-sm text-gray-600">{customer.email}</p>
                        <div className="flex space-x-1 mt-1">
                          {customer.tags.map((tag, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(customer.status)}`}>
                        {customer.segment}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-900">{customer.totalOrders}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-green-600">${customer.totalSpent.toLocaleString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-purple-600">${customer.lifetimeValue.toLocaleString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-900">{new Date(customer.lastOrder).toLocaleDateString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setSelectedCustomer(customer)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                          title="View Profile"
                        >
                          <EyeIcon className="h-4 w-4" />
                        </button>
                        <button
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                          title="Send Email"
                        >
                          <EnvelopeIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Customer Profile Modal */}
        {selectedCustomer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Customer Profile</h2>
                  <button
                    onClick={() => setSelectedCustomer(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Customer Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Name</p>
                          <p className="font-medium">{selectedCustomer.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <p className="font-medium">{selectedCustomer.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Phone</p>
                          <p className="font-medium">{selectedCustomer.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Join Date</p>
                          <p className="font-medium">{new Date(selectedCustomer.joinDate).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-gray-600">Address</p>
                        <p className="font-medium">{selectedCustomer.address}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Purchase History</h3>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-blue-600">{selectedCustomer.totalOrders}</p>
                          <p className="text-sm text-gray-600">Total Orders</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-green-600">${selectedCustomer.totalSpent}</p>
                          <p className="text-sm text-gray-600">Total Spent</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-purple-600">${selectedCustomer.lifetimeValue}</p>
                          <p className="text-sm text-gray-600">Lifetime Value</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Notes</h3>
                      <p className="text-gray-700">{selectedCustomer.notes}</p>
                      <button className="mt-4 text-blue-600 hover:text-blue-700">
                        ✏️ Edit Notes
                      </button>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-6">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                      <div className="space-y-3">
                        <button className="w-full btn-primary text-sm py-2">
                          📧 Send Email
                        </button>
                        <button className="w-full btn-secondary text-sm py-2">
                          📞 Schedule Call
                        </button>
                        <button className="w-full btn-secondary text-sm py-2">
                          📦 View Orders
                        </button>
                        <button className="w-full btn-secondary text-sm py-2">
                          🎁 Send Offer
                        </button>
                      </div>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCustomer.tags.map((tag: string, index: number) => (
                          <span key={index} className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="mt-4 text-yellow-600 hover:text-yellow-700 text-sm">
                        + Add Tag
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}