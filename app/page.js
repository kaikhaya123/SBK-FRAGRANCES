
"use client";



// ...existing code...
import Head from 'next/head';


import FeaturedCollections from './components/FeaturedCollections';
import BestSellerShowcase from './components/BestSellerShowcase';
import BodyPerfumeSection from './components/BodyPerfumeSection';
import OurPhilosophy from './components/OurPhilosophy';
import UniquenessQualitySection from './components/UniquenessQualitySection';
import OurStory from './components/OurStory';
import VideoShowcaseSection from './components/VideoShowcaseSection';
import ShopNowSection from './components/ShopNowSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import NewsletterSignup from './components/NewsletterSignup';
import InstagramFeed from './components/InstagramFeed';
import BehindTheScenes from './components/BehindTheScenes';

import dynamic from 'next/dynamic';
const MotionSection = dynamic(
  () => import('framer-motion').then(mod => mod.motion.section),
  { ssr: false }
);

import HeroSplit from './components/HeroSplit';

export default function Home() {
  return (
    <>
      <Head>
        <title>SBK FRAGRANCESsa - Bringing to life the fragrance you love</title>
        <meta name="description" content="Discover scents that define your style" />
      </Head>
  <HeroSplit />
  <FeaturedCollections />
  <BestSellerShowcase />
  <BodyPerfumeSection />
  <OurPhilosophy />
  <UniquenessQualitySection />
  <OurStory />
  <VideoShowcaseSection />
  <ShopNowSection />
  <WhyChooseUs />
  <Testimonials />
  <InstagramFeed />
  <NewsletterSignup />
    </>
  );
}
