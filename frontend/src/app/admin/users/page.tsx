'use client'

import { useState } from 'react'
import Link from 'next/link'
import { EyeIcon, NoSymbolIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const sampleUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    joinDate: '2024-01-15',
    status: 'active',
    totalOrders: 5,
    totalSpent: 1299.95,
    lastLogin: '2024-12-20'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    joinDate: '2024-02-20',
    status: 'active',
    totalOrders: 12,
    totalSpent: 3456.78,
    lastLogin: '2024-12-19'
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    joinDate: '2024-03-10',
    status: 'inactive',
    totalOrders: 2,
    totalSpent: 299.99,
    lastLogin: '2024-11-15'
  },
  {
    id: '4',
    name: 'Alice Brown',
    email: 'alice@example.com',
    joinDate: '2024-04-05',
    status: 'active',
    totalOrders: 8,
    totalSpent: 2199.50,
    lastLogin: '2024-12-18'
  }
]

export default function AdminUsers() {
  const [users, setUsers] = useState(sampleUsers)
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [statusFilter, setStatusFilter] = useState('all')

  const updateUserStatus = (userId: string, newStatus: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'inactive': return 'bg-gray-100 text-gray-800'
      case 'banned': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredUsers = statusFilter === 'all' 
    ? users 
    : users.filter(user => user.status === statusFilter)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">👥 User Management</h1>
            <p className="text-gray-600">{users.length} total customers</p>
          </div>
          <Link href="/admin" className="btn-secondary">
            ← Back to Dashboard
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Users</p>
                <p className="text-3xl font-bold text-blue-600">{users.length}</p>
              </div>
              <div className="text-4xl">👥</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Users</p>
                <p className="text-3xl font-bold text-green-600">
                  {users.filter(u => u.status === 'active').length}
                </p>
              </div>
              <div className="text-4xl">✅</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Avg Orders</p>
                <p className="text-3xl font-bold text-purple-600">
                  {Math.round(users.reduce((sum, u) => sum + u.totalOrders, 0) / users.length)}
                </p>
              </div>
              <div className="text-4xl">📦</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Avg Spent</p>
                <p className="text-3xl font-bold text-indigo-600">
                  ${Math.round(users.reduce((sum, u) => sum + u.totalSpent, 0) / users.length)}
                </p>
              </div>
              <div className="text-4xl">💰</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="input-field w-auto"
            >
              <option value="all">All Users</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="banned">Banned</option>
            </select>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">User</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Join Date</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Orders</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Total Spent</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Last Login</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-900">{new Date(user.joinDate).toLocaleDateString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-900">{user.totalOrders}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-green-600">${user.totalSpent.toLocaleString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-900">{new Date(user.lastLogin).toLocaleDateString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setSelectedUser(user)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                          title="View Details"
                        >
                          <EyeIcon className="h-4 w-4" />
                        </button>
                        {user.status === 'active' ? (
                          <button
                            onClick={() => updateUserStatus(user.id, 'banned')}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                            title="Ban User"
                          >
                            <NoSymbolIcon className="h-4 w-4" />
                          </button>
                        ) : (
                          <button
                            onClick={() => updateUserStatus(user.id, 'active')}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                            title="Activate User"
                          >
                            <CheckCircleIcon className="h-4 w-4" />
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

        {/* User Details Modal */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">User Details</h2>
                  <button
                    onClick={() => setSelectedUser(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                      <p><strong>Name:</strong> {selectedUser.name}</p>
                      <p><strong>Email:</strong> {selectedUser.email}</p>
                      <p><strong>Status:</strong> 
                        <span className={`ml-2 px-2 py-1 rounded-full text-xs ${getStatusColor(selectedUser.status)}`}>
                          {selectedUser.status}
                        </span>
                      </p>
                      <p><strong>Join Date:</strong> {new Date(selectedUser.joinDate).toLocaleDateString()}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Activity Summary</h3>
                      <p><strong>Total Orders:</strong> {selectedUser.totalOrders}</p>
                      <p><strong>Total Spent:</strong> ${selectedUser.totalSpent.toLocaleString()}</p>
                      <p><strong>Last Login:</strong> {new Date(selectedUser.lastLogin).toLocaleDateString()}</p>
                      <p><strong>Avg Order Value:</strong> ${(selectedUser.totalSpent / selectedUser.totalOrders).toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={() => alert('Send email functionality would be implemented here')}
                      className="btn-primary"
                    >
                      📧 Send Email
                    </button>
                    <button
                      onClick={() => alert('View order history functionality would be implemented here')}
                      className="btn-secondary"
                    >
                      📦 View Orders
                    </button>
                    <button
                      onClick={() => {
                        const newStatus = selectedUser.status === 'active' ? 'banned' : 'active'
                        updateUserStatus(selectedUser.id, newStatus)
                        setSelectedUser({...selectedUser, status: newStatus})
                      }}
                      className={`btn-secondary ${selectedUser.status === 'active' ? 'text-red-600' : 'text-green-600'}`}
                    >
                      {selectedUser.status === 'active' ? '🚫 Ban User' : '✅ Activate User'}
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