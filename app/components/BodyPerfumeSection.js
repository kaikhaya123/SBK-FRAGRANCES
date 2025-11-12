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
    <section
      className="relative overflow-hidden min-h-[300px] sm:min-h-[420px] md:min-h-[520px] flex items-center justify-center bg-[#f6f7f3]"
      style={{
        height: 'auto',
        maxHeight: 'calc(var(--vh, 1vh) * 100)',
        // reduce side padding on small screens so center content has more room
        paddingLeft: 'clamp(12px, 6vw, 360px)',
        paddingRight: 'clamp(12px, 6vw, 360px)'
      }}
    >
      {/* Decorative image (left) - use background div for consistent scaling */}
      <div
        aria-hidden="true"
        className="absolute z-10 left-0 pointer-events-none"
        style={{
          top: 0,
          bottom: 0,
          left: 0,
          width: 'clamp(120px, 18vw, 360px)',
          backgroundImage: "url('/images/1761501664816.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Decorative image (right) - use background div for consistent scaling */}
      <div
        aria-hidden="true"
        className="absolute z-10 right-0 opacity-90 pointer-events-none"
        style={{
          top: 0,
          bottom: 0,
          right: 0,
          width: 'clamp(120px, 18vw, 360px)',
          backgroundImage: "url('/images/1761501680588.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Main content is intentionally minimal and centered, with lots of whitespace */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 sm:px-8 md:px-16 lg:px-24 py-6 sm:py-8 md:py-0 min-h-[200px] sm:min-h-[260px] max-w-3xl mx-auto">
        <h2
          className="text-gray-900 mb-2 sm:mb-3 tracking-wider drop-shadow-sm uppercase text-center"
          style={{
            letterSpacing: '0.02em',
            fontFamily: 'Mosthat',
            fontWeight: 500,
            fontSize: 'clamp(0.95rem, 3.2vw, 1.3rem)'
          }}
        >
          Body Perfume
        </h2>
        <p
          className="text-black-700/90 mb-3 sm:mb-4 text-center mx-auto px-3 sm:px-6"
          style={{
            fontFamily: 'Playfair Display, Cormorant Garamond, serif',
            fontWeight: 400,
            lineHeight: '1.26',
            letterSpacing: '0.01em',
            wordBreak: 'break-word',
            maxWidth: '20rem',
            fontSize: 'clamp(0.72rem, 2.0vw, 0.88rem)'
          }}
        >
          Experience the essence of luxury with our signature body perfume collection. Crafted with the finest ingredients for a long-lasting, captivating scent.
        </p>
        <Link
          href="/shop"
          className="mx-auto bg-black text-white px-6 py-2 sm:px-10 sm:py-3 rounded-full font-semibold tracking-widest shadow-md hover:bg-black/90 transition-all duration-300 text-sm sm:text-base inline-block w-max"
          style={{
            fontFamily: 'Oswald, sans-serif',
            letterSpacing: '0.16em'
          }}
        >
          Shop Now
        </Link>
      </div>
  {/* Subtle gradient shadow at the bottom */}
  <div className="absolute left-0 right-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent z-0 pointer-events-none" />
    </section>
  );
};

export default BodyPerfumeSection;
