import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'Pride & Purpose - Authentic LGBTQIA+ Merchandise',
    template: '%s | Pride & Purpose'
  },
  description: 'Discover authentic, inclusive merchandise designed by and for the LGBTQIA+ community. Every purchase supports equality, acceptance, and positive change.',
  keywords: ['LGBTQIA+', 'Pride merchandise', 'Inclusive fashion', 'Rainbow products', 'Equality', 'Community support', 'Authentic designs', 'Diversity'],
  authors: [{ name: 'Pride & Purpose Team' }],
  creator: 'Pride & Purpose',
  publisher: 'Pride & Purpose',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pride-purpose-landing.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pride-purpose-landing.netlify.app',
    title: 'Pride & Purpose - Authentic LGBTQIA+ Merchandise',
    description: 'Discover authentic, inclusive merchandise designed by and for the LGBTQIA+ community. Every purchase supports equality, acceptance, and positive change.',
    siteName: 'Pride & Purpose',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pride & Purpose - Authentic LGBTQIA+ Merchandise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pride & Purpose - Authentic LGBTQIA+ Merchandise',
    description: 'Discover authentic, inclusive merchandise designed by and for the LGBTQIA+ community. Every purchase supports equality, acceptance, and positive change.',
    creator: '@prideandpurpose',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="font-bold text-xl text-gray-900 hover:text-purple-600 transition-colors"
              aria-label="Pride & Purpose home"
            >
              <span className="text-purple-600">Pride</span> & <span className="text-pink-600">Purpose</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#products" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              Shop
            </Link>
            <Link href="#story" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              Our Story
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              Community
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              Contact
            </Link>
            <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-gray-200">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">
              <span className="text-purple-400">Pride</span> & <span className="text-pink-400">Purpose</span>
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Authentic LGBTQIA+ merchandise designed by and for our community. 
              Every purchase supports equality, acceptance, and positive change.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="#products" className="text-gray-400 hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="#products" className="text-gray-400 hover:text-white transition-colors">Apparel</Link></li>
              <li><Link href="#products" className="text-gray-400 hover:text-white transition-colors">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/returns" className="text-gray-400 hover:text-white transition-colors">Returns</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 Pride & Purpose. All rights reserved. Made with ❤️ for our community.
            </p>
            <p className="text-sm text-gray-400 mt-4 md:mt-0">
              10% of profits donated to LGBTQIA+ advocacy organizations
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Newsletter signup form for email capture (Netlify Forms compatible)
function NewsletterForm() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Stay Connected with Our Community
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Get the latest updates on new products, community stories, and special events. 
          Join thousands who are making a difference.
        </p>
        <form 
          name="newsletter" 
          method="POST" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
          className="max-w-md mx-auto"
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <input type="hidden" name="bot-field" />
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-purple-600"
              aria-label="Email address for newsletter signup"
            />
            <button
              type="submit"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-purple-600"
            >
              Join Us
            </button>
          </div>
          <p className="text-sm text-purple-100 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  )
}

// FAQ Section with expandable items
function FAQSection() {
  const faqs = [
    {
      question: "What makes your products authentic?",
      answer: "All our designs are created by LGBTQIA+ artists and designers from our community. We ensure every piece represents genuine experiences and celebrates authentic identity."
    },
    {
      question: "How do you support the LGBTQIA+ community?",
      answer: "10% of all profits go directly to LGBTQIA+ advocacy organizations and support programs. We also provide platforms for queer artists and regularly sponsor community events."
    },
    {
      question: "Are your products sustainably made?",
      answer: "Yes! We use eco-friendly materials and partner with ethical manufacturers. Sustainability and social responsibility are core to our mission."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unworn items in original condition. Your satisfaction and comfort in representing your identity is important to us."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently we ship within the United States and Canada. We're working on expanding internationally to reach our global community."
    },
    {
      question: "How can I get involved with Pride & Purpose?",
      answer: "Follow us on social media, join our newsletter, attend our community events, and consider becoming a brand ambassador. We're always looking for passionate community members."
    }
  ]

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Pride & Purpose
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="border border-gray-200 rounded-lg">
              <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors font-semibold text-gray-900">
                {faq.question}
              </summary>
              <div className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="root">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Skip to main content
          </a>
          <Navigation />
          <main id="main-content" className="pt-16">
            {children}
            <FAQSection />
            <NewsletterForm />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
