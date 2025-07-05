'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StarIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

const sampleReviews = [
  {
    id: '1',
    productName: 'Diamond Engagement Ring',
    productImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300',
    productSlug: 'diamond-engagement-ring',
    rating: 5,
    title: 'Absolutely Perfect!',
    comment: 'This ring exceeded all my expectations. The quality is outstanding and it looks even better in person. My fiancée loves it!',
    date: '2024-12-15',
    helpful: 12,
    verified: true
  },
  {
    id: '2',
    productName: 'Wireless Headphones',
    productImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
    productSlug: 'wireless-headphones',
    rating: 4,
    title: 'Great Sound Quality',
    comment: 'Really impressed with the sound quality and battery life. Comfortable to wear for long periods. Only minor issue is the case could be more compact.',
    date: '2024-12-10',
    helpful: 8,
    verified: true
  }
]

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(sampleReviews)
  const [editingReview, setEditingReview] = useState<string | null>(null)

  const deleteReview = (id: string) => {
    if (confirm('Are you sure you want to delete this review?')) {
      setReviews(reviews.filter(review => review.id !== id))
    }
  }

  const renderStars = (rating: number, interactive = false) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          i < rating ? (
            <StarIconSolid key={i} className="h-5 w-5 text-yellow-400" />
          ) : (
            <StarIcon key={i} className="h-5 w-5 text-gray-300" />
          )
        ))}
      </div>
    )
  }

  if (reviews.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl mb-6">⭐</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">No Reviews Yet</h1>
          <p className="text-gray-600 mb-8">Share your experience with products you've purchased!</p>
          <Link href="/orders" className="btn-primary">
            View Your Orders
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">⭐ My Reviews</h1>
            <p className="text-gray-600">{reviews.length} reviews written</p>
          </div>
          <Link href="/orders" className="btn-primary">
            Write New Review
          </Link>
        </div>

        {/* Review Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-yellow-600">4.5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="text-3xl mb-2">👍</div>
            <div className="text-2xl font-bold text-green-600">20</div>
            <div className="text-gray-600">Helpful Votes</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-2xl font-bold text-blue-600">100%</div>
            <div className="text-gray-600">Verified Purchases</div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Product Info */}
                <div className="md:w-48 flex-shrink-0">
                  <Link href={`/products/${review.productSlug}`} className="block">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={review.productImage}
                        alt={review.productName}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                      {review.productName}
                    </h3>
                  </Link>
                </div>

                {/* Review Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        {renderStars(review.rating)}
                        {review.verified && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                            ✅ Verified Purchase
                          </span>
                        )}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{review.title}</h4>
                      <p className="text-gray-600 text-sm mb-4">
                        Reviewed on {new Date(review.date).toLocaleDateString()}
                      </p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingReview(review.id)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <PencilIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => deleteReview(review.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">{review.comment}</p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      👍 {review.helpful} people found this helpful
                    </div>
                    <div className="flex space-x-3">
                      <button className="text-sm text-blue-600 hover:text-blue-700">
                        Edit Review
                      </button>
                      <button className="text-sm text-gray-600 hover:text-gray-700">
                        Share Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Guidelines */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">📝 Review Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-800">
            <div>
              <h3 className="font-semibold mb-2">✅ Do:</h3>
              <ul className="space-y-1 text-sm">
                <li>• Be honest and detailed</li>
                <li>• Focus on the product features</li>
                <li>• Include photos if possible</li>
                <li>• Help other customers decide</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">❌ Don't:</h3>
              <ul className="space-y-1 text-sm">
                <li>• Include personal information</li>
                <li>• Use inappropriate language</li>
                <li>• Review competitor products</li>
                <li>• Post fake reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}