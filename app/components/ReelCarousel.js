import React, { useEffect, useRef, useState } from 'react';

// ReelCarousel
// Props:
// - items: [{ type: 'image'|'video', src, poster?, alt?, title? }]
// - slideDuration: milliseconds for each reel (default 6000)
// - className: optional wrapper classes

export default function ReelCarousel({ items = [], slideDuration = 6000, className = '' }) {
  const count = items.length;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0); // 0..1 for current
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const elapsedRef = useRef(0);
  const videoRefs = useRef([]);
  const containerRef = useRef(null);

  // Drive progress with rAF to allow pause/resume
  useEffect(() => {
    function tick(now) {
      if (!startRef.current) startRef.current = now;
      const dt = now - startRef.current + elapsedRef.current; // ms since slide started

      if (playing) {
        const p = Math.min(1, dt / slideDuration);
        setProgress(p);
        if (p >= 1) {
          // advance
          goNext();
          return; // goNext will reset timing
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, playing]);

  // reset timing when index changes
  function resetTiming() {
    startRef.current = null;
    elapsedRef.current = 0;
    setProgress(0);
  }

  function goTo(i) {
    const n = (i + count) % count;
    setIndex(n);
    resetTiming();
    // play video if any
    setTimeout(() => syncVideoPlayback(n), 50);
  }

  function goNext() {
    goTo(index + 1);
  }

  function goPrev() {
    goTo(index - 1);
  }

  // pause / resume
  function togglePlay() {
    if (playing) {
      // pause, store elapsed
      setPlaying(false);
      // elapsedRef will be set in tick via startRef, but ensure it's captured
      if (startRef.current) {
        elapsedRef.current += performance.now() - startRef.current;
      }
    } else {
      setPlaying(true);
      startRef.current = null;
    }
  }

  // Manage video elements: play when active, pause when not
  function syncVideoPlayback(activeIndex) {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      try {
        if (i === activeIndex) {
          v.muted = true;
          const p = v.play();
          if (p && typeof p.catch === 'function') p.catch(() => {});
        } else {
          if (!v.paused) v.pause();
        }
      } catch (e) {}
    });
  }

  useEffect(() => {
    // sync on mount and when index changes
    syncVideoPlayback(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // simple swipe handling
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0;
    let startY = 0;
    let active = false;

    function onPointerDown(e) {
      active = true;
      startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      startY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    }
    function onPointerUp(e) {
      if (!active) return;
      const endX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0;
      const endY = e.clientY || (e.changedTouches && e.changedTouches[0].clientY) || 0;
      const dx = endX - startX;
      const dy = endY - startY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx < 0) goNext(); else goPrev();
      }
      active = false;
    }

    el.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    el.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchend', onPointerUp, { passive: true });

    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchend', onPointerUp);
    };
  }, [index, count]);

  return (
    <div ref={containerRef} className={`reel-carousel relative w-full h-screen ${className}`}>
      {/* Progress bars */}
      <div className="absolute top-4 left-4 right-4 z-40 flex gap-2 items-center">
        {items.map((it, i) => {
          const filled = i < index ? 1 : i === index ? progress : 0;
          return (
            <div key={i} className="flex-1 bg-white/20 h-1 rounded overflow-hidden">
              <div
                className="h-1 bg-white transition-all"
                style={{ width: `${Math.round(filled * 100)}%` }}
              />
            </div>
          );
        })}

        {/* pause/play */}
        <button
          aria-label={playing ? 'Pause' : 'Play'}
          onClick={togglePlay}
          className="ml-3 text-white/90 bg-black/40 px-3 py-1 rounded"
        >
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>

      {/* Slides */}
      <div className="w-full h-full relative overflow-hidden">
        {items.map((it, i) => {
          const isActive = i === index;
          return (
            <div
              key={i}
              className={`absolute inset-0 transition-transform duration-600 ease-in-out ${isActive ? 'translate-x-0 z-20' : i < index ? '-translate-x-full z-10' : 'translate-x-full z-10'}`}
              style={{ transform: `translateX(${(i - index) * 100}%)` }}
            >
              <div className="w-full h-full flex items-center justify-center bg-black">
                {it.type === 'video' ? (
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    src={it.src}
                    poster={it.poster}
                    className="w-full h-full object-cover"
                    playsInline
                    muted
                    loop
                  />
                ) : (
                  <img src={it.src} alt={it.alt || ''} className="w-full h-full object-cover" />
                )}

                {/* overlay caption */}
                {it.title && (
                  <div className="absolute bottom-8 left-6 right-6 text-white z-30 text-center">
                    <h3 className="text-2xl md:text-3xl font-semibold drop-shadow-md">{it.title}</h3>
                    {it.alt && <p className="text-sm text-white/90 mt-2">{it.alt}</p>}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* navigation arrows */}
      <button onClick={goPrev} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-black/30 text-white rounded-full">
        ‹
      </button>
      <button onClick={goNext} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-black/30 text-white rounded-full">
        ›
      </button>

      {/* follow CTA */}
      <div className="absolute bottom-8 left-0 right-0 z-40 flex justify-center">
        <a href="https://www.tiktok.com/@sbk_fragrances" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-medium">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2v11.5A4.5 4.5 0 1 0 16.5 9V2h-4.5z"/></svg>
          Follow @sbkfragrances
        </a>
      </div>
    </div>
  );
}
