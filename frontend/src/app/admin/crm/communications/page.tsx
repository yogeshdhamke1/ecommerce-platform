'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PaperAirplaneIcon, EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export default function CommunicationsCenter() {
  const [activeTab, setActiveTab] = useState('campaigns')
  const [emailData, setEmailData] = useState({
    subject: '',
    content: '',
    recipients: 'all'
  })

  const campaigns = [
    {
      id: '1',
      name: 'Holiday Sale 2024',
      subject: '🎄 Holiday Sale - Up to 50% Off!',
      status: 'sent',
      sent: 1247,
      opened: 312,
      clicked: 89,
      date: '2024-12-20'
    },
    {
      id: '2',
      name: 'Welcome Series - Part 1',
      subject: 'Welcome to E-Store! 👋',
      status: 'active',
      sent: 156,
      opened: 98,
      clicked: 34,
      date: '2024-12-19'
    },
    {
      id: '3',
      name: 'Cart Abandonment',
      subject: 'You left something behind...',
      status: 'draft',
      sent: 0,
      opened: 0,
      clicked: 0,
      date: '2024-12-18'
    }
  ]

  const supportTickets = [
    {
      id: 'TKT-001',
      customer: 'John Doe',
      subject: 'Order delivery issue',
      status: 'open',
      priority: 'high',
      created: '2024-12-20',
      lastReply: '2 hours ago'
    },
    {
      id: 'TKT-002',
      customer: 'Jane Smith',
      subject: 'Product return request',
      status: 'pending',
      priority: 'medium',
      created: '2024-12-19',
      lastReply: '1 day ago'
    },
    {
      id: 'TKT-003',
      customer: 'Bob Johnson',
      subject: 'Payment processing error',
      status: 'resolved',
      priority: 'high',
      created: '2024-12-18',
      lastReply: '2 days ago'
    }
  ]

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Email campaign sent successfully!')
    setEmailData({ subject: '', content: '', recipients: 'all' })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sent': return 'bg-green-100 text-green-800'
      case 'active': return 'bg-blue-100 text-blue-800'
      case 'draft': return 'bg-gray-100 text-gray-800'
      case 'open': return 'bg-red-100 text-red-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'resolved': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600'
      case 'medium': return 'text-yellow-600'
      case 'low': return 'text-green-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">📧 Communications Center</h1>
            <p className="text-gray-600">Email campaigns and customer support</p>
          </div>
          <Link href="/admin/crm" className="btn-secondary">
            ← Back to CRM
          </Link>
        </div>

        {/* Communication Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Emails Sent</p>
                <p className="text-3xl font-bold text-blue-600">2,340</p>
                <p className="text-sm text-green-600">↗ +15% this month</p>
              </div>
              <div className="text-4xl">📧</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Open Rate</p>
                <p className="text-3xl font-bold text-green-600">24.5%</p>
                <p className="text-sm text-green-600">↗ +2.3% this month</p>
              </div>
              <div className="text-4xl">👁️</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Click Rate</p>
                <p className="text-3xl font-bold text-purple-600">8.7%</p>
                <p className="text-sm text-purple-600">↗ +1.2% this month</p>
              </div>
              <div className="text-4xl">👆</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Support Tickets</p>
                <p className="text-3xl font-bold text-red-600">23</p>
                <p className="text-sm text-red-600">5 urgent</p>
              </div>
              <div className="text-4xl">🎫</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              <button
                onClick={() => setActiveTab('campaigns')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'campaigns'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                📧 Email Campaigns
              </button>
              <button
                onClick={() => setActiveTab('compose')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'compose'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                ✏️ Compose Email
              </button>
              <button
                onClick={() => setActiveTab('support')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'support'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                🎫 Support Tickets
              </button>
            </nav>
          </div>

          <div className="p-8">
            {/* Email Campaigns Tab */}
            {activeTab === 'campaigns' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Email Campaigns</h2>
                  <button
                    onClick={() => setActiveTab('compose')}
                    className="btn-primary"
                  >
                    <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                    New Campaign
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Campaign</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Sent</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Opened</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Clicked</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Date</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {campaigns.map((campaign) => (
                        <tr key={campaign.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-medium text-gray-900">{campaign.name}</p>
                              <p className="text-sm text-gray-600">{campaign.subject}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                              {campaign.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-gray-900">{campaign.sent.toLocaleString()}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div>
                              <span className="text-gray-900">{campaign.opened}</span>
                              <span className="text-sm text-gray-500 ml-1">
                                ({campaign.sent > 0 ? ((campaign.opened / campaign.sent) * 100).toFixed(1) : 0}%)
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div>
                              <span className="text-gray-900">{campaign.clicked}</span>
                              <span className="text-sm text-gray-500 ml-1">
                                ({campaign.opened > 0 ? ((campaign.clicked / campaign.opened) * 100).toFixed(1) : 0}%)
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-gray-900">{new Date(campaign.date).toLocaleDateString()}</span>
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-blue-600 hover:text-blue-700 text-sm">
                              View Report
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Compose Email Tab */}
            {activeTab === 'compose' && (
              <form onSubmit={handleSendEmail} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Compose Email Campaign</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Recipients
                    </label>
                    <select
                      value={emailData.recipients}
                      onChange={(e) => setEmailData({...emailData, recipients: e.target.value})}
                      className="input-field"
                    >
                      <option value="all">All Customers (1,247)</option>
                      <option value="vip">VIP Customers (89)</option>
                      <option value="active">Active Customers (892)</option>
                      <option value="inactive">Inactive Customers (266)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Campaign Type
                    </label>
                    <select className="input-field">
                      <option value="promotional">Promotional</option>
                      <option value="newsletter">Newsletter</option>
                      <option value="announcement">Announcement</option>
                      <option value="abandoned-cart">Abandoned Cart</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    value={emailData.subject}
                    onChange={(e) => setEmailData({...emailData, subject: e.target.value})}
                    className="input-field"
                    placeholder="Enter email subject..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Content
                  </label>
                  <textarea
                    value={emailData.content}
                    onChange={(e) => setEmailData({...emailData, content: e.target.value})}
                    className="input-field h-48"
                    placeholder="Write your email content here..."
                    required
                  />
                </div>

                <div className="flex space-x-4">
                  <button type="submit" className="btn-primary">
                    📧 Send Campaign
                  </button>
                  <button type="button" className="btn-secondary">
                    💾 Save as Draft
                  </button>
                  <button type="button" className="btn-secondary">
                    👁️ Preview
                  </button>
                </div>
              </form>
            )}

            {/* Support Tickets Tab */}
            {activeTab === 'support' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Support Tickets</h2>
                  <div className="flex space-x-4">
                    <select className="input-field w-auto">
                      <option value="all">All Tickets</option>
                      <option value="open">Open</option>
                      <option value="pending">Pending</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Ticket ID</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Customer</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Subject</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Priority</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Last Reply</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {supportTickets.map((ticket) => (
                        <tr key={ticket.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <span className="font-medium text-gray-900">{ticket.id}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-gray-900">{ticket.customer}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-gray-900">{ticket.subject}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`font-medium ${getPriorityColor(ticket.priority)}`}>
                              {ticket.priority.toUpperCase()}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                              {ticket.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-gray-900">{ticket.lastReply}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-700 text-sm">
                                Reply
                              </button>
                              <button className="text-green-600 hover:text-green-700 text-sm">
                                Resolve
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}