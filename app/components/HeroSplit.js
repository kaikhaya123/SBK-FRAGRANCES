"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSplit() {
  useEffect(() => {
    // set a CSS variable --vh to account for mobile browser address bar
    const setVh = () => {
      if (typeof window === 'undefined') return;
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };

    setVh();
    // debounce using requestAnimationFrame to reduce main-thread work
    let rafId = null;
    const onResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setVh();
        rafId = null;
      });
    };

    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('resize', onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
  return (
    <section
      className="relative w-full flex flex-col sm:flex-row overflow-hidden"
      style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
    >
      {/* Left: For Her */}
      <motion.div 
        initial={{ x: "-100%" }} 
        animate={{ x: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 relative flex items-end justify-center h-1/2 sm:h-full w-full bg-black"
      >
  <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/Floral Elegance_ My Way Perfume.png"
            alt="For Her"
            fill
            priority
            className="object-cover object-center"
            style={{ transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-white font-bold uppercase tracking-[0.18em] drop-shadow-lg z-20"
          style={{ fontFamily: "Oswald, Bebas Neue, Montserrat, Arial, sans-serif", fontSize: 'clamp(0.9rem, 4.5vw, 1.6rem)' }}
        >
          For Her
        </motion.span>
      </motion.div>

      {/* Right: For Him */}
      <motion.div 
        initial={{ x: "100%" }} 
        animate={{ x: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 relative flex items-end justify-center h-1/2 sm:h-full w-full bg-black"
      >
  <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/SBK Frangrance1.png"
            alt="For Him"
            fill
            priority
            className="object-cover object-center"
            style={{ transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 bg-black/20" />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 text-white font-bold uppercase tracking-[0.18em] drop-shadow-lg z-20"
            style={{ fontFamily: "Oswald, Bebas Neue, Montserrat, Arial, sans-serif", fontSize: 'clamp(0.9rem, 4.5vw, 1.6rem)' }}
          >
            For Him
          </motion.span>
        </div>
      </motion.div>

      {/* Centered Headline Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-4"
      >
        <h1 className="font-semibold uppercase tracking-tight text-white text-center leading-tight" style={{ 
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          letterSpacing: "0.02em",
          textShadow: "2px 2px 6px rgba(0,0,0,0.35)",
          transform: 'translateZ(0)',
          fontSize: 'clamp(2rem, 8vw, 5.5rem)'
        }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            Indulge
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
            className="mt-2 block"
          >
            Your Senses
          </motion.span>
        </h1>
      </motion.div>
    </section>
  );
}
