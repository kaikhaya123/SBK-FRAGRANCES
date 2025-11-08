import React from 'react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

export default function ShopNowSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden my-12 md:my-20">
      <AnimatedSection animation="scale" delay={0.2}>
        <img
          src="/images/webp/pexels-zeyneb-alishova-190703179-11383178.webp"
          alt="Shop SBK Fragrances"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-black/70" />
      </AnimatedSection>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full px-4 md:px-16">
        <div className="flex-1 flex flex-col justify-center items-start h-full text-left">
          <AnimatedSection animation="slideRight" delay={0.3}>
            <span className="text-base md:text-lg text-white font-medium mb-2 tracking-wide uppercase opacity-90">
              Be The Best of You
            </span>
          </AnimatedSection>

          <AnimatedSection animation="slideRight" delay={0.4}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg" style={{fontFamily: 'var(--font-sans, Inter, Arial, sans-serif)'}}>
              Become More Confident & <br />
              Show Your Better Self
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="slideRight" delay={0.5}>
            <p className="text-white text-base md:text-lg mb-6 max-w-xl opacity-90">
              Explore our exclusive collection of SBK Fragrances, crafted to highlight your individuality and elevate every moment. Find the perfect scent that matches your unique style and confidence.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={0.6}>
            <button 
              onClick={() => {
                window.location.href = '/shop';
              }}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <span>Shop Now</span>
              <svg
                className="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}