'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useAnimations } from '../hooks/useAnimations';

const animations = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  },
  slideLeft: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  },
  slideRight: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  }
};

export default function AnimatedSection({ 
  children, 
  animation = 'fadeIn',
  className = '',
  delay = 0,
  duration = 0.5,
  useGSAP = false
}) {
  const ref = useRef(null);
  const { fadeIn, fadeInLeft, fadeInRight, scaleIn } = useAnimations();

  useEffect(() => {
    if (useGSAP && ref.current) {
      const gsapAnimations = {
        fadeIn,
        slideLeft: fadeInLeft,
        slideRight: fadeInRight,
        scale: scaleIn
      };

      gsapAnimations[animation](ref.current, delay);
    }
  }, [animation, delay, useGSAP]);

  if (useGSAP) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="animate"
      exit="exit"
      variants={animations[animation]}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}