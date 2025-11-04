import React, { useState, useEffect } from "react";
export default function BestSellerShowcase() {
  // Product card data
  const cards = [
    {
      bottle: "/images/ssstik.io_1762256007905-removebg-preview.png",
      bg: "/images/pawel-czerwinski-hxGVzj209kU-unsplash.jpg",
      alt: "SBK Signature Perfume",
    },
    {
      bottle: "/images/ssstik.io_1762256944563-removebg-preview.png",
      bg: "/images/ruan-richard-rodrigues-XKjCV0Bx59A-unsplash.jpg",
      alt: "Ultra Realistic SBK Perfume Bottle",
    },
    {
      bottle: "/images/ssstik.io_1762260060241-removebg-preview (1).png",
      bg: "/images/flyd-b7tZMiB_TG4-unsplash.jpg",
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
      <div className="relative flex flex-col md:flex-row items-stretch justify-center max-w-6xl w-full mx-auto min-h-[420px]">
        {/* Background Image Card - full width of section */}
        <div className="absolute inset-0 w-full h-full z-0 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
          <img
            src="/images/augustine-wong-T0BYurbDK_M-unsplash.jpg"
            alt="Nature Adventure"
            className="w-full h-full object-cover opacity-90"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute left-0 top-0 h-full w-2/3 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        </div>
        {/* Info Block: perfectly centered and balanced */}
        <div className="relative z-20 flex flex-col justify-center items-center w-full max-w-md text-center px-4 py-8 md:py-0 md:pr-12 gap-8 md:gap-10">
          <h3 className="uppercase tracking-widest text-2xl font-bold text-white drop-shadow-lg">SBK SIGNATURE PERFUME</h3>
          <button className="bg-white text-black px-10 py-4 rounded-none font-semibold tracking-widest text-base hover:bg-gray-200 transition w-56 md:w-auto drop-shadow-lg">
            SHOP NOW
          </button>
        </div>
        {/* Perfume Cards: right, side by side, vertically centered, carousel */}
        <div className="relative z-30 flex flex-row gap-8 justify-center items-center w-full max-w-2xl px-4 py-8 md:py-0 md:pl-8 transition-all duration-700">
          {visibleCards.map((card, idx) => (
            <div key={idx} className="flex items-center justify-center w-64 h-80 md:w-72 md:h-96 bg-none p-0 m-0">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={card.bg}
                  alt="Mint Leaves Background"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  style={{ pointerEvents: 'none', userSelect: 'none' }}
                />
                <img
                  src={card.bottle}
                  alt={card.alt}
                  className="relative z-10 w-48 h-72 md:w-60 md:h-80 object-contain"
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

