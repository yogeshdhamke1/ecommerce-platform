'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    bio: ''
  })

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/login')
    } else {
      const parsedUser = JSON.parse(userData)
      setUser(parsedUser)
      setFormData({
        name: parsedUser.name || 'John Doe',
        email: parsedUser.email || 'john@example.com',
        phone: '+1 (555) 123-4567',
        dateOfBirth: '1990-01-15',
        gender: 'male',
        bio: 'Passionate online shopper who loves discovering new products and great deals.'
      })
    }
  }, [router])

  const handleSave = () => {
    const updatedUser = { ...user, ...formData }
    localStorage.setItem('user', JSON.stringify(updatedUser))
    setUser(updatedUser)
    setIsEditing(false)
    alert('Profile updated successfully!')
  }

  if (!user) return <div>Loading...</div>

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">👤 My Profile</h1>
            <Link href="/dashboard" className="btn-secondary">
              ← Back to Dashboard
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{formData.name}</h2>
                <p className="text-gray-600 mb-4">{formData.email}</p>
                <div className="space-y-2">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    ✅ Verified Account
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    🛍️ Premium Member
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Orders</span>
                    <span className="font-bold text-blue-600">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Spent</span>
                    <span className="font-bold text-green-600">$2,456</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Wishlist Items</span>
                    <span className="font-bold text-purple-600">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reviews Written</span>
                    <span className="font-bold text-yellow-600">5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="btn-primary"
                    >
                      ✏️ Edit Profile
                    </button>
                  ) : (
                    <div className="space-x-3">
                      <button onClick={handleSave} className="btn-primary">
                        💾 Save Changes
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="btn-secondary"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-gray-900 py-2">{formData.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-gray-900 py-2">{formData.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-gray-900 py-2">{formData.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    {isEditing ? (
                      <input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-gray-900 py-2">{new Date(formData.dateOfBirth).toLocaleDateString()}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    {isEditing ? (
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({...formData, gender: e.target.value})}
                        className="input-field"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    ) : (
                      <p className="text-gray-900 py-2 capitalize">{formData.gender.replace('-', ' ')}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    {isEditing ? (
                      <textarea
                        value={formData.bio}
                        onChange={(e) => setFormData({...formData, bio: e.target.value})}
                        className="input-field h-24"
                        placeholder="Tell us about yourself..."
                      />
                    ) : (
                      <p className="text-gray-900 py-2">{formData.bio}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/addresses" className="btn-secondary text-center">
                    📍 Manage Addresses
                  </Link>
                  <Link href="/orders" className="btn-secondary text-center">
                    📦 View Orders
                  </Link>
                  <Link href="/wishlist" className="btn-secondary text-center">
                    ❤️ My Wishlist
                  </Link>
                  <Link href="/reviews" className="btn-secondary text-center">
                    ⭐ My Reviews
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}