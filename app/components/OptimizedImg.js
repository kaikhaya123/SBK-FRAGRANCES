import Image from 'next/image';

// Usage: <OptimizedImg src="/images/example.webp" alt="Description" width={400} height={400} className="..." />
export default function OptimizedImg({ src, alt, width = 400, height = 400, className = '' }) {
  // Ensure the image can fully fill its container when callers use w-full h-full and object-cover.
  // We set height: '100%' and objectFit: 'cover' so the image fills the container and preserves cover behavior.
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      loading="lazy"
      quality={80}
      unoptimized={false}
      priority={false}
    />
  );
}
