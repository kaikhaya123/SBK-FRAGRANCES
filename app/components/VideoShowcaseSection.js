import React from 'react';

export default function VideoShowcaseSection() {
  return (
    <section className="w-full bg-black flex flex-col items-center justify-center overflow-hidden my-12 md:my-20">
      <div className="w-full h-[60vh] md:h-[90vh] relative flex items-center justify-center">
        <video
          className="w-full h-full object-cover object-center"
          src="/videos/4154241-uhd_4096_2160_25fps.mp4" // Place your video in public/videos/
          autoPlay
          loop
          muted
          playsInline
          poster="/images/1761501680588.jpeg" // Optional poster image
        />
      </div>
    </section>
  );
}
