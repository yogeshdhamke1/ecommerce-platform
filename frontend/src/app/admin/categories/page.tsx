'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline'
import { sampleCategories } from '@/lib/sampleData'

export default function AdminCategories() {
  const [categories, setCategories] = useState(sampleCategories)
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingCategory, setEditingCategory] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    image: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingCategory) {
      // Update category
      setCategories(categories.map(c => 
        c.id === editingCategory.id 
          ? { ...c, ...formData, _count: c._count }
          : c
      ))
      setEditingCategory(null)
    } else {
      // Add new category
      const newCategory = {
        id: Date.now().toString(),
        ...formData,
        _count: { products: 0 }
      }
      setCategories([...categories, newCategory])
      setShowAddForm(false)
    }
    setFormData({ name: '', slug: '', description: '', image: '' })
  }

  const deleteCategory = (id: string) => {
    if (confirm('Are you sure you want to delete this category? This will affect all products in this category.')) {
      setCategories(categories.filter(c => c.id !== id))
    }
  }

  const startEdit = (category: any) => {
    setEditingCategory(category)
    setFormData({
      name: category.name,
      slug: category.slug,
      description: category.description || '',
      image: category.image || ''
    })
    setShowAddForm(true)
  }

  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">📂 Category Management</h1>
            <p className="text-gray-600">{categories.length} categories total</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/admin" className="btn-secondary">
              ← Back to Dashboard
            </Link>
            <button
              onClick={() => setShowAddForm(true)}
              className="btn-primary"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add Category
            </button>
          </div>
        </div>

        {/* Add/Edit Form */}
        {showAddForm && (
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingCategory ? 'Edit Category' : 'Add New Category'}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    const name = e.target.value
                    setFormData({
                      ...formData, 
                      name,
                      slug: generateSlug(name)
                    })
                  }}
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">URL Slug</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  className="input-field"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="input-field h-24"
                  placeholder="Brief description of this category"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category Image URL</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  className="input-field"
                  placeholder="https://example.com/category-image.jpg"
                />
              </div>
              
              <div className="md:col-span-2 flex space-x-4">
                <button type="submit" className="btn-primary">
                  {editingCategory ? 'Update Category' : 'Add Category'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false)
                    setEditingCategory(null)
                    setFormData({ name: '', slug: '', description: '', image: '' })
                  }}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              {/* Category Image */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 relative">
                {category.image && (
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => startEdit(category)}
                    className="p-2 bg-white rounded-lg shadow-sm text-blue-600 hover:bg-blue-50"
                  >
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => deleteCategory(category.id)}
                    className="p-2 bg-white rounded-lg shadow-sm text-red-600 hover:bg-red-50"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Category Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">/{category.slug}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                    {category._count.products} products
                  </span>
                </div>

                {(category as any).description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {(category as any).description}
                  </p>
                )}

                <div className="flex space-x-3">
                  <Link
                    href={`/?category=${category.slug}`}
                    className="flex-1 btn-secondary text-center text-sm py-2"
                  >
                    👁️ View Products
                  </Link>
                  <button
                    onClick={() => startEdit(category)}
                    className="flex-1 btn-primary text-sm py-2"
                  >
                    ✏️ Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Stats */}
        <div className="mt-12 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Category Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{categories.length}</div>
              <div className="text-gray-600">Total Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {categories.reduce((sum, cat) => sum + cat._count.products, 0)}
              </div>
              <div className="text-gray-600">Total Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {Math.round(categories.reduce((sum, cat) => sum + cat._count.products, 0) / categories.length)}
              </div>
              <div className="text-gray-600">Avg Products per Category</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}