import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">E-Store</h3>
            <p className="text-gray-400 mb-4">
              Your trusted online shopping destination with secure payments and fast delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/products" className="block text-gray-400 hover:text-white">Products</Link>
              <Link href="/categories" className="block text-gray-400 hover:text-white">Categories</Link>
              <Link href="/about" className="block text-gray-400 hover:text-white">About Us</Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white">Contact</Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <div className="space-y-2">
              <Link href="/help" className="block text-gray-400 hover:text-white">Help Center</Link>
              <Link href="/shipping" className="block text-gray-400 hover:text-white">Shipping Info</Link>
              <Link href="/returns" className="block text-gray-400 hover:text-white">Returns</Link>
              <Link href="/privacy" className="block text-gray-400 hover:text-white">Privacy Policy</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: support@estore.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Hours: Mon-Fri 9AM-6PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 E-Store. All rights reserved. Built with security and performance in mind.</p>
        </div>
      </div>
    </footer>
  )
}