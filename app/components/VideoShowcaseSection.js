import React, { useRef, useEffect } from 'react';


export default function VideoShowcaseSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Intersection Observer callback
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    };

    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Play when at least 50% visible
    });
    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="w-full bg-black flex flex-col items-center justify-center overflow-hidden my-12 md:my-20">
      <div className="w-full h-[60vh] md:h-[90vh] relative flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-center"
          src="/videos/4154241-uhd_4096_2160_25fps.mp4"
          loop
          muted
          playsInline
        />
      </div>
    </section>
  );
}
