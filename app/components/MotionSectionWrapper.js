'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

gsap.registerPlugin(ScrollTrigger);

const animations = {
  fadeUp: {
    initial: { opacity: 0, y: 50, ease: "power2.out" },
    animate: { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
  },
  fadeIn: {
    initial: { opacity: 0, ease: "power2.out" },
    animate: { opacity: 1, duration: 1.2, ease: "power2.out" }
  },
  slideLeft: {
    initial: { opacity: 0, x: 50, ease: "power2.out" },
    animate: { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }
  },
  slideRight: {
    initial: { opacity: 0, x: -50, ease: "power2.out" },
    animate: { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }
  },
  scale: {
    initial: { opacity: 0, scale: 0.8, ease: "power2.out" },
    animate: { opacity: 1, scale: 1, duration: 1 }
  }
};

export default function MotionSectionWrapper({ 
  children, 
  className = '', 
  animation: animationType = 'fadeUp',
  threshold = 0.1,
  delay = 0,
  ...props 
}) {
  const [sectionRef, isIntersecting] = useIntersectionObserver({
    threshold,
    rootMargin: '0px'
  });

  useEffect(() => {
    if (!isIntersecting) return;

    const section = sectionRef.current;
    const animationConfig = animations[animationType] || animations.fadeUp;

    const tl = gsap.fromTo(section,
      animationConfig.initial,
      {
        ...animationConfig.animate,
        delay,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      if (tl) {
        tl.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isIntersecting, animationType, delay]);

  return (
    <section
      ref={sectionRef}
      className={`scroll-section w-full ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
