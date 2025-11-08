"use client";

import React, { useRef, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';

export default function OurStory() {
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
    <section className="relative w-full h-auto md:h-[500px] flex items-center justify-center overflow-hidden rounded-lg my-16 shadow-lg bg-white">
      <AnimatedSection animation="scale" delay={0.2} className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-center grayscale opacity-80"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/webp/ssstik.io_1762181265941.webp"
          loading="lazy"
        >
          <source src="/videos/7034150-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
      </AnimatedSection>

      <div className="relative z-10 flex flex-col md:flex-row items-center w-full h-full px-6 md:px-16 py-12 md:py-0">
        <AnimatedSection animation="slideRight" delay={0.3} className="w-full md:w-1/2 flex flex-col justify-center h-full">
          <div className="max-w-lg text-gray-900" style={{fontFamily: 'var(--font-sans, Inter, Arial, sans-serif)'}}>
            <AnimatedSection animation="fadeIn" delay={0.4}>
              <h2
                className="text-4xl md:text-6xl font-semibold mb-6 uppercase tracking-widest"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  letterSpacing: '0.18em'
                }}
              >
                Our Story
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="fadeIn" delay={0.5}>
              <p className="text-lg leading-relaxed mb-8">
                SBK Fragrances emerged from a passion for crafting unique scents that tell personal stories. Our journey began with a simple belief: every fragrance should be as individual as the person wearing it.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we continue to push the boundaries of perfumery, combining traditional craftsmanship with modern innovation to create scents that captivate and inspire.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeIn" delay={0.6}>
              <a
                href="/about"
                className="inline-flex items-center mt-8 text-black hover:text-gray-600 transition-colors"
              >
                <span className="mr-2">Read Our Full Story</span>
                <span className="text-xl">&rarr;</span>
              </a>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}