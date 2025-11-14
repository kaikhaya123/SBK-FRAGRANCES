"use client";
import React, { useEffect, useRef, useMemo } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

/**
 * RevealPreloader
 * Wrap content to show a 6-column sequential upward reveal when it comes into view.
 * Props:
 *  - children: node to reveal
 *  - columns: number of columns (default 6)
 *  - color: css color string or array of colors for columns
 *  - stagger: delay between columns in seconds (default 0.1)
 */
export default function RevealPreloader({
  children,
  columns = 6,
  // support legacy `color` prop and new `colors`
  colors: colorsProp,
  color: colorProp,
  stagger = 0.1,
  transition = { type: "spring", stiffness: 300, damping: 30 },
  className = "",
  replayOnScroll = false,
}) {
  const ref = useRef(null);
  // don't use `once` so we can replay if requested
  const inView = useInView(ref, { once: !replayOnScroll, margin: "-10%" });
  const controls = useAnimation();
  // stabilize transition reference so dependencies remain the same length
  const stableTransition = useMemo(() => transition, [JSON.stringify(transition)]);

  useEffect(() => {
    if (inView) {
      // animate columns upward to reveal
      controls.start((i) => ({ y: "-100%", transition: { ...stableTransition, delay: i * stagger } }));
    } else if (replayOnScroll) {
      // animate columns back down to hide when scrolled out
      controls.start((i) => ({ y: 0, transition: { ...stableTransition, delay: i * stagger } }));
    }
    // NOTE: deliberately excluding `controls` from deps because it's stable from useAnimation
  }, [inView, stagger, stableTransition, replayOnScroll]);

  const resolvedColors = useMemo(() => {
    const source = colorsProp ?? colorProp ?? "#fff";
    return Array.isArray(source) ? source : new Array(columns).fill(source);
  }, [columns, JSON.stringify(colorsProp ?? colorProp ?? "#fff")]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* underlying content */}
      <div className="relative w-full h-full">{children}</div>

      {/* overlay columns */}
      <div className="absolute inset-0 pointer-events-none flex">
        {Array.from({ length: columns }).map((_, i) => (
          <motion.div
            custom={i}
            key={i}
            initial={{ y: 0 }}
            animate={controls}
            className="flex-1"
            style={{ background: resolvedColors[i % resolvedColors.length], transform: "translateY(0%)" }}
          />
        ))}
      </div>
    </div>
  );
}
