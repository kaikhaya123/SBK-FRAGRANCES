import React from 'react';

export default function OurStory() {
  return (
    <section className="relative w-full h-auto md:h-[500px] flex items-center justify-center overflow-hidden rounded-lg my-16 shadow-lg bg-white">
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover object-center grayscale opacity-80"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/our-story-bg.jpg"
        >
          <source src="/videos/7034150-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          {/* Optionally add a WebM source for better browser support */}
          {/* <source src="/videos/our-story-bg.webm" type="video/webm" /> */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center w-full h-full px-6 md:px-16 py-12 md:py-0">
        <div className="w-full md:w-1/2 flex flex-col justify-center h-full">
          <div className="max-w-lg text-gray-900" style={{fontFamily: 'var(--font-sans, Inter, Arial, sans-serif)'}}>
            <h2
              className="text-4xl md:text-6xl font-semibold mb-6 uppercase tracking-widest"
              style={{
                fontFamily: 'Playfair Display, var(--font-serif, Georgia, Times, serif)',
                fontWeight: 700,
                letterSpacing: '0.18em',
                lineHeight: 1.1,
              }}
            >
              Our Story
            </h2>
            <p className="text-base md:text-lg leading-relaxed font-normal">
              SBK Fragrances was born from a passion for individuality and the art of scent. Our journey began with a vision to create perfumes that not only highlight your unique character but also elevate everyday moments into something extraordinary. Each fragrance is meticulously crafted, blending rare ingredients and modern elegance to deliver a premium, memorable experience. Discover the story behind every bottle and join us in celebrating the beauty of self-expression.
            </p>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2" />
      </div>
    </section>
  );
}
