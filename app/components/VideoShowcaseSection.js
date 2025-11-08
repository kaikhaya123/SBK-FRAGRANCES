"use client";

import React, { useRef, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';

export default function VideoShowcaseSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let playAttempt = setInterval(() => {
      video.play()
        .then(() => {
          clearInterval(playAttempt);
        })
        .catch(error => {
          console.log("Auto-play prevented: ", error);
        });
    }, 3000);

    // Intersection Observer callback
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play()
            .catch(error => console.log("Play prevented: ", error));
        } else {
          video.pause();
        }
      });
    };

    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.3,
      rootMargin: '0px 0px 50px 0px'
    });
    observer.observe(video);

    return () => {
      clearInterval(playAttempt);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="w-full bg-black flex flex-col items-center justify-center overflow-hidden my-12 md:my-20">
      <AnimatedSection animation="scale" delay={0.2}>
        <div className="w-full h-[60vh] md:h-[90vh] relative flex items-center justify-center">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            muted
            loop
            poster="/images/webp/ssstik.io_1762181265941.webp"
          >
            <source src="/videos/7034150-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
          
          <AnimatedSection animation="fadeIn" delay={0.4} className="absolute z-10 text-center px-6">
            <h2 className="text-4xl md:text-6xl text-white font-bold mb-6" 
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}>
              Experience Luxury
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed"
               style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
              Discover our collection of handcrafted perfumes, where artistry meets elegance
            </p>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </section>
  );
}