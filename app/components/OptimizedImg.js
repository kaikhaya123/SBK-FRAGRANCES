import Image from 'next/image';

// Usage: <OptimizedImg src="/images/example.webp" alt="Description" width={400} height={400} className="..." loading="lazy" priority={false} />
export default function OptimizedImg({ src, alt, width = 400, height = 400, className = '', loading = 'lazy', priority = false, quality = 80 }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      loading={loading}
      quality={quality}
      unoptimized={false}
      priority={!!priority}
    />
  );
}
