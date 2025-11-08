"use client";

import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

export default function HeroSplit() {
  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col sm:flex-row overflow-hidden">
      {/* Left: For Her */}
      <AnimatedSection animation="slideRight" delay={0.3} className="flex-1 relative flex items-end justify-center h-1/2 sm:h-full w-full bg-black">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/webp/Experience Luxury.jpg"
            alt="For Her"
            className="w-full h-full object-cover object-center"
            style={{
              objectFit: "cover",
              transform: "scale(1.1)",
              transformOrigin: "center"
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center mb-8 sm:mb-16 p-4">
          <h2 className="text-white text-4xl sm:text-5xl font-light mb-4">Experience Luxury</h2>
          <p className="text-white/90 text-lg sm:text-xl mb-6 max-w-md mx-auto">
            Discover our collection of handcrafted perfumes, where artistry meets elegance
          </p>
          <Link href="/shop" className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300">
            Discover More
          </Link>
        </div>
      </AnimatedSection>

      {/* Right: For Him */}
      <AnimatedSection animation="slideLeft" delay={0.3} className="flex-1 relative flex items-end justify-center h-1/2 sm:h-full w-full bg-gray-100">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/webp/close-up-perfume-bottle.jpg"
            alt="For Him"
            className="w-full h-full object-cover object-center"
            style={{
              objectFit: "cover",
              transform: "scale(1.1)",
              transformOrigin: "center"
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center mb-8 sm:mb-16 p-4">
          <h2 className="text-white text-4xl sm:text-5xl font-light mb-4">Our Collections</h2>
          <p className="text-white/90 text-lg sm:text-xl mb-6 max-w-md mx-auto">
            Explore our signature fragrances, each crafted to perfection
          </p>
          <Link href="/collections" className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300">
            View Collections
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}