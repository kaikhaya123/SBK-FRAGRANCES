import OptimizedImg from "./OptimizedImg";
import React, { useRef, useState } from "react";

function VideoWithFallback({ src, poster, alt }) {
  const [error, setError] = useState(false);
  const videoRef = useRef(null);

  // Try to autoplay on mount
  React.useEffect(() => {
    const video = videoRef.current;
    if (video && !error) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, [error]);

  if (error) {
    return (
      <OptimizedImg
        src={poster.replace('.jpg', '.webp').replace('.jpeg', '.webp')}
        alt={alt}
        width={400}
        height={400}
        className="object-cover w-full h-full"
      />
    );
  }
  return (
    <video
      ref={videoRef}
      className="object-cover w-full h-full"
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      onError={() => setError(true)}
      loading="lazy"
    >
      <source src={src} type="video/mp4" />
      Sorry, your browser does not support embedded videos.
    </video>
  );
}

const testimonials = [
  {
    name: "",
    quote: "Absolutely in love with Amber Nights! Fast delivery and beautiful packaging.",
    video: "/videos/3428863531774445170.mp4"
  },
  {
    name: "",
    quote: "The scent lasts all day. Especially the Gentlemen perfume!",
    video: "/videos/3546983089663586688.mp4"
  },
  {
    name: "",
    quote: "Great service and expert advice. Found my new signature scent!",
    video: "/videos/3690166990828639792.mp4"
  }
];
const imageTestimonials = [
  { image: "/images/webp/ssstik.io_1762181265941.webp" },
  { image: "/images/webp/ssstik.io_1762180691415.webp" },
  { image: "/images/webp/ssstik.io_1762189144483.webp" },
  { image: "/images/webp/ssstik.io_1762191817591.webp" },
  { image: "/images/webp/ssstik.io_1762191439675_3.webp" },
  { image: "/images/webp/ssstik.io_1762191179050_2.webp" }
];
export default function Testimonials() {

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 bg-[#faf9f6]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4d3222]/5 to-transparent"/>
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat opacity-5"/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Elegant Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#000000] to-[#000000] bg-clip-text text-transparent">
            Hear What Our Customers Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the captivating stories of those who have embraced our fragrances
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="group relative bg-white rounded-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Video Container */}
              <div className="aspect-[9/16] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"/>
                <VideoWithFallback src={t.video} poster="/images/webp/ssstik.io_1762181265941.webp" alt={t.name + ' testimonial'} />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <span className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 text-[#4d3222] shadow-lg transform transition-transform group-hover:scale-110">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </span>
                </div>
              </div>

              {/* Quote Section */}
              <div className="p-6 bg-white">
                <blockquote className="relative">
                  <span className="absolute top-0 left-0 text-4xl text-[#4d3222]/20">"</span>
                  <p className="text-gray-700 pl-6 pt-2">{t.quote}</p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      {/* Image Testimonials Gallery */}
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {imageTestimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="group relative aspect-square rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                <OptimizedImg
                  src={t.image.replace('.jpeg', '.webp')}
                  alt="Customer testimonial"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      {/* Elegant CTA Section */}
        <div className="text-center mt-16 md:mt-24">
          <a
            href="/reviews#review-form"
            className="group inline-flex items-center px-8 py-3 bg-black text-white rounded-full shadow-lg hover:bg-black/90 transform transition-all duration-300"
            aria-label="Share your story"
          >
            <span className="text-lg font-medium">Share Your Story</span>
            <svg
              className="w-5 h-5 ml-2 text-white transform transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
