'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    icon: '🎁',
    highlight: false,
    bgGradient: 'from-slate-900/40 to-slate-800/40',
    borderColor: 'border-slate-700/50',
    buttonStyle: 'bg-slate-800 hover:bg-slate-700'
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
    icon: '🚗',
    highlight: false,
    bgGradient: 'from-slate-900/40 to-slate-800/40',
    borderColor: 'border-slate-700/50',
    buttonStyle: 'bg-slate-800 hover:bg-slate-700'
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
    icon: '👑',
    highlight: true,
    bgGradient: 'from-amber-900/20 to-slate-900/40',
    borderColor: 'border-amber-600/50',
    buttonStyle: 'bg-amber-700 hover:bg-amber-600'
  }
];

export default function ResellerProgram() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-transparent via-black/2 to-transparent relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/30">
            <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">Wholesale Opportunity</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Start Your Perfume
            <br />
            <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
              Business with Us Today
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Join our growing network of resellers and entrepreneurs. Access premium fragrance stock at wholesale prices with attractive margins and comprehensive support.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(pkg.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative group rounded-2xl overflow-hidden transition-all duration-500 transform ${
                hoveredId === pkg.id ? 'lg:-translate-y-3' : ''
              } ${pkg.highlight ? 'lg:scale-105' : ''}`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pkg.bgGradient} backdrop-blur-sm`} />
              <div className={`absolute inset-0 border ${pkg.borderColor} transition-all duration-500 ${
                hoveredId === pkg.id ? 'border-amber-500/70' : ''
              }`} />

              {/* Highlight Badge */}
              {pkg.highlight && (
                <div className="absolute top-0 right-0 px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs font-bold uppercase tracking-wider">
                  Best Value
                </div>
              )}

              {/* Content Container */}
              <div className="relative p-8 flex flex-col h-full">
                {/* Icon & Title */}
                <div className="mb-6">
                  <div className="text-5xl mb-4 inline-block">{pkg.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{pkg.description}</p>
                </div>

                {/* Price & ROI Section */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/10">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-gray-600 text-sm">Investment</span>
                    <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                  </div>
                  <div className="border-t border-white/10 pt-3">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-semibold text-gray-600 uppercase">Profit Margin</span>
                      <span className="text-lg font-bold text-amber-700">{pkg.margin}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-semibold text-gray-600 uppercase">Potential Return</span>
                      <span className="text-sm font-bold text-green-700">{pkg.potentialReturn}</span>
                    </div>
                  </div>
                </div>

                {/* Includes List */}
                <div className="mb-8 flex-grow">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-4 tracking-wider">What's Included</p>
                  <ul className="space-y-3">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <svg className="w-4 h-4 mr-3 mt-0.5 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-4 rounded-lg font-bold text-white uppercase tracking-wider text-sm transition-all duration-300 ${pkg.buttonStyle}`}
                >
                  Get Started
                </motion.button>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                pkg.highlight ? 'bg-gradient-to-br from-amber-500/10 to-transparent' : 'bg-gradient-to-br from-slate-400/10 to-transparent'
              }`} />
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900/30 to-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30 p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
              <p className="text-sm text-gray-700 font-semibold uppercase tracking-wider">Authentic Products</p>
              <p className="text-sm text-gray-600 mt-2">Premium quality fragrances with guaranteed authenticity</p>
            </div>
            <div className="text-center border-l border-r border-slate-600/30">
              <div className="text-4xl font-bold text-amber-600 mb-2">24/7</div>
              <p className="text-sm text-gray-700 font-semibold uppercase tracking-wider">Support</p>
              <p className="text-sm text-gray-600 mt-2">Dedicated support team ready to assist your business</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">Fast</div>
              <p className="text-sm text-gray-700 font-semibold uppercase tracking-wider">Delivery</p>
              <p className="text-sm text-gray-600 mt-2">Quick turnaround on orders and restocking</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-700 text-lg mb-6">
            Ready to join the SBK Fragrances reseller network?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl"
          >
            <span className="mr-3">Become a Reseller Today</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
          <p className="text-xs text-gray-600 mt-6">
            Contact us at <span className="font-semibold text-gray-700">hello@sbkfragrances.com</span> for more details
          </p>
        </motion.div>
      </div>
    </section>
  );
}
