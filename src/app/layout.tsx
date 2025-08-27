import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'TTP Landing - Modern Web Solutions',
    template: '%s | TTP Landing'
  },
  description: 'Professional landing page built with Next.js 14, TypeScript, and Tailwind CSS. Optimized for performance, SEO, and accessibility.',
  keywords: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Landing Page', 'Modern Web Development'],
  authors: [{ name: 'TTP Landing Team' }],
  creator: 'TTP Landing',
  publisher: 'TTP Landing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ttp-landing.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ttp-landing.netlify.app',
    title: 'TTP Landing - Modern Web Solutions',
    description: 'Professional landing page built with Next.js 14, TypeScript, and Tailwind CSS. Optimized for performance, SEO, and accessibility.',
    siteName: 'TTP Landing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TTP Landing - Modern Web Solutions',
    description: 'Professional landing page built with Next.js 14, TypeScript, and Tailwind CSS. Optimized for performance, SEO, and accessibility.',
    creator: '@ttp_landing',
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
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="root">
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Skip to main content
          </a>
          {children}
        </div>
      </body>
    </html>
  )
}
