"use client";

import React from 'react';
import AnimatedSection from './AnimatedSection';
import VideoPlayer from './VideoPlayer';
import { FloatingPaths } from './ui/background-paths';
import { Button } from './ui/button';

export default function OurStory() {
  // Video removed for performance; using a static background image instead.

  return (
    <section className="relative w-full h-auto md:h-[500px] flex items-center justify-center overflow-hidden rounded-lg my-16 shadow-lg bg-white">
        {/* animated background paths (subtle) */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>

      <div className="relative z-10 flex items-center justify-center w-full h-full px-6 md:px-16 py-12 md:py-0">
        <AnimatedSection animation="fadeIn" delay={0.3} className="w-full flex flex-col items-center justify-center h-full">
          <div className="max-w-2xl text-gray-900 text-center" style={{fontFamily: 'var(--font-sans, Inter, Arial, sans-serif)'}}>
            <AnimatedSection animation="fadeIn" delay={0.4}>
              <h2
                className="text-4xl md:text-6xl font-semibold mb-6 uppercase tracking-widest text-center"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  letterSpacing: '0.12em'
                }}
              >
                Our Story
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="fadeIn" delay={0.5}>
              <p className="text-lg leading-relaxed mb-8 mx-auto">
                SBK Fragrances emerged from a passion for crafting unique scents that tell personal stories. Our journey began with a simple belief: every fragrance should be as individual as the person wearing it.
              </p>
              <p className="text-lg leading-relaxed mx-auto">
                Today, we continue to push the boundaries of perfumery, combining traditional craftsmanship with modern innovation to create scents that captivate and inspire.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeIn" delay={0.6}>
              <Button asChild className="mt-8">
                <a href="/about" className="inline-flex items-center text-black hover:text-black-600 transition-colors">
                  <span className="mr-2">Read Our Full Story</span>
                  <span className="text-xl">&rarr;</span>
                </a>
              </Button>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}