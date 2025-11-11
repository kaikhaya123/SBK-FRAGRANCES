'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Sample fragrance data
const allFragrances = [
  { id: 1, name: 'New West', category: 'men', price: 89.99, rating: 5, reviews: 128, image: '/images/New West.jpg', tags: ['woody', 'bold'] },
  { id: 2, name: 'Ocean Breeze', category: 'men', price: 79.99, rating: 4, reviews: 95, image: '/images/pexels-mart-production-8450121.jpg', tags: ['aquatic', 'fresh'] },
  { id: 3, name: 'Spice Inferno', category: 'men', price: 99.99, rating: 5, reviews: 156, image: '/images/pexels-karola-g-8361483.jpg', tags: ['spicy', 'warm'] },
  { id: 4, name: 'Silver Essence', category: 'men', price: 109.99, rating: 4, reviews: 87, image: '/images/pexels-mart-production-8450121.jpg', tags: ['aromatic', 'herbs'] },
  { id: 5, name: 'Leather Legacy', category: 'men', price: 119.99, rating: 5, reviews: 203, image: '/images/pexels-karola-g-8361483.jpg', tags: ['leather', 'dark'] },
  { id: 6, name: 'Urban Edge', category: 'men', price: 74.99, rating: 4, reviews: 72, image: '/images/pexels-mart-production-8450121.jpg', tags: ['ginger', 'fresh'] },
  { id: 7, name: 'Rose Garden', category: 'women', price: 89.99, rating: 5, reviews: 241, image: '/images/pexels-mart-production-8450121.jpg', tags: ['floral', 'romantic'] },
  { id: 8, name: 'Jasmine Dream', category: 'women', price: 99.99, rating: 5, reviews: 187, image: '/images/pexels-karola-g-8361483.jpg', tags: ['jasmine', 'vanilla'] },
  { id: 9, name: 'Citrus Sunset', category: 'women', price: 79.99, rating: 4, reviews: 134, image: '/images/pexels-mart-production-8450121.jpg', tags: ['citrus', 'warm'] },
  { id: 10, name: 'Floral Elegance', category: 'women', price: 109.99, rating: 5, reviews: 165, image: '/images/pexels-karola-g-8361483.jpg', tags: ['floral', 'exotic'] },
  { id: 11, name: 'Ocean Pearl', category: 'women', price: 84.99, rating: 4, reviews: 98, image: '/images/pexels-mart-production-8450121.jpg', tags: ['marine', 'fresh'] },
  { id: 12, name: 'Velvet Noir', category: 'women', price: 119.99, rating: 5, reviews: 219, image: '/images/pexels-karola-g-8361483.jpg', tags: ['dark', 'sensual'] },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([70, 130]);
  const [sortBy, setSortBy] = useState('featured');

  const filteredFragrances = useMemo(() => {
    let filtered = allFragrances;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(f => f.category === selectedCategory);
    }

    filtered = filtered.filter(f => f.price >= priceRange[0] && f.price <= priceRange[1]);

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 md:py-24"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
          >
            Shop Catalog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Discover our exquisite collection of fragrances for every occasion
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="sticky top-20 space-y-8">
              {/* Category Filter */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Categories</h3>
                <div className="space-y-3">
                  {['all', 'men', 'women'].map((cat) => (
                    <motion.button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      whileHover={{ x: 4 }}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === cat
                          ? 'bg-black text-white font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {cat === 'all' ? 'All Fragrances' : `For ${cat === 'men' ? 'Him' : 'Her'}`}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Filter by price</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="70"
                    max="130"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="70"
                    max="130"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex gap-2 text-sm">
                    <span className="text-gray-600">${priceRange[0]}</span>
                    <span className="text-gray-600">-</span>
                    <span className="text-gray-600">${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Sort */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Sort by</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {/* Results Count */}
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredFragrances.length}</span> results
              </p>
            </div>

            {/* Products Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${priceRange[0]}-${priceRange[1]}-${sortBy}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {filteredFragrances.map((fragrance, index) => (
                  <motion.div
                    key={fragrance.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      {/* Image Container */}
                      <div className="relative h-64 bg-gray-100 overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                          className="w-full h-full"
                          style={{
                            backgroundImage: `url('${fragrance.image}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />
                        <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full">
                          New
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        {/* Stars */}
                        <div className="flex gap-0.5 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-sm ${
                                i < fragrance.rating ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>

                        {/* Name */}
                        <h3 className="text-base font-semibold text-gray-900 mb-1">
                          {fragrance.name}
                        </h3>

                        {/* Price */}
                        <p className="text-lg font-bold text-gray-900 mb-3">
                          ${fragrance.price.toFixed(2)}
                        </p>

                        {/* Buttons */}
                        <div className="flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 py-2 bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors rounded-md"
                          >
                            Add to Cart
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors rounded-md"
                          >
                            ♡
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
