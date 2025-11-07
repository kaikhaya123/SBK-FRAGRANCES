"use client";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimation = () => {
  useEffect(() => {
    // Fade in animation for sections
    const fadeInSections = gsap.utils.toArray('.fade-in-section');
    fadeInSections.forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Scale animation for images
    const scaleImages = gsap.utils.toArray('.scale-image');
    scaleImages.forEach((image) => {
      gsap.fromTo(image,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: image,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Stagger text animation
    const textContainers = gsap.utils.toArray('.stagger-text');
    textContainers.forEach((container) => {
      const texts = container.querySelectorAll('*');
      gsap.fromTo(texts,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Parallax effect
    const parallaxSections = gsap.utils.toArray('.parallax-section');
    parallaxSections.forEach((section) => {
      const image = section.querySelector('img');
      gsap.to(image, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Clean up ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};