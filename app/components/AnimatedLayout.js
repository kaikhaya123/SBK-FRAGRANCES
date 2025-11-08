'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const defaultVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function AnimatedLayout({ 
  children, 
  className = '',
  useGSAP = false,
  animation = 'fade', // 'fade', 'slideLeft', 'slideRight', 'scale'
  delay = 0,
  threshold = 0.2
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!useGSAP || !sectionRef.current) return;

    const animations = {
      fade: {
        opacity: 0,
        y: 30,
      },
      slideLeft: {
        opacity: 0,
        x: -50,
      },
      slideRight: {
        opacity: 0,
        x: 50,
      },
      scale: {
        opacity: 0,
        scale: 0.9,
      }
    };

    const element = sectionRef.current;
    const initialAnimation = animations[animation] || animations.fade;

    gsap.set(element, initialAnimation);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: `top ${threshold * 100}%`,
        toggleActions: "play none none reverse"
      }
    });

    tl.to(element, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration: 1,
      delay,
      ease: "power3.out"
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="relative">
      {children}
    </div>
  );
}