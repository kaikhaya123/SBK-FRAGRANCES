"use client";
import OptimizedImg from "./OptimizedImg";
import React, { useRef, useEffect, useState } from 'react';
import AnimatedSection from './AnimatedSection';

// RevealImage: scroll-driven, smooth gradient mask + optional offset/parallax.
function RevealImage({ src, alt, direction = 'vertical', offsetFrom = null, offsetAmount = 30, radius = 12, loop = false, className = '', feather = 8, duration = 420, easing = 'cubic-bezier(.2,.9,.18,1)' }) {
  const elRef = useRef(null);
  const rafRef = useRef(null);
  const innerRef = useRef(null);
  const [inView, setInView] = useState(false);
  // keep progress in a ref to avoid React re-renders each frame
  const progressRef = useRef(0);
  const lockedRef = useRef(false);

  // Compute progress (0..1) based on element position in viewport.
  function computeProgress() {
    const el = elRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    // progress goes from 0 (element bottom at viewport bottom) to 1 (element top at viewport top)
    const enter = vh - rect.top; // how much viewport height passed the top
    const total = vh + rect.height;
    let p = enter / total;
    p = Math.min(Math.max(p, 0), 1);
    return p;
  }

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          // start updating while element is visible
          startLoop();
        } else {
          if (loop) {
            // allow replay by unlocking
            lockedRef.current = false;
          } else {
            // stop RAF when not visible to save CPU
            stopLoop();
          }
        }
      });
    }, { threshold: [0, 0.01, 0.25, 0.5, 0.75, 1] });

    io.observe(el);

    function startLoop() {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
    }

    function stopLoop() {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    }

    function tick() {
      // Only compute/update while in view or when loop is requested
      if (!inView && !loop) {
        rafRef.current = null;
        return;
      }

      const p = computeProgress();
      if (!loop && lockedRef.current) {
        // stop updating if locked after first full reveal
        stopLoop();
        return;
      }

      const prev = progressRef.current;
      const next = prev + (p - prev) * 0.18;
      progressRef.current = Math.abs(next - prev) < 0.0005 ? p : next;

      // update DOM directly to avoid React re-renders
      try {
        const cur = progressRef.current;
        const pctCur = Math.round(cur * 100);
        const visibleEnd = pctCur;
        const featherEnd = Math.min(100, visibleEnd + feather);
        const dirStringLocal = direction === 'diagonal' ? '135deg' : (direction === 'horizontal' ? 'to right' : 'to bottom');
        const maskLocal = `linear-gradient(${dirStringLocal}, rgba(0,0,0,1) 0%, rgba(0,0,0,1) ${visibleEnd}%, rgba(0,0,0,0) ${featherEnd}%)`;

        const baseOffsetLocal = Math.round((1 - cur) * offsetAmount);
        let translateLocal = '';
        if (direction === 'vertical') {
          const sign = offsetFrom === 'top' ? -1 : 1;
          translateLocal = `translate3d(${0}px, ${sign * baseOffsetLocal}px, 0px)`;
        } else if (direction === 'horizontal') {
          const sign = offsetFrom === 'left' ? -1 : 1;
          translateLocal = `translate3d(${sign * baseOffsetLocal}px, 0px, 0px)`;
        } else {
          const sign = offsetFrom === 'left' || offsetFrom === 'top' ? -1 : 1;
          const diag = Math.round((1 - cur) * (offsetAmount / 1.2));
          translateLocal = `translate3d(${sign * diag}px, ${sign * diag}px, 0px)`;
        }

        if (innerRef.current) {
          innerRef.current.style.transform = translateLocal;
          innerRef.current.style.maskImage = maskLocal;
          innerRef.current.style.webkitMaskImage = maskLocal;
        }
      } catch (e) {
        // swallow any rare errors updating styles
      }

      if (!loop && p > 0.995) {
        lockedRef.current = true;
        stopLoop();
        return;
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [loop]);

  // Build initial mask/transform values from the current (ref) progress.
  const curInit = progressRef.current || 0;
  const pct = Math.round(curInit * 100);
  // feather size as percentage of reveal window (soft edge); can be tuned
  // `feather` prop accepts a percentage number (e.g., 4 = 4%).

  // Determine mask direction string and initial translate based on offsetFrom
  let dirString = 'to bottom';
  let translateInit = '';
  const baseOffsetInit = Math.round((1 - curInit) * offsetAmount);
  if (direction === 'vertical') {
    dirString = 'to bottom';
    const sign = offsetFrom === 'top' ? -1 : 1;
    translateInit = `translate3d(0px, ${sign * baseOffsetInit}px, 0px)`;
  } else if (direction === 'horizontal') {
    dirString = 'to right';
    const sign = offsetFrom === 'left' ? -1 : 1;
    translateInit = `translate3d(${sign * baseOffsetInit}px, 0px, 0px)`;
  } else {
    dirString = '135deg';
    const sign = offsetFrom === 'left' || offsetFrom === 'top' ? -1 : 1;
    const diagInit = Math.round((1 - curInit) * (offsetAmount / 1.2));
    translateInit = `translate3d(${sign * diagInit}px, ${sign * diagInit}px, 0px)`;
  }

  // Simpler mask: fully opaque region grows with progress, with a soft feather edge
  const visibleEnd = pct;
  const featherEnd = Math.min(100, visibleEnd + feather);
  const mask = `linear-gradient(${dirString}, rgba(0,0,0,1) 0%, rgba(0,0,0,1) ${visibleEnd}%, rgba(0,0,0,0) ${featherEnd}%)`;

  const style = {
    maskImage: mask,
    WebkitMaskImage: mask,
    transform: translateInit,
    borderRadius: radius ? `${radius}px` : 0,
    transition: `border-radius 220ms ease`,
  };

  return (
    <div ref={elRef} className={`reveal-image relative overflow-hidden ${className}`} style={{ borderRadius: radius ? `${radius}px` : undefined }}>
      <div ref={innerRef} style={{ willChange: 'transform, mask-image', ...style }}>
        {/* Use OptimizedImg if available for next/image-like benefits */}
        <OptimizedImg
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          // ensure image rendering stays high quality
          style={{
            imageRendering: 'auto',
            WebkitTransform: 'translateZ(0)',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        />
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .reveal-image { display:block; }
        .reveal-image > div { transition: transform ${duration}ms ${easing}; -webkit-transition: transform ${duration}ms ${easing}; }
        .reveal-image img { width:100%; height:100%; display:block; }
      ` }} />
    </div>
  );
}
const sections = [
  {
    image: "/images/Content for perfume brand.jpg",
    title: "Uniqueness in Every Note",
    text: "At SBK Fragrances, each perfume is crafted to reveal a story as unique as you are. Our scents are designed to highlight individuality, blending rare ingredients and creative inspiration to ensure every note is truly one-of-a-kind.",
    button: "Learn more"
  },
  {
    image: "/images/Frau Tonis, Berlin _ Parfum made in Berlin.jpg",
    title: "The Art of Premium Quality",
    text: "Our perfumes are meticulously created by hand in our laboratory, where passion meets precision. SBK Fragrances uses only the finest ingredients and time-honored techniques, resulting in exceptional quality and lasting impressions in every bottle.",
    button: "Learn more"
  },
  {
    image: "/images/image_one.jpg",
    title: "Uniqueness in Every Note",
    text: "From the first spritz to the lingering finish, SBK Fragrances invites you to experience the magic of a scent that is truly yours. Discover the difference that artistry and dedication make in every fragrance we create.",
    button: "Learn more"
  }
];

export default function UniquenessQualitySection() {
  return (
    <section className="flex flex-col gap-12 my-16">
      {sections.map((section, idx) => (
        <AnimatedSection
          key={idx}
          animation={idx % 2 === 0 ? "slideRight" : "slideLeft"}
          delay={0.2 + idx * 0.1}
        >
          <div
            className={`w-full flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center justify-center gap-0 md:gap-8 rounded-lg shadow-lg overflow-hidden`}
          >
            <AnimatedSection animation="scale" delay={0.3 + idx * 0.1} className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
              <RevealImage
                src={section.image}
                alt={section.title}
                direction={idx % 2 === 0 ? 'vertical' : 'diagonal'}
                offsetFrom={idx % 2 === 0 ? 'top' : 'left'}
                offsetAmount={28}
                radius={0}
                loop={false}
                className="w-full h-full"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fadeIn" delay={0.4 + idx * 0.1} className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 md:px-12 py-8 md:py-0 bg-white/90" style={{fontFamily: 'var(--font-sans, Inter, Arial, sans-serif)'}}>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                {section.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {section.text}
              </p>
              {/* 'Learn more' link removed as requested */}
            </AnimatedSection>
          </div>
        </AnimatedSection>
      ))}
    </section>
  );
}