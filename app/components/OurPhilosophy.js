"use client";
import React, { useRef, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import OptimizedImg from './OptimizedImg';

export default function OurPhilosophy() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // ensure the video element is muted immediately so autoplay is allowed by browsers
    try {
      v.muted = true;
      v.defaultMuted = true;
    } catch (e) {}

    // Seek to a visually appealing moment when metadata is loaded.
    const desiredStart = 1.5; // seconds — tweak if you want a different frame

    const onLoaded = () => {
      try {
        if (v.duration && desiredStart < v.duration) v.currentTime = desiredStart;
      } catch (e) {
        // ignore seek errors
      }

      // Ensure autoplay works reliably across browsers by playing after seeking
      try {
        v.play().catch(() => {});
      } catch (e) {}
    };

    v.addEventListener('loadedmetadata', onLoaded);
    return () => v.removeEventListener('loadedmetadata', onLoaded);
  }, []);

  return (
    // increase top padding to ensure the large heading isn't clipped by fixed headers or tight layout
    <section className="bg-peach-50 pt-20 md:pt-24 pb-16 px-4 md:px-8">
  {/* on small screens keep normal stacking; from md+ allocate wider left column so heading doesn't overlap media */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 items-start md:items-stretch md:[grid-template-columns:45%_30%_25%]">
        <AnimatedSection animation="fadeIn" delay={0.2} className="px-2 md:px-8 md:col-span-1 h-auto md:h-full">
          {/* make the inner container take full height on md+ and nudge content slightly up (md+) */}
          <div className="md:max-w-2xl h-auto md:h-full flex flex-col justify-center md:justify-start md:pt-10 md:pr-6">
            <h2
              className="font-montelisa text-5xl md:text-6xl font-semibold mb-6 text-brown-900 leading-tight"
              aria-hidden={false}
            >
              OUR PHILOSOPHY
            </h2>

            <p className="text-brown-800 text-lg leading-relaxed mb-6">
              We believe in the magic of fragrance, capable of highlighting your individuality.
            </p>

            <p className="text-brown-700 text-base leading-relaxed">
              Our perfumes are crafted with attention to detail and a passion for beauty — curated blends that linger and tell a story. Experience each scent as a crafted moment.
            </p>
          </div>
        </AnimatedSection>

        {/* Video column */}
        <AnimatedSection animation="slideLeft" delay={0.4} className="flex justify-center items-center md:col-span-1">
          <div className="w-full max-w-xl rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5 h-[520px] md:h-[640px]">
            <video
              ref={videoRef}
              src="/videos/f31787fdf696c464405dbcda7cb2239d.mp4"
              className="w-full h-full object-cover object-center"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              aria-label="Our Philosophy video"
              onCanPlay={() => {
                const v = videoRef.current;
                if (!v) return;
                try { v.play().catch(() => {}); } catch (e) {}
              }}
            />
          </div>
        </AnimatedSection>

        {/* Single rectangular image column matching the video's height; sharp edges */}
        <AnimatedSection animation="fadeIn" delay={0.5} className="md:col-span-1 flex justify-center items-start md:items-center">
          <div className="w-full max-w-sm md:max-w-md h-[520px] md:h-[640px] overflow-hidden shadow-lg">
            <OptimizedImg src={encodeURI('/images/Intelligent Visual Systems.jpg')} alt="Perfume still" width={1200} height={800} className="w-full h-full object-cover" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
