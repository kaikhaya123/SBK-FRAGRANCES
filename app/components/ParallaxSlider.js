"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

// Enhanced ParallaxSlider
// - Drag / swipe support
// - Wheel / touch-to-scroll physics (velocity)
// - Infinite looping by duplicating the image set and wrapping translateX

export default function ParallaxSlider({ images = [], speed = 120, gap = 24, scale = 1.03, height = 320 }) {
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const isDragging = useRef(false);
  const velocityRef = useRef(0);
  const rafRef = useRef(null);
  const [oneSetWidth, setOneSetWidth] = useState(0);

  // Duplicate images to allow seamless wrap
  const items = [...images, ...images];

  // Measure width of one set (half the duplicated content)
  useEffect(() => {
    function measure() {
      if (!trackRef.current) return;
      const total = trackRef.current.scrollWidth || 0;
      setOneSetWidth(total / 2);
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [images]);

  // Auto-looping animation + physics integration
  useEffect(() => {
    const baseSpeed = speed; // pixels per second
    let last = performance.now();

    function loop(now) {
      const dt = Math.max(0, (now - last) / 1000);
      last = now;

      if (!isDragging.current) {
        // apply friction to velocity
        velocityRef.current *= Math.pow(0.92, dt * 60);

        // move left by baseSpeed + user velocity
        const move = (baseSpeed * dt) + (velocityRef.current * dt);
        let next = x.get() - move;

        if (oneSetWidth) {
          // wrap when we've moved past one duplicated set
          if (next <= -oneSetWidth) {
            next += oneSetWidth;
          } else if (next >= 0) {
            next -= oneSetWidth;
          }
        }

        x.set(next);
      }

      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [oneSetWidth, speed]);

  // Wheel handler to add velocity
  useEffect(() => {
    function onWheel(e) {
      if (!trackRef.current) return;
      // prefer horizontal delta if available
      const delta = e.deltaY || e.deltaX || 0;
      // smaller multiplier for smoothness
      velocityRef.current += delta * 2;
    }
    const el = trackRef.current;
    if (el) el.addEventListener('wheel', onWheel, { passive: true });
    return () => el && el.removeEventListener('wheel', onWheel);
  }, []);

  // Drag handlers (Framer will update x while dragging because we bind style.x)
  function handleDragStart() {
    isDragging.current = true;
    velocityRef.current = 0;
  }

  function handleDragEnd(_, info) {
    isDragging.current = false;
    // info.velocity.x is in px/s; we want to add it to our velocity
    velocityRef.current = info.velocity.x * 0.7;
  }

  return (
    <div style={{ overflow: 'hidden', width: '100%', padding: '18px 0' }}>
      <motion.div
        ref={trackRef}
        style={{ display: 'flex', gap: gap, alignItems: 'center', x, touchAction: 'pan-y' }}
        drag="x"
        dragConstraints={{ left: -999999, right: 999999 }}
        dragElastic={0.08}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {items.map((src, i) => (
          <div key={`${src}-${i}`} style={{ flex: '0 0 auto' }}>
            <motion.img
              src={src}
              alt={`gallery-${i}`}
              style={{
                height,
                width: 'auto',
                display: 'block',
                borderRadius: 12,
                objectFit: 'cover',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
              }}
              whileHover={{ scale }}
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
