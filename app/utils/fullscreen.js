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
    window.addEventListener('resize', adjustHeight);
    return () => window.removeEventListener('resize', adjustHeight);
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