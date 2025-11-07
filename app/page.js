
import React from 'react';
import InstagramFeed from './components/InstagramFeed';
import BehindTheScenes from './components/BehindTheScenes';
import NewsletterSignup from './components/NewsletterSignup';
import HeroSplit from './components/HeroSplit';
import FeaturedCollections from './components/FeaturedCollections';
import BestSellerShowcase from './components/BestSellerShowcase';
import BodyPerfumeSection from './components/BodyPerfumeSection';
import OurPhilosophy from './components/OurPhilosophy';
import UniquenessQualitySection from './components/UniquenessQualitySection';
import OurStory from './components/OurStory';
import VideoShowcaseSection from './components/VideoShowcaseSection';
import MotionSectionWrapper from './components/MotionSectionWrapper';
import ShopNowSection from './components/ShopNowSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';

export const metadata = {
  title: 'SBK FRAGRANCESsa - Bringing to life the fragrance you love',
  description: 'Discover scents that define your style',
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section className="parallax-section">
        <HeroSplit />
      </section>
      <section className="fade-in-section">
        <FeaturedCollections />
      </section>
      <section className="fade-in-section">
        <BestSellerShowcase />
      </section>
      <section className="parallax-section">
        <BodyPerfumeSection />
      </section>
      <section className="stagger-text">
        <OurPhilosophy />
      </section>
      <section className="fade-in-section">
        <UniquenessQualitySection />
      </section>
      <section className="stagger-text">
        <OurStory />
      </section>
      <section className="scale-image">
        <VideoShowcaseSection />
      </section>
      <section className="fade-in-section">
        <ShopNowSection />
      </section>
      <section className="stagger-text">
        <WhyChooseUs />
      </section>
      <section className="fade-in-section">
        <Testimonials />
      </section>
      <section className="scale-image">
        <InstagramFeed />
      </section>
      <section className="fade-in-section">
        <NewsletterSignup />
      </section>
    </div>
  );
}
