import Link from 'next/link'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  price: number
  images: string[]
  slug: string
  averageRating?: number
  reviewCount?: number
}

interface Props {
  products: Product[]
}

export function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-8xl mb-6">🔍</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">No products found</h3>
        <p className="text-gray-500 text-lg">Try adjusting your search or filters</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.slug}`} className="group">
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-blue-200">
            <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
              {product.images[0] ? (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="text-6xl mb-2">📷</div>
                    <p className="text-sm">No Image</p>
                  </div>
                </div>
              )}
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                <span className="text-red-500">❤️</span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors text-lg leading-tight">
                {product.name}
              </h3>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">
                  ${product.price}
                </span>
                
                {product.averageRating && (
                  <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                    <span className="text-yellow-400 text-lg">⭐</span>
                    <span className="ml-1 font-semibold text-gray-700">{product.averageRating.toFixed(1)}</span>
                    <span className="ml-1 text-gray-500 text-sm">({product.reviewCount})</span>
                  </div>
                )}
              </div>
              
              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                🛍️ Add to Cart
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}