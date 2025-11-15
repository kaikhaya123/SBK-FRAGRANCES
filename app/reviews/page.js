 'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { allFragrances } from '../data/fragrances';

const reviews = [
  {
    name: 'Aisha M.',
    location: 'Cape Town',
    rating: 5,
    text: 'Absolutely in love with Amber Nights! The fragrance evokes memories of warm summer evenings, with a sophistication that lasts all day.',
  },
  {
    name: 'Sipho K.',
    location: 'Johannesburg',
    rating: 5,
    text: 'The attention to detail in both the fragrance and packaging is extraordinary. This isn\'t just a perfume, it\'s an experience that transforms your daily ritual.',
  },
  {
    name: 'Nomsa D.',
    location: 'Durban',
    rating: 5,
    text: 'Found my signature scent after a wonderful consultation. The fragrance perfectly captures elegance and modernity.',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Reviews() {
  const [activeTab, setActiveTab] = useState('featured');
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f5f0] to-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[40vh] bg-[#1a1a1a] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0">
          <img
            src="/images/elegant-skin-care-banner-design.webp"
            alt="Luxury Perfume Reviews"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <motion.h1 
            className="text-4xl md:text-6xl text-white mb-4 font-light tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Oswald, sans-serif' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Customer Experiences
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
            style={{ fontFamily: 'Playfair Display, serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Discover what our clients say about their journey with SBK Fragrances
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-8 py-4 text-sm tracking-widest uppercase ${
                activeTab === 'featured'
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-500 hover:text-black transition-colors'
              }`}
            >
              Featured Reviews
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`px-8 py-4 text-sm tracking-widest uppercase ${
                activeTab === 'recent'
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-500 hover:text-black transition-colors'
              }`}
            >
              Recent Reviews
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              {...fadeInUp}
              transition={{ delay: index * 0.2 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium text-lg mb-1">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                    <div className="flex gap-0.5 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  {/* purchase info removed */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-center tracking-wide"
                style={{ fontFamily: 'Oswald, sans-serif' }}>
              Share Your Experience
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black/5 focus:border-black transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black/5 focus:border-black transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Purchased</label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black/5 focus:border-black transition-colors"
                  required
                >
                  <option value="">Select a product</option>
                  {allFragrances.map((f) => {
                    const value = f.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                    return (
                      <option key={f.id} value={value}>{f.name}</option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      className="text-2xl text-gray-300 hover:text-amber-400 focus:text-amber-400 transition-colors"
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black/5 focus:border-black transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-900 md:py-4 md:text-lg md:px-10 transition-all duration-200 hover:shadow-lg"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}