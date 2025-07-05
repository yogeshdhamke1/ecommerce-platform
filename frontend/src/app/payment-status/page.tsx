'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState, Suspense } from 'react'

function PaymentStatusContent() {
  const searchParams = useSearchParams()
  const status = searchParams.get('status')
  const [orderNumber] = useState(`ORD-${Date.now()}`)

  const isSuccess = status === 'success'
  const isFailed = status === 'failed'
  const isPending = status === 'pending'

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        {/* Success Status */}
        {isSuccess && (
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">✅</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase. Your order has been confirmed and will be processed shortly.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="text-sm text-gray-600 mb-1">Order Number</div>
              <div className="font-bold text-lg">{orderNumber}</div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Payment Method</span>
                <span className="font-medium">Credit Card ****3456</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total Amount</span>
                <span className="font-bold text-green-600">$3,615.97</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Status</span>
                <span className="text-green-600 font-medium">✅ Confirmed</span>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <Link href="/orders" className="block w-full btn-primary">
                View Order Details
              </Link>
              <Link href="/products" className="block w-full btn-secondary">
                Continue Shopping
              </Link>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              📧 A confirmation email has been sent to your email address
            </div>
          </div>
        )}

        {/* Failed Status */}
        {isFailed && (
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">❌</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Failed</h1>
            <p className="text-gray-600 mb-6">
              We couldn't process your payment. Please check your payment details and try again.
            </p>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <div className="text-sm text-red-800">
                <strong>Error:</strong> Payment declined by your bank. Please contact your card issuer or try a different payment method.
              </div>
            </div>

            <div className="space-y-3">
              <Link href="/checkout" className="block w-full btn-primary bg-red-600 hover:bg-red-700">
                Try Again
              </Link>
              <Link href="/cart" className="block w-full btn-secondary">
                Back to Cart
              </Link>
            </div>
          </div>
        )}

        {/* Pending Status */}
        {isPending && (
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">⏳</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Processing</h1>
            <p className="text-gray-600 mb-6">
              Your payment is being processed. This may take a few minutes.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
              <div className="text-sm text-yellow-800">
                Please don't close this page or refresh. We'll update you once the payment is complete.
              </div>
            </div>

            <div className="animate-pulse flex justify-center mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              </div>
            </div>

            <Link href="/cart" className="block w-full btn-secondary">
              Back to Cart
            </Link>
          </div>
        )}

        {/* Default/Unknown Status */}
        {!isSuccess && !isFailed && !isPending && (
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">❓</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Status Unknown</h1>
            <p className="text-gray-600 mb-6">
              We couldn't determine your payment status. Please contact support.
            </p>
            
            <div className="space-y-3">
              <Link href="/cart" className="block w-full btn-primary">
                Back to Cart
              </Link>
              <Link href="/contact" className="block w-full btn-secondary">
                Contact Support
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function PaymentStatusPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-2xl">Loading...</div></div>}>
      <PaymentStatusContent />
    </Suspense>
  )
}