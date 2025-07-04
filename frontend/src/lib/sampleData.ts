export const sampleCategories = [
  {
    id: '1',
    name: 'Jewelry',
    slug: 'jewelry',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
    _count: { products: 5 }
  },
  {
    id: '2',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400',
    _count: { products: 5 }
  },
  {
    id: '3',
    name: 'Fashion',
    slug: 'fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400',
    _count: { products: 5 }
  },
  {
    id: '4',
    name: 'Home & Garden',
    slug: 'home-garden',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
    _count: { products: 5 }
  },
  {
    id: '5',
    name: 'Sports',
    slug: 'sports',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    _count: { products: 5 }
  }
]

export const sampleProducts = [
  // Jewelry Products
  {
    id: '1',
    name: 'Diamond Engagement Ring',
    description: 'Beautiful 1-carat diamond ring with platinum band',
    price: 2999.99,
    images: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500'],
    slug: 'diamond-engagement-ring',
    categoryId: '1',
    category: { name: 'Jewelry', slug: 'jewelry' },
    averageRating: 4.8,
    reviewCount: 124,
    stock: 15
  },
  {
    id: '2',
    name: 'Gold Necklace',
    description: '18k gold chain necklace with pendant',
    price: 899.99,
    images: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500'],
    slug: 'gold-necklace',
    categoryId: '1',
    category: { name: 'Jewelry', slug: 'jewelry' },
    averageRating: 4.6,
    reviewCount: 89,
    stock: 25
  },
  {
    id: '3',
    name: 'Silver Bracelet',
    description: 'Elegant sterling silver bracelet with charms',
    price: 199.99,
    images: ['https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500'],
    slug: 'silver-bracelet',
    categoryId: '1',
    category: { name: 'Jewelry', slug: 'jewelry' },
    averageRating: 4.4,
    reviewCount: 67,
    stock: 30
  },
  {
    id: '4',
    name: 'Pearl Earrings',
    description: 'Classic white pearl drop earrings',
    price: 299.99,
    images: ['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500'],
    slug: 'pearl-earrings',
    categoryId: '1',
    category: { name: 'Jewelry', slug: 'jewelry' },
    averageRating: 4.7,
    reviewCount: 156,
    stock: 20
  },
  {
    id: '5',
    name: 'Ruby Ring',
    description: 'Stunning ruby ring with diamond accents',
    price: 1599.99,
    images: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500'],
    slug: 'ruby-ring',
    categoryId: '1',
    category: { name: 'Jewelry', slug: 'jewelry' },
    averageRating: 4.9,
    reviewCount: 203,
    stock: 8
  },

  // Electronics Products
  {
    id: '6',
    name: 'Wireless Headphones',
    description: 'Premium noise-canceling wireless headphones',
    price: 299.99,
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'],
    slug: 'wireless-headphones',
    categoryId: '2',
    category: { name: 'Electronics', slug: 'electronics' },
    averageRating: 4.5,
    reviewCount: 342,
    stock: 50
  },
  {
    id: '7',
    name: 'Smartphone',
    description: 'Latest 5G smartphone with advanced camera',
    price: 899.99,
    images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500'],
    slug: 'smartphone',
    categoryId: '2',
    category: { name: 'Electronics', slug: 'electronics' },
    averageRating: 4.6,
    reviewCount: 567,
    stock: 35
  },
  {
    id: '8',
    name: 'Laptop',
    description: 'High-performance laptop for work and gaming',
    price: 1299.99,
    images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500'],
    slug: 'laptop',
    categoryId: '2',
    category: { name: 'Electronics', slug: 'electronics' },
    averageRating: 4.7,
    reviewCount: 234,
    stock: 20
  },
  {
    id: '9',
    name: 'Smart Watch',
    description: 'Fitness tracking smartwatch with GPS',
    price: 399.99,
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'],
    slug: 'smart-watch',
    categoryId: '2',
    category: { name: 'Electronics', slug: 'electronics' },
    averageRating: 4.4,
    reviewCount: 445,
    stock: 60
  },
  {
    id: '10',
    name: 'Bluetooth Speaker',
    description: 'Portable waterproof Bluetooth speaker',
    price: 79.99,
    images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500'],
    slug: 'bluetooth-speaker',
    categoryId: '2',
    category: { name: 'Electronics', slug: 'electronics' },
    averageRating: 4.3,
    reviewCount: 178,
    stock: 75
  },

  // Fashion Products
  {
    id: '11',
    name: 'Designer Handbag',
    description: 'Luxury leather handbag with gold hardware',
    price: 599.99,
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500'],
    slug: 'designer-handbag',
    categoryId: '3',
    category: { name: 'Fashion', slug: 'fashion' },
    averageRating: 4.8,
    reviewCount: 89,
    stock: 15
  },
  {
    id: '12',
    name: 'Casual Dress',
    description: 'Comfortable summer dress in floral print',
    price: 89.99,
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500'],
    slug: 'casual-dress',
    categoryId: '3',
    category: { name: 'Fashion', slug: 'fashion' },
    averageRating: 4.5,
    reviewCount: 156,
    stock: 40
  },
  {
    id: '13',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with cushioned sole',
    price: 129.99,
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'],
    slug: 'running-shoes',
    categoryId: '3',
    category: { name: 'Fashion', slug: 'fashion' },
    averageRating: 4.6,
    reviewCount: 267,
    stock: 55
  },
  {
    id: '14',
    name: 'Denim Jacket',
    description: 'Classic blue denim jacket with vintage wash',
    price: 79.99,
    images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500'],
    slug: 'denim-jacket',
    categoryId: '3',
    category: { name: 'Fashion', slug: 'fashion' },
    averageRating: 4.4,
    reviewCount: 123,
    stock: 30
  },
  {
    id: '15',
    name: 'Sunglasses',
    description: 'Polarized sunglasses with UV protection',
    price: 149.99,
    images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500'],
    slug: 'sunglasses',
    categoryId: '3',
    category: { name: 'Fashion', slug: 'fashion' },
    averageRating: 4.7,
    reviewCount: 198,
    stock: 45
  },

  // Home & Garden Products
  {
    id: '16',
    name: 'Coffee Maker',
    description: 'Programmable drip coffee maker with thermal carafe',
    price: 199.99,
    images: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500'],
    slug: 'coffee-maker',
    categoryId: '4',
    category: { name: 'Home & Garden', slug: 'home-garden' },
    averageRating: 4.5,
    reviewCount: 234,
    stock: 25
  },
  {
    id: '17',
    name: 'Indoor Plant',
    description: 'Beautiful monstera deliciosa houseplant',
    price: 49.99,
    images: ['https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500'],
    slug: 'indoor-plant',
    categoryId: '4',
    category: { name: 'Home & Garden', slug: 'home-garden' },
    averageRating: 4.8,
    reviewCount: 167,
    stock: 35
  },
  {
    id: '18',
    name: 'Throw Pillow',
    description: 'Decorative velvet throw pillow with gold trim',
    price: 29.99,
    images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500'],
    slug: 'throw-pillow',
    categoryId: '4',
    category: { name: 'Home & Garden', slug: 'home-garden' },
    averageRating: 4.3,
    reviewCount: 89,
    stock: 60
  },
  {
    id: '19',
    name: 'Candle Set',
    description: 'Aromatherapy candle set with essential oils',
    price: 39.99,
    images: ['https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500'],
    slug: 'candle-set',
    categoryId: '4',
    category: { name: 'Home & Garden', slug: 'home-garden' },
    averageRating: 4.6,
    reviewCount: 145,
    stock: 50
  },
  {
    id: '20',
    name: 'Wall Art',
    description: 'Modern abstract canvas wall art set',
    price: 89.99,
    images: ['https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500'],
    slug: 'wall-art',
    categoryId: '4',
    category: { name: 'Home & Garden', slug: 'home-garden' },
    averageRating: 4.7,
    reviewCount: 112,
    stock: 20
  },

  // Sports Products
  {
    id: '21',
    name: 'Yoga Mat',
    description: 'Non-slip yoga mat with carrying strap',
    price: 39.99,
    images: ['https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500'],
    slug: 'yoga-mat',
    categoryId: '5',
    category: { name: 'Sports', slug: 'sports' },
    averageRating: 4.5,
    reviewCount: 289,
    stock: 80
  },
  {
    id: '22',
    name: 'Basketball',
    description: 'Official size basketball for indoor/outdoor play',
    price: 29.99,
    images: ['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500'],
    slug: 'basketball',
    categoryId: '5',
    category: { name: 'Sports', slug: 'sports' },
    averageRating: 4.4,
    reviewCount: 156,
    stock: 45
  },
  {
    id: '23',
    name: 'Dumbbells Set',
    description: 'Adjustable dumbbells set with storage rack',
    price: 199.99,
    images: ['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500'],
    slug: 'dumbbells-set',
    categoryId: '5',
    category: { name: 'Sports', slug: 'sports' },
    averageRating: 4.6,
    reviewCount: 234,
    stock: 15
  },
  {
    id: '24',
    name: 'Tennis Racket',
    description: 'Professional tennis racket with grip tape',
    price: 149.99,
    images: ['https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=500'],
    slug: 'tennis-racket',
    categoryId: '5',
    category: { name: 'Sports', slug: 'sports' },
    averageRating: 4.7,
    reviewCount: 178,
    stock: 25
  },
  {
    id: '25',
    name: 'Swimming Goggles',
    description: 'Anti-fog swimming goggles with UV protection',
    price: 24.99,
    images: ['https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500'],
    slug: 'swimming-goggles',
    categoryId: '5',
    category: { name: 'Sports', slug: 'sports' },
    averageRating: 4.3,
    reviewCount: 134,
    stock: 70
  }
]