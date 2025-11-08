'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Logo fixed at top left */}
      <div className="absolute top-6 left-4 sm:left-8 z-50 select-none pointer-events-auto">
        <Link href="/" className="flex items-center">
          <img src="/images/Elegant_SBK_Fragrance_Logo_Design-removebg-preview.png" alt="SBK Fragrance Logo" className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
        </Link>
      </div>

      {/* Checkout icon fixed at top right */}
      <div className="absolute top-6 right-16 sm:right-8 z-50 select-none pointer-events-auto">
        <Link href="/checkout" className="flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur rounded-full shadow-lg border border-gray-200 hover:bg-white/90 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </Link>
      </div>

      {/* Hamburger for mobile */}
      <button
        className="sm:hidden absolute top-7 right-4 z-50 flex flex-col items-center justify-center w-10 h-10 bg-white/80 rounded-full shadow-lg border border-gray-200"
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
      >
        <span className="block w-6 h-0.5 bg-black mb-1 rounded" />
        <span className="block w-6 h-0.5 bg-black rounded" />
      </button>

      {/* Mobile menu with conditional rendering */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-40"
          aria-modal="true"
          role="dialog"
          aria-label="Mobile navigation menu"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40 transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          {/* Mobile Navigation */}
          <nav
            className="fixed top-0 left-0 h-full w-64 bg-white/80 backdrop-blur-lg z-50 flex flex-col pt-20 px-8 gap-8 transform transition-transform duration-300"
            style={{fontFamily: "Oswald, Bebas Neue, Montserrat, Arial, sans-serif", boxShadow: "none", border: "none"}}
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
            <Link href="/collections" className="text-xl font-bold uppercase tracking-[0.18em] py-3 hover:text-[#4d3222] transition-colors" onClick={() => setMenuOpen(false)}>Collections</Link>
            <Link href="/about" className="text-xl font-bold uppercase tracking-[0.18em] py-3 hover:text-[#4d3222] transition-colors" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" className="text-xl font-bold uppercase tracking-[0.18em] py-3 hover:text-[#4d3222] transition-colors" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden sm:flex absolute top-8 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-5xl flex-row items-center justify-center select-none pointer-events-auto">
        <nav className="flex flex-row gap-6 md:gap-10 text-white text-sm md:text-base font-bold uppercase tracking-[0.18em] bg-transparent px-6 py-2 rounded-xl" style={{fontFamily: "Oswald, Bebas Neue, Montserrat, Arial, sans-serif"}}>
          <Link href="/" className="hover:text-black-300 transition">Home</Link>
          <Link href="/shop" className="hover:text-black-300 transition">Shop</Link>
          <Link href="/collections" className="hover:text-black-300 transition">Collections</Link>
          <Link href="/about" className="hover:text-black-300 transition">About</Link>
          <Link href="/contact" className="hover:text-black-300 transition">Contact</Link>
        </nav>
      </div>
    </>
  );
}