"use client";

import React from 'react';
import AnimatedSection from './AnimatedSection';
import VideoPlayer from './VideoPlayer';

export default function OurStory() {
  // Video removed for performance; using a static background image instead.

  return (
    <section className="relative w-full h-auto md:h-[500px] flex items-center justify-center overflow-hidden rounded-lg my-16 shadow-lg bg-white">
  <div className="absolute inset-0 w-full h-full">
          {/* Background video for richer storytelling (falls back to poster image) */}
          <div className="absolute inset-0">
            <VideoPlayer
              src="/videos/3418073194160208973.mp4"
              posterImage="/images/pexels-karola-g-8361483.jpg"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          {/* subtle overlay to keep text readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
        </div>

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