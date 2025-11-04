import React from 'react';

export default function VideoShowcase() {
  return (
    <section className="w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full h-[60vh] md:h-[90vh] relative flex items-center justify-center">
        <video
          className="w-full h-full object-cover object-center"
          src="/videos/3425215671228978914.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls
          poster="/images/1761501680588.jpeg"
        />
        {/* Optionally add overlay text or branding here */}
      </div>
    </section>
  );
}
