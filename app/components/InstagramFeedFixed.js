import React, { useRef, useEffect, useState } from 'react';
import OptimizedImg from './OptimizedImg';

const INSTAGRAM_TOKTOK_CONTENT = [
  { type: 'video', src: '/videos/ssstik.mp4', alt: 'Amber Nights testimonial', title: 'Gentlemen Fragrance', views: '10.5K' },
  { type: 'video', src: '/videos/ssstik.io_@sbk_fragrances_1762514530635.mp4', alt: 'Gentlemen perfume testimonial', title: 'Perfume Collection', views: '8.2K' },
  { type: 'video', src: '/videos/ssstik.io_@sbk_fragrances_1762513790609.mp4', alt: 'Signature scent testimonial', title: 'Signature Collection', views: '12.3K' }
];

export default function InstagramFeed() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) return;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const vid = entry.target;
        try {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            if (vid.paused) {
              vid.muted = true;
              const p = vid.play();
              if (p && typeof p.catch === 'function') p.catch(() => {});
            }
          } else {
            if (!vid.paused) vid.pause();
          }
        } catch (e) {}
      });
    };

    const observer = new window.IntersectionObserver(handleIntersection, { threshold: [0, 0.25, 0.5, 0.75, 1] });
    videoRefs.current.forEach((v) => { if (v) observer.observe(v); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 relative">
          <h2 className="relative text-4xl md:text-5xl font-bold mb-6 text-white z-10">FOLLOW US ON TIKTOK</h2>
          <p className="text-black-300 text-lg md:text-xl max-w-2xl mx-auto">Discover the artistry of perfumery through our captivating content</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {INSTAGRAM_TOKTOK_CONTENT.map((content, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:-translate-y-2 w-full max-w-md mx-auto"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[9/16] relative overflow-hidden bg-gray-900 w-full">
                {content.type === 'video' ? (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={content.src}
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <OptimizedImg src={content.src} alt={content.alt} width={500} height={889} className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white text-xl font-semibold mb-2">{content.title}</h3>
                  <div className="flex items-center space-x-4"><span className="text-white/90 text-sm flex items-center">{content.views} views</span></div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="https://www.tiktok.com/@sbk_fragrances" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-100 transition-colors duration-300 group">Follow @sbkfragrances</a>
        </div>
      </div>
    </section>
  );
}
