import React from 'react';
import Link from 'next/link';

export default function ShopNowSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden my-12 md:my-20">
      <img
  src="/images/webp/pexels-zeyneb-alishova-190703179-11383178.webp" // Replace with your actual image path
        alt="Shop SBK Fragrances"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full px-4 md:px-16">
        <div className="flex-1 flex flex-col justify-center items-start h-full text-left">
          <span className="text-base md:text-lg text-white font-medium mb-2 tracking-wide uppercase opacity-90">Be The Best of You</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg" style={{fontFamily: 'var(--font-sans, Inter, Arial, sans-serif)'}}>
            Become More Confident & <br />
            Show Your Better Self
          </h2>
          <p className="text-white text-base md:text-lg mb-6 max-w-xl opacity-90">
            Explore our exclusive collection of SBK Fragrances, crafted to highlight your individuality and elevate every moment. Find the perfect scent that matches your unique style and confidence.
          </p>
          <Link href="/shop">
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition">
              Shop Now
            </button>
          </Link>
        </div>
        {/* Play icon removed for cleaner look */}
      </div>
    </section>
  );
}
