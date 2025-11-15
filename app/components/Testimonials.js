"use client";
import OptimizedImg from "./OptimizedImg";
import MasonryCaptionGrid from "./MasonryCaptionGrid";
import React, { useRef, useState, useEffect } from "react";

function VideoWithFallback({ src, poster, alt, externalRef = null }) {
  const [error, setError] = useState(false);
  const internalRef = useRef(null);

  // Choose which ref to attach to the <video>
  const videoRef = externalRef || internalRef;

  if (error) {
    // If no poster was provided, avoid rendering Next/Image with an empty src
    if (!poster) {
      return (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
          <span className="text-sm">No preview available</span>
        </div>
      );
    }

    const posterSrc = poster.replace('.jpg', '.webp').replace('.jpeg', '.webp');
    return (
      <OptimizedImg
        src={posterSrc}
        alt={alt}
        width={400}
        height={400}
        className="object-cover w-full h-full"
      />
    );
  }
  return (
    <video
      ref={videoRef}
      className="object-cover w-full h-full"
      loop
      muted
      playsInline
      poster={poster}
      onError={() => setError(true)}
      // do not call autoplay here; playback will be controlled by the parent via IntersectionObserver
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

const testimonials = [
  {
    name: "",
    quote: "Absolutely in love with the fragrance smell! Fast delivery and beautiful packaging.",
    video: "/videos/3690166990828639792.mp4"
  },
  {
    name: "",
    quote: "The scent lasts all day. Especially the Gentlemen perfume!",
    video: "/videos/WhatsApp Video 2025-11-14 at 11.00.02.mp4"
  },
  {
    name: "",
    quote: "Great service and expert advice. Found my new signature scent!",
    video: "/videos/ssstik.mp4"
  }
];
const imageTestimonials = [
  { image: "/images/ssstik.io_1762180691415.jpeg" },
  { image: "/images/ssstik.io_1762181265941.jpeg" },
  { image: "/images/ssstik.io_1762191817591.jpeg" },
  { image: "/images/ssstik.io_1762191179050_2.webp" },
  { image: "/images/ssstik.io_1762191439675_3.jpeg" },
  { image: "/images/ssstik.io_1762189144483.jpeg" }
];
export default function Testimonials() {
  const videoRefs = useRef([]);

  useEffect(() => {
    if (!window.IntersectionObserver) return;

    // Prefetch observer: start loading videos when they are near the viewport
    const prefetchObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const vid = entry.target;
        try {
          if (entry.isIntersecting) {
            // request the browser to begin downloading media
            try { vid.preload = 'auto'; } catch (e) {}
            try { vid.load(); } catch (e) {}
            prefetchObserver.unobserve(vid);
          }
        } catch (e) {
          // ignore
        }
      });
    }, { rootMargin: '800px', threshold: 0 });

    // Main play/pause observer
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        const vid = entry.target;
        try {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            // ensure muted so autoplay is allowed
            vid.muted = true;
            const playPromise = vid.play();
            if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(() => {});
          } else {
            if (!vid.paused) vid.pause();
          }
        } catch (e) {
          // ignore
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: [0, 0.25, 0.5, 0.75, 1] });
    videoRefs.current.forEach(v => { if (v) { prefetchObserver.observe(v); observer.observe(v); } });

    return () => {
      prefetchObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 bg-[#faf9f6]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4d3222]/5 to-transparent"/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Elegant Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#000000] to-[#000000] bg-clip-text text-transparent">
            Hear What Our Customers Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the captivating stories of those who have embraced our fragrances
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="group relative bg-white rounded-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Video Container */}
              <div className="aspect-[9/16] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"/>
                <VideoWithFallback src={t.video} poster={imageTestimonials[idx] ? imageTestimonials[idx].image : ''} alt={t.name + ' testimonial'} externalRef={(el) => (videoRefs.current[idx] = el)} />
                
                {/* Play button removed to show only media (video or image fallback) */}
              </div>

              {/* Quote Section */}
              <div className="p-6 bg-white">
                <blockquote className="relative">
                  <span className="absolute top-0 left-0 text-4xl text-[#4d3222]/20">"</span>
                  <p className="text-gray-700 pl-6 pt-2">{t.quote}</p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      {/* Image Testimonials Gallery */}
        {/* Image testimonials gallery removed per request */}
      {/* Elegant CTA Section */}
        <div className="text-center mt-16 md:mt-24">
          <a
            href="/reviews#review-form"
            className="group inline-flex items-center px-8 py-3 bg-black text-white rounded-full shadow-lg hover:bg-black/90 transform transition-all duration-300"
            aria-label="Share your story"
          >
            <span className="text-lg font-medium">Share Your Story</span>
            <svg
              className="w-5 h-5 ml-2 text-white transform transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
