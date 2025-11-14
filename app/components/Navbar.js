"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(false);
  const { getCartItemCount } = useCart();
  const cartCount = getCartItemCount();
  const pathname = usePathname();
  const hideNavButtons = pathname && pathname.startsWith('/collections');

  const seasons = [
    { name: 'Summer', link: '/collections?season=Summer' },
    { name: 'Winter', link: '/collections?season=Winter' },
    { name: 'Spring', link: '/collections?season=Spring' },
    { name: 'Autumn', link: '/collections?season=Autumn' }
  ];

  // Reusable cart button component so desktop and mobile share same behavior
  const CartButton = ({ className = '' }) => (
    <Link href="/checkout" aria-label="View cart" className={`flex items-center justify-center w-12 h-12 sm:w-10 sm:h-10 bg-white/80 backdrop-blur rounded-full shadow-lg border border-gray-200 hover:bg-white/90 transition-all duration-300 relative px-2 py-2 ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
          {cartCount}
        </span>
      )}
    </Link>
  );
  return (
    <>
      {/* Logo fixed at top left */}
      <div className="absolute top-6 left-4 sm:left-8 z-50 select-none pointer-events-auto">
        <Link href="/" className="flex items-center">
          <Image src="/images/Elegant_SBK_Fragrance_Logo_Design-removebg-preview.png" alt="SBK Fragrance Logo" width={80} height={80} className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
        </Link>
      </div>

      {/* Mobile controls: cart + hamburger together so they're linked visually */}
      <div className={`sm:hidden absolute top-4 z-50 select-none pointer-events-auto right-4 flex items-center gap-3`}>
        <CartButton />
        {!hideNavButtons && (
          <button
            className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            {/* Inline SVG hamburger: white background with black lines */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4 7H20" stroke="#000" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 12H20" stroke="#000" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 17H20" stroke="#000" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>

      {/* Mobile menu with conditional rendering */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="fixed inset-0 z-40"
            aria-modal="true"
            role="dialog"
            aria-label="Mobile navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Mobile Navigation - slide in */}
            <motion.nav
              className="fixed top-0 left-0 h-full w-64 bg-white/95 backdrop-blur-lg z-50 flex flex-col pt-20 px-6 gap-6"
                style={{fontFamily: "Oswald, Bebas Neue, Montserrat, Arial, sans-serif", boxShadow: "none", border: "none", right: '4rem', transition: 'right 300ms ease'}}
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <button
                className="absolute top-6 right-6 text-3xl text-gray-700 hover:text-black bg-white/60 rounded-full w-10 h-10 flex items-center justify-center"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                style={{boxShadow: "0 2px 8px 0 rgba(0,0,0,0.04)"}}
              >
                ×
              </button>
              <Link href="/" className="text-xl font-bold uppercase tracking-[0.18em] py-3 hover:text-[#4d3222] transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/shop" className="text-xl font-bold uppercase tracking-[0.18em] py-3 hover:text-[#4d3222] transition-colors" onClick={() => setMenuOpen(false)}>Shop</Link>
              <div className="relative">
                <button
                  className="text-xl font-bold uppercase tracking-[0.18em] py-3 hover:text-[#4d3222] transition-colors flex items-center w-full text-left"
                  onClick={() => setMobileCollectionsOpen((s) => !s)}
                >
                  Collections
                  <span className="ml-2 text-sm">{mobileCollectionsOpen ? '▴' : '▾'}</span>
                </button>
                <div className={`${mobileCollectionsOpen ? 'block' : 'hidden'} pl-5 pb-1`}> 
                  {seasons.map((season) => (
                    <Link key={season.name} href={season.link} className="block py-3 text-gray-700 hover:text-[#4d3222] text-[15px] transition-colors" onClick={() => setMenuOpen(false)}>
                          {season.name}
                        </Link>
                  ))}
                </div>
              </div>
              <Link href="/about" className="text-xl font-bold uppercase tracking-[0.18em] py-3 hover:text-[#4d3222] transition-colors" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/contact" className="text-xl font-bold uppercase tracking-[0.18em] py-3 hover:text-[#4d3222] transition-colors" onClick={() => setMenuOpen(false)}>Contact</Link>

              {/* Social links at the bottom (left-aligned with fixed icon column) */}
              <div className="mt-auto pb-8 w-full">
                <div className="flex flex-col items-start space-y-3 pl-2">
                  <a href="https://www.tiktok.com/@sbkfragrances" target="_blank" rel="noopener noreferrer" aria-label="SBK Fragrances TikTok" className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors w-full">
                    <span className="w-6 flex-none text-gray-700">
                      {/* TikTok image icon */}
                      <Image src="/images/4138198.png" alt="TikTok" width={20} height={20} className="w-5 h-5 object-contain" />
                    </span>
                    <span className="text-sm">TikTok</span>
                  </a>
                  <a href="https://www.instagram.com/sbkfragrances" target="_blank" rel="noopener noreferrer" aria-label="SBK Fragrances Instagram" className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors w-full">
                    <span className="w-6 flex-none text-gray-700">
                      {/* Instagram image icon */}
                      <Image src="/images/pngwing.com (6).png" alt="Instagram" width={20} height={20} className="w-5 h-5 object-contain" />
                    </span>
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a href="https://www.facebook.com/sbkfragrances" target="_blank" rel="noopener noreferrer" aria-label="SBK Fragrances Facebook" className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors w-full">
                    <span className="w-6 flex-none text-gray-700">
                      {/* Facebook image icon */}
                      <Image src="/icons/icons8-facebook-50.png" alt="Instagram" width={20} height={20} className="w-5 h-5 object-contain" />
                    </span>
                    <span className="text-sm">Facebook</span>
                  </a>
                </div>
                </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation (hidden on collections pages) */}
      {!hideNavButtons && (
        <div className="hidden sm:flex absolute top-8 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-5xl flex-row items-center justify-center select-none pointer-events-auto">
        <nav className="flex flex-row gap-6 md:gap-10 text-white text-sm md:text-base font-bold uppercase tracking-[0.18em] bg-transparent px-6 py-2 rounded-xl" style={{fontFamily: "Oswald, Bebas Neue, Montserrat, Arial, sans-serif"}}>
          <Link href="/" className="hover:text-black-300 transition">Home</Link>
          <Link href="/shop" className="hover:text-black-300 transition">Shop</Link>
          <div className="relative group">
            <Link href="/collections" className="hover:text-black-300 transition flex items-center">Collections<span className="ml-1 text-xs">▾</span></Link>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              {seasons.map((season) => (
                  <Link key={season.name} href={season.link} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm first:rounded-t-lg last:rounded-b-lg transition-colors duration-300">
                  {season.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about" className="hover:text-black-300 transition">About</Link>
          <Link href="/contact" className="hover:text-black-300 transition">Contact</Link>
        </nav>
        </div>
      )}

      {/* Desktop cart button: visible on sm+ screens */}
      <div className="hidden sm:flex absolute top-6 right-16 z-50">
        <CartButton />
      </div>
    </>
  );
}
