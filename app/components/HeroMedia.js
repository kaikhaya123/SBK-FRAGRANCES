"use client";
import dynamic from 'next/dynamic';
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });

export default function HeroMedia() {
  return (
    <div className="flex flex-col md:flex-row h-[80vh] w-full gap-0 md:gap-8">
      {/* Left: Video */}
      <MotionDiv
        className="flex-1 flex items-center justify-center relative overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none shadow-lg"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <video
          className="object-cover w-full h-full"
          src="/videos/3430375345205055803.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-perfume.jpg"
        />
        <div className="absolute inset-0 bg-black/20" />
      </MotionDiv>
      {/* Right: Image */}
      <MotionDiv
        className="flex-1 flex items-center justify-center relative overflow-hidden rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none shadow-lg"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/hero-perfume.jpg"
          alt="Fragrance Bottle"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/10" />
      </MotionDiv>
    </div>
  );
}
