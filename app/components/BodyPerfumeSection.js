"use client";
// ...existing code...


import Link from 'next/link';

// ...existing code...
const BodyPerfumeSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[420px] sm:min-h-[520px] flex items-center justify-center bg-[#f6f7f3] px-2 sm:px-4 md:px-0">
      {/* Floral branch on the left */}
      <img
        src="/images/collection-small-perfume-bottles.jpg"
        alt="Floral Branch"
        className="absolute left-0 bottom-0 h-1/2 xs:h-2/3 sm:h-full w-auto object-cover z-10 select-none pointer-events-none"
        style={{ minWidth: 120, maxHeight: '100%' }}
        draggable="false"
      />
      {/* Flowing fabric on the right */}
      <img
        src="/images/perfume-bottle-nature.jpg"
        alt="Flowing Fabric"
        className="absolute right-0 top-0 h-1/2 xs:h-2/3 sm:h-full w-auto object-cover z-10 select-none pointer-events-none opacity-90"
        style={{ minWidth: 140, maxHeight: '100%' }}
        draggable="false"
      />
      {/* Main content is intentionally minimal and centered, with lots of whitespace */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-12 sm:px-32 md:px-48 py-10 sm:py-16 md:py-0 min-h-[320px] sm:min-h-[420px]">
        <h2 
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight drop-shadow-sm"
          style={{letterSpacing: '0.01em',fontFamily: 'Montserrat, Poppins, Lora, Inter, Arial, sans-serif',fontWeight: 700}}
        >
          Body Perfume
        </h2>
        <p 
          className="text-base xs:text-lg sm:text-xl text-gray-700 mb-6 sm:mb-10 max-w-md text-center mx-auto"
          style={{fontFamily: 'Montserrat, Poppins, Lora, Inter, Arial, sans-serif',fontWeight: 400}}
        >
          Experience the essence of luxury with our signature body perfume collection. Crafted with the finest ingredients for a long-lasting, captivating scent.
        </p>
            <a href="/shop" className="bg-white/80 text-black px-6 py-3 sm:px-7 sm:py-3 square-full font-semibold shadow-lg hover:bg-black hover:text-white transition-all duration-100 text-base sm:text-lg max-w-xs text-center block cursor-pointer ring-1 ring-black/10 hover:ring-2 hover:ring-black">
              Shop Now
            </a>
      </div>
      {/* Play button overlay in lower right */}
      <button
        className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-30 bg-white/70 hover:bg-white shadow-lg rounded-full p-3 sm:p-4 flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
        aria-label="Play video"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}
      >
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#fff" fillOpacity="0.7" />
          <polygon points="13,10 24,16 13,22" fill="#222" />
        </svg>
      </button>
      {/* Subtle gradient shadow at the bottom */}
  <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-[#eae7e1] to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default BodyPerfumeSection;
