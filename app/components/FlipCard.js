"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OptimizedImg from "./OptimizedImg";

/**
 * FlipCard - a stacked, draggable flip card stack.
 * Props:
 * - images: array of image src strings
 * - width, height: number (px) or css values for sizing
 * - offset: spacing between stacked cards
 */
export default function FlipCard({ images = [], width = 160, height = 160, offset = 14 }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  if (!images || images.length === 0) return null;

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="w-full flex justify-center items-center">
      <div
        ref={containerRef}
        className="relative"
        style={{ width: typeof width === "number" ? `${width * 2}px` : width }}
      >
        {images.map((src, i) => {
          const pos = (i - index + images.length) % images.length; // 0 is top
          const z = images.length - pos;
          if (pos > 4) return null; // keep stack small

          const style = {
            left: `50%`,
            transform: `translateX(-50%) translateY(${pos * offset}px) scale(${1 - pos * 0.03})`,
            zIndex: z,
            width: typeof width === "number" ? `${width * 2}px` : width,
            height: typeof height === "number" ? `${height * 2}px` : height,
            perspective: 1000,
          };

          const isTop = pos === 0;

          return (
            <AnimatePresence key={src}>
              <motion.div
                key={src + i}
                className={`absolute rounded-xl overflow-hidden bg-white/50 shadow-lg`}
                style={style}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: pos * offset, scale: 1 - pos * 0.03 }}
                exit={{ opacity: 0, x: isTop ? -300 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag={isTop ? "x" : false}
                dragConstraints={containerRef}
                dragElastic={0.2}
                onDragEnd={(event, info) => {
                  const vx = info.offset.x;
                  if (vx < -80) {
                    next();
                  } else if (vx > 80) {
                    prev();
                  }
                }}
                whileTap={isTop ? { scale: 0.98, rotateY: 6 } : {}}
                whileDrag={isTop ? { rotateY: 8, boxShadow: "0 20px 40px rgba(0,0,0,0.25)" } : {}}
              >
                <div className="relative w-full h-full bg-gray-50">
                  <OptimizedImg
                    src={src}
                    alt={`testimonial-${i}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">{i + 1}/{images.length}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          );
        })}
      </div>
      <div className="ml-6 flex items-center space-x-2">
        <button
          onClick={prev}
          aria-label="previous testimonial"
          className="px-3 py-2 rounded-full bg-white shadow hover:bg-gray-100"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="next testimonial"
          className="px-3 py-2 rounded-full bg-white shadow hover:bg-gray-100"
        >
          ›
        </button>
      </div>
    </div>
  );
}
