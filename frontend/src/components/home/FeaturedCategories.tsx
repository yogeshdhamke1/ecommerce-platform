import Link from 'next/link'

interface Category {
  id: string
  name: string
  slug: string
  image?: string
  _count?: { products: number }
}

interface Props {
  categories: Category[]
}

export function FeaturedCategories({ categories }: Props) {
  const categoryIcons = ['📱', '👕', '🏠', '📚', '🎮', '💄', '⚽', '🍔']
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {categories.slice(0, 8).map((category, index) => (
        <Link
          key={category.id}
          href={`/products?category=${category.slug}`}
          className="group text-center transform hover:scale-105 transition-all duration-300"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 mb-4 group-hover:from-blue-100 group-hover:to-indigo-200 transition-all duration-300 shadow-sm group-hover:shadow-lg">
            <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <span className="text-3xl">
                {categoryIcons[index] || '📦'}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 group-hover:text-blue-600 text-lg mb-2 transition-colors">
              {category.name}
            </h3>
            {category._count && (
              <p className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full inline-block">
                {category._count.products} items
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}