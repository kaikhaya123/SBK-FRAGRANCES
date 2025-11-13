'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProductCard({ product, index, onAdd, currency = 'ZAR', locale = 'en-ZA' }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState('55ml');
  const images = (product.images && product.images.length) ? product.images : (product.image ? [product.image] : []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Deterministic formatter to avoid SSR/CSR Intl mismatches.
  // Formats numbers with comma thousand separators and dot decimals, e.g. "R 1,234.50".
  const formatPrice = (amount) => {
    if (amount === undefined || amount === null) return '';
    const fixed = Number(amount).toFixed(2);
    // insert comma thousands separators
    const parts = fixed.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const symbol = (currency === 'ZAR' || currency === 'R') ? 'R' : currency;
    return `${symbol} ${parts.join('.')}`;
  };

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: index * 0.1, duration: 0.6, ease: 'easeOut' }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.08 },
    transition: { duration: 0.4, ease: 'easeOut' }
  };

  // Auto-rotate images every 3s. Pause while hovered.
  useEffect(() => {
    if (!images.length) return undefined;
    if (isHovered) return undefined; // pause rotation while hovered

    const id = setInterval(() => {
      setCurrentImageIndex(i => (i + 1) % images.length);
    }, 3000);

    return () => clearInterval(id);
  }, [images.length, isHovered]);

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 },
    transition: { duration: 0.3 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500">
        {/* Product Image Container */}
        <div className="relative h-72 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <motion.div
            variants={imageVariants}
            animate={isHovered ? 'hover' : 'initial'}
            transition={imageVariants.transition}
            className="w-full h-full flex items-center justify-center"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('${images[currentImageIndex] || product.image}')`,
                backgroundColor: product.color || '#f3f4f6'
              }}
            />
          </motion.div>

          {/* Hover Overlay */}
          <motion.div
            variants={overlayVariants}
            animate={isHovered ? 'hover' : 'initial'}
            transition={overlayVariants.transition}
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end justify-center pb-8"
          >
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="px-8 py-3 bg-white text-black font-semibold tracking-wider uppercase text-sm rounded-none hover:bg-black hover:text-white transition-all duration-300 shadow-lg"
            >
              View Details
            </motion.button>
          </motion.div>

          {/* Badge for Category */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-black shadow-lg">
            {product.category}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
            {product.name}
          </h3>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-lg ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-xs text-gray-500">({product.reviews || 0})</span>
            </div>
          )}

          {/* Price and Features */}
          <div className="flex items-baseline gap-2 mb-4">
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(product.sizes && product.sizes[selectedSize] ? product.sizes[selectedSize] : product.price)}
            </span>
            {product.discount && (
              <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">
                Save {product.discount}%
              </span>
            )}
          </div>

          {/* Size selector */}
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-semibold">Size</p>
            <div className="flex gap-2">
              {['55ml','100ml'].map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded-md text-sm ${selectedSize === size ? 'bg-black text-white border-black' : 'bg-white text-gray-800 border-gray-200'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Features */}
          {product.features && (
            <div className="mb-4 pb-4 border-b border-gray-200">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-semibold">Key Notes:</p>
              <div className="flex gap-2 flex-wrap">
                {product.features.map((feature, idx) => (
                  <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAdd ? onAdd(product, selectedSize) : null}
            className={`w-full py-3 font-semibold uppercase tracking-widest text-sm rounded-none transition-colors duration-300 group/btn relative overflow-hidden ${product.stock === 0 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-black text-white hover:bg-indigo-600'}`}
          >
            <span className="relative z-10">Add to Cart</span>
            <motion.div
              className="absolute inset-0 bg-indigo-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
              style={{ zIndex: 0 }}
            />
          </motion.button>

          {/* Stock Status */}
          {product.stock !== undefined && (
            <p className={`text-xs mt-3 text-center font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 0 ? 'In stock' : 'Out of stock'}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
