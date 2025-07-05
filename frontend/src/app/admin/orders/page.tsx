'use client'

import { useState } from 'react'
import Link from 'next/link'
import { EyeIcon, TruckIcon } from '@heroicons/react/24/outline'

const sampleOrders = [
  {
    id: 'ORD-001',
    customer: { name: 'John Doe', email: 'john@example.com' },
    date: '2024-12-20',
    status: 'pending',
    total: 299.99,
    items: 2,
    shippingAddress: '123 Main St, City, State 12345',
    trackingNumber: ''
  },
  {
    id: 'ORD-002',
    customer: { name: 'Jane Smith', email: 'jane@example.com' },
    date: '2024-12-19',
    status: 'shipped',
    total: 599.99,
    items: 1,
    shippingAddress: '456 Oak Ave, City, State 67890',
    trackingNumber: 'TRK123456789'
  },
  {
    id: 'ORD-003',
    customer: { name: 'Bob Johnson', email: 'bob@example.com' },
    date: '2024-12-18',
    status: 'delivered',
    total: 149.99,
    items: 3,
    shippingAddress: '789 Pine Rd, City, State 54321',
    trackingNumber: 'TRK987654321'
  }
]

export default function AdminOrders() {
  const [orders, setOrders] = useState(sampleOrders)
  const [selectedOrder, setSelectedOrder] = useState<any>(null)
  const [statusFilter, setStatusFilter] = useState('all')

  const updateOrderStatus = (orderId: string, newStatus: string, trackingNumber?: string) => {
    setOrders(orders.map(order => 
      order.id === orderId 
        ? { ...order, status: newStatus, trackingNumber: trackingNumber || order.trackingNumber }
        : order
    ))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'processing': return 'bg-blue-100 text-blue-800'
      case 'shipped': return 'bg-purple-100 text-purple-800'
      case 'delivered': return 'bg-green-100 text-green-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredOrders = statusFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === statusFilter)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">📋 Order Management</h1>
            <p className="text-gray-600">{orders.length} total orders</p>
          </div>
          <Link href="/admin" className="btn-secondary">
            ← Back to Dashboard
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="input-field w-auto"
            >
              <option value="all">All Orders</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Order ID</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Customer</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Total</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Items</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900">{order.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">{order.customer.name}</p>
                        <p className="text-sm text-gray-600">{order.customer.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-900">{new Date(order.date).toLocaleDateString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                        className={`px-3 py-1 rounded-full text-xs font-medium border-0 ${getStatusColor(order.status)}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-green-600">${order.total}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-900">{order.items} items</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                          title="View Details"
                        >
                          <EyeIcon className="h-4 w-4" />
                        </button>
                        {order.status === 'shipped' && (
                          <button
                            onClick={() => {
                              const tracking = prompt('Enter tracking number:', order.trackingNumber)
                              if (tracking) updateOrderStatus(order.id, 'shipped', tracking)
                            }}
                            className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg"
                            title="Update Tracking"
                          >
                            <TruckIcon className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Order Details Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Order Details</h2>
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Order Information</h3>
                      <p><strong>Order ID:</strong> {selectedOrder.id}</p>
                      <p><strong>Date:</strong> {new Date(selectedOrder.date).toLocaleDateString()}</p>
                      <p><strong>Status:</strong> 
                        <span className={`ml-2 px-2 py-1 rounded-full text-xs ${getStatusColor(selectedOrder.status)}`}>
                          {selectedOrder.status}
                        </span>
                      </p>
                      <p><strong>Total:</strong> ${selectedOrder.total}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Customer Information</h3>
                      <p><strong>Name:</strong> {selectedOrder.customer.name}</p>
                      <p><strong>Email:</strong> {selectedOrder.customer.email}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Shipping Address</h3>
                    <p className="text-gray-700">{selectedOrder.shippingAddress}</p>
                  </div>

                  {selectedOrder.trackingNumber && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Tracking Information</h3>
                      <p className="text-gray-700">Tracking Number: {selectedOrder.trackingNumber}</p>
                    </div>
                  )}

                  <div className="flex space-x-4">
                    <button
                      onClick={() => alert('Print invoice functionality would be implemented here')}
                      className="btn-primary"
                    >
                      📄 Print Invoice
                    </button>
                    <button
                      onClick={() => alert('Send email functionality would be implemented here')}
                      className="btn-secondary"
                    >
                      📧 Send Update Email
                    </button>
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