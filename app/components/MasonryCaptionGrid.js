"use client";

import React from 'react';
import Image from 'next/image';

// MasonryCaptionGrid
// Props:
// - items: [{ src, alt, title, subtitle }]
// - columns: { default: 1, sm: 2, md: 3, lg: 4 }
// - overlay: 'hover' | 'static' (controls when captions show)
export default function MasonryCaptionGrid({ items = [], columns = { default: 1, sm: 2, md: 3 }, overlay = 'hover' }) {
  // Build responsive column-count classes for tailwind fallback visual guidance (we use CSS columns inline)

  return (
    <div className="w-full">
      {/* CSS columns-based masonry: preserves image aspect ratios and creates gapless flow */}
      <div
        className="masonry-columns"
        style={{
          columnCount: columns.default || 1,
          columnGap: 0,
        }}
      >
        {items.map((it, i) => (
          <figure
            key={i}
            className="break-inside-avoid mb-0 relative focus:outline-none"
            tabIndex={0}
            aria-label={it.alt || it.title || `image-${i}`}
            style={{ marginBottom: '0' }}
          >
            <div className="relative w-full" style={{ display: 'block' }}>
              {/* Use native <img> for natural aspect ratio & performance; Next/Image can be used but requires layout sizing */}
              <img
                src={it.src}
                alt={it.alt || it.title || 'image'}
                loading="lazy"
                className="w-full h-auto object-cover block"
                style={{ display: 'block', width: '100%' }}
              />

              {/* Caption overlay */}
              <figcaption
                className={`absolute left-0 right-0 bottom-0 p-4 text-white transition-opacity duration-300 ${overlay === 'hover' ? 'opacity-0 group-focus-within:opacity-100 group-hover:opacity-100' : 'opacity-100'}`}
                style={{
                  background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%)'
                }}
              >
                <div className="max-w-full">
                  {it.title && <div className="font-semibold text-sm leading-tight">{it.title}</div>}
                  {it.subtitle && <div className="text-xs text-gray-200">{it.subtitle}</div>}
                </div>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>

      {
        // Avoid styled-jsx runtime injection which can leak a `jsx` attribute
        // into the DOM in some toolchains. Use a plain <style> with string CSS
        // instead.
      }
      <style dangerouslySetInnerHTML={{ __html: `
        .masonry-columns {
          /* small default, will be overridden by inline style columnCount */
          column-gap: 0;
        }

        /* Ensure items don't break */
        .break-inside-avoid {
          break-inside: avoid;
          -webkit-column-break-inside: avoid;
          page-break-inside: avoid;
        }

        /* make hover/caption behavior accessible: show on focus */
        figure:focus figcaption,
        figure:hover figcaption {
          opacity: 1 !important;
        }

        /* Responsive column counts using media queries */
        @media (min-width: 640px) {
          .masonry-columns { column-count: ${columns.sm || 2}; }
        }
        @media (min-width: 768px) {
          .masonry-columns { column-count: ${columns.md || 3}; }
        }
        @media (min-width: 1024px) {
          .masonry-columns { column-count: ${columns.lg || (columns.md || 3)}; }
        }
      ` }} />
    </div>
  );
}
