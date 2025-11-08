'use client';

const generatePlaceholder = (text, size = 400) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size * 0.75}" viewBox="0 0 ${size} ${size * 0.75}">
      <rect width="100%" height="100%" fill="#f0f0f0"/>
      <text x="50%" y="50%" font-family="system-ui, sans-serif" font-size="${size/20}px" fill="#999" text-anchor="middle" dy=".3em">${text}</text>
    </svg>
  `;
  
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

export const placeholders = {
  product: generatePlaceholder('Product Image'),
  hero: generatePlaceholder('Hero Image', 1200),
  pattern: generatePlaceholder('Pattern', 200),
  poster: generatePlaceholder('Video Poster', 800)
};