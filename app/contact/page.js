'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f5f0] to-white overflow-hidden">
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
            src="/images/pexels-alex-andrews-271121-821754.jpg"
            alt="Contact SBK Fragrances"
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
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
            style={{ fontFamily: 'Playfair Display, serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            We're here to assist you on your fragrance journey
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-xl p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-wide"
                style={{ fontFamily: 'Oswald, sans-serif' }}>
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-black focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-black focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select
                  className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-black focus:outline-none transition-colors duration-300"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="product">Product Information</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 resize-none"
                  required
                ></textarea>
              </div>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-black hover:bg-gray-900 text-white py-4 rounded-none uppercase tracking-widest text-sm transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Store Location */}
            <div className="bg-white/80 backdrop-blur rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-light mb-6 uppercase tracking-wider"
                  style={{ fontFamily: 'Oswald, sans-serif' }}>
                Visit Our Store
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  232 Effingham Road, Durban North, South Africa
                </p>
                <p className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Mon-Fri: 9am - 6pm
                </p>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="bg-black text-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-light mb-6 uppercase tracking-wider"
                  style={{ fontFamily: 'Oswald, sans-serif' }}>
                Quick Contact
              </h3>
              <div className="space-y-4">
                <a href="https://wa.me/1234567890" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-3 hover:text-gray-300 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp: 0618660115
                </a>
                <a href="tel:+27123456789" 
                   className="flex items-center gap-3 hover:text-gray-300 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Phone: +27 681 660 115
                </a>
                <a href="mailto:info@sbkfragrances.com" 
                   className="flex items-center gap-3 hover:text-gray-300 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email: sbkfragrances232@gmail.com
                </a>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-gradient-to-br from-[#f8f5f0] to-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-light mb-6 uppercase tracking-wider"
                  style={{ fontFamily: 'Oswald, sans-serif' }}>
                Delivery Information
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>
                    We offer nationwide delivery through our trusted courier partners.
                    Standard delivery takes 2-4 business days within Gauteng,
                    and 3-5 business days for other provinces.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
