'use client'

import Image from 'next/image'
import Link from 'next/link'
import { downloadInvoice } from '@/lib/invoiceGenerator'

const sampleOrders = [
  {
    id: 'ORD-1703123456',
    date: '2024-12-20',
    status: 'delivered',
    total: 3615.97,
    items: [
      {
        name: 'Diamond Engagement Ring',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300',
        price: 2999.99,
        quantity: 1
      },
      {
        name: 'Wireless Headphones',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
        price: 299.99,
        quantity: 2
      }
    ],
    tracking: 'TRK123456789'
  },
  {
    id: 'ORD-1702987654',
    date: '2024-12-15',
    status: 'shipped',
    total: 899.99,
    items: [
      {
        name: 'Gold Necklace',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300',
        price: 899.99,
        quantity: 1
      }
    ],
    tracking: 'TRK987654321'
  },
  {
    id: 'ORD-1702654321',
    date: '2024-12-10',
    status: 'processing',
    total: 199.99,
    items: [
      {
        name: 'Silver Bracelet',
        image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300',
        price: 199.99,
        quantity: 1
      }
    ]
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'delivered': return 'text-green-600 bg-green-100'
    case 'shipped': return 'text-blue-600 bg-blue-100'
    case 'processing': return 'text-yellow-600 bg-yellow-100'
    case 'cancelled': return 'text-red-600 bg-red-100'
    default: return 'text-gray-600 bg-gray-100'
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'delivered': return '✅'
    case 'shipped': return '🚚'
    case 'processing': return '⏳'
    case 'cancelled': return '❌'
    default: return '📦'
  }
}

export default function OrdersPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">📦 My Orders</h1>
          <Link href="/products" className="btn-primary">
            Continue Shopping
          </Link>
        </div>

        {sampleOrders.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">📦</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">No Orders Yet</h2>
            <p className="text-gray-600 mb-8">Start shopping to see your orders here!</p>
            <Link href="/products" className="btn-primary">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {sampleOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Order Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{order.id}</h3>
                      <p className="text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)} {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Total</div>
                        <div className="text-xl font-bold text-blue-600">${order.total.toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6">
                  <div className="space-y-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-gray-600">Quantity: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Actions */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex flex-col sm:flex-row gap-3">
                      {order.tracking && (
                        <button className="btn-primary flex-1">
                          🚚 Track Package ({order.tracking})
                        </button>
                      )}
                      <button 
                        onClick={() => downloadInvoice({
                          orderNumber: order.id,
                          date: order.date,
                          customer: { name: 'John Doe', email: 'john@example.com' },
                          items: order.items,
                          subtotal: order.total * 0.85,
                          shipping: 15.99,
                          tax: order.total * 0.08,
                          total: order.total,
                          currency: '$',
                          status: 'paid',
                          paymentMethod: 'Credit Card',
                          shippingAddress: '123 Main St, City, State'
                        })}
                        className="btn-secondary flex-1"
                      >
                        📄 Download Invoice
                      </button>
                      {order.status === 'delivered' && (
                        <button className="btn-secondary flex-1">
                          ⭐ Leave Review
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}