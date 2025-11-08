import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function BehindTheScenes() {
  return (
    <section className="py-16 px-4 my-12 bg-white rounded-2xl shadow-glass max-w-6xl mx-auto overflow-hidden border border-black">
      <AnimatedSection animation="fadeIn" delay={0.2}>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black" style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}>
          Behind the Scenes at SBK Fragrances
        </h2>
      </AnimatedSection>

      <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
        <AnimatedSection animation="slideRight" delay={0.3} className="md:w-1/2 w-full flex justify-center">
          <img
            src="/images/webp/behind-the-scenes.webp"
            alt="Behind the scenes at SBK Fragrances"
            className="rounded-2xl shadow-lg w-96 h-96 object-cover border-4 border-black"
            style={{ fontFamily: 'inherit' }}
          />
        </AnimatedSection>

        <div className="md:w-1/2 w-full text-center md:text-left">
          <AnimatedSection animation="slideLeft" delay={0.4}>
            <p className="mb-6 text-gray-900 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
              At <span className="font-semibold text-black">SBK Fragrances</span>, every scent is a journey. Our artisans blend tradition and innovation, hand-selecting the world's finest ingredients to create fragrances that evoke emotion and memory. From the first drop to the final bottle, our process is a labor of love and dedication.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slideLeft" delay={0.5}>
            <ul className="list-disc pl-6 text-gray-700 mb-4 text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>Ethically sourced, premium ingredients</li>
              <li>Handcrafted in small, exclusive batches</li>
              <li>Inspired by nature, culture, and artistry</li>
              <li>Every bottle tells a story</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={0.6}>
            <p className="text-gray-500 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Discover the passion and care that goes into every SBK fragrance.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}