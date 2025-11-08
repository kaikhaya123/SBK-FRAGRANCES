"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import './Masonry.css';

const useMedia = (queries, values, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const get = () => values[queries.findIndex(q => window.matchMedia(q).matches)] ?? defaultValue;
    
    setValue(get());

    const handler = () => setValue(get());
    
    const mediaQueryLists = queries.map(q => window.matchMedia(q));
    
    mediaQueryLists.forEach(mql => mql.addEventListener('change', handler));
    
    return () => mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler));
  }, [queries, values, defaultValue]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined' || !ref.current) return;

    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });

    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async urls => {
  if (typeof window === 'undefined') return;
  
  await Promise.all(
    urls.map(
      src =>
        new Promise(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

const Masonry = ({
  items = [],
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false
}) => {
  // Memoize animation configuration to keep it stable between renders
  const animConfig = useMemo(() => ({
    ease,
    duration,
    stagger,
    animateFrom
  }), [ease, duration, stagger, animateFrom]);

  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
    if (!items?.length) return;
    preloadImages(items.map(i => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const grid = useMemo(() => {
    if (!width) return [];
    if (!items?.length) return [];

    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;

    return items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      const height = child.height;
      const y = colHeights[col];

      colHeights[col] += height + 16; // Adding gap

      return { ...child, x, y, w: columnWidth - 16, h: height }; // Subtracting gap
    });
  }, [columns, items, width]);

  useLayoutEffect(() => {
    if (!imagesReady || typeof window === 'undefined') return;

    const animations = grid.map((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      return gsap.to(selector, {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h,
        duration: animConfig.duration,
        ease: animConfig.ease,
        delay: index * animConfig.stagger,
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        paused: true // Create paused animations
      });
    });

    // Play all animations
    animations.forEach(anim => anim.play());

    // Cleanup
    return () => {
      animations.forEach(anim => anim.kill());
    };
  }, [grid, imagesReady, animConfig]); // Stable dependency array

  // Memoize hover handlers
  const handleMouseEnter = useCallback((itemId) => {
    if (typeof window === 'undefined') return;
    
    const selector = `[data-key="${itemId}"]`;
    if (scaleOnHover) {
      gsap.to(selector, {
        scale: hoverScale,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  }, [scaleOnHover, hoverScale]);

  const handleMouseLeave = useCallback((itemId) => {
    if (typeof window === 'undefined') return;

    const selector = `[data-key="${itemId}"]`;
    if (scaleOnHover) {
      gsap.to(selector, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  }, [scaleOnHover]);

  return (
    <div 
      ref={containerRef} 
      className="list" 
      style={{ height: Math.max(...(grid?.map(item => item.y + item.h) || [0])) + 'px' }}
    >
      {grid.map(item => (
        <div
          key={item.id}
          data-key={item.id}
          className="item-wrapper"
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={() => handleMouseLeave(item.id)}
          style={{
            opacity: 0,
            transform: 'translateY(50px)',
            filter: 'blur(10px)'
          }}
        >
          <div 
            className="item-img" 
            style={{ 
              backgroundImage: `url(${item.img})`,
              height: item.h + 'px'
            }}
          >
            {colorShiftOnHover && (
              <div className="color-overlay" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;