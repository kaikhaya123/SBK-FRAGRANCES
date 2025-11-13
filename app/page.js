'use client';

import React from 'react';
import InstagramFeed from './components/InstagramFeed';
import NewsletterSignup from './components/NewsletterSignup';
import HeroSplit from './components/HeroSplit';
import FeaturedCollections from './components/FeaturedCollections';
import BestSellerShowcase from './components/BestSellerShowcase';
import BodyPerfumeSection from './components/BodyPerfumeSection';
import OurPhilosophy from './components/OurPhilosophy';
import UniquenessQualitySection from './components/UniquenessQualitySection';
import OurStory from './components/OurStory';
import ShopNowSection from './components/ShopNowSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import AnimatedLayout from './components/AnimatedLayout';
import ResellerProgram from './components/ResellerProgram';

// Define section configurations with their animations
const sections = [
  { Component: HeroSplit, animation: 'fade', delay: 0.2 },
  { Component: FeaturedCollections, animation: 'slideRight', delay: 0.3 },
  { Component: BestSellerShowcase, animation: 'scale', delay: 0.2 },
  { Component: BodyPerfumeSection, animation: 'slideLeft', delay: 0.3 },
  { Component: OurPhilosophy, animation: 'fade', delay: 0.2 },
  { Component: UniquenessQualitySection, animation: 'slideRight', delay: 0.3 },
  { Component: OurStory, animation: 'scale', delay: 0.2 },
  { Component: ShopNowSection, animation: 'scale', delay: 0.2 },
  { Component: WhyChooseUs, animation: 'fade', delay: 0.3 },
  { Component: Testimonials, animation: 'slideRight', delay: 0.2 },
  { Component: ResellerProgram, animation: 'fade', delay: 0.3 },
  { Component: InstagramFeed, animation: 'slideLeft', delay: 0.2 },
  { Component: NewsletterSignup, animation: 'fade', delay: 0.3 },
];

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      {sections.map(({ Component, animation, delay }, index) => (
        <AnimatedLayout 
          key={index}
          animation={animation}
          delay={delay}
          className="w-full"
        >
          <Component />
        </AnimatedLayout>
      ))}
    </main>
  );
}