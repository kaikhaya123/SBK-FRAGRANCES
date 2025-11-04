
"use client";
import React from "react";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-start">
      {/* Modern Hero Section */}
      <section className="relative w-full h-[420px] md:h-[520px] lg:h-[600px] flex items-center justify-center overflow-hidden mb-0">
        <img
          src="/images/pexels-obenkural-18490314.jpg"
          alt="SBK Fragrance storefront"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-serif font-bold tracking-wide drop-shadow-lg mb-4 animate-fade-in-up">
            The Essence of SBK Fragrance
          </h1>
          <p className="text-white text-lg md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md animate-fade-in-up delay-150">
            Where luxury, artistry, and self-expression meet. Discover our story, our passion, and the journey behind every scent.
          </p>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center animate-bounce">
          <span className="w-2 h-2 bg-white rounded-full mb-1" />
          <span className="w-1 h-6 bg-white rounded-full" />
        </div>
      </section>

      {/* Our Brand Section - Sleek Modern Layout */}
      <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-stretch my-16 md:my-20 min-h-[380px] md:min-h-[440px] lg:min-h-[520px]">
        {/* Side Image - Full Height, Sleek */}
        <div className="md:w-1/2 w-full relative overflow-hidden flex items-stretch rounded-l-2xl shadow-xl">
          <img
            src="/images/ChatGPT Image Oct 30, 2025, 05_02_10 PM.png"
            alt="SBK Fragrance Bottle"
            className="w-full h-full object-cover object-center transition-transform duration-500 scale-100 hover:scale-105"
            style={{ minHeight: '380px', maxHeight: '520px', borderRadius: '1.25rem 0 0 1.25rem' }}
          />
          <div className="absolute bottom-6 left-6 bg-black/60 px-4 py-2 rounded-lg shadow-lg">
            <span className="text-white text-3xl md:text-4xl font-serif font-bold tracking-widest drop-shadow-lg"></span>
          </div>
        </div>
        {/* Crisp, Borderless Text Content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center bg-white px-6 md:px-12 py-10 md:py-0 rounded-r-2xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#49523a] tracking-wide uppercase">Our Brand</h2>
          <p className="text-gray-900 text-lg md:text-xl font-light mb-6 leading-relaxed">
            SBK Fragrance is a modern fragrance house founded on the belief that scent is a true form of self-expression and luxury. Our perfumes are crafted with care, using high-quality ingredients and innovative techniques to create unique, memorable experiences for every customer. Each fragrance tells a story—timeless, elegant, and designed to inspire confidence.
          </p>
          <p className="text-gray-700 text-base md:text-lg mb-8">
            We are committed to quality, authenticity, and sustainability. Our collections are cruelty-free, thoughtfully packaged, and made to leave a lasting impression—on you and the world around you.
          </p>
          <a href="/shop" className="inline-flex items-center text-[#49523a] font-semibold hover:underline text-lg group">
            Read More
            <span className="ml-2 group-hover:translate-x-1 transition-transform"></span>
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-black tracking-wide uppercase text-center">Founder’s Story</h2>
          <div className="flex flex-col items-center justify-center mb-6">
            <span className="font-signature text-2xl text-black text-center">Ayanda Ntsele</span>
            <span className="text-gray-700 text-sm text-center">— Founder & Visionary</span>
          </div>
          <blockquote className="text-black text-lg md:text-xl font-light italic mb-6 leading-relaxed text-center max-w-xl">
            "I believe fragrance is more than a scent—it's a memory, a statement, a legacy. SBK Fragrance was born from my passion to make luxury accessible, authentic, and unforgettable."
          </blockquote>
          <p className="text-black text-base md:text-lg mb-4 text-center max-w-xl">
            Ayanda Ntsele, a visionary entrepreneur, founded SBK Fragrance in 2023 with a mission to redefine luxury and self-expression. Driven by a love for premium scents and a commitment to quality, Ayanda has shaped SBK into a brand that inspires confidence and leaves a lasting impression.
          </p>
          <ul className="flex flex-wrap gap-4 mb-6 justify-center">
            <li className="bg-[#f7f5f1] px-4 py-2 rounded-lg text-black font-medium text-sm">Quality & Innovation</li>
            <li className="bg-[#f7f5f1] px-4 py-2 rounded-lg text-black font-medium text-sm">Transparency</li>
            <li className="bg-[#f7f5f1] px-4 py-2 rounded-lg text-black font-medium text-sm">Accessible Luxury</li>
            <li className="bg-[#f7f5f1] px-4 py-2 rounded-lg text-black font-medium text-sm">Continuous Growth</li>
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
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-wide text-[#000000]">About SBK Fragrance</h1>
              <p className="text-gray-900 text-base md:text-lg font-light mb-4 font-sans">
                Founded in 2023, SBK Fragrance has quickly grown into a leading manufacturer and supplier of premium fragrances and skin care products. What began with a passion for creating scents that go beyond fragrance—making a true statement—has evolved into a trusted brand known for quality, elegance, and innovation.
              </p>
              <p className="text-gray-900 text-base md:text-lg font-light mb-4 font-sans">
                We specialize in high-quality perfumes and colognes designed for every occasion, from everyday wear to life’s most memorable moments. Our mission is simple: to deliver products that inspire confidence, leave a lasting impression, and continuously improve with every collection we release.
              </p>
              <p className="text-gray-900 text-base md:text-lg font-light font-sans">
                Backed by the support of our growing community, we remain committed to offering timeless yet trend-forward collections that combine luxury with accessibility. At SBK Fragrance, quality meets perfection—and every bottle tells a story of passion, trust, and refinement.
              </p>
              {/* Contact block */}
              <div className="w-full max-w-2xl mt-6 xs:mt-8 sm:mt-10 text-left text-xs xs:text-sm md:text-base text-black-700 font-sans mx-auto md:mx-0">
                <h3 className="font-semibold mb-1 xs:mb-2 font-serif text-[#070707] text-lg md:text-xl">Contact</h3>
                <p className="mb-1">Phone: <a href="tel:0681660115" className="text-gray-900 font-medium">068 166 0115</a></p>
                <p className="mb-1">Address: <span className="font-medium">232 Effingham Road, Durban North, KZN 4051, South Africa</span></p>
              </div>
            </div>
          </div>
        </div>
        {/* Keyframes for animation */}
        <style jsx>{`
          @keyframes mask-reveal {
            0% { transform: scale(0.2); opacity: 0; }
            60% { opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>
    </div>
  );
}
