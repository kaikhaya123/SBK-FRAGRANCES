"use client";
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

export default function HeroSplit() {
  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col sm:flex-row overflow-hidden">
      {/* Left: For Her */}
      <motion.div 
        initial={{ x: "-100%" }} 
        animate={{ x: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 relative flex items-end justify-center h-1/2 sm:h-full w-full bg-black"
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/Floral Elegance_ My Way Perfume.png"
            className="w-full h-full object-cover object-center scale-105"
            style={{
              objectFit: "cover",
              transform: "scale(1.1)",
              transformOrigin: "center"
            }}
            alt="For Her"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <AnimatedSection animation="fadeIn" delay={1}>
          <span className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-white text-base sm:text-xl md:text-2xl font-bold uppercase tracking-[0.18em] drop-shadow-lg" style={{ fontFamily: "Oswald, Bebas Neue, Montserrat, Arial, sans-serif" }}>
            For Her
          </span>
        </AnimatedSection>
      </motion.div>

      {/* Right: For Him */}
      <motion.div 
        initial={{ x: "100%" }} 
        animate={{ x: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 relative flex items-end justify-center h-1/2 sm:h-full w-full bg-black"
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/SBK Frangrance1.png"
            className="w-full h-full object-cover object-center scale-105"
            style={{
              objectFit: "cover",
              transform: "scale(1.1)",
              transformOrigin: "center"
            }}
            alt="For Him"
          />
          <div className="absolute inset-0 bg-black/20" />
          <AnimatedSection animation="fadeIn" delay={1}>
            <span className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 text-white text-base sm:text-xl md:text-2xl font-bold uppercase tracking-[0.18em] drop-shadow-lg" style={{ fontFamily: "Oswald, Bebas Neue, Montserrat, Arial, sans-serif" }}>
              For Him
            </span>
          </AnimatedSection>
        </div>
      </motion.div>

      {/* Centered Headline Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-4"
      >
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold uppercase tracking-normal text-white text-center leading-tight" style={{ 
          fontFamily: "Oswald, sans-serif",
          letterSpacing: "0.05em",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
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
