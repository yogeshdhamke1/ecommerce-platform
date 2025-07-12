'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function AddressesPage() {
  const router = useRouter()
  const [addresses, setAddresses] = useState([
    {
      id: '1',
      type: 'home',
      name: 'John Doe',
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      phone: '+1 (555) 123-4567',
      isDefault: true
    },
    {
      id: '2',
      type: 'work',
      name: 'John Doe',
      street: '456 Business Ave, Suite 200',
      city: 'New York',
      state: 'NY',
      zipCode: '10002',
      country: 'United States',
      phone: '+1 (555) 987-6543',
      isDefault: false
    }
  ])
  
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingAddress, setEditingAddress] = useState<any>(null)
  const [formData, setFormData] = useState({
    type: 'home',
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
    isDefault: false
  })

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/login')
    }
  }, [router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingAddress) {
      setAddresses(addresses.map(addr => 
        addr.id === editingAddress.id ? { ...addr, ...formData } : addr
      ))
      setEditingAddress(null)
    } else {
      const newAddress = {
        id: Date.now().toString(),
        ...formData
      }
      setAddresses([...addresses, newAddress])
    }
    setShowAddForm(false)
    setFormData({
      type: 'home',
      name: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'United States',
      phone: '',
      isDefault: false
    })
  }

  const deleteAddress = (id: string) => {
    if (confirm('Are you sure you want to delete this address?')) {
      setAddresses(addresses.filter(addr => addr.id !== id))
    }
  }

  const setDefaultAddress = (id: string) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })))
  }

  const startEdit = (address: any) => {
    setEditingAddress(address)
    setFormData(address)
    setShowAddForm(true)
  }

  const getAddressIcon = (type: string) => {
    switch (type) {
      case 'home': return '🏠'
      case 'work': return '🏢'
      case 'other': return '📍'
      default: return '📍'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">📍 My Addresses</h1>
              <p className="text-gray-600">{addresses.length} saved addresses</p>
            </div>
            <div className="flex space-x-4">
              <Link href="/profile" className="btn-secondary">
                ← Back to Profile
              </Link>
              <button
                onClick={() => setShowAddForm(true)}
                className="btn-primary"
              >
                <PlusIcon className="h-5 w-5 mr-2" />
                Add Address
              </button>
            </div>
          </div>

          {/* Add/Edit Form */}
          {showAddForm && (
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {editingAddress ? 'Edit Address' : 'Add New Address'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      className="input-field"
                      required
                    >
                      <option value="home">Home</option>
                      <option value="work">Work</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="input-field"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                    <input
                      type="text"
                      value={formData.street}
                      onChange={(e) => setFormData({...formData, street: e.target.value})}
                      className="input-field"
                      placeholder="123 Main Street, Apt 4B"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({...formData, state: e.target.value})}
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      className="input-field"
                      required
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="input-field"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.isDefault}
                        onChange={(e) => setFormData({...formData, isDefault: e.target.checked})}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700">Set as default address</span>
                    </label>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button type="submit" className="btn-primary">
                    {editingAddress ? 'Update Address' : 'Add Address'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddForm(false)
                      setEditingAddress(null)
                      setFormData({
                        type: 'home',
                        name: '',
                        street: '',
                        city: '',
                        state: '',
                        zipCode: '',
                        country: 'United States',
                        phone: '',
                        isDefault: false
                      })
                    }}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Address Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addresses.map((address) => (
              <div key={address.id} className="bg-white rounded-2xl shadow-sm p-6 relative">
                {address.isDefault && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      Default
                    </span>
                  </div>
                )}

                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-3xl">{getAddressIcon(address.type)}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 capitalize mb-1">
                      {address.type} Address
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p className="font-medium">{address.name}</p>
                      <p>{address.street}</p>
                      <p>{address.city}, {address.state} {address.zipCode}</p>
                      <p>{address.country}</p>
                      {address.phone && <p>📞 {address.phone}</p>}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => startEdit(address)}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm"
                  >
                    <PencilIcon className="h-4 w-4" />
                    <span>Edit</span>
                  </button>
                  
                  {!address.isDefault && (
                    <button
                      onClick={() => setDefaultAddress(address.id)}
                      className="text-green-600 hover:text-green-700 text-sm"
                    >
                      Set Default
                    </button>
                  )}
                  
                  <button
                    onClick={() => deleteAddress(address.id)}
                    className="flex items-center space-x-2 text-red-600 hover:text-red-700 text-sm ml-auto"
                  >
                    <TrashIcon className="h-4 w-4" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {addresses.length === 0 && (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">📍</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">No Addresses Yet</h2>
              <p className="text-gray-600 mb-8">Add your first address to get started with faster checkout!</p>
              <button
                onClick={() => setShowAddForm(true)}
                className="btn-primary"
              >
                Add Your First Address
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}