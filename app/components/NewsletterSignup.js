"use client";
import React, { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="relative bg-white bg-center bg-cover py-8 px-3 sm:py-10 sm:px-4 md:py-12 md:px-6 rounded-2xl shadow-glass my-8 sm:my-10 md:my-12 overflow-hidden"
      style={{
  backgroundImage: "url('/images/webp/front-view-men-perfume-branch-rotten-wood-dark-blue-background.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-2xl mx-auto bg-white/90 backdrop-blur-md p-8 sm:p-10 md:p-12 rounded-3xl shadow-xl text-center">
        <span className="block text-xs tracking-[0.3em] text-gray-500 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          EXCLUSIVE MEMBERSHIP
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-5 text-black tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>
          Join the SBK Fragrances Family
        </h2>
        <p className="mb-6 sm:mb-8 text-gray-800 text-base sm:text-lg leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Sign up for our newsletter and get <span className="font-medium text-black">exclusive offers</span>, fragrance tips, and early access to new arrivals
        </p>
        {submitted ? (
          <p className="text-green-800 font-light text-lg sm:text-xl tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>Thank you for joining our exclusive community</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-end justify-center w-full max-w-xl mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-3 sm:px-7 sm:py-4 rounded-full focus:outline-none focus:ring-1 focus:ring-black/20 w-full sm:w-auto text-base bg-white/80 text-black placeholder:text-gray-500"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full font-light hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto tracking-wider text-sm uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em' }}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
