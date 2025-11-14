



import React, { useRef, useEffect, useState } from "react";
import OptimizedImg from "./OptimizedImg";

const tiktokContent = [
  {
    type: 'video',
    src: "/videos/ssstik.mp4",
    alt: "Amber Nights testimonial",
    title: "Gentlemen Fragrance",
    views: "10.5K"
  },
  {
    type: 'video',
    src: "/videos/ssstik.io_@sbk_fragrances_1762514530635.mp4",
    alt: "Gentlemen perfume testimonial",
    title: "Perfume Collection",
    views: "8.2K"
  },
  {
    type: 'video',
    src: "/videos/ssstik.io_@sbk_fragrances_1762513790609.mp4",
    alt: "Signature scent testimonial",
    title: "Signature Collection",
    views: "12.3K"
  }
];

export default function TiktokFeed() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersection, { threshold: 0.5 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading Section */}
        <div className="text-center mb-16 relative">
          {/* Large background typographic layer */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <span className="text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] leading-none font-extrabold text-white opacity-6 tracking-widest">
              FOLLOW US ON TIKTOK
            </span>
          </div>

          {/* Foreground heading */}
          <h2 className="relative text-4xl md:text-5xl font-bold mb-6 text-white z-10">
            FOLLOW US ON TIKTOK
          </h2>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Discover the artistry of perfumery through our captivating content
          </p>
        </div>

        {/* TikTok Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {tiktokContent.map((content, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:-translate-y-2 w-full max-w-md mx-auto"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
              {/* Content Container */}
              <div className="aspect-[9/16] relative overflow-hidden bg-gray-900 w-full">
                {content.type === 'video' ? (
                    <video
                      ref={index === 0 ? videoRef : null}
                    src={content.src}
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                      loop
                      muted
                      playsInline
                    loading="lazy"
                  />
                ) : (
                  <OptimizedImg
                    src={content.src}
                    alt={content.alt}
                    width={500}
                    height={889}
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white text-xl font-semibold mb-2">{content.title}</h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-white/90 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778C2 8.769 2 12 2 12s0 3.231.437 4.796a2.506 2.506 0 0 0 1.767 1.766C5.736 18.993 12 19 12 19s6.264.007 7.831-.404a2.506 2.506 0 0 0 1.767-1.766C22 15.231 22 12 22 12s0-3.231-.437-4.796Z" />
                      </svg>
                      {content.views} views
                    </span>
                  </div>
                </div>

                {/* Stylized TikTok Icon Corner Design */}
                <div className="absolute top-0 right-0 overflow-hidden">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-black/40 to-transparent transform rotate-45 translate-x-12 -translate-y-12" />
                  
                  {/* TikTok Icon with hover effects */}
                  <div className="relative z-10 m-4 group-hover:scale-110 transform transition-all duration-500">
                    <div className="relative">
                      {/* Animated glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#4d3222]/20 to-[#8b6b56]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Musical note decoration */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-black/80 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
                      
                      {/* TikTok Icon */}
                      <OptimizedImg
                        src="/images/4138198.png"
                        alt="TikTok Icon"
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain filter drop-shadow-lg contrast-125 group-hover:brightness-110 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a
            href="https://www.tiktok.com/@sbk_fragrances"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-100 transition-colors duration-300 group"
          >
            <span className="mr-3 text-lg font-medium">Follow @sbkfragrances</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
