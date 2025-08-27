'use client'

import React, { useState } from 'react'
import { ShoppingCart, Heart, Star, Users, Shield } from 'lucide-react'

// Product interface for type safety
interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  description: string
  rating: number
  reviews: number
  category: string
  featured: boolean
  inStock: boolean
}

// Sample product data
const products: Product[] = [
  {
    id: 'pride-flag-tee',
    name: 'Classic Pride Flag Tee',
    price: 28.99,
    originalPrice: 32.99,
    image: '🏳️‍🌈',
    description: 'Soft cotton blend tee with vibrant pride flag design. Unisex fit.',
    rating: 4.8,
    reviews: 127,
    category: 'apparel',
    featured: true,
    inStock: true
  },
  {
    id: 'love-wins-mug',
    name: 'Love Wins Coffee Mug',
    price: 16.99,
    image: '☕',
    description: 'Ceramic mug with inspiring message. Microwave and dishwasher safe.',
    rating: 4.9,
    reviews: 89,
    category: 'home',
    featured: true,
    inStock: true
  },
  {
    id: 'rainbow-pin-set',
    name: 'Rainbow Pin Collection',
    price: 12.99,
    originalPrice: 15.99,
    image: '📌',
    description: 'Set of 6 enamel pins featuring diverse pride flags.',
    rating: 4.7,
    reviews: 203,
    category: 'accessories',
    featured: true,
    inStock: true
  },
  {
    id: 'unity-hoodie',
    name: 'Unity Embroidered Hoodie',
    price: 54.99,
    originalPrice: 64.99,
    image: '👕',
    description: 'Premium hoodie with embroidered unity design. Limited edition.',
    rating: 4.9,
    reviews: 156,
    category: 'apparel',
    featured: true,
    inStock: true
  }
]

// Product Card Component
function ProductCard({ product }: { product: Product }) {
  const [isLiked, setIsLiked] = useState(false)
  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0

  const handleAddToCart = () => {
    console.log('Add to cart:', product.id)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative aspect-square bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center overflow-hidden">
        <div className="text-6xl opacity-70 group-hover:scale-110 transition-transform duration-300">
          {product.image}
        </div>
        {discountPercentage > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            -{discountPercentage}%
          </div>
        )}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-current text-red-500' : 'text-gray-400'}`} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight">{product.name}</h3>
          <div className="flex items-center ml-2">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
          </div>
        </div>
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center text-xs text-gray-500 mb-3">
          {product.reviews} reviews
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-purple-600">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center space-x-1"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  )
}

// Feature Card Component
function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-4 text-purple-600">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 via-purple-400/10 to-blue-400/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-700 mb-6">
                🏳️‍🌈 Proudly Supporting Our Community
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Express Your True Self with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                Pride & Purpose
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our curated collection of authentic, inclusive merchandise designed 
              by and for the LGBTQIA+ community. Every purchase supports equality and acceptance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#shop" 
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Shop Collection
              </a>
              <a
                href="#about" 
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" id="values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Pride & Purpose?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're more than a store – we're a community committed to celebrating diversity and promoting equality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Authentic Designs"
              description="Every piece is created by LGBTQIA+ artists and designers, ensuring genuine representation and meaning."
            />
            <FeatureCard
              icon={<Heart className="h-8 w-8" />}
              title="Community Impact"
              description="10% of all profits go directly to LGBTQIA+ advocacy organizations and support programs."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Sustainable Practices"
              description="Eco-friendly materials and ethical manufacturing because caring for our planet matters too."
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50" id="shop">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked favorites that celebrate identity, promote visibility, and spread love.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#contact" 
              className="inline-flex items-center px-6 py-3 border border-purple-600 text-purple-600 font-medium rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
            >
              View Full Collection
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2023 by a group of LGBTQIA+ entrepreneurs, Pride & Purpose was born from a simple 
                  belief: everyone deserves to express their authentic self with pride and confidence.
                </p>
                <p>
                  We partner exclusively with LGBTQIA+ artists, designers, and suppliers to create merchandise 
                  that truly represents our community. From concept to creation, every product tells a story 
                  of resilience, love, and acceptance.
                </p>
                <p>
                  Our commitment extends beyond commerce. We actively support LGBTQIA+ advocacy groups, 
                  fund scholarships for queer students, and create safe spaces for community gathering and celebration.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🏳️‍⚧️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Inclusive & Authentic</h3>
                <p className="text-gray-600">
                  Representing all identities within our beautiful, diverse community with respect and authenticity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
