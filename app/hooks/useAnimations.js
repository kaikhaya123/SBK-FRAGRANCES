'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useAnimations = () => {
  const fadeIn = (element, delay = 0) => {
    return gsap.from(element, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay,
      ease: 'power3.out',
    });
  };

  const fadeInLeft = (element, delay = 0) => {
    return gsap.from(element, {
      opacity: 0,
      x: -50,
      duration: 1,
      delay,
      ease: 'power3.out',
    });
  };

  const fadeInRight = (element, delay = 0) => {
    return gsap.from(element, {
      opacity: 0,
      x: 50,
      duration: 1,
      delay,
      ease: 'power3.out',
    });
  };

  const scaleIn = (element, delay = 0) => {
    return gsap.from(element, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay,
      ease: 'power3.out',
    });
  };

  const scrollAnimation = (element, animation) => {
    ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => animation.play(),
      onLeave: () => animation.reverse(),
      onEnterBack: () => animation.play(),
      onLeaveBack: () => animation.reverse(),
    });
  };

  return {
    fadeIn,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    scrollAnimation,
  };
};