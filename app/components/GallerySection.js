"use client";
import React from 'react';
import ParallaxSlider from './ParallaxSlider';
import OptimizedImg from './OptimizedImg';

const images = [
  '/images/ssstik.io_1762191439675_3.jpeg',
  '/images/ssstik.io_1762191817591.jpeg',
  '/images/ssstik.io_1762191179050_2.webp',
  '/images/ssstik.io_1762181265941.jpeg',
  '/images/ssstik.io_1762180691415.jpeg',
  '/images/customer.jpeg'
];

export default function GallerySection() {
  return (
    <section className="w-full py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">SBK Customers — Gallery</h2>
        <p className="text-gray-600 mb-8">Showcasing happy SBK customers and their moments with our fragrances.</p>

        <ParallaxSlider images={images} speed={80} gap={20} height={300} scale={1.05} />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="rounded overflow-hidden shadow-lg">
              <OptimizedImg src={src} alt={`customer-${idx}`} width={800} height={600} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
