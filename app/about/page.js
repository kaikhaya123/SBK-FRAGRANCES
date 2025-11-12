
"use client";
import React from "react";
import { Playfair_Display } from 'next/font/google';
import { Cormorant_Garamond } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant' });

export default function About() {
  return (
    <div className={`w-full min-h-screen bg-white flex flex-col items-center justify-start ${playfair.variable} ${cormorant.variable}`}>
      {/* Modern Hero Section */}
      <section className="relative w-full h-[520px] md:h-[75vh] lg:h-[85vh] flex items-center justify-center overflow-hidden mb-0">
        <img
          src="/images/pexels-obenkural-18490314.jpg"
          alt="SBK Fragrance storefront"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-playfair font-bold tracking-tight drop-shadow-lg mb-6 animate-fade-in-up leading-tight">
            The Essence of<br />SBK Fragrance
          </h1>
          <p className="text-white text-lg md:text-xl font-cormorant font-light max-w-2xl mx-auto drop-shadow-md animate-fade-in-up delay-150 tracking-wide">
            Where luxury, artistry, and self-expression meet.<br />Discover our story, our passion, and the journey behind every scent.
          </p>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center animate-bounce">
          <span className="w-2 h-2 bg-white rounded-full mb-1" />
          <span className="w-1 h-6 bg-white rounded-full" />
        </div>
      </section>

      {/* Our Brand Section - Sleek Modern Layout */}
      <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch my-24 md:my-32 min-h-[480px] md:min-h-[540px] lg:min-h-[620px] px-4">
        {/* Side Image - Full Height, Sleek */}
        <div className="md:w-1/2 w-full relative overflow-hidden flex items-stretch rounded-l-2xl shadow-xl">
          <img
            src="/images/ChatGPT Image Oct 30, 2025, 05_02_10 PM.png"
            alt="SBK Fragrance Bottle"
            className="w-full h-full object-cover object-center transition-transform duration-500 scale-100 hover:scale-105"
            style={{ minHeight: '380px', maxHeight: '520px', borderRadius: '1.25rem 0 0 1.25rem' }}
          />
          <div className="absolute bottom-8 left-8 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-xl">
            <span className="text-white text-3xl md:text-4xl font-playfair font-bold tracking-wider drop-shadow-lg"></span>
          </div>
        </div>
        {/* Crisp, Borderless Text Content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center bg-white px-8 md:px-16 py-12 md:py-0 rounded-r-2xl">
          <span className="text-black/60 font-cormorant text-xl mb-4 uppercase tracking-widest">Our Legacy</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-8 text-black tracking-tight leading-tight">Our<br />Brand Story</h2>
          <p className="text-black text-xl md:text-2xl font-cormorant mb-8 leading-relaxed">
            SBK Fragrance is a modern fragrance house founded on the belief that scent is a true form of self-expression and luxury. Our perfumes are crafted with care, using high-quality ingredients and innovative techniques to create unique, memorable experiences for every customer.
          </p>
          <p className="text-black/80 text-lg md:text-xl font-cormorant mb-10 leading-relaxed">
            We are committed to quality, authenticity, and sustainability. Our collections are cruelty-free, thoughtfully packaged, and made to leave a lasting impression—on you and the world around you.
          </p>
          <a href="/shop" className="inline-flex items-center text-black font-cormorant text-xl group border border-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-300">
            Explore Our Collections
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Founder’s Story - Modern, Unique Layout */}
      <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-stretch my-20 md:my-24 min-h-[380px] md:min-h-[440px] lg:min-h-[520px] p-0">
        {/* Founder Image - Full Height, Borderless, Rectangular */}
        <div className="md:w-1/2 w-full flex items-stretch">
          <img
            src="/images/Ayanda .jpg"
            alt="Ayanda Ntsele, Founder of SBK Fragrance"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: '380px', maxHeight: '520px', borderRadius: '0' }}
          />
        </div>
        {/* Founder Story Content - Middle Aligned, Black Text, Borderless */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center px-6 md:px-12 py-10 md:py-0 bg-transparent">
          <span className="text-black/60 font-cormorant text-xl mb-4 uppercase tracking-widest text-center">The Vision</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-black tracking-tight leading-tight text-center">Founder's Story</h2>
          <div className="flex flex-col items-center justify-center mb-8">
            <span className="font-playfair text-3xl text-black text-center mb-2">Ayanda Ntsele</span>
            <span className="text-black/70 text-lg font-cormorant tracking-widest uppercase">— Founder & Visionary</span>
          </div>
          <blockquote className="text-black text-2xl md:text-3xl font-cormorant italic mb-8 leading-relaxed text-center max-w-2xl px-6">
            "I believe fragrance is more than a scent—it's a memory, a statement, a legacy. SBK Fragrance was born from my passion to make luxury accessible, authentic, and unforgettable."
          </blockquote>
          <p className="text-gray-800 text-lg md:text-xl font-cormorant mb-6 text-center max-w-2xl px-6">
            Ayanda Ntsele, a visionary entrepreneur, founded SBK Fragrance in 2023 with a mission to redefine luxury and self-expression. Driven by a love for premium scents and a commitment to quality, Ayanda has shaped SBK into a brand that inspires confidence and leaves a lasting impression.
          </p>
          <ul className="flex flex-wrap gap-6 mb-10 justify-center">
            <li className="border border-black px-6 py-3 rounded-none text-black font-cormorant text-lg tracking-wide uppercase hover:bg-black hover:text-white transition-colors duration-300">Quality & Innovation</li>
            <li className="border border-black px-6 py-3 rounded-none text-black font-cormorant text-lg tracking-wide uppercase hover:bg-black hover:text-white transition-colors duration-300">Transparency</li>
            <li className="border border-black px-6 py-3 rounded-none text-black font-cormorant text-lg tracking-wide uppercase hover:bg-black hover:text-white transition-colors duration-300">Accessible Luxury</li>
            <li className="border border-black px-6 py-3 rounded-none text-black font-cormorant text-lg tracking-wide uppercase hover:bg-black hover:text-white transition-colors duration-300">Continuous Growth</li>
          </ul>
          <div className="flex items-center gap-3 mt-2 justify-center">
            <span className="font-signature text-2xl text-black"></span>
            <span className="text-gray-700 text-sm"></span>
          </div>
        </div>
      </section>

      {/* Animated Mask/Shape Reveal About Section */}
      <section className="w-full flex items-center justify-center min-h-[520px] py-16 md:py-24 relative overflow-hidden" style={{background: '#fff'}}>
        {/* Animated Expanding Mask */}
        <div className="absolute inset-0 flex items-center justify-start z-0">
          <div className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full overflow-hidden animate-mask-reveal relative ml-[-120px] md:ml-[-180px] lg:ml-[-240px]" style={{animation: 'mask-reveal 1.2s cubic-bezier(0.4,0,0.2,1) forwards'}}>
            <img
              src="/images/lera-ginzburg-N8WxMVijPKw-unsplash.jpg"
              alt="Fragrance background"
              className="w-full h-full object-cover object-center scale-110"
              style={{filter: 'brightness(0.92)'}}
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>
        {/* About Text - Fades in with mask */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-[520px] animate-fade-in-up" style={{animation: 'fade-in-up 1.2s 0.5s cubic-bezier(0.4,0,0.2,1) forwards', opacity: 0}}>
          <div className="flex flex-col justify-center h-full w-full md:items-end md:justify-center md:pr-[160px] lg:pr-[220px]">
            <div className="bg-white bg-opacity-95 rounded-xl shadow-none px-8 py-12 max-w-lg w-full mx-auto md:mx-0 text-center md:text-left">
              <span className="text-[#49523a]/60 font-cormorant text-xl mb-4 uppercase tracking-widest block">Our Journey</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-8 tracking-tight text-[#49523a] leading-tight">About SBK<br />Fragrance</h1>
              <p className="text-gray-800 text-xl md:text-2xl font-cormorant mb-6 leading-relaxed">
                Founded in 2023, SBK Fragrance has quickly grown into a leading manufacturer and supplier of premium fragrances and skin care products. What began with a passion for creating scents that go beyond fragrance—making a true statement—has evolved into a trusted brand known for quality, elegance, and innovation.
              </p>
              <p className="text-gray-900 text-base md:text-lg font-light mb-4 font-sans">
                We specialize in high-quality perfumes and colognes designed for every occasion, from everyday wear to life’s most memorable moments. Our mission is simple: to deliver products that inspire confidence, leave a lasting impression, and continuously improve with every collection we release.
              </p>
              <p className="text-gray-900 text-base md:text-lg font-light font-sans">
                Backed by the support of our growing community, we remain committed to offering timeless yet trend-forward collections that combine luxury with accessibility. At SBK Fragrance, quality meets perfection—and every bottle tells a story of passion, trust, and refinement.
              </p>
              {/* Contact block */}
              <div className="w-full max-w-2xl mt-12 text-left font-cormorant mx-auto md:mx-0 border-t border-black/20 pt-8">
                <h3 className="font-playfair text-2xl md:text-3xl text-black mb-4">Get in Touch</h3>
                <p className="mb-3 text-lg text-black/80">Phone: <a href="tel:0681660115" className="text-black font-semibold hover:text-black/80 transition-colors">068 166 0115</a></p>
                <p className="mb-3 text-lg text-black/80">Address: <span className="text-black font-semibold">232 Effingham Road, Durban North, KZN 4051, South Africa</span></p>
              </div>
            </div>
          </div>
        </div>
        {/* Keyframes migrated to global CSS (globals.css) to avoid styled-jsx in app router */}
      </section>
    </div>
  );
}
