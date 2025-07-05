'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AdminContent() {
  const [activeTab, setActiveTab] = useState('seo')
  const [seoData, setSeoData] = useState({
    homeTitle: 'E-Store - Best Online Shopping Experience',
    homeDescription: 'Shop the best products online with secure payments, fast delivery, and excellent customer service.',
    homeKeywords: 'online shopping, ecommerce, products, jewelry, electronics, fashion',
    siteName: 'E-Store',
    ogImage: 'https://example.com/og-image.jpg'
  })

  const [contentData, setContentData] = useState({
    heroTitle: 'Shop the Best Products Online',
    heroSubtitle: 'Discover amazing products with secure payments, fast delivery, and excellent customer service.',
    aboutTitle: 'About E-Store',
    aboutContent: 'Your trusted online shopping destination...',
    footerText: 'Your trusted online shopping destination with secure payments and fast delivery.',
    contactEmail: 'support@estore.com',
    contactPhone: '+1 (555) 123-4567'
  })

  const handleSeoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('SEO settings saved successfully!')
  }

  const handleContentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Content updated successfully!')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">📝 Content Management</h1>
            <p className="text-gray-600">Manage website content and SEO settings</p>
          </div>
          <Link href="/admin" className="btn-secondary">
            ← Back to Dashboard
          </Link>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              <button
                onClick={() => setActiveTab('seo')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'seo'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                🔍 SEO Settings
              </button>
              <button
                onClick={() => setActiveTab('content')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'content'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                📄 Website Content
              </button>
              <button
                onClick={() => setActiveTab('banners')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'banners'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                🎨 Banners & Promotions
              </button>
            </nav>
          </div>

          <div className="p-8">
            {/* SEO Settings Tab */}
            {activeTab === 'seo' && (
              <form onSubmit={handleSeoSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">SEO Configuration</h2>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Homepage Title
                    </label>
                    <input
                      type="text"
                      value={seoData.homeTitle}
                      onChange={(e) => setSeoData({...seoData, homeTitle: e.target.value})}
                      className="input-field"
                      placeholder="Your site title for search engines"
                    />
                    <p className="text-sm text-gray-500 mt-1">Recommended: 50-60 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Homepage Description
                    </label>
                    <textarea
                      value={seoData.homeDescription}
                      onChange={(e) => setSeoData({...seoData, homeDescription: e.target.value})}
                      className="input-field h-24"
                      placeholder="Brief description of your website"
                    />
                    <p className="text-sm text-gray-500 mt-1">Recommended: 150-160 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Keywords
                    </label>
                    <input
                      type="text"
                      value={seoData.homeKeywords}
                      onChange={(e) => setSeoData({...seoData, homeKeywords: e.target.value})}
                      className="input-field"
                      placeholder="keyword1, keyword2, keyword3"
                    />
                    <p className="text-sm text-gray-500 mt-1">Separate keywords with commas</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Site Name
                    </label>
                    <input
                      type="text"
                      value={seoData.siteName}
                      onChange={(e) => setSeoData({...seoData, siteName: e.target.value})}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Open Graph Image URL
                    </label>
                    <input
                      type="url"
                      value={seoData.ogImage}
                      onChange={(e) => setSeoData({...seoData, ogImage: e.target.value})}
                      className="input-field"
                      placeholder="https://example.com/og-image.jpg"
                    />
                    <p className="text-sm text-gray-500 mt-1">Recommended size: 1200x630px</p>
                  </div>
                </div>

                <button type="submit" className="btn-primary">
                  💾 Save SEO Settings
                </button>
              </form>
            )}

            {/* Website Content Tab */}
            {activeTab === 'content' && (
              <form onSubmit={handleContentSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Website Content</h2>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hero Section Title
                    </label>
                    <input
                      type="text"
                      value={contentData.heroTitle}
                      onChange={(e) => setContentData({...contentData, heroTitle: e.target.value})}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hero Section Subtitle
                    </label>
                    <textarea
                      value={contentData.heroSubtitle}
                      onChange={(e) => setContentData({...contentData, heroSubtitle: e.target.value})}
                      className="input-field h-24"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      About Page Title
                    </label>
                    <input
                      type="text"
                      value={contentData.aboutTitle}
                      onChange={(e) => setContentData({...contentData, aboutTitle: e.target.value})}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      About Page Content
                    </label>
                    <textarea
                      value={contentData.aboutContent}
                      onChange={(e) => setContentData({...contentData, aboutContent: e.target.value})}
                      className="input-field h-32"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Footer Text
                    </label>
                    <textarea
                      value={contentData.footerText}
                      onChange={(e) => setContentData({...contentData, footerText: e.target.value})}
                      className="input-field h-20"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Email
                      </label>
                      <input
                        type="email"
                        value={contentData.contactEmail}
                        onChange={(e) => setContentData({...contentData, contactEmail: e.target.value})}
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        value={contentData.contactPhone}
                        onChange={(e) => setContentData({...contentData, contactPhone: e.target.value})}
                        className="input-field"
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn-primary">
                  💾 Save Content Changes
                </button>
              </form>
            )}

            {/* Banners & Promotions Tab */}
            {activeTab === 'banners' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Banners & Promotions</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <div className="text-4xl mb-4">🎨</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Homepage Banner</h3>
                      <p className="text-gray-600 mb-4">Upload or manage your main homepage banner</p>
                      <button className="btn-primary">Upload Banner</button>
                    </div>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <div className="text-4xl mb-4">🏷️</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Promotional Banners</h3>
                      <p className="text-gray-600 mb-4">Manage sale and promotional banners</p>
                      <button className="btn-primary">Manage Promotions</button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Promotions</h3>
                      <div className="space-y-3">
                        <div className="bg-white p-4 rounded-lg border">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Holiday Sale - 20% Off</p>
                              <p className="text-sm text-gray-600">Expires: Dec 31, 2024</p>
                            </div>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Free Shipping Weekend</p>
                              <p className="text-sm text-gray-600">Expires: Dec 25, 2024</p>
                            </div>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Scheduled</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full btn-secondary">
                      ➕ Create New Promotion
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Analysis</h3>
            <p className="text-gray-600 mb-4">Check your website's SEO performance</p>
            <button className="btn-primary w-full">Run SEO Check</button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Analytics</h3>
            <p className="text-gray-600 mb-4">View content performance metrics</p>
            <button className="btn-primary w-full">View Analytics</button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Backup Content</h3>
            <p className="text-gray-600 mb-4">Create backup of all content</p>
            <button className="btn-primary w-full">Create Backup</button>
          </div>
        </div>
      </div>
    </div>
  )
}