"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import OptimizedImg from "./OptimizedImg";

// Default span pattern for desktop (md+) on a 6-column grid. It will cycle if there are more images.
const DEFAULT_PATTERN = [
  { c: 3, r: 2 },
  { c: 2, r: 1 },
  { c: 1, r: 2 },
  { c: 3, r: 1 },
  { c: 2, r: 1 },
  { c: 1, r: 1 },
];

export default function BentoGallery({ images = [], pattern = DEFAULT_PATTERN, gap = 16 }) {
  const [openIndex, setOpenIndex] = useState(-1);

  const openAt = useCallback((i) => setOpenIndex(i), []);
  const close = useCallback(() => setOpenIndex(-1), []);

  const prev = useCallback(() => setOpenIndex((i) => (i <= 0 ? images.length - 1 : i - 1)), [images.length]);
  const next = useCallback(() => setOpenIndex((i) => (i >= images.length - 1 ? 0 : i + 1)), [images.length]);

  // keyboard nav for lightbox
  useEffect(() => {
    if (openIndex < 0) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, prev, next]);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 auto-rows-[140px] md:auto-rows-[180px]">
        {images.map((src, i) => {
          const p = pattern[i % pattern.length] || { c: 1, r: 1 };
          // Use inline grid placement via style (works with Tailwind grid container)
          const style = {
            gridColumn: `span ${p.c}`,
            gridRow: `span ${p.r}`,
          };

          return (
            <motion.button
              key={src + i}
              onClick={() => openAt(i)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative rounded-xl overflow-hidden focus:outline-none group"
              style={style}
              aria-label={`Open image ${i + 1} of ${images.length}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {src ? (
                <OptimizedImg
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">No image</div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Lightbox */}
      {openIndex >= 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button
            onClick={close}
            aria-label="Close gallery"
            className="absolute top-6 right-6 text-white text-3xl p-2 rounded-full hover:bg-black/30"
          >
            ×
          </button>

          <button
            onClick={prev}
            aria-label="previous"
            className="absolute left-6 text-white text-4xl p-2 rounded-full hover:bg-black/30"
          >
            ‹
          </button>

          <div className="max-w-6xl max-h-[90vh] mx-6 md:mx-0">
            {images[openIndex] ? (
              <OptimizedImg
                src={images[openIndex]}
                alt={`Lightbox ${openIndex + 1}`}
                width={1600}
                height={1000}
                className="w-full h-auto object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <div className="w-[800px] h-[450px] bg-gray-100 flex items-center justify-center text-gray-400">No image</div>
            )}
            <div className="mt-4 text-center text-white">{openIndex + 1} / {images.length}</div>
          </div>

          <button
            onClick={next}
            aria-label="next"
            className="absolute right-6 text-white text-4xl p-2 rounded-full hover:bg-black/30"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
