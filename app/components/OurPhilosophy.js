import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function OurPhilosophy() {
  return (
    <section className="bg-peach-50 py-16 flex flex-col md:flex-row items-center justify-center relative overflow-hidden">
      <AnimatedSection animation="fadeIn" delay={0.2} className="md:w-1/2 px-8 z-10">
        <h2
          className="text-3xl md:text-5xl font-semibold mb-6 text-brown-900 uppercase tracking-widest"
          style={{
            fontFamily: 'Playfair Display, var(--font-serif, Georgia, Times, serif)',
            fontWeight: 700,
            letterSpacing: '0.18em',
            lineHeight: 1.1,
          }}
        >
          OUR PHILOSOPHY
        </h2>
        <p className="text-brown-800 text-lg leading-relaxed">
          We believe in the magic of fragrance, capable of highlighting your individuality.<br/>
          Our perfumes are crafted with love for detail and a passion for beauty, so you can truly enjoy every scent you choose.
        </p>
      </AnimatedSection>
      <AnimatedSection animation="slideLeft" delay={0.4} className="md:w-1/2 flex justify-center items-center relative mt-8 md:mt-0">
        <img
          src="/images/webp/pexels-karola-g-4041392.webp"
          alt="Sillage de Parfum Vanilla Orchid"
          className="w-full max-w-lg md:max-w-xl rounded-xl shadow-2xl object-cover object-center"
        />
      </AnimatedSection>
    </section>
  );
}
