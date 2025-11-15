"use client";
import React from 'react';
import HandMock from './HandMock';

export default function OurNewCollection() {
  // Example screen content - replace with a real image or video path in public/
  const screenImage = {
    type: 'image',
    src: '/images/new-collection-screen.jpg',
    alt: 'New Collection preview'
  };

  return (
    <section className="w-full py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold">Our New Collection</h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">HandMock — realistic phone-in-hand preview. Drop images or MP4/WebM and they autoplay, loop and stay muted for smooth reel-style previews.</p>
        </div>

        <div className="flex justify-center">
          <HandMock
            handSrc="/images/hand-mock.png"
            screenContent={screenImage}
            preset="desktop"
            screenStyle={{ width: 340, height: 760, left: '50%', top: '52%', transform: 'translate(-50%, -50%)' }}
          />
        </div>
      </div>
    </section>
  );
}
