"use client";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#faf9f7] scroll-snap-y overflow-x-hidden px-6 md:px-12 py-24 flex flex-col gap-24">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      {/* Contact Section */}
      <section className="scroll-snap-align-start w-full max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-[#2a2a2a] font-playfair leading-tight">Contact Us</h1>
        <form className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-10 mb-10 flex flex-col gap-6">
          <input type="text" placeholder="Name" className="border-b border-gray-300 focus:border-teal-500 bg-transparent px-2 py-3 text-lg font-poppins transition-all duration-500" required />
          <input type="email" placeholder="Email" className="border-b border-gray-300 focus:border-teal-500 bg-transparent px-2 py-3 text-lg font-poppins transition-all duration-500" required />
          <textarea placeholder="Message" className="border-b border-gray-300 focus:border-teal-500 bg-transparent px-2 py-3 text-lg font-poppins resize-none transition-all duration-500" rows={4} required />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} type="submit" className="bg-gradient-to-r from-[#009688] to-[#00796b] text-white px-10 py-3 rounded-full font-semibold shadow-lg transition-all duration-500 cursor-pointer text-lg font-poppins relative overflow-hidden">
            <span className="relative z-10">Send Message</span>
            {/* shimmer effect */}
            <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer" />
          </motion.button>
        </form>
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener" className="bg-gradient-to-r from-[#009688] to-[#00796b] text-white px-10 py-3 rounded-full font-semibold shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer font-poppins">Order Now via WhatsApp</a>
          <div className="text-[#2a2a2a] font-poppins">
            <div className="font-bold uppercase tracking-wide text-[#c5a47e] mb-1">Store Info</div>
            <div>123 Fragrance Ave, Johannesburg</div>
            <div>Mon-Fri: 9am - 6pm</div>
            <div>Delivery: Gauteng & Nationwide</div>
          </div>
        </div>
      </section>
      {/* Delivery Section - Split Screen Luxury Layout */}
      <section className="scroll-snap-align-start flex flex-col md:flex-row items-center justify-center gap-0 mb-16 min-h-[560px]">
        {/* Left: Full-height image with gradient overlay */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="relative w-full md:w-1/2 flex-shrink-0 flex items-center justify-center min-h-[400px] md:min-h-[560px]">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#faf9f7]/80 via-[#c5a47e]/20 to-[#009688]/10 z-0" />
          <img src="/images/the-courier-guy-1-1024x684.webp" alt="Fragrance Delivery" className="relative z-10 w-96 h-72 md:w-full md:h-full object-cover rounded-3xl shadow-2xl" />
          {/* Minimalist gold corner accent */}
          <div className="absolute top-0 left-0 w-12 h-12 rounded-tr-3xl bg-[#c5a47e]/60 z-20" />
        </motion.div>
        {/* Right: Elegant text area */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="w-full md:w-1/2 flex flex-col items-start justify-center px-8 py-16 md:py-0">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#2a2a2a] font-playfair leading-tight">Delivery Services</h2>
          <p className="text-lg md:text-xl text-[#2a2a2a] mb-8 max-w-xl leading-relaxed font-poppins">Experience seamless delivery with SBK Fragrances. Every order is handled with care and delivered promptly to your door, whether in Gauteng or nationwide. Choose your preferred option at checkout for a truly elegant experience.</p>
          <div className="border-t border-gray-200 my-8 w-full" />
          <div className="mb-8 text-[#2a2a2a] text-base leading-relaxed font-poppins">Store Info: 123 Fragrance Ave, Johannesburg<br />Mon-Fri: 9am - 6pm<br />Delivery: Gauteng & Nationwide</div>
          <div className="w-full flex items-center justify-start mt-2">
            <motion.a whileHover={{ scale: 1.05 }} href="/shop" className="bg-gradient-to-r from-[#009688] to-[#00796b] text-white px-12 py-4 rounded font-bold shadow-lg transition-all duration-500 text-xl cursor-pointer font-poppins">Shop Fragrances</motion.a>
          </div>
        </motion.div>
      </section>
      {/* Footer CTA Bar */}
      <footer className="w-full py-10 flex flex-col items-center justify-center bg-[#faf9f7] border-t border-gray-200 mt-10">
        <div className="text-xl md:text-2xl font-playfair text-[#2a2a2a] mb-4 text-center">Join the world of refined fragrance. Subscribe for new drops.</div>
        <form className="flex flex-col sm:flex-row items-center gap-4">
          <input type="email" placeholder="Your email" className="border-b border-[#c5a47e] bg-transparent px-4 py-2 text-lg font-poppins focus:border-teal-500 transition-all duration-500" required />
          <button type="submit" className="bg-gradient-to-r from-[#c5a47e] to-[#009688] text-white px-8 py-2 rounded-full font-semibold shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer font-poppins">Subscribe</button>
        </form>
      </footer>
    </div>
  );
}
