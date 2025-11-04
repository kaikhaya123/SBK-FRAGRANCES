import React, { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
  <section className="relative bg-white py-8 px-3 sm:py-10 sm:px-4 md:py-12 md:px-6 rounded-2xl shadow-glass my-8 sm:my-10 md:my-12 overflow-hidden border border-black">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 max-w-5xl mx-auto">
      {/* Image on left for desktop, top for mobile */}
      <div className="w-full md:w-1/2 flex justify-center mb-4 sm:mb-6 md:mb-0">
        <img
          src="/images/newsletter-flower.jpg"
          alt="Fragrance flowers"
          className="rounded-xl shadow-lg w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover border-4 border-black"
          style={{ fontFamily: 'inherit' }}
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-black" style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}>
          Join the SBK Fragrances Family
        </h2>
        <p className="mb-4 sm:mb-5 text-gray-900 text-base sm:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
          Sign up for our newsletter and get <span className="font-semibold text-black">exclusive offers</span>, fragrance tips, and early access to new arrivals!
        </p>
        {submitted ? (
          <p className="text-green-700 font-semibold text-base sm:text-lg">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center sm:items-end justify-center md:justify-start w-full">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 sm:px-5 sm:py-3 rounded-full border border-black focus:outline-none focus:ring-2 focus:ring-black w-full sm:w-auto text-base bg-white text-black"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors shadow w-full sm:w-auto"
              style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  </section>
  );
}
