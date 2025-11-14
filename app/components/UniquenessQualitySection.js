"use client";
import OptimizedImg from "./OptimizedImg";
import React, { useRef, useEffect, useState } from 'react';
import AnimatedSection from './AnimatedSection';

// RevealImage: scroll-driven, smooth gradient mask + optional offset/parallax.
function RevealImage({ src, alt, direction = 'vertical', offsetFrom = null, offsetAmount = 30, radius = 12, loop = false, className = '', feather = 8, duration = 420, easing = 'cubic-bezier(.2,.9,.18,1)' }) {
  const elRef = useRef(null);
  const rafRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [progress, setProgress] = useState(0);
  const lockedRef = useRef(false);
  const [prefetched, setPrefetched] = useState(false);

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

    // Prefetch observer: start loading the media early when element is near the viewport
    const prefetchObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPrefetched(true);
          prefetchObserver.unobserve(el);
        }
      });
    }, { rootMargin: '800px', threshold: 0 });
    prefetchObserver.observe(el);

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setInView(entry.isIntersecting);
        if (!entry.isIntersecting && loop) {
          // If looping, reset lock so reveal can run again when re-entering.
            lockedRef.current = false;
        }
      });
    }, { threshold: [0, 0.01, 0.25, 0.5, 0.75, 1] });

    io.observe(el);

    function tick() {
      const p = computeProgress();
      if (!loop && lockedRef.current) {
        // stop updating if locked after first full reveal
        cancelAnimationFrame(rafRef.current);
        return;
      }
      setProgress((prev) => {
        // smooth interpolation (slightly faster for crisper reveal)
      const next = prev + (p - prev) * 0.18;
        return Math.abs(next - prev) < 0.0005 ? p : next;
      });

      if (!loop && p > 0.995) {
        lockedRef.current = true;
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      io.disconnect();
      prefetchObserver.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [loop]);

  // Build mask gradient depending on direction and progress.
  const pct = Math.round(progress * 100);
  // feather size as percentage of reveal window (soft edge); can be tuned
  // `feather` prop accepts a percentage number (e.g., 4 = 4%).

  // Determine mask direction string and translate sign based on offsetFrom
  let dirString = 'to bottom';
  let translate = '';
  const baseOffset = Math.round((1 - progress) * offsetAmount);
  if (direction === 'vertical') {
    dirString = 'to bottom';
    // if offsetFrom is 'top', start translated up (negative), otherwise down
    const sign = offsetFrom === 'top' ? -1 : 1;
    translate = `translateY(${sign * baseOffset}px)`;
  } else if (direction === 'horizontal') {
    dirString = 'to right';
    const sign = offsetFrom === 'left' ? -1 : 1;
    translate = `translateX(${sign * baseOffset}px)`;
  } else if (direction === 'diagonal') {
    dirString = '135deg';
    // diagonal nudge keeps same sign convention as horizontal/vertical
    const sign = offsetFrom === 'left' || offsetFrom === 'top' ? -1 : 1;
    const diag = Math.round((1 - progress) * (offsetAmount / 1.2));
    translate = `translate(${sign * diag}px, ${sign * diag}px)`;
  }

  // Simpler mask: fully opaque region grows with progress, with a soft feather edge
  const visibleEnd = pct;
  const featherEnd = Math.min(100, visibleEnd + feather);
  const mask = `linear-gradient(${dirString}, rgba(0,0,0,1) 0%, rgba(0,0,0,1) ${visibleEnd}%, rgba(0,0,0,0) ${featherEnd}%)`;

  const style = {
    maskImage: mask,
    WebkitMaskImage: mask,
    // Use translate3d for GPU compositing to keep the image crisp during motion
    transform: translate.replace('translate(', 'translate3d(').replace(')', ', 0px)'),
    borderRadius: radius ? `${radius}px` : 0,
    transition: `border-radius 220ms ease`,
  };

  return (
    <div ref={elRef} className={`reveal-image relative overflow-hidden ${className}`} style={{ borderRadius: radius ? `${radius}px` : undefined }}>
      <div style={{ willChange: 'transform, mask-image', ...style }}>
        {/* Use OptimizedImg if available for next/image-like benefits */}
        <OptimizedImg
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading={prefetched ? 'eager' : 'lazy'}
          priority={prefetched}
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