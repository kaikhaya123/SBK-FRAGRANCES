'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
const MotionLink = motion(Link);
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

// List row for mobile / list view — uses local state for size selection
function ListProductRow({ fragrance, onAdd }) {
  const [selectedSize, setSelectedSize] = React.useState('55ml');
  const sizes = fragrance.sizes || { '55ml': fragrance.price, '100ml': Math.round(fragrance.price * 1.7) };
  const price = sizes[selectedSize] || fragrance.price;

  return (
    <div className="w-full bg-white border border-gray-100 rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4">
      <div className="w-full sm:w-40 h-36 bg-cover bg-center rounded-md shadow-sm flex-shrink-0" style={{ backgroundImage: `url('${fragrance.image}')` }} />

      <div className="flex-1 w-full">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="text-lg font-semibold text-gray-900">{fragrance.name}</h4>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{fragrance.topNotes || fragrance.description || ''}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">R {Number(price).toFixed(2)}</div>
            <div className={`text-xs font-semibold mt-1 ${fragrance.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {fragrance.stock > 0 ? 'In stock' : 'Out of stock'}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex gap-2">
            {['55ml','100ml'].map(sz => (
              <button
                key={sz}
                onClick={() => setSelectedSize(sz)}
                className={`px-3 py-1 border rounded-md text-sm ${selectedSize === sz ? 'bg-black text-white border-black' : 'bg-white text-gray-800 border-gray-200'}`}
              >
                {sz}
              </button>
            ))}
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onAdd(fragrance, selectedSize)}
              className={`w-full sm:w-auto px-4 py-2 bg-black text-white font-semibold rounded-md ${fragrance.stock === 0 ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sample fragrance data (prices in South African Rand - ZAR)
const allFragrances = [
  // Men's Fragrances (25 items)
  { id: 1, name: 'New West', category: 'men', price: 350.00, rating: 5, reviews: 128, image: '/images/New West.jpg', tags: ['woody', 'bold'], type: 'Eau de Parfum', topNotes: 'Bergamot, Pepper', bestseller: true, isNew: true, stock: 12 },
  { id: 2, name: 'Lacoste White', category: 'men', price: 350.00, rating: 4, reviews: 95, image: '/images/Lacoste White.jpg', tags: ['aquatic', 'fresh'], type: 'Eau de Toilette', topNotes: 'Lemon, Sea Salt', stock: 8 },
  { id: 3, name: 'Kaishiri Oud', category: 'men', price: 350.00, rating: 5, reviews: 156, image: '/images/Kaishiri.jpg', tags: ['spicy', 'warm'], type: 'Eau de Parfum', topNotes: 'Cardamom, Ginger', bestseller: true, limitedStock: true, stock: 3 },
  { id: 4, name: 'Black Oud', category: 'men', price: 350.00, rating: 4, reviews: 87, image: '/images/blackOud.jpg', tags: ['aromatic', 'herbs'], type: 'Eau de Toilette', topNotes: 'Lavender, Sage', stock: 6 },
  { id: 5, name: 'Oud Satin Mood', category: 'men', price: 350.00, rating: 5, reviews: 203, image: '/images/Oud Satin.jpg', tags: ['leather', 'dark'], type: 'Eau de Parfum', topNotes: 'Leather, Tobacco', bestseller: true, stock: 10 },
  { id: 6, name: 'Barakkat Rouge', category: 'men', price: 350.00, rating: 4, reviews: 72, image: '/images/Baccat.jpg', tags: ['ginger', 'fresh'], type: 'Eau de Toilette', topNotes: 'Ginger, Orange', isNew: true, stock: 18 },
  { id: 7, name: 'Royal Oud', category: 'men', price: 350.00, rating: 5, reviews: 241, image: '/images/Royal Oud.jpg', tags: ['oud', 'exotic'], type: 'Eau de Parfum', topNotes: 'Rose, Oud', bestseller: true, stock: 20 },
  { id: 8, name: 'White Oud', category: 'men', price: 350.00, rating: 5, reviews: 187, image: '/images/WhiteOud.jpg', tags: ['fruity', 'vanilla'], type: 'Eau de Parfum', topNotes: 'Passion Fruit, Vanilla', bestseller: true, stock: 14 },
  { id: 9, name: 'Shemmiring Flowers', category: 'men', price: 350.00, rating: 4, reviews: 134, image: '/images/Flowers.jpg', tags: ['tobacco', 'warm'], type: 'Eau de Toilette', topNotes: 'Tobacco, Cedar', stock: 11 },
  { id: 10, name: 'Gentlemen', category: 'men', price: 350.00, rating: 5, reviews: 165, image: '/images/ssstik.io_1762256007905.jpeg', tags: ['aquatic', 'fresh'], type: 'Eau de Parfum', topNotes: 'Sea Salt, Driftwood', bestseller: true, stock: 9 },
  { id: 11, name: 'Burberry', category: 'men', price: 350.00, rating: 4, reviews: 98, image: '/images/pexels-mart-production-8450121.jpg', tags: ['spicy', 'warm'], type: 'Eau de Toilette', topNotes: 'Clove, Cinnamon', limitedStock: true, stock: 5 },
  { id: 12, name: 'Black Opium', category: 'men', price: 350.00, rating: 5, reviews: 219, image: '/images/Black Optium.jpg', tags: ['dark', 'sensual'], type: 'Eau de Parfum', topNotes: 'Dark Rose, Oud', bestseller: true, stock: 16 },
  { id: 13, name: 'Issey Miyake', category: 'men', price: 350.00, rating: 4, reviews: 112, image: '/images/Issey .jpg', tags: ['aquatic', 'citrus'], type: 'Eau de Toilette', topNotes: 'Lemon, Mint', stock: 15 },
  { id: 14, name: 'Versace Erose', category: 'men', price: 350.00, rating: 5, reviews: 145, image: '/images/Versace .jpg', tags: ['woody', 'amber'], type: 'Eau de Parfum', topNotes: 'Amber, Sandalwood', isNew: true, stock: 9 },
  { id: 15, name: 'CK One ', category: 'men', price: 350.00, rating: 4, reviews: 88, image: '/images/CK Code.jpg', tags: ['woody', 'fresh'], type: 'Eau de Toilette', topNotes: 'Pine, Eucalyptus', stock: 22 },
  { id: 16, name: 'Black Code', category: 'men', price: 350.00, rating: 5, reviews: 176, image: '/images/Black Code.jpg', tags: ['amber', 'warm'], type: 'Eau de Parfum', topNotes: 'Honey, Amber', bestseller: true, stock: 11 },
  { id: 17, name: 'Black Xs ', category: 'men', price: 350.00, rating: 4, reviews: 107, image: '/images/Creed.jpg', tags: ['citrus', 'fresh'], type: 'Eau de Toilette', topNotes: 'Orange, Grapefruit', stock: 17 },
  { id: 18, name: 'Diesel', category: 'men', price: 350.00, rating: 5, reviews: 192, image: '/images/Bul.jpg', tags: ['dark', 'woody'], type: 'Eau de Parfum', topNotes: 'Black Pepper, Vetiver', bestseller: true, limitedStock: true, stock: 4 },
  { id: 19, name: 'YSL', category: 'men', price: 350.00, rating: 4, reviews: 99, image: '/images/YSL.jpg', tags: ['aquatic', 'fruity'], type: 'Eau de Toilette', topNotes: 'Mango, Sea Breeze', stock: 13 },
  { id: 20, name: 'Interlude', category: 'men', price: 350.00, rating: 5, reviews: 158, image: '/images/Interlude.jpg', tags: ['amber', 'warm'], type: 'Eau de Parfum', topNotes: 'Saffron, Vanilla', isNew: true, bestseller: true, stock: 19 },
  { id: 21, name: 'Invictus', category: 'men', price: 350.00, rating: 4, reviews: 84, image: '/images/Invitus.jpg', tags: ['fresh', 'cool'], type: 'Eau de Toilette', topNotes: 'Mint, Bergamot', stock: 20 },
  { id: 22, name: 'Bulgari', category: 'men', price: 350.00, rating: 5, reviews: 201, image: '/images/pexels-karola-g-8361483.jpg', tags: ['woody', 'leather'], type: 'Eau de Parfum', topNotes: 'Oak, Leather', bestseller: true, stock: 8 },
  { id: 23, name: 'Dunhill Desire', category: 'men', price: 350.00, rating: 5, reviews: 169, image: '/images/Dunhill.jpg', tags: ['dark', 'mysterious'], type: 'Eau de Parfum', topNotes: 'Black Musk, Iris', bestseller: true, limitedStock: true, stock: 6 },
  { id: 24, name: 'Adventures Creed', category: 'men', price: 350.00, rating: 4, reviews: 115, image: '/images/Creed.jpg', tags: ['fresh', 'adventure'], type: 'Eau de Toilette', topNotes: 'Basil, Lemongrass', stock: 18 },
  
  // Women's Fragrances
  { id: 26, name: 'Hypnotic Poison', category: 'women', price: 300.00, rating: 5, reviews: 241, image: '/images/Hynotic .jpg', tags: ['floral', 'romantic'], type: 'Eau de Parfum', topNotes: 'Rose, Peony', bestseller: true, isNew: true, stock: 20 },
  { id: 27, name: 'Flower Bomb', category: 'women', price: 350.00, rating: 5, reviews: 187, image: '/images/Flower Bomb.jpg', tags: ['jasmine', 'vanilla'], type: 'Eau de Parfum', topNotes: 'Jasmine, Bergamot', bestseller: true, stock: 14 },
  { id: 28, name: 'CK Downtown ', category: 'women', price: 350.00, rating: 4, reviews: 134, image: '/images/CK Downtown.jpg', tags: ['citrus', 'warm'], type: 'Eau de Toilette', topNotes: 'Orange, Grapefruit', stock: 11 },
  { id: 29, name: 'Olympea', category: 'women', price: 300.00, rating: 5, reviews: 165, image: '/images/Olympie.jpg', tags: ['floral', 'exotic'], type: 'Eau de Parfum', topNotes: 'Orchid, Tuberose', bestseller: true, stock: 9 },
  { id: 30, name: 'Nude', category: 'women', price: 350.00, rating: 4, reviews: 98, image: '/images/Nude.jpg', tags: ['marine', 'fresh'], type: 'Body Lotion', topNotes: 'Marine, Lily', limitedStock: true, stock: 2 },
  { id: 31, name: 'La Vie Est Belle', category: 'women', price: 350.00, rating: 5, reviews: 142, image: '/images/La vile.jpg', tags: ['floral', 'velvety'], type: 'Eau de Parfum', topNotes: 'Peony, Vanilla', stock: 12 },
  { id: 32, name: 'Channel No 5', category: 'women', price: 350.00, rating: 4, reviews: 88, image: '/images/Channel No 5.jpg', tags: ['citrus', 'fresh'], type: 'Eau de Toilette', topNotes: 'Orange, Bergamot', stock: 15 },
  { id: 33, name: 'Ted Lupidus', category: 'women', price: 350.00, rating: 5, reviews: 176, image: '/images/Ted .jpg', tags: ['rose', 'sensual'], type: 'Eau de Parfum', topNotes: 'Rose, Amber', bestseller: true, stock: 9 },
  { id: 34, name: 'Fantasy', category: 'women', price: 350.00, rating: 4, reviews: 64, image: '/images/Fantasy.jpg', tags: ['marine', 'soft'], type: 'Eau de Toilette', topNotes: 'Sea Salt, Lily', stock: 11 },
  { id: 35, name: 'Blossom Love', category: 'women', price: 350.00, rating: 4, reviews: 101, image: '/images/Blossom Love.jpg', tags: ['fruity', 'floral'], type: 'Eau de Parfum', topNotes: 'Peach, Jasmine', stock: 14 },
  { id: 36, name: 'Shemmiring Flowers', category: 'women', price: 350.00, rating: 5, reviews: 132, image: '/images/Shemmiring Flowers.png', tags: ['amber', 'warm'], type: 'Eau de Parfum', topNotes: 'Amber, Sandalwood', stock: 8 },
  { id: 37, name: 'Black Optium', category: 'women', price: 350.00, rating: 4, reviews: 73, image: '/images/Black Optium.jpg', tags: ['vanilla', 'soft'], type: 'Eau de Parfum', topNotes: 'Vanilla, Musk', stock: 10 },
  { id: 38, name: 'Burberry', category: 'women', price: 350.00, rating: 5, reviews: 159, image: '/images/Burberry.jpg', tags: ['floral', 'green'], type: 'Eau de Parfum', topNotes: 'Jasmine, Green Leaves', stock: 13 },
];

export default function ShopPage() {
  const { addToCart, notify } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Handle Add to Cart
  const handleAddToCart = (fragrance, size = '55ml') => {
    const price = fragrance.sizes && fragrance.sizes[size] ? fragrance.sizes[size] : fragrance.price;

    const fragranceForCart = {
      id: fragrance.id,
      name: fragrance.name,
      price,
      image: fragrance.image,
      type: fragrance.type
    };

    addToCart(fragranceForCart, size);

    notify(`${fragrance.name} (${size}) added to cart.`, {
      id: fragrance.id,
      name: fragrance.name,
      image: fragrance.image,
      selectedSize: size,
      price,
      currency: 'ZAR',
      locale: 'en-ZA'
    });
  };

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

  // Pagination logic
  const totalPages = Math.ceil(filteredFragrances.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFragrances = filteredFragrances.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
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
          backgroundImage: "url('/images/pexels-wulfranodelangel-31152155.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
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
              DISCOVER OUR COLLECTION
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

      {/* Category Selector Section - Split Image Cards */}
      <div className="w-full bg-gradient-to-b from-white to-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-widest mb-4">
              Choose Your Collection
            </h2>
            <p className="text-black-600 text-lg max-w-2xl mx-auto">
              Discover fragrances curated just for you. Explore our timeless selections for men and elegant collections for women.
            </p>
            <div className="mt-6 h-1 w-24 bg-black mx-auto" />
          </motion.div>

          {/* Split Image Cards - updated to three-card design (For Him, For Her, Defusers) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* compute counts and formatter */}
            {(() => {
              const fmt = (n) => new Intl.NumberFormat('en-GB').format(n);
              const himCount = allFragrances.filter(f => f.category === 'men').length;
              const herCount = allFragrances.filter(f => f.category === 'women').length;
              // try to infer diffusers by type or tag; fallback to 0
              const diffCount = allFragrances.filter(f => (f.type && f.type.toLowerCase().includes('diffuser')) || (f.tags && f.tags.includes('diffuser'))).length || 0;
              const cards = [
                { key: 'men', title: 'For Him', subtitle: 'Bold. Sophisticated. Timeless.', img: '/images/download (1) (1).jpg', stat: himCount, statLabel: 'Fragrances', cta: 'Explore Collection' },
                { key: 'women', title: 'For Her', subtitle: 'Elegant. Mesmerizing. Unforgettable.', img: '/images/Using Aromatherapy to Create Memories _ Aromatherapy Associates.jpg', stat: herCount, statLabel: 'Fragrances', cta: 'Explore Collection' },
                { key: 'diffusers', title: 'Defusers', subtitle: 'Fresh. Long-lasting. Popular.', img: '/images/Luxury Scent Car Diffuser - Our Way.jpg', stat: diffCount, statLabel: 'Items', cta: 'Explore Collection' }
              ];

              return cards.map((card, i) => (
                <MotionLink
                  key={card.key}
                  href={`/shop?category=${card.key === 'diffusers' ? 'diffusers' : card.key}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.12 * i }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group h-80 md:h-[500px] rounded-2xl overflow-hidden cursor-pointer bg-white shadow-lg inline-block no-underline"
                >
                  {/* Background Image with subtle parallax/scale on hover */}
                  <motion.div
                    className="absolute inset-0 w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: `url('${card.img}')` }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Soft subtle gradient overlay (above label) so label peeks through without obscuring image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/10 to-transparent transition-colors duration-400 z-20 pointer-events-none group-hover:via-black/12" />

                  {/* Large background typography effect (appears integrated with image) */}
                  {/* Large faint label placed under the soft gradient so it reads as background typography */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-hidden">
                    <span className="text-[4rem] sm:text-[5.5rem] md:text-[8rem] lg:text-[9rem] leading-none font-extrabold text-white opacity-25 transition-opacity duration-300 group-hover:opacity-40 whitespace-nowrap">
                      {card.key === 'men' ? 'MEN' : card.key === 'women' ? 'WOMEN' : 'DEFUSES'}
                    </span>
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                </MotionLink>
              ));Can 
            })()}
          </div>
          
        </div>
      </div>

      {/* Shop Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Results Count, Sort, View Mode, and Search */}
        <div className="mb-8 space-y-4 lg:space-y-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Results Count */}
            <div>
              <p className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                SHOWING {startIndex + 1}-{Math.min(endIndex, filteredFragrances.length)} OF {filteredFragrances.length} RESULTS
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
              <div className="space-y-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`page-${currentPage}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className={
                      viewMode === 'grid'
                        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                        : 'flex flex-col gap-4'
                    }
                  >
                    {currentFragrances.map((fragrance, index) => (
                      <motion.div
                        key={fragrance.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {viewMode === 'grid' ? (
                          <ProductCard
                            product={{
                              ...fragrance,
                              sizes: fragrance.sizes || { '55ml': fragrance.price, '100ml': Math.round(fragrance.price * 1.7) }
                            }}
                            index={index}
                            onAdd={handleAddToCart}
                          />
                        ) : (
                          <ListProductRow
                            fragrance={{
                              ...fragrance,
                              sizes: fragrance.sizes || { '55ml': fragrance.price, '100ml': Math.round(fragrance.price * 1.7) }
                            }}
                            onAdd={handleAddToCart}
                          />
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-gray-200">
                    {/* Previous Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className={`flex items-center gap-2 px-6 py-3 font-bold uppercase tracking-widest text-sm transition-all ${
                        currentPage === 1
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      PREVIOUS
                    </motion.button>

                    {/* Page Indicators */}
                    <div className="flex items-center gap-2">
                      {[...Array(totalPages)].map((_, pageNum) => {
                        const pageNumber = pageNum + 1;
                        return (
                          <motion.button
                            key={pageNumber}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setCurrentPage(pageNumber)}
                            className={`w-10 h-10 flex items-center justify-center font-bold rounded-full transition-all ${
                              currentPage === pageNumber
                                ? 'bg-black text-white'
                                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                            }`}
                          >
                            {pageNumber}
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* Next Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className={`flex items-center gap-2 px-6 py-3 font-bold uppercase tracking-widest text-sm transition-all ${
                        currentPage === totalPages
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      NEXT
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                )}
              </div>
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
                      min="0"
                      max="1000"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                  <div className="flex gap-2 text-xs font-semibold text-gray-900">
                    <span>R{priceRange[0]}</span>
                    <span className="text-gray-400">-</span>
                    <span>R{priceRange[1]}</span>
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
