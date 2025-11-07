"use client";
import OptimizedImg from "./OptimizedImg";

export default function HeroSplit() {
  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col sm:flex-row overflow-hidden">
      {/* Left: For Her */}
      <div className="flex-1 relative flex items-end justify-center h-1/2 sm:h-full w-full bg-black">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/Floral Elegance_ My Way Perfume.png"
            className="w-full h-full object-cover object-center scale-105"
            style={{
              objectFit: "cover",
              transform: "scale(1.1)",
              transformOrigin: "center"
            }}
            alt="For Her"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <span className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-white text-base sm:text-xl md:text-2xl font-bold uppercase tracking-[0.18em] drop-shadow-lg z-10" style={{ fontFamily: "Oswald, Bebas Neue, Montserrat, Arial, sans-serif" }}>
          For Her
        </span>
      </div>

      {/* Right: For Him */}
      <div className="flex-1 relative flex items-end justify-center h-1/2 sm:h-full w-full bg-black">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/SBK Frangrance1.png"
            className="w-full h-full object-cover object-center scale-105"
            style={{
              objectFit: "cover",
              transform: "scale(1.1)",
              transformOrigin: "center"
            }}
            alt="For Him"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <span className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 text-white text-base sm:text-xl md:text-2xl font-bold uppercase tracking-[0.18em] drop-shadow-lg z-10" style={{ fontFamily: "Oswald, Bebas Neue, Montserrat, Arial, sans-serif" }}>
          For Him
        </span>
      </div>

      {/* Centered Headline Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none px-4">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold uppercase tracking-normal text-white text-center leading-tight" style={{ 
          fontFamily: "Oswald, sans-serif",
          letterSpacing: "0.05em",
          textShadow: "2px 2px 8px rgba(0,0,0,0.5)"
        }}>
          Indulge<br />
          <span className="mt-2 block">Your Senses</span>
        </h1>
      </div>
    </section>
  );
}