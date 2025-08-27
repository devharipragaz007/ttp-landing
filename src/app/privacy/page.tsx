import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy and data protection information for TTP Landing. Learn how we collect, use, and protect your personal information.',
  keywords: ['privacy policy', 'data protection', 'personal information', 'GDPR', 'data security'],
  openGraph: {
    title: 'Privacy Policy | TTP Landing',
    description: 'Privacy policy and data protection information for TTP Landing.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="font-bold text-xl text-gray-900 hover:text-blue-600 transition-colors" aria-label="TTP Landing home">
                TTP Landing
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                Terms
              </Link>
              <Link href="/returns" className="text-gray-600 hover:text-blue-600 transition-colors">
                Returns
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main id="main-content" className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <header className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-lg text-gray-600">
                Last updated: August 27, 2025
              </p>
              <p className="text-lg text-gray-600 mt-4">
                This Privacy Policy describes how TTP Landing ("we", "our", or "us") collects, uses, and protects your personal information when you visit our website.
              </p>
            </header>

            <section className="mb-8" aria-labelledby="information-collection">
              <h2 id="information-collection" className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Information You Provide</h3>
                  <p className="text-gray-700">
                    We may collect information that you voluntarily provide to us, such as:
                  </p>
                  <ul className="mt-2 ml-6 space-y-1 text-gray-700">
                    <li>• Contact information (name, email address, phone number)</li>
                    <li>• Communication preferences</li>
                    <li>• Any other information you choose to provide</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Automatically Collected Information</h3>
                  <p className="text-gray-700">
                    When you visit our website, we may automatically collect certain information, including:
                  </p>
                  <ul className="mt-2 ml-6 space-y-1 text-gray-700">
                    <li>• IP address and device information</li>
                    <li>• Browser type and version</li>
                    <li>• Pages visited and time spent on our site</li>
                    <li>• Referring website information</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8" aria-labelledby="information-use">
              <h2 id="information-use" className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="ml-6 space-y-2 text-gray-700">
                <li>• To provide and maintain our services</li>
                <li>• To communicate with you about our services</li>
                <li>• To improve our website and user experience</li>
                <li>• To analyze website usage and performance</li>
                <li>• To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8" aria-labelledby="information-sharing">
              <h2 id="information-sharing" className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
              </p>
              <ul className="ml-6 space-y-2 text-gray-700">
                <li>• With your explicit consent</li>
                <li>• To comply with legal requirements or court orders</li>
                <li>• To protect our rights, property, or safety</li>
                <li>• In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section className="mb-8" aria-labelledby="data-security">
              <h2 id="data-security" className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8" aria-labelledby="cookies">
              <h2 id="cookies" className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
              </p>
              <p className="text-gray-700">
                We use cookies for:
              </p>
              <ul className="mt-2 ml-6 space-y-1 text-gray-700">
                <li>• Essential website functionality</li>
                <li>• Analytics and performance monitoring</li>
                <li>• User preference storage</li>
              </ul>
            </section>

            <section className="mb-8" aria-labelledby="your-rights">
              <h2 id="your-rights" className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="ml-6 space-y-2 text-gray-700">
                <li>• Right to access your personal information</li>
                <li>• Right to correct inaccurate information</li>
                <li>• Right to delete your personal information</li>
                <li>• Right to restrict processing</li>
                <li>• Right to data portability</li>
                <li>• Right to object to processing</li>
              </ul>
            </section>

            <section className="mb-8" aria-labelledby="contact-us">
              <h2 id="contact-us" className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">Email: privacy@ttp-landing.com</p>
                <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-700">Address: 123 Privacy Street, Data City, DC 12345</p>
              </div>
            </section>

            <section className="mb-8" aria-labelledby="policy-updates">
              <h2 id="policy-updates" className="text-2xl font-semibold text-gray-900 mb-4">Policy Updates</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically for any changes.
              </p>
            </section>
          </div>
        </div>
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
                    <Link href="/privacy" className="text-blue-400 hover:text-white transition-colors" aria-current="page">
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
