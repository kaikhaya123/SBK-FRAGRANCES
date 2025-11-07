import Image from 'next/image';

// Usage: <OptimizedImg src="/images/example.webp" alt="Description" width={400} height={400} className="..." />
export default function OptimizedImg({ src, alt, width = 400, height = 400, className = '' }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ width: '100%', height: 'auto' }}
      loading="lazy"
      quality={80}
      unoptimized={false}
      priority={false}
    />
  );
}
