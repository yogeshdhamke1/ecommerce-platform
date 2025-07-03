interface Category {
  id: string
  name: string
  slug: string
  _count?: { products: number }
}

interface Props {
  categories: Category[]
  selected: string
  onChange: (category: string) => void
}

export function CategoryFilter({ categories, selected, onChange }: Props) {
  return (
    <div className="space-y-3">
      <button
        onClick={() => onChange('')}
        className={`w-full text-left py-4 px-5 rounded-xl transition-all duration-200 font-medium ${
          selected === '' 
            ? 'bg-blue-100 text-blue-700 shadow-sm border-2 border-blue-200' 
            : 'text-gray-700 hover:bg-gray-50 border-2 border-transparent hover:border-gray-200'
        }`}
      >
        🌐 All Categories
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onChange(category.slug)}
          className={`w-full text-left py-4 px-5 rounded-xl transition-all duration-200 font-medium ${
            selected === category.slug 
              ? 'bg-blue-100 text-blue-700 shadow-sm border-2 border-blue-200' 
              : 'text-gray-700 hover:bg-gray-50 border-2 border-transparent hover:border-gray-200'
          }`}
        >
          <div className="flex justify-between items-center">
            <span>{category.name}</span>
            {category._count && (
              <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-semibold">
                {category._count.products}
              </span>
            )}
          </div>
        </button>
      ))}
    </div>
  )
}