import Link from 'next/link'
import { useState } from 'react'

// Product Card Component
function ProductCard({ name, price, image, description }: { 
  name: string; 
  price: string; 
  image: string; 
  description: string; 
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden group">
      <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
        <div className="text-4xl opacity-60 group-hover:opacity-80 transition-opacity">{image}</div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-purple-600">{price}</span>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors text-sm font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

// Value Prop Card Component
function ValueCard({ title, description, icon }: { 
  title: string; 
  description: string; 
  icon: string; 
}) {
  return (
    <div className="text-center p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100">
      <div className="text-4xl mb-4" aria-hidden="true">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

// Testimonial Component
function TestimonialCard({ quote, author, role }: { 
  quote: string; 
  author: string; 
  role: string; 
}) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="text-purple-600 text-2xl mb-4">"</div>
      <p className="text-gray-700 mb-4 italic">{quote}</p>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  )
}

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="border border-gray-200 rounded-lg">
      <button 
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
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
                href="#products" 
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Shop Collection
              </a>
              <a 
                href="#story" 
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
            <ValueCard 
              title="Authentic Designs"
              description="Every piece is created by LGBTQIA+ artists and designers, ensuring genuine representation and meaning."
              icon="🎨"
            />
            <ValueCard 
              title="Community Impact"
              description="10% of all profits go directly to LGBTQIA+ advocacy organizations and support programs."
              icon="❤️"
            />
            <ValueCard 
              title="Sustainable Practices"
              description="Eco-friendly materials and ethical manufacturing because caring for our planet matters too."
              icon="🌱"
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-gray-50" id="products">
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
            <ProductCard 
              name="Pride Tote Bag"
              price="$24.99"
              image="👜"
              description="Durable canvas tote with vibrant pride flag design. Perfect for daily essentials."
            />
            <ProductCard 
              name="Love Wins Mug"
              price="$16.99"
              image="☕"
              description="Ceramic mug with inspiring message. Microwave and dishwasher safe."
            />
            <ProductCard 
              name="Rainbow Pin Set"
              price="$12.99"
              image="📌"
              description="Set of 6 enamel pins featuring diverse pride flags and positive affirmations."
            />
            <ProductCard 
              name="Unity Hoodie"
              price="$42.99"
              image="👕"
              description="Soft cotton blend hoodie with embroidered unity design. Unisex fit."
            />
            <ProductCard 
              name="Equality Stickers"
              price="$8.99"
              image="🏷️"
              description="Waterproof vinyl sticker pack with 12 unique designs celebrating diversity."
            />
            <ProductCard 
              name="Affirm Journal"
              price="$19.99"
              image="📓"
              description="Daily affirmation journal with guided prompts for self-love and growth."
            />
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

      {/* Story/Brand Section */}
      <section className="py-24 bg-white" id="story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2023 by a group of LGBTQIA+ entrepreneurs, Pride & Purpose began as a vision 
                  to create a space where authentic self-expression meets meaningful impact.
                </p>
                <p>
                  We understand the importance of representation because we are the community we serve. 
                  Every product tells a story, carries a message, and contributes to a larger movement 
                  of acceptance and equality.
                </p>
                <p>
                  From our first design sketched on a coffee shop napkin to our growing online community, 
                  we remain committed to amplifying LGBTQIA+ voices and creating positive change through commerce.
                </p>
              </div>
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                >
                  Learn More About Our Mission →
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏳️‍🌈</div>
                  <p className="text-lg font-semibold text-gray-700">
                    Celebrating diversity,<br/>
                    one design at a time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof/Testimonials */}
      <section className="py-24 bg-gray-50" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real people who are making a difference in their communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Finally found a brand that truly represents me. The quality is amazing and knowing my purchase supports the community makes it even better."
              author="Alex Rivera"
              role="Teacher & Activist"
            />
            <TestimonialCard 
              quote="I love wearing my Pride & Purpose hoodie to work. It's a conversation starter and helps create visibility in my corporate environment."
              author="Jordan Chen"
              role="Software Engineer"
            />
            <TestimonialCard 
              quote="The pin collection is perfect! I gift them to allies and new community members. They spark important conversations."
              author="Sam Taylor"
              role="Student Leader"
            />
          </div>
        </div>
      </section
