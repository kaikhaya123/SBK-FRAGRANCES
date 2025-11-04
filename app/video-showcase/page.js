import React from 'react';

export default function VideoShowcase() {
  return (
    <section className="w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full h-[60vh] md:h-[90vh] relative flex items-center justify-center">
        <video
          className="w-full h-full object-cover object-center"
          src="/videos/sbk-fragrance-showcase.mp4" // Place your video in public/videos/
          autoPlay
          loop
          muted
          playsInline
          controls
          poster="/images/1761501680588.jpeg" // Optional poster image
        />
        {/* Optionally add overlay text or branding here */}
      </div>
    </section>
  );
}
