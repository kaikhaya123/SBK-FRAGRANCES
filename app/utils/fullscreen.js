'use client';

import { useEffect } from 'react';

export function useFullscreen(elementRef) {
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const adjustHeight = () => {
      const vh = window.innerHeight;
      element.style.minHeight = `${vh}px`;
    };

    adjustHeight();
    // debounce using requestAnimationFrame to avoid heavy synchronous work
    let rafId = null;
    const onResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        adjustHeight();
        rafId = null;
      });
    };

    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('resize', onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [elementRef]);
}

export function FullscreenSection({ children, className = '' }) {
  return (
    <section className={`min-h-screen w-full flex flex-col justify-center items-center relative ${className}`}>
      <div className="w-full h-full absolute inset-0 z-0"></div>
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}