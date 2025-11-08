'use client';

import Image from 'next/image';
import { useState } from 'react';
import { placeholders } from '../utils/placeholders';

export default function OptimizedImage({ src, alt, ...props }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  // Use product placeholder for missing product images
  const fallbackSrc = src.includes('product') 
    ? placeholders.product 
    : placeholders.hero;

  return (
    <div className={`relative ${props.className || ''}`} style={props.style}>
      <Image
        {...props}
        src={error ? fallbackSrc : src}
        alt={alt}
        quality={75}
        onError={handleError}
        onLoad={handleLoad}
        className={`
          transition-opacity duration-300
          ${loading ? 'opacity-0' : 'opacity-100'}
          ${props.className || ''}
        `}
      />
      {loading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
    </div>
  );
}