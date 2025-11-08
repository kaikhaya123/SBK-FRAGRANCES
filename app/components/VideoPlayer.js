'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function VideoPlayer({ src, posterImage, ...props }) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      <video
        {...props}
        poster={posterImage || '/videos/poster-frame.jpg'}
        onError={() => setError(true)}
        onLoadedData={() => setLoaded(true)}
        className={`
          w-full h-full object-cover
          transition-opacity duration-300
          ${loaded ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-400">Loading video...</span>
          </div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-gray-500">Video unavailable</span>
        </div>
      )}
    </div>
  );
}