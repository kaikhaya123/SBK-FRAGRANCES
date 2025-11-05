



// Local MP4 video files for autoplay and full control
const tiktokImages = [
  {
    src: "/images/ssstik.io_1762337981863.jpeg",
    alt: "Amber Nights testimonial"
  },
  {
    src: "/images/ssstik.io_1762180691415.jpeg",
    alt: "Gentlemen perfume testimonial"
  },
  {
    src: "/images/ssstik.io_1762189144483.jpeg",
    alt: "Signature scent testimonial"
  }
];

import React from "react";

export default function TiktokFeed() {
  // Responsive asymmetric grid: large video left, two stacked right (desktop), single column (mobile)
  return (
    <section className="w-full py-16 md:py-24 bg-transparent">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-14">Follow Us on TikTok</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4 md:gap-6 max-w-6xl mx-auto">
        {/* Large video left (spans 2 rows on desktop) */}
          <div className="relative shadow-2xl bg-transparent overflow-hidden row-span-2 col-span-1 md:row-span-2 md:col-span-2 aspect-[4/5] md:aspect-[4/3] flex items-center justify-center">
            <video
              src="/videos/Sbk_fragrances (@sbk_fragrances)_5.mp4"
              className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            title="Amber Nights testimonial"
          />
          <span className="absolute bottom-4 right-4 bg-white/90 rounded-full p-2 shadow-lg hover:scale-110 transition-transform">
            <img src="/images/4138198.png" alt="TikTok Icon" className="w-10 h-10 object-contain" />
          </span>
        </div>
        {/* Top right image */}
          <div className="relative shadow-2xl bg-transparent overflow-hidden row-span-1 col-span-1 aspect-[4/5] md:aspect-[4/3] flex items-center justify-center">
            <img
              src={tiktokImages[1].src}
              alt={tiktokImages[1].alt}
              className="w-full h-full object-cover"
          />
          <span className="absolute bottom-4 right-4 bg-white/90 rounded-full p-2 shadow-lg hover:scale-110 transition-transform">
            <img src="/images/4138198.png" alt="TikTok Icon" className="w-10 h-10 object-contain" />
          </span>
        </div>
        {/* Bottom right image */}
          <div className="relative shadow-2xl bg-transparent overflow-hidden row-span-1 col-span-1 aspect-[4/5] md:aspect-[4/3] flex items-center justify-center">
            <img
              src={tiktokImages[2].src}
              alt={tiktokImages[2].alt}
              className="w-full h-full object-cover"
          />
          <span className="absolute bottom-4 right-4 bg-white/90 rounded-full p-2 shadow-lg hover:scale-110 transition-transform">
            <img src="/images/4138198.png" alt="TikTok Icon" className="w-10 h-10 object-contain" />
          </span>
        </div>
      </div>
        <div className="text-center mt-10">
          <a href="https://www.tiktok.com/@sbk_fragrances" target="_blank" rel="noopener" className="text-pink-600 font-semibold underline text-lg">@sbkfragrances</a>
        </div>
      </section>
  );
}
