
"use client";
import React from "react";
import { Playfair_Display } from 'next/font/google';
import { Cormorant_Garamond } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant' });

export default function About() {
  return (
    <div className={`w-full min-h-screen flex flex-col bg-[#0b0b0b] text-white ${playfair.variable} ${cormorant.variable}`}>

      {/* Hero section that blends with the ABOUT US heading */}
      <section className="relative w-full h-[56vh] md:h-[60vh] lg:h-[68vh] overflow-hidden">
        <img src="/images/441376038_1449667825922859_7901733124601111486_n.jpg" alt="hero" className="absolute inset-0 w-full h-full object-cover object-center transform scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold uppercase tracking-wider text-white leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <span className="inline-block mr-4">ABOUT</span>
              <span className="inline-block">US</span>
            </h1>
            <p className="max-w-3xl mx-auto mt-6 text-gray-200 text-lg md:text-xl animate-fade-in-up" style={{animationDelay: '0.45s'}}>
              Where luxury, artistry, and self-expression meet. Discover our story, our passion, and the journey behind every scent.
            </p>
          </div>
        </div>
      </section>

      {/* Main content: two-column layout matching the reference image */}
  <main className="flex-grow max-w-6xl mx-auto px-4 pb-24">
  <div className="grid grid-cols-1 gap-8 items-start">
          {/* Left column (image + paragraph block) - spans 2 columns on large */}
          <div className="lg:col-span-2 bg-transparent rounded-xl overflow-hidden">
            <div className="relative bg-[#0b0b0b] rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 w-full rounded-lg overflow-hidden">
                <img src="/images/ssstik.io_1762177591045.webp" alt="Featured" className="w-full h-full object-cover rounded-lg" style={{minHeight: 320}} />
              </div>
              <div className="md:w-1/2 w-full flex flex-col justify-center">
                <span className="white-[#d9a84d] font-cormorant text-sm uppercase tracking-widest mb-2">Our Legacy</span>
                <h3 className="text-2xl md:text-3xl font-playfair text-white mb-4">Our Brand Story</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  SBK Fragrance is a modern fragrance house founded on the belief that scent is a true form of self-expression and luxury. Our perfumes are crafted with care, using high-quality ingredients and innovative techniques to create unique, memorable experiences for every customer.
                </p>
                <p className="text-gray-400 mb-4">We are committed to quality, authenticity, and sustainability. Our collections are cruelty-free, thoughtfully packaged, and made to leave a lasting impression—on you and the world around you.</p>
                <a href="/shop" className="inline-flex items-center text-[#0b0b0b] bg-[#fafaf9] px-6 py-2 rounded-md font-cormorant mt-2">Explore Our Collections</a>
              </div>
            </div>
          </div>

          {/* Right column (stats) removed as requested */}
        </div>
      </main>

  {/* Founder's Story and Contact (re-applied from previous about content) */}
      <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-stretch my-20 md:my-24 min-h-[380px] md:min-h-[440px] lg:min-h-[520px] p-0 px-4">
        <div className="md:w-1/2 w-full flex items-stretch">
          <img
            src="/images/webp/Ayanda .webp"
            alt="Ayanda Ntsele, Founder of SBK Fragrance"
            className="w-full h-full object-cover object-center rounded-lg"
            style={{ minHeight: '320px', maxHeight: '520px' }}
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-center items-start px-6 md:px-12 py-10 md:py-0 bg-transparent">
          <span className="text-gray-400 font-cormorant text-sm mb-4 uppercase tracking-widest">The Vision</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-white tracking-tight leading-tight">Founder's Story</h2>
          <div className="mb-6">
            <p className="text-gray-300 text-lg mb-4">Ayanda Ntsele, a visionary entrepreneur, founded SBK Fragrance in 2023 with a mission to redefine luxury and self-expression. Driven by a love for premium scents and a commitment to quality, Ayanda has shaped SBK into a brand that inspires confidence and leaves a lasting impression.</p>
            <blockquote className="text-gray-200 italic mb-6">"I believe fragrance is more than a scent—it's a memory, a statement, a legacy. SBK Fragrance was born from my passion to make luxury accessible, authentic, and unforgettable."</blockquote>
          </div>
          <ul className="flex flex-wrap gap-4 mb-6">
            <li className="border border-gray-700 px-4 py-2 rounded text-sm">Quality & Innovation</li>
            <li className="border border-gray-700 px-4 py-2 rounded text-sm">Transparency</li>
            <li className="border border-gray-700 px-4 py-2 rounded text-sm">Accessible Luxury</li>
          </ul>
          <div className="w-full max-w-md mt-4 text-left font-cormorant border-t border-gray-800 pt-4">
            <h3 className="font-playfair text-lg md:text-xl text-white mb-2">Get in Touch</h3>
            <p className="mb-1 text-sm text-gray-300">Phone: <a href="tel:0681660115" className="text-white font-medium">068 166 0115</a></p>
            <p className="mb-1 text-sm text-gray-300">Address: <span className="text-white font-medium">232 Effingham Road, Durban North, KZN 4051, South Africa</span></p>
          </div>
        </div>
      </section>
      {/* Footer removed per request */}
    </div>
  );
}
