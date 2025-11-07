"use client";

import React, { useRef, useEffect } from 'react';

export default function VideoShowcaseSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let playAttempt = setInterval(() => {
      video.play()
        .then(() => {
          clearInterval(playAttempt);
        })
        .catch(error => {
          console.log("Auto-play prevented: ", error);
        });
    }, 3000);

    // Intersection Observer callback
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play()
            .catch(error => console.log("Play prevented: ", error));
        } else {
          video.pause();
        }
      });
    };

    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.3,
      rootMargin: '0px 0px 50px 0px'
    });
    observer.observe(video);

    return () => {
      clearInterval(playAttempt);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="w-full bg-black flex flex-col items-center justify-center overflow-hidden my-12 md:my-20">
      <div className="w-full h-[60vh] md:h-[90vh] relative flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-center"
          preload="metadata"
          playsInline
          muted
          loop
          autoPlay
          poster="/videos/poster-frame.jpg"
        >
          <source src="/videos/4154241-uhd_4096_2160_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
