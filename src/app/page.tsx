import Link from 'next/link'

// Feature Card Component
function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="text-3xl mb-4" aria-hidden="true">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

// Tech Item Component
function TechItem({ name, version }: { name: string; version: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
      <span className="font-medium text-gray-900">{name}</span>
      <span className="text-sm text-gray-500">{version}</span>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="font-bold text-xl text-gray-900 hover:text-blue-600 transition-colors" aria-label="TTP Landing home">
                TTP Landing
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <div className="flex items-center space-x-4">
                <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                  Terms
                </Link>
                <Link href="/returns" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                  Returns
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content" className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Modern Web Solutions for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Tomorrow's Digital World
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Built with Next.js 14, TypeScript, and Tailwind CSS. 
                Optimized for performance, accessibility, and search engines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="#features" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Explore Features
                </Link>
                <Link 
                  href="#contact" 
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Built for Modern Web Standards
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Every component is crafted with performance, accessibility, and user experience in mind.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                title="Next.js 14 App Router"
                description="Latest Next.js with App Router for optimal performance and developer experience."
                icon="⚡"
              />
              <FeatureCard 
                title="TypeScript Ready"
                description="Full TypeScript support for type safety and better development workflow."
                icon="🔒"
              />
              <FeatureCard 
                title="Tailwind CSS"
                description="Utility-first CSS framework for rapid UI development and customization."
                icon="🎨"
              />
              <FeatureCard 
                title="SEO Optimized"
                description="Built-in SEO optimization with proper meta tags and structured data."
                icon="🔍"
              />
              <FeatureCard 
                title="Accessibility First"
                description="WCAG compliant with screen reader support and keyboard navigation."
                icon="♿"
              />
              <FeatureCard 
                title="Netlify Ready"
                description="Optimized for Netlify deployment with security headers and edge functions."
                icon="🚀"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Explore our documentation or deploy your own version.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://github.com/devharipragaz007/ttp-landing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">TTP Landing</h3>
              <p className="text-gray-400 mb-4 max-w-md">
                A modern Next.js 14 landing page showcasing best practices.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Legal</h4>
              <nav aria-label="Legal links">
                <ul className="space-y-2" role="list">
                  <li role="listitem">
                    <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li role="listitem">
                    <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li role="listitem">
                    <Link href="/returns" className="text-gray-400 hover:text-white transition-colors">
                      Returns Policy
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                © 2025 TTP Landing. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
