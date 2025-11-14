"use client";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 pt-16 pb-8 mt-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 pb-12">
          {/* Brand & tagline */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/images/Elegant_SBK_Fragrance_Logo_Design-removebg-preview.png" 
                alt="SBK Fragrances Logo" 
                className="h-28 w-28 object-contain mb-8" 
                style={{maxWidth: '112px', maxHeight: '112px'}} 
              />
              {/* Payment Methods */}
              <div className="flex items-center gap-8 mb-6">
                <span title="Visa" className="transition-opacity hover:opacity-80">
                  <img src="/images/pngwing.com (4).png" alt="Visa" className="h-10 w-auto object-contain" />
                </span>
                <span title="MasterCard" className="transition-opacity hover:opacity-80">
                  <img src="/images/png-transparent-mastercard-credit-card-mastercard-logo-mastercard-logo-love-text-heart-thumbnail.png" alt="MasterCard" className="h-10 w-auto object-contain" />
                </span>
                <span title="PayPal" className="transition-opacity hover:opacity-80">
                  <img src="/images/pngwing.com (3).png" alt="PayPal" className="h-10 w-auto object-contain" />
                </span>
                <span title="Apple Pay" className="transition-opacity hover:opacity-80">
                  <img src="/images/pngwing.com (1).png" alt="Apple Pay" className="h-10 w-auto object-contain" />
                </span>
              </div>
            </div>
          </div>
          {/* Navigation */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Shop</h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><Link href="/shop" className="hover:text-gray-900 transition-colors">Shop All</Link></li>
              <li><Link href="/collections" className="hover:text-gray-900 transition-colors">Collections</Link></li>
              <li><Link href="/bestsellers" className="hover:text-gray-900 transition-colors">Best Sellers</Link></li>
              <li><Link href="/about" className="hover:text-gray-900 transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-gray-900 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Customer Care</h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link></li>
              <li><Link href="/support" className="hover:text-gray-900 transition-colors">Support</Link></li>
              <li><Link href="/shipping" className="hover:text-gray-900 transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-gray-900 transition-colors">Returns</Link></li>
              <li><Link href="/sitemap" className="hover:text-gray-900 transition-colors">Sitemap</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Stay Connected</h3>
            <div className="mb-6">
              <form className="flex mb-6" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-l px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm w-full bg-white"
                  required
                />
                <button
                  type="submit"
                  className="rounded-r bg-gray-900 text-white px-5 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <Link href="/contact" className="hover:text-gray-900 transition-colors">sbkfragrances232@gmail.com</Link>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <a href="tel:+15551234567" className="hover:text-gray-900 transition-colors">+27 681 660 115</a>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>232 Effingham Road, Durban North, KZN 4051, South Africa</span>
                </div>
              </div>
            </div>
            <div className="mt-6 mb-6">
              <div className="w-full h-48 rounded-md overflow-hidden bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.525012794411!2d31.0374623!3d-29.7752799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7075cf0d554d9%3A0x0!2s232+Effingham+Rd%2C+Durban+North%2C+4051%2C+South+Africa!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            <div className="flex gap-8 justify-center">
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" className="text-gray-500 hover:text-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="text-gray-500 hover:text-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener" aria-label="TikTok" className="text-gray-500 hover:text-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6">
          {/* Copyright and Links */}
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
            <div className="mb-4 md:mb-0 text-center md:text-left">&copy; {new Date().getFullYear()} SBK Fragrances. All rights reserved.</div>
              <div className="flex gap-6 justify-center md:justify-end text-sm">
              <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms</Link>
              <Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
