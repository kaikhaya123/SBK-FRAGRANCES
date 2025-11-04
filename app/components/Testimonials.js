import React, { useRef, useState } from "react";

function VideoWithFallback({ src, poster, alt }) {
  const [error, setError] = useState(false);
  const videoRef = useRef(null);

  if (error) {
    return (
      <img
        src={poster}
        alt={alt}
        className="object-cover w-full h-full"
      />
    );
  }
  return (
    <video
      ref={videoRef}
      className="object-cover w-full h-full"
      autoPlay={false}
      loop
      muted
      playsInline
      poster={poster}
      onError={() => setError(true)}
      onMouseOver={e => {
        if (e.target.paused) {
          e.target.play().catch(() => {});
        }
      }}
      onMouseOut={e => {
        if (!e.target.paused) {
          e.target.pause();
        }
      }}
    >
      <source src={src} type="video/mp4" />
      Sorry, your browser does not support embedded videos.
    </video>
  );
}

const testimonials = [
  {
    name: "Aisha M.",
    quote: "Absolutely in love with Amber Nights! Fast delivery and beautiful packaging.",
    video: "/videos/3428863531774445170.mp4"
  },
  {
    name: "Sanele M.",
    quote: "The scent lasts all day. Especially the Gentlemen perfume!",
    video: "/videos/3546983089663586688.mp4"
  },
  {
    name: "Nomsa D.",
    quote: "Great service and expert advice. Found my new signature scent!",
    video: "/videos/testimonial3.mp4"
  }
];
const imageTestimonials = [
  { image: "/images/ssstik.io_1762181265941.jpeg" },
  { image: "/images/ssstik.io_1762180691415.jpeg" },
  { image: "/images/ssstik.io_1762189144483.jpeg" },
  { image: "/images/ssstik.io_1762191817591.jpeg" },
  { image: "/images/ssstik.io_1762191439675_3.jpeg" },
  { image: "/images/ssstik.io_1762191179050_2.jpeg" }
];
export default function Testimonials() {

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Hear From Our Customers</h2>
        <p className="text-lg text-gray-600 mb-8">Real stories and experiences from our happy customers.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white-50 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-full h-64 mb-4 rounded-xl overflow-hidden relative group">
              <VideoWithFallback src={t.video} poster="/images/video-thumb.jpg" alt={t.name + ' testimonial'} />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:hidden">
                <span className="bg-black/60 text-white px-4 py-2 rounded-full text-lg font-semibold">▶</span>
              </div>
            </div>
            <blockquote className="italic text-gray-700 mb-2">“{t.quote}”</blockquote>
            <div className="font-semibold text-gray-900">{t.name}</div>
          </div>
        ))}
      </div>
      {/* Image testimonials row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
          {imageTestimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl shadow-lg flex items-stretch">
              <img
                src={t.image}
                alt={t.name + ' testimonial'}
                className="object-cover w-full h-full rounded-2xl"
                style={{ aspectRatio: '1/1', minHeight: '16rem', maxHeight: '24rem' }}
              />
            </div>
          ))}
        </div>
      <div className="text-center mt-10">
        <button className="bg-gradient-to-r from-black-500 to-black-400 text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">Share Your Experience</button>
      </div>
    </section>
  );
}
