'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Custom hook for counting animation
const useCountUp = (end, duration = 2000, isInView = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isInView]);

  return count;
};

const packages = [
  {
    id: 1,
    title: 'Reseller Starter',
    price: 'R1,300',
    description: 'Perfect for beginners entering the fragrance business',
    includes: [
      'Premium fragrance testers (variety pack)',
      'Starter marketing materials',
      'Business consultation',
      'Wholesale pricing access'
    ],
    margin: '60-80%',
    potentialReturn: 'R2,080 - R2,340',
    image: '/images/perfume sell.jpeg',
    image2: '/images/Perfume box .jpeg',
    icon: '',
    highlight: false,
    bgGradient: 'from-slate-900/40 to-slate-800/40',
    borderColor: 'border-slate-700/50',
    buttonStyle: 'bg-slate-800 hover:bg-slate-700',
    accentColor: 'text-blue-600'
  },
  {
    id: 2,
    title: 'Premium Car Diffuser',
    price: 'R800',
    description: 'High-demand automotive fragrance solution',
    includes: [
      'Car diffuser bottles (bulk ready)',
      'Premium fragrance concentrate',
      'Display packaging included',
      'Fast-moving inventory item'
    ],
    margin: '70-85%',
    potentialReturn: 'R1,360 - R1,480',
    image: '/images/car perfume 1.jpeg',
    image2: '/images/car perfume 2.jpeg',
    icon: '',
    highlight: false,
    bgGradient: 'from-slate-900/40 to-slate-800/40',
    borderColor: 'border-slate-700/50',
    buttonStyle: 'bg-slate-800 hover:bg-slate-700',
    accentColor: 'text-teal-600'
  },
  {
    id: 3,
    title: 'Round Bottle Premium',
    price: 'R1,500',
    description: 'Luxury stock collection (10 units included)',
    includes: [
      '10 premium round bottles',
      'Luxury packaging & labels',
      'Highest margin segment',
      'Perfect for boutique retail'
    ],
    margin: '75-90%',
    potentialReturn: 'R2,625 - R2,850',
    image: '/images/Perfume business .jpeg',
    icon: '',
    highlight: true,
    bgGradient: 'from-amber-900/20 to-slate-900/40',
    borderColor: 'border-amber-600/50',
    buttonStyle: 'bg-amber-700 hover:bg-amber-600',
    accentColor: 'text-amber-600'
  }
];

// Counting stats component
function CountingStatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const resellers = useCountUp(250, 2000, isInView);
  const margin = useCountUp(65, 2000, isInView);

  return (
    <div ref={ref} className="grid grid-cols-3 gap-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="p-5 bg-white rounded-lg shadow-sm text-center border-2 border-black/10"
      >
        <div className="text-3xl font-bold text-black">{resellers}+</div>
        <div className="text-xs text-[#666666] uppercase tracking-wider mt-2">Active Resellers</div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="p-5 bg-white rounded-lg shadow-sm text-center border-2 border-black/10"
      >
        <div className="text-3xl font-bold text-black">{margin}%</div>
        <div className="text-xs text-[#666666] uppercase tracking-wider mt-2">Avg Profit Margin</div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="p-5 bg-white rounded-lg shadow-sm text-center border-2 border-black/10"
      >
        <div className="text-3xl font-bold text-black">2-5d</div>
        <div className="text-xs text-[#666666] uppercase tracking-wider mt-2">Average Restock</div>
      </motion.div>
    </div>
  );
}

export default function ResellerProgram() {
  const [hoveredId, setHoveredId] = useState(null);
  const [imageIndex, setImageIndex] = useState({});
  const [deliveryAnimation, setDeliveryAnimation] = useState(null);
  const [teamAnimation, setTeamAnimation] = useState(null);

  const getSrc = (s) => {
    if (!s && s !== 0) return null;
    try {
      if (typeof s === 'string') {
        const trimmed = s.trim();
        return trimmed.length ? trimmed : null;
      }
      return null;
    } catch (e) {
      return null;
    }
  };

  React.useEffect(() => {
    fetch('/icons/Delivery boy animation.json')
      .then(res => res.json())
      .then(data => setDeliveryAnimation(data))
      .catch(err => console.error('Failed to load animation:', err));
    
    fetch('/icons/team.json')
      .then(res => res.json())
      .then(data => setTeamAnimation(data))
      .catch(err => console.error('Failed to load team animation:', err));
  }, []);

  return (
  <section className="w-full py-16 md:py-28 bg-[#ffffff] relative overflow-hidden text-black font-sans">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-6 pointer-events-none">
        <div className="absolute -left-32 -top-16 w-96 h-96 bg-amber-500 rounded-full blur-3xl mix-blend-screen" />
        <div className="absolute -right-32 -bottom-16 w-96 h-96 bg-blue-500 rounded-full blur-3xl mix-blend-screen" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero: Text + Supporting Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/30">
              <span className="text-black font-semibold text-xs uppercase tracking-widest">Wholesale Opportunity</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-black" style={{ letterSpacing: '-0.02em', fontFamily: 'var(--font-playfair)' }}>
              Start Your Perfume
              <br />
              <span className="text-black">
                Business with Us Today
              </span>
            </h2>
            <p className="text-[#666666] text-base md:text-lg max-w-2xl mb-8 font-sans leading-relaxed">
              Join our growing network of resellers and entrepreneurs. Access premium fragrance stock at wholesale prices with attractive margins, marketing support and easy restocking.
            </p>

            <div className="flex gap-4">
              <a href="mailto:hello@sbkfragrances.com" className="inline-flex items-center gap-3 px-6 py-3 bg-black hover:bg-black/90 text-[#FAF9F6] rounded-full font-semibold shadow-md">
                Contact Sales
              </a>
              <a href="#packages" className="inline-flex items-center gap-2 px-6 py-3 border border-black rounded-full text-black bg-transparent hover:bg-white font-semibold">
                View Packages
              </a>
            </div>
          </div>

          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-black/20 bg-gray-100">
            {getSrc(packages[2].image) ? (
              <Image
                src={getSrc(packages[2].image)}
                alt="Reseller selection - Premium Round Bottle"
                fill
                className="object-cover w-full h-full"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute left-6 bottom-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-white/50 shadow-md">
              <p className="text-sm text-black/70">Top pick</p>
              <p className="text-base font-bold text-black" style={{ fontFamily: 'var(--font-playfair)' }}>Round Bottle Premium</p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-black/10 mb-16" />

        {/* Packages grid */}
        <div id="packages" className="mb-16">
          <h3 className="text-3xl font-bold text-black text-center mb-12" style={{ letterSpacing: '-0.01em', fontFamily: 'var(--font-playfair)' }}>Choose Your Package</h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.article
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              onMouseEnter={() => {
                setHoveredId(pkg.id);
                setImageIndex(prev => ({ ...prev, [pkg.id]: (prev[pkg.id] || 0) === 0 ? 1 : 0 }));
              }}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col transition-transform duration-300 ${hoveredId === pkg.id ? 'translate-y-0 lg:-translate-y-3 shadow-2xl' : ''}`}
            >
              <div className="relative w-full aspect-square border-2 border-black/10 rounded-lg overflow-hidden">
                <motion.div
                  key={imageIndex[pkg.id] || 0}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  {getSrc(imageIndex[pkg.id] === 1 ? pkg.image2 : pkg.image) ? (
                    <Image
                      src={getSrc(imageIndex[pkg.id] === 1 ? pkg.image2 : pkg.image)}
                      alt={pkg.title}
                      fill
                      className={`object-cover transition-transform duration-500 ${hoveredId === pkg.id ? 'scale-105' : 'scale-100'}`}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100" />
                  )}
                </motion.div>
                <div className="absolute inset-0 bg-black/5" />
                {pkg.highlight && (
                  <div className="absolute top-4 right-4 px-4 py-1 bg-black text-white text-xs font-bold rounded-full uppercase tracking-wider">Best Value</div>
                )}
              </div>

              <div className="p-7 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-black" style={{ letterSpacing: '-0.01em', fontFamily: 'var(--font-playfair)' }}>{pkg.title}</h3>
                  <div className="text-sm text-black/70">{pkg.icon}</div>
                </div>

                <p className="text-sm text-[#666666] mb-6 font-sans leading-relaxed">{pkg.description}</p>

                <div className="mb-6 p-5 bg-[#FAFAF8] rounded-lg border-2 border-black/10">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-xs uppercase text-[#666666] tracking-wide">Investment</p>
                      <p className="text-3xl font-bold text-black mt-1" style={{ letterSpacing: '-0.01em' }}>{pkg.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase text-[#666666] tracking-wide">Potential Return</p>
                      <p className="text-lg font-bold text-black mt-1">{pkg.potentialReturn}</p>
                    </div>
                  </div>
                </div>

                <ul className="mb-7 space-y-3 flex-grow">
                  <p className="text-xs uppercase text-[#666666] font-semibold tracking-wider">Includes</p>
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-[#666666]">
                      <svg className="w-4 h-4 mr-3 mt-1 flex-shrink-0" fill="#000" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <button className={`w-full py-3 rounded-lg font-semibold text-[#FAF9F6] bg-black hover:bg-black/90 shadow transition-colors`}>Get Started</button>
                </div>
              </div>
            </motion.article>
          ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/10 mb-16" />

        {/* How it works / Business Info */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="mb-12 bg-transparent">
          <div>
            <h3 className="text-3xl text-black font-bold mb-6" style={{ letterSpacing: '-0.01em', fontFamily: 'var(--font-playfair)' }}>How It Works</h3>
            <p className="text-[#666666] mb-8 leading-relaxed">We make it simple: pick a package, get onboarding and marketing assets, then restock as you grow. Our team supports product selection and pricing so you start selling fast.</p>

            <CountingStatsSection />
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-black/10 mb-16" />

        {/* Why Partner - benefit cards with small visuals */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="mb-12">
          <h3 className="text-3xl text-center text-black font-bold mb-12" style={{ letterSpacing: '-0.01em', fontFamily: 'var(--font-playfair)' }}>Why Partner With SBK Fragrances?</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 bg-white rounded-2xl shadow-sm">
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32">
                  <Image 
                    src="/icons/perfume.png" 
                    alt="100% Authentic" 
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h4 className="font-bold text-lg text-black mb-3 text-center" style={{ fontFamily: 'var(--font-playfair)' }}>100% Authentic</h4>
              <p className="text-sm text-[#666666] font-sans leading-relaxed">All our fragrances are genuine and sourced with certification—trusted by retailers.</p>
            </div>

            <div className="p-7 bg-white rounded-2xl shadow-sm">
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32">
                  {teamAnimation && (
                    <Lottie 
                      animationData={teamAnimation} 
                      loop={true}
                      autoplay={true}
                    />
                  )}
                </div>
              </div>
              <h4 className="font-bold text-lg text-black mb-3 text-center" style={{ fontFamily: 'var(--font-playfair)' }}>Dedicated Support</h4>
              <p className="text-sm text-[#666666] font-sans leading-relaxed">Personal onboarding, marketing assets and a reseller support team to help you grow.</p>
            </div>

            <div className="p-7 bg-white rounded-2xl shadow-sm">
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32">
                  {deliveryAnimation && (
                    <Lottie 
                      animationData={deliveryAnimation} 
                      loop={true}
                      autoplay={true}
                    />
                  )}
                </div>
              </div>
              <h4 className="font-bold text-lg text-black mb-3 text-center" style={{ fontFamily: 'var(--font-playfair)' }}>Fast Delivery</h4>
              <p className="text-sm text-[#666666] font-sans leading-relaxed">Reliable shipping and fast restocking so you never miss a sale.</p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-black/10 mb-16" />

      </div>

      {/* Bottom CTA - moved outside centered container so it can be full-bleed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        viewport={{ once: true }}
        className="relative w-full overflow-hidden p-8 md:p-16 text-center min-h-96 flex flex-col justify-center items-center rounded-none"
      >
        {/* Background Image - Lifestyle shot */}
        <Image
          src="/images/pexels-mart-production-8450240.jpg"
          alt="Luxury fragrance lifestyle"
          fill
          className="object-cover w-full h-full absolute inset-0"
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/60 to-black/50" />

        {/* Content - Positioned above overlay */}
        <div className="relative z-10 max-w-3xl mx-auto">
      <h3 className="text-3xl md:text-5xl text-[#FAF9F6] font-bold mb-4" style={{ letterSpacing: '-0.01em', fontFamily: 'var(--font-playfair)' }}>
            Ready to Scale Your Business?
          </h3>
          <p className="text-[#FAF9F6]/90 mb-8 leading-relaxed text-base md:text-lg">
            Join hundreds of successful resellers. Start small or go big—we have packages and support for every stage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href="#packages"
              className="px-8 py-3 bg-black text-[#FAF9F6] rounded-full font-semibold transition-all hover:bg-black/80 hover:shadow-lg duration-300"
            >
              Explore Packages
            </a>
            <a
              href="mailto:hello@sbkfragrances.com"
              className="px-8 py-3 border-2 border-[#FAF9F6] text-[#FAF9F6] rounded-full font-semibold transition-all hover:bg-white/10 hover:shadow-lg duration-300 backdrop-blur-sm"
            >
              Contact Us
            </a>
          </div>

          <p className="text-sm text-[#FAF9F6]/80">
            Email: <span className="font-semibold text-[#FAF9F6]">sbkfragrances232@gmail.com</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
