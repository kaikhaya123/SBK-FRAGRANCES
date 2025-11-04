import React, { useEffect, useRef } from "react";
// ...existing code...


export default function WhyChooseUs() {
  // ...existing code...

  return (
    <section className="bg-white-100 py-20 px-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Why Choose Us</h2>
          <div className="grid grid-cols-2 gap-x-10 gap-y-8">
            <div>
              <div className="text-3xl font-bold text-gray-700 mb-2">01</div>
              <div className="font-semibold text-lg text-gray-900 mb-1">Quality Products</div>
              <div className="text-gray-500 text-sm">We sell good quality products that meet the highest standards for our customers.</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-700 mb-2">02</div>
              <div className="font-semibold text-lg text-gray-900 mb-1">Distributor Opportunity</div>
              <div className="text-gray-500 text-sm">We offer the stock price for distributors who want to start their own business and grow with us.</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-700 mb-2">03</div>
              <div className="font-semibold text-lg text-gray-900 mb-1">Wide Selection of Scents</div>
              <div className="text-gray-500 text-sm">Discover a diverse range of fragrances to suit every style, mood, and occasion.</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-700 mb-2">04</div>
              <div className="font-semibold text-lg text-gray-900 mb-1">Trusted Quality & Authenticity</div>
              <div className="text-gray-500 text-sm">All our perfumes are genuine, high-quality, and sourced from reputable brands and suppliers.</div>
            </div>
          </div>
        </div>
          <div className="w-full md:w-5/12 flex items-center justify-center min-h-[24rem] md:ml-8">
            <div className="relative w-full max-w-xl h-[30rem] flex items-center justify-center">
              <img
                src="/images/ssstik.io_1762179824470.jpeg"
                alt="Why Choose Us"
                className="object-cover w-full h-full"
                style={{objectPosition: 'center', clipPath: 'polygon(0 0, 100% 0, 100% 85%, 80% 100%, 0 100%)'}}
              />
              <div className="absolute inset-0 pointer-events-none" style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 80% 100%, 0 100%)', background: 'linear-gradient(90deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.08) 100%)'}}></div>
            </div>
        </div>
      </div>
    </section>
  );
}
