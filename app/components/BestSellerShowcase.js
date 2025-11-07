"use client";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import OptimizedImg from "./OptimizedImg";
export default function BestSellerShowcase() {
  // Product card data
  const cards = [
    {
  bottle: "/images/webp/ssstik.io_1762256007905-removebg-preview.webp",
  bg: "/images/webp/pawel-czerwinski-hxGVzj209kU-unsplash.webp",
      alt: "SBK Signature Perfume",
    },
    {
  bottle: "/images/webp/ssstik.io_1762256944563-removebg-preview.webp",
  bg: "/images/webp/ruan-richard-rodrigues-XKjCV0Bx59A-unsplash.webp",
      alt: "Ultra Realistic SBK Perfume Bottle",
    },
    {
  bottle: "/images/webp/ssstik.io_1762260060241-removebg-preview (1).webp",
  bg: "/images/webp/flyd-b7tZMiB_TG4-unsplash.webp",
      alt: "Next Perfume Bottle",
    },
  ];

  // Carousel state
  const [startIdx, setStartIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((prev) => (prev + 2) % cards.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [cards.length]);

  // Get two cards to display
  const visibleCards = [cards[startIdx], cards[(startIdx + 1) % cards.length]];

  return (
    <section className="w-full py-20 px-4 flex flex-col items-center bg-white">
      <h2 className="text-4xl font-bold mb-12 text-center font-serif tracking-tight" style={{ fontFamily: 'Montserrat, Inter, serif' }}>
        Shop Our Best Sellers
      </h2>
  <div className="relative flex flex-col md:flex-row items-center justify-center max-w-6xl w-full mx-auto min-h-[420px]">
        {/* Background Image Card - full width of section */}
        <div className="absolute inset-0 w-full h-full z-0 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
          <OptimizedImg
            src="/images/webp/augustine-wong-T0BYurbDK_M-unsplash.webp"
            alt="Nature Adventure"
            width={800}
            height={600}
            className="w-full h-full object-cover opacity-90"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute left-0 top-0 h-full w-2/3 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        </div>
        {/* Info Block: perfectly centered and balanced */}
        <div className="relative z-20 flex flex-col justify-center items-center w-full max-w-md text-center px-4 py-8 md:py-0 md:pr-12 gap-8 md:gap-10">
          <h3 className="uppercase tracking-widest text-2xl font-bold text-white drop-shadow-lg">SBK SIGNATURE PERFUME</h3>
          <Link href="/shop" className="bg-white text-black px-10 py-4 rounded-none font-semibold tracking-widest text-base hover:bg-black hover:text-white transition w-56 md:w-auto drop-shadow-lg text-center block cursor-pointer ring-1 ring-black/10 hover:ring-2 hover:ring-black">
            SHOP NOW
          </Link>
        </div>
        {/* Perfume Cards: right, side by side, vertically centered, carousel */}
        <div className="relative z-30 flex flex-row gap-6 justify-center items-center w-full max-w-2xl px-2 py-4 md:py-0 md:pl-4 transition-all duration-700 md:-ml-8 md:translate-x-8">
          {visibleCards.map((card, idx) => (
            <div key={idx} className="flex items-end justify-center w-48 h-64 md:w-56 md:h-72 bg-white/90 rounded-2xl shadow-lg overflow-hidden p-0 m-0 border border-gray-200/60" style={{boxShadow:'0 4px 24px 0 rgba(0,0,0,0.10)'}}>
              <div className="relative w-full h-full flex items-end justify-center">
                <OptimizedImg
                  src={card.bg.replace('.jpg', '.webp')}
                  alt="Mint Leaves Background"
                  width={224}
                  height={288}
                  className="absolute inset-0 w-full h-full object-cover z-0 rounded-2xl"
                  style={{ pointerEvents: 'none', userSelect: 'none', filter: 'brightness(0.97) blur(0.5px)' }}
                />
                <OptimizedImg
                  src={card.bottle.replace('.png', '.webp')}
                  alt={card.alt}
                  width={96}
                  height={160}
                  className="relative z-10 w-24 h-40 md:w-28 md:h-48 object-contain drop-shadow-xl"
                  style={{ background: 'none', boxShadow: 'none', border: 'none' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

