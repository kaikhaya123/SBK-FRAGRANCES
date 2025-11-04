import React from "react";

const testimonials = [
  {
    name: "Thando M.",
    quote: "The scents are amazing and last all day! Highly recommend SBK Fragrances.",
    video: "/videos/testimonial1.mp4"
  },
  {
    name: "Sipho K.",
    quote: "Fast delivery and great customer service. I love my new perfume!",
    video: "/videos/testimonial2.mp4"
  },
  {
    name: "Lerato S.",
    quote: "Wide selection and genuine products. SBK is my go-to fragrance shop.",
    video: "/videos/testimonial3.mp4"
  }
];

export default function CustomerTestimonials() {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Hear From Our Customers</h2>
          <div className="grid grid-cols-2 gap-x-10 gap-y-8">
            <div>
              <div className="text-3xl font-bold text-gray-700 mb-2">01</div>
              <div className="font-semibold text-lg text-gray-900 mb-1">{testimonials[0].name}</div>
              <div className="text-gray-500 text-sm">{testimonials[0].quote}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-700 mb-2">02</div>
              <div className="font-semibold text-lg text-gray-900 mb-1">{testimonials[1].name}</div>
              <div className="text-gray-500 text-sm">{testimonials[1].quote}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-700 mb-2">03</div>
              <div className="font-semibold text-lg text-gray-900 mb-1">{testimonials[2].name}</div>
              <div className="text-gray-500 text-sm">{testimonials[2].quote}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-700 mb-2">04</div>
              <div className="font-semibold text-lg text-gray-900 mb-1">Share Your Experience</div>
              <div className="text-gray-500 text-sm">Your review could be featured here! Let us know what you think of SBK Fragrances.</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-7/12 flex justify-center">
          <video
            src={testimonials[0].video}
            className="rounded-3xl shadow-2xl object-cover w-full max-w-2xl h-[32rem] border-4 border-gray-300"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
