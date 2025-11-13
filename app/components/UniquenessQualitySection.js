"use client";
import OptimizedImg from "./OptimizedImg";
import React from 'react';
import AnimatedSection from './AnimatedSection';
const sections = [
  {
    image: "/images/cosmetic-item-with-marijuana-leaves.jpg",
    title: "Uniqueness in Every Note",
    text: "At SBK Fragrances, each perfume is crafted to reveal a story as unique as you are. Our scents are designed to highlight individuality, blending rare ingredients and creative inspiration to ensure every note is truly one-of-a-kind.",
    button: "Learn more"
  },
  {
    image: "/images/download.jpg",
    title: "The Art of Premium Quality",
    text: "Our perfumes are meticulously created by hand in our laboratory, where passion meets precision. SBK Fragrances uses only the finest ingredients and time-honored techniques, resulting in exceptional quality and lasting impressions in every bottle.",
    button: "Learn more"
  },
  {
    image: "/images/Smelling strip.jpg",
    title: "Uniqueness in Every Note",
    text: "From the first spritz to the lingering finish, SBK Fragrances invites you to experience the magic of a scent that is truly yours. Discover the difference that artistry and dedication make in every fragrance we create.",
    button: "Learn more"
  }
];

export default function UniquenessQualitySection() {
  return (
    <section className="flex flex-col gap-12 my-16">
      {sections.map((section, idx) => (
        <AnimatedSection
          key={idx}
          animation={idx % 2 === 0 ? "slideRight" : "slideLeft"}
          delay={0.2 + idx * 0.1}
        >
          <div
            className={`w-full flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center justify-center gap-0 md:gap-8 rounded-lg shadow-lg overflow-hidden`}
          >
            <AnimatedSection animation="scale" delay={0.3 + idx * 0.1} className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover object-center md:object-[50%_40%] transition-all duration-300"
                style={{
                  objectPosition:
                    idx === 0
                      ? 'center 40%'
                      : idx === 1
                      ? 'center 60%'
                      : 'center',
                }}
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fadeIn" delay={0.4 + idx * 0.1} className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 md:px-12 py-8 md:py-0 bg-white/90" style={{fontFamily: 'var(--font-sans, Inter, Arial, sans-serif)'}}>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                {section.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {section.text}
              </p>
              {/* 'Learn more' link removed as requested */}
            </AnimatedSection>
          </div>
        </AnimatedSection>
      ))}
    </section>
  );
}