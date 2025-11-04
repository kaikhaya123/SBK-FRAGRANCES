"use client";

import { Navbar } from "./Navbar";

// Hero section inspired by the provided design
export default function HeroSplit() {
  return (
    <section className="relative w-full h-[80vh] sm:h-[110vh] flex flex-col sm:flex-row overflow-hidden p-0 m-0">
      <Navbar />
      {/* Left: For Her */}
      <div className="flex-1 min-w-0 min-h-0 relative flex items-end justify-center h-1/2 sm:h-full w-full">
        <img
          src="/images/Floral Elegance_ My Way Perfume.png"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "60% 40%" }}
          alt="For Her"
        />
        <span className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-white text-base sm:text-xl md:text-2xl font-bold uppercase tracking-[0.18em] drop-shadow-lg" style={{ fontFamily: "Oswald, Bebas Neue, Montserrat, Arial, sans-serif" }}>
          For Her
        </span>
      </div>
      {/* Right: For Him */}
      <div className="flex-1 min-w-0 min-h-0 relative flex items-end justify-center h-1/2 sm:h-full w-full">
        <img
          src="/images/SBK Frangrance1.png"
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt="For Him"
        />
        <span className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 text-white text-base sm:text-xl md:text-2xl font-bold uppercase tracking-[0.18em] drop-shadow-lg" style={{ fontFamily: "Oswald, Bebas Neue, Montserrat, Arial, sans-serif" }}>
          For Him
        </span>
      </div>
      {/* Centered Headline Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-2">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-[0.18em] text-white text-center leading-tight" style={{ fontFamily: "Oswald, Bebas Neue, Montserrat, Arial, sans-serif", textShadow: "0 4px 24px rgba(0,0,0,0.45)" }}>
          Indulge<br />Your Senses
        </h1>
      </div>
    </section>
  );
}
