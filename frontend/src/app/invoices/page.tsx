'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DocumentArrowDownIcon, EnvelopeIcon, EyeIcon } from '@heroicons/react/24/outline'
import { downloadInvoice, emailInvoice } from '@/lib/invoiceGenerator'

const sampleInvoices = [
  {
    orderNumber: 'ORD-1703123456',
    date: '2024-12-20',
    customer: {
      name: 'John Doe',
      email: 'john@example.com'
    },
    items: [
      { name: 'Diamond Engagement Ring', quantity: 1, price: 2999.99 },
      { name: 'Wireless Headphones', quantity: 2, price: 299.99 }
    ],
    subtotal: 3599.97,
    shipping: 15.99,
    tax: 287.99,
    total: 3903.95,
    currency: '$',
    status: 'paid',
    paymentMethod: 'Credit Card ****3456',
    shippingAddress: '123 Main St, New York, NY 10001'
  },
  {
    orderNumber: 'ORD-1702987654',
    date: '2024-12-15',
    customer: {
      name: 'Jane Smith',
      email: 'jane@example.com'
    },
    items: [
      { name: 'Gold Necklace', quantity: 1, price: 899.99 }
    ],
    subtotal: 899.99,
    shipping: 15.99,
    tax: 71.99,
    total: 987.97,
    currency: '$',
    status: 'paid',
    paymentMethod: 'PayPal',
    shippingAddress: '456 Oak Ave, Los Angeles, CA 90210'
  }
]

export default function InvoicesPage() {
  const [invoices] = useState(sampleInvoices)
  const [emailingInvoice, setEmailingInvoice] = useState<string | null>(null)

  const handleDownloadInvoice = (invoice: any) => {
    downloadInvoice(invoice)
  }

  const handleEmailInvoice = async (invoice: any) => {
    setEmailingInvoice(invoice.orderNumber)
    try {
      await emailInvoice(invoice, invoice.customer.email)
      alert(`Invoice emailed to ${invoice.customer.email}`)
    } catch (error) {
      alert('Failed to send email')
    } finally {
      setEmailingInvoice(null)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">📄 Invoices</h1>
            <p className="text-gray-600">{invoices.length} invoices available</p>
          </div>
          <Link href="/orders" className="btn-secondary">
            ← Back to Orders
          </Link>
        </div>

        {/* Invoice Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Invoices</p>
                <p className="text-3xl font-bold text-blue-600">{invoices.length}</p>
              </div>
              <div className="text-4xl">📄</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Amount</p>
                <p className="text-3xl font-bold text-green-600">
                  ${invoices.reduce((sum, inv) => sum + inv.total, 0).toFixed(2)}
                </p>
              </div>
              <div className="text-4xl">💰</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Paid Invoices</p>
                <p className="text-3xl font-bold text-purple-600">
                  {invoices.filter(inv => inv.status === 'paid').length}
                </p>
              </div>
              <div className="text-4xl">✅</div>
            </div>
          </div>
        </div>

        {/* Invoices List */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Invoice History</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {invoices.map((invoice) => (
              <div key={invoice.orderNumber} className="p-6 hover:bg-gray-50">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Invoice #{invoice.orderNumber}
                      </h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {invoice.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div>
                        <p><strong>Customer:</strong> {invoice.customer.name}</p>
                        <p><strong>Email:</strong> {invoice.customer.email}</p>
                      </div>
                      <div>
                        <p><strong>Date:</strong> {new Date(invoice.date).toLocaleDateString()}</p>
                        <p><strong>Payment:</strong> {invoice.paymentMethod}</p>
                      </div>
                      <div>
                        <p><strong>Items:</strong> {invoice.items.length}</p>
                        <p><strong>Total:</strong> <span className="font-bold text-green-600">{invoice.currency}{invoice.total.toFixed(2)}</span></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleDownloadInvoice(invoice)}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      title="Download PDF"
                    >
                      <DocumentArrowDownIcon className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                    
                    <button
                      onClick={() => handleEmailInvoice(invoice)}
                      disabled={emailingInvoice === invoice.orderNumber}
                      className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                      title="Email Invoice"
                    >
                      <EnvelopeIcon className="h-4 w-4" />
                      <span>
                        {emailingInvoice === invoice.orderNumber ? 'Sending...' : 'Email'}
                      </span>
                    </button>
                    
                    <button
                      onClick={() => {
                        // Preview invoice in modal or new tab
                        const invoiceWindow = window.open('', '_blank')
                        if (invoiceWindow) {
                          invoiceWindow.document.write(`
                            <div style="padding: 20px; font-family: Arial, sans-serif;">
                              <h2>Invoice Preview - ${invoice.orderNumber}</h2>
                              <p><strong>Customer:</strong> ${invoice.customer.name}</p>
                              <p><strong>Date:</strong> ${new Date(invoice.date).toLocaleDateString()}</p>
                              <p><strong>Total:</strong> ${invoice.currency}${invoice.total.toFixed(2)}</p>
                              <hr style="margin: 20px 0;">
                              <h3>Items:</h3>
                              ${invoice.items.map(item => `
                                <p>${item.name} - Qty: ${item.quantity} - ${invoice.currency}${item.price.toFixed(2)}</p>
                              `).join('')}
                            </div>
                          `)
                          invoiceWindow.document.close()
                        }
                      }}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      title="Preview Invoice"
                    >
                      <EyeIcon className="h-4 w-4" />
                      <span>Preview</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invoice Actions */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Invoice Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="btn-primary">
              📊 Export All Invoices
            </button>
            <button className="btn-secondary">
              📧 Bulk Email Invoices
            </button>
            <button className="btn-secondary">
              🔍 Advanced Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}