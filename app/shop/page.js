'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sample fragrance data
const allFragrances = [
  { id: 1, name: 'New West', category: 'men', price: 89.99, originalPrice: 119.99, rating: 5, reviews: 128, image: '/images/New West.jpg', tags: ['woody', 'bold'], type: 'Eau de Parfum', topNotes: 'Bergamot, Pepper', bestseller: true, isNew: true, stock: 12 },
  { id: 2, name: 'Ocean Breeze', category: 'men', price: 79.99, rating: 4, reviews: 95, image: '/images/pexels-mart-production-8450121.jpg', tags: ['aquatic', 'fresh'], type: 'Eau de Toilette', topNotes: 'Lemon, Sea Salt', stock: 8 },
  { id: 3, name: 'Spice Inferno', category: 'men', price: 99.99, originalPrice: 129.99, rating: 5, reviews: 156, image: '/images/pexels-karola-g-8361483.jpg', tags: ['spicy', 'warm'], type: 'Eau de Parfum', topNotes: 'Cardamom, Ginger', bestseller: true, limitedStock: true, stock: 3 },
  { id: 4, name: 'Silver Essence', category: 'men', price: 109.99, rating: 4, reviews: 87, image: '/images/pexels-mart-production-8450121.jpg', tags: ['aromatic', 'herbs'], type: 'Eau de Toilette', topNotes: 'Lavender, Sage', stock: 6 },
  { id: 5, name: 'Leather Legacy', category: 'men', price: 119.99, rating: 5, reviews: 203, image: '/images/pexels-karola-g-8361483.jpg', tags: ['leather', 'dark'], type: 'Eau de Parfum', topNotes: 'Leather, Tobacco', bestseller: true, stock: 10 },
  { id: 6, name: 'Urban Edge', category: 'men', price: 74.99, originalPrice: 94.99, rating: 4, reviews: 72, image: '/images/pexels-mart-production-8450121.jpg', tags: ['ginger', 'fresh'], type: 'Eau de Toilette', topNotes: 'Ginger, Orange', isNew: true, stock: 18 },
  { id: 7, name: 'Rose Garden', category: 'women', price: 89.99, originalPrice: 119.99, rating: 5, reviews: 241, image: '/images/pexels-mart-production-8450121.jpg', tags: ['floral', 'romantic'], type: 'Eau de Parfum', topNotes: 'Rose, Peony', bestseller: true, isNew: true, stock: 20 },
  { id: 8, name: 'Jasmine Dream', category: 'women', price: 99.99, rating: 5, reviews: 187, image: '/images/pexels-karola-g-8361483.jpg', tags: ['jasmine', 'vanilla'], type: 'Eau de Parfum', topNotes: 'Jasmine, Bergamot', bestseller: true, stock: 14 },
  { id: 9, name: 'Citrus Sunset', category: 'women', price: 79.99, rating: 4, reviews: 134, image: '/images/pexels-mart-production-8450121.jpg', tags: ['citrus', 'warm'], type: 'Eau de Toilette', topNotes: 'Orange, Grapefruit', stock: 11 },
  { id: 10, name: 'Floral Elegance', category: 'women', price: 109.99, rating: 5, reviews: 165, image: '/images/pexels-karola-g-8361483.jpg', tags: ['floral', 'exotic'], type: 'Eau de Parfum', topNotes: 'Orchid, Tuberose', bestseller: true, stock: 9 },
  { id: 11, name: 'Ocean Pearl', category: 'women', price: 84.99, rating: 4, reviews: 98, image: '/images/pexels-mart-production-8450121.jpg', tags: ['marine', 'fresh'], type: 'Body Lotion', topNotes: 'Marine, Lily', limitedStock: true, stock: 2 },
  { id: 12, name: 'Velvet Noir', category: 'women', price: 119.99, rating: 5, reviews: 219, image: '/images/pexels-karola-g-8361483.jpg', tags: ['dark', 'sensual'], type: 'Eau de Parfum', topNotes: 'Dark Rose, Oud', bestseller: true, stock: 16 },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([70, 130]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  // Filter logic
  const filteredFragrances = useMemo(() => {
    let filtered = allFragrances;

    if (searchQuery) {
      filtered = filtered.filter(f =>
        f.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(f => f.category === selectedCategory);
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(f => f.type === selectedType);
    }

    filtered = filtered.filter(f => f.price >= priceRange[0] && f.price <= priceRange[1]);

    // Sorting
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy, searchQuery, selectedType]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Width Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-24 md:pt-20"
        style={{
          backgroundImage: "url('/images/New West.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for content readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content - Centered */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center text-white space-y-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs font-bold text-gray-200 uppercase tracking-widest"
            >
              ✨ DISCOVER OUR COLLECTION
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Timeless Fragrances for Every Moment
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-100 leading-relaxed"
            >
              Explore our curated selection of premium fragrances, crafted with the finest ingredients. From bold and spicy to fresh and floral, find your signature scent.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-8 justify-center pt-8"
            >
              <div className="border-l-2 border-white pl-6 text-left">
                <p className="text-3xl md:text-4xl font-bold">{allFragrances.length}</p>
                <p className="text-xs text-gray-200 uppercase tracking-widest">Fragrances</p>
              </div>
              <div className="border-l-2 border-white pl-6 text-left">
                <p className="text-3xl md:text-4xl font-bold">2+</p>
                <p className="text-xs text-gray-200 uppercase tracking-widest">Categories</p>
              </div>
              <div className="border-l-2 border-white pl-6 text-left">
                <p className="text-3xl md:text-4xl font-bold">5★</p>
                <p className="text-xs text-gray-200 uppercase tracking-widest">Ratings</p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors"
              >
                Shop Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Shop Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Results Count, Sort, View Mode, and Search */}
        <div className="mb-8 space-y-4 lg:space-y-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Results Count */}
            <div>
              <p className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                SHOWING 1-{Math.min(9, filteredFragrances.length)} OF {filteredFragrances.length} RESULTS
              </p>
            </div>

            {/* Sort, View Mode, Search */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-4">
              {/* Default Sorting Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm font-bold text-gray-900 bg-white border-0 focus:outline-none focus:ring-0 cursor-pointer"
              >
                <option value="featured">DEFAULT SORTING</option>
                <option value="newest">NEWEST</option>
                <option value="price-low">PRICE: LOW TO HIGH</option>
                <option value="price-high">PRICE: HIGH TO LOW</option>
                <option value="rating">RATING</option>
              </select>

              {/* View Mode Icons */}
              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`text-xl transition-colors ${viewMode === 'grid' ? 'text-black' : 'text-gray-400'}`}
                  title="Grid view"
                >
                  ⊞⊞
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`text-xl transition-colors ${viewMode === 'list' ? 'text-black' : 'text-gray-400'}`}
                  title="List view"
                >
                  ≡
                </button>
              </div>

              {/* Search Box - Hidden on Mobile, visible on lg */}
              <div className="hidden lg:flex relative ml-4">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-3 py-2 bg-white border border-gray-300 text-sm focus:outline-none focus:ring-0 w-48"
                />
                <button className="px-3 py-2 bg-white border-l border-gray-300 text-gray-600 hover:text-gray-900">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Search on Mobile */}
          <div className="lg:hidden flex relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-300 text-sm focus:outline-none focus:ring-0"
            />
            <button className="px-3 py-2 bg-white border-l border-gray-300 text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Grid: Products on Left, Sidebar on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Products Grid - 3 columns */}
          <div className="lg:col-span-3">
            {filteredFragrances.length > 0 ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedCategory}-${priceRange[0]}-${priceRange[1]}-${sortBy}-${searchQuery}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredFragrances.slice(0, 9).map((fragrance, index) => (
                    <motion.div
                      key={fragrance.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="bg-white border border-gray-300 overflow-hidden hover:shadow-md transition-shadow duration-300">
                        {/* Product Image */}
                        <div className="relative h-80 bg-gray-100 border-b border-gray-300 overflow-hidden group">
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

                          {/* SALE Badge */}
                          {fragrance.originalPrice && (
                            <div className="absolute top-0 left-0 bg-black text-white px-3 py-2 text-xs font-bold uppercase tracking-widest">
                              SALE
                            </div>
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="p-4 text-center">
                          {/* Rating Stars */}
                          <div className="flex justify-center gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-lg ${i < fragrance.rating ? 'text-orange-400' : 'text-gray-300'}`}
                              >
                                ★
                              </span>
                            ))}
                          </div>

                          {/* Product Name */}
                          <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 h-10">
                            {fragrance.name}
                          </h3>

                          {/* Price */}
                          <div className="flex items-center justify-center gap-2">
                            {fragrance.originalPrice && (
                              <span className="text-xs text-gray-500 line-through">
                                ${fragrance.originalPrice.toFixed(2)}
                              </span>
                            )}
                            <p className="text-base font-bold text-gray-900">
                              ${fragrance.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-lg text-gray-600">No fragrances found. Try adjusting your filters.</p>
              </div>
            )}
          </div>

          {/* Sidebar - Categories on Right */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Categories */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-widest">
                  Categories
                </h3>
                <div className="space-y-2">
                  {[
                    { id: 'all', label: 'All Products' },
                    { id: 'men', label: 'For Him', count: allFragrances.filter(f => f.category === 'men').length },
                    { id: 'women', label: 'For Her', count: allFragrances.filter(f => f.category === 'women').length },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block w-full text-left text-sm transition-colors py-1 ${
                        selectedCategory === cat.id
                          ? 'text-gray-900 font-semibold'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      ○ {cat.label}
                      {cat.count && <span className="text-gray-400 ml-2">({cat.count})</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fragrance Type Filter */}
              <div className="border-t pt-6">
                <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-widest">
                  Fragrance Type
                </h3>
                <div className="space-y-2">
                  {[
                    { id: 'all', label: 'All Types' },
                    { id: 'Eau de Parfum', label: 'Eau de Parfum', count: allFragrances.filter(f => f.type === 'Eau de Parfum').length },
                    { id: 'Eau de Toilette', label: 'Eau de Toilette', count: allFragrances.filter(f => f.type === 'Eau de Toilette').length },
                    { id: 'Body Lotion', label: 'Body Lotion', count: allFragrances.filter(f => f.type === 'Body Lotion').length },
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`block w-full text-left text-sm transition-colors py-1 ${
                        selectedType === type.id
                          ? 'text-gray-900 font-semibold'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      ○ {type.label}
                      {type.count && <span className="text-gray-400 ml-2">({type.count})</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="border-t pt-6">
                <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-widest">
                  Filter Price
                </h3>
                <div className="space-y-4">
                  <div>
                    <input
                      type="range"
                      min="70"
                      max="130"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <input
                      type="range"
                      min="70"
                      max="130"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                  <div className="flex gap-2 text-xs font-semibold text-gray-900">
                    <span>${priceRange[0]}</span>
                    <span className="text-gray-400">-</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
