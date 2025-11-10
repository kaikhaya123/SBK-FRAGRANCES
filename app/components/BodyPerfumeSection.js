"use client";
// ...existing code...


import Link from 'next/link';

// ...existing code...
const BodyPerfumeSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[420px] sm:min-h-[520px] flex items-center justify-center bg-[#f6f7f3] px-4 sm:px-8 md:px-12 lg:px-20">
      {/* Floral branch on the left */}
      <img
        src="/images/1761501664816.jpeg"
        alt="Floral Branch"
        className="absolute left-0 bottom-0 h-1/2 xs:h-2/3 sm:h-full w-auto object-cover z-10 select-none pointer-events-none"
        style={{ minWidth: 120, maxHeight: '100%' }}
        draggable="false"
      />
      {/* Flowing fabric on the right */}
      <img
        src="/images/1761501680588.jpeg"
        alt="Flowing Fabric"
        className="absolute right-0 top-0 h-1/2 xs:h-2/3 sm:h-full w-auto object-cover z-10 select-none pointer-events-none opacity-90"
        style={{ minWidth: 140, maxHeight: '100%' }}
        draggable="false"
      />
      {/* Main content is intentionally minimal and centered, with lots of whitespace */}
  <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-16 md:py-0 min-h-[320px] sm:min-h-[420px] max-w-3xl mx-auto">
          <h2 
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4 sm:mb-6 tracking-wider drop-shadow-sm uppercase"
          style={{
            letterSpacing: '0.02em',
            fontFamily: 'Mosthat',
            fontWeight: 500
          }}
          >
            Body Perfume
          </h2>
          <p 
            className="text-sm xs:text-base sm:text-base text-gray-700/90 mb-6 sm:mb-10 max-w-[16rem] xs:max-w-[18rem] sm:max-w-[22rem] md:max-w-[26rem] text-center mx-auto"
            style={{
              fontFamily: 'Playfair Display, Cormorant Garamond, serif',
              fontWeight: 400,
              lineHeight: '1.35',
              letterSpacing: '0.01em',
              wordBreak: 'break-word',
              paddingLeft: '2rem',
              paddingRight: '2rem'
            }}
          >
            Experience the essence of luxury with our signature body perfume collection. Crafted with the finest ingredients for a long-lasting, captivating scent.
          </p>
          <Link href="/shop" className="bg-white/90 text-black px-8 py-3 sm:px-10 sm:py-4 rounded-none font-light tracking-widest uppercase shadow-lg hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base max-w-xs text-center block cursor-pointer ring-1 ring-black/5 hover:ring-2 hover:ring-black"
          style={{
            fontFamily: 'Oswald, sans-serif',
            letterSpacing: '0.2em'
          }}>
            Shop Now
          </Link>
      </div>
  {/* Subtle gradient shadow at the bottom */}
  <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-[#eae7e1] to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default BodyPerfumeSection;
