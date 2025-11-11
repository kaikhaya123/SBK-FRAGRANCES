"use client";
import { useEffect } from 'react';
import Link from 'next/link';

const BodyPerfumeSection = () => {
  useEffect(() => {
    // set a CSS variable --vh to account for mobile browser address bar
    const setVh = () => {
      if (typeof window === 'undefined') return;
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[300px] sm:min-h-[420px] md:min-h-[520px] flex items-center justify-center bg-[#f6f7f3] px-4 sm:px-8 md:px-12 lg:px-20" style={{ height: 'auto', maxHeight: 'calc(var(--vh, 1vh) * 100)' }}>
      {/* Floral branch on the left */}
      <img
        src="/images/1761501664816.jpeg"
        alt="Floral Branch"
        // show decorative image on mobile but use reduced height to avoid overflow
        className="absolute left-0 bottom-0 h-28 sm:h-2/3 md:h-full w-auto object-contain z-10 select-none pointer-events-none"
        style={{ maxHeight: '100%', maxWidth: 220 }}
        draggable="false"
      />
      {/* Flowing fabric on the right */}
      <img
        src="/images/1761501680588.jpeg"
        alt="Flowing Fabric"
        className="absolute right-0 top-0 h-28 sm:h-2/3 md:h-full w-auto object-contain z-10 select-none pointer-events-none opacity-90"
        style={{ maxHeight: '100%', maxWidth: 240 }}
        draggable="false"
      />
      {/* Main content is intentionally minimal and centered, with lots of whitespace */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 md:py-0 min-h-[240px] sm:min-h-[320px] max-w-3xl mx-auto">
        <h2
          className="text-gray-900 mb-4 sm:mb-6 tracking-wider drop-shadow-sm uppercase text-center"
          style={{
            letterSpacing: '0.02em',
            fontFamily: 'Mosthat',
            fontWeight: 500,
            fontSize: 'clamp(1.25rem, 5.5vw, 2.5rem)'
          }}
        >
          Body Perfume
        </h2>
        <p
          className="text-gray-700/90 mb-6 sm:mb-10 text-center mx-auto px-4 sm:px-8"
          style={{
            fontFamily: 'Playfair Display, Cormorant Garamond, serif',
            fontWeight: 400,
            lineHeight: '1.35',
            letterSpacing: '0.01em',
            wordBreak: 'break-word',
            maxWidth: '28rem',
            fontSize: 'clamp(0.9rem, 3.5vw, 1.05rem)'
          }}
        >
          Experience the essence of luxury with our signature body perfume collection. Crafted with the finest ingredients for a long-lasting, captivating scent.
        </p>
        <Link
          href="/shop"
          className="bg-white/90 text-black px-6 py-2 sm:px-10 sm:py-3 rounded-none font-light tracking-widest uppercase shadow-lg hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base max-w-xs text-center block cursor-pointer ring-1 ring-black/5 hover:ring-2 hover:ring-black"
          style={{
            fontFamily: 'Oswald, sans-serif',
            letterSpacing: '0.2em'
          }}
        >
          Shop Now
        </Link>
      </div>
  {/* Subtle gradient shadow at the bottom */}
  <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-[#eae7e1] to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default BodyPerfumeSection;
