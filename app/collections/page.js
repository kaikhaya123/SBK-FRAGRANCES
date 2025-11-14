"use client";

import React, { useState, useMemo, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import placeholderImage from '../utils/placeholder-image';

const SEASONS = ['Spring', 'Summer', 'Autumn', 'Winter'];

const SAMPLE_PRODUCTS = [
  // Summer collection as requested (55ml = R350 for all; Gentlemen 100ml = R600)
  { id: 'gentlemen', name: 'Gentlemen', price: 350, sizes: { '55ml': 350, '100ml': 600 }, image: '/images/ssstik.io_1762256007905.webp', category: 'Aqua', features: ['Sea Salt','Driftwood'], season: 'Summer', stock: 9, description: 'Fresh aquatic scent for modern men' },
  { id: 'shemmiring-flowers', name: 'Shemmiring Flowers', price: 350, sizes: { '55ml': 350, '100ml': 595 }, image: '/images/Shemmiring Flowers.png', category: 'Warm', features: ['Amber','Sandalwood'], season: 'Summer', stock: 11, description: 'Warm floral with a sensual heart' },
  { id: 'nude', name: 'Nude', price: 350, sizes: { '55ml': 350, '100ml': 595 }, image: '/images/Nude.jpg', category: 'Fresh', features: ['Marine','Lily'], season: 'Summer', stock: 2, description: 'Light fresh body fragrance' },
  { id: 'blossom-love', name: 'Blossom Love', price: 350, sizes: { '55ml': 350, '100ml': 595 }, image: '/images/Blossom Love.jpg', category: 'Floral', features: ['Peach','Jasmine'], season: 'Summer', stock: 14, description: 'Fruity floral for sunny days' },
  { id: 'la-vie-est-belle', name: 'La Vie Est Belle', price: 350, sizes: { '55ml': 350, '100ml': 595 }, image: '/images/La vile.jpg', category: 'Floral', features: ['Peony','Vanilla'], season: 'Summer', stock: 12, description: 'A velvety, joyful floral' },
  { id: 'tobacco-vanille', name: 'Tobacco Vanille', price: 350, sizes: { '55ml': 350, '100ml': 595 }, image: '/images/tobacco-vanille.jpg', category: 'Oriental', features: ['Tobacco','Vanilla'], season: 'Summer', stock: 8, description: 'Spicy-sweet gourmand classic' },
  { id: 'black-oud', name: 'Black Oud', price: 350, sizes: { '55ml': 350, '100ml': 595 }, image: '/images/blackOud.jpg', category: 'Woody', features: ['Lavender','Sage'], season: 'Summer', stock: 6, description: 'A sophisticated oud-forward fragrance' },
  { id: 'fantasy', name: 'Fantasy', price: 350, sizes: { '55ml': 350, '100ml': 595 }, image: '/images/Fantasy.jpg', category: 'Gourmand', features: ['Vanilla','Musk'], season: 'Summer', stock: 11, description: 'Sweet and playful gourmand scent' },
  { id: 'ted-lupidus', name: 'Ted Lupidus', price: 350, sizes: { '55ml': 350, '100ml': 595 }, image: '/images/Ted .jpg', category: 'Floral', features: ['Rose','Amber'], season: 'Summer', stock: 9, description: 'Romantic rose-forward perfume' },
  { id: 'burberry', name: 'Burberry', price: 350, sizes: { '55ml': 350, '100ml': 595 }, image: '/images/Burberry.jpg', category: 'Spicy', features: ['Clove','Cinnamon'], season: 'Summer', stock: 5, description: 'Classic spicy aromatic scent' },
  { id: 'issey-miyake', name: 'Issey Miyake', price: 350, sizes: { '55ml': 350, '100ml': 595 }, image: '/images/Issey .jpg', category: 'Citrus', features: ['Lemon','Mint'], season: 'Summer', stock: 15, description: 'Citrus aquatic freshness' },
  { id: 'santal-33', name: 'Santal 33', price: 350, sizes: { '55ml': 350, '100ml': 595 }, image: '/images/Oud Satin.jpg', images: ['/images/Santal_1.jpeg','/images/Santal_2.jpeg','/images/Santal_3.jpeg'], category: 'Woody', features: ['Sandalwood','Cedar'], season: 'Summer', stock: 7, description: 'Iconic sandalwood signature' },
  { id: 'tobacco-vanille-2', name: 'Tobacco Vanille (Alt)', price: 350, sizes: { '55ml': 350, '100ml': 595 }, image: '/images/Tobacco%20Vanile.jpeg', category: 'Oriental', features: ['Tobacco','Vanilla'], season: 'Summer', stock: 4, description: 'Alternate listing for Tobacco Vanille' }
];

export default function Collections() {
  const [activeSeason, setActiveSeason] = useState('Summer');
  const { addToCart, notify } = useCart();

  const products = useMemo(() => SAMPLE_PRODUCTS.filter(p => p.season.toLowerCase() === activeSeason.toLowerCase()), [activeSeason]);
  // choose a hero image: prefer the first product's first image, then product.image, then fallback
  const productHero = products.length > 0 ? (products[0].images && products[0].images.length ? products[0].images[0] : (products[0].image || '/images/webp/hero-collection.webp')) : '/images/webp/hero-collection.webp';

  // If you'd like to use a custom hero background, place your image at `public/images/hero-custom.jpg`.
  // The code will attempt to load that file on the client; if it exists we'll use it.
  const CUSTOM_HERO = '/images/hero-custom.jpg';

  // Optional per-season hero images (place images in `public/images/` with these names or change paths)
  const SEASON_HERO_IMAGES = {
    Spring: '/images/skincare-organic-soap-bars-with-plants-extracts-gray-surface.jpg',
    Summer: '/images/elegant-skin-care-banner-design.jpg',
    Autumn: '/images/top-view-sustainably-produced-alcoholic-beverage (1).jpg',
    Winter: '/images/close-up-perfume-floating-water.jpg'
  };

  const [heroImage, setHeroImage] = useState(productHero);

  // Determine hero image priority: custom hero (if present) > season hero (if present) > productHero
  useEffect(() => {
    // default to productHero first
    setHeroImage(productHero);

    // helper to try loading a src and resolve via callbacks
    const tryLoad = (src) => new Promise((resolve, reject) => {
      if (!src) return reject();
      try {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => reject();
        img.src = src;
      } catch (e) {
        reject();
      }
    });

    // perform checks in order
    (async () => {
      try {
        const custom = await tryLoad(CUSTOM_HERO);
        setHeroImage(custom);
        return;
      } catch (e) {
        // continue
      }

      const seasonSrc = SEASON_HERO_IMAGES[activeSeason];
      try {
        const seasonLoaded = await tryLoad(seasonSrc);
        setHeroImage(seasonLoaded);
        return;
      } catch (e) {
        // continue to fallback
      }

      // fallback already set to productHero
      setHeroImage(productHero);
    })();
  }, [productHero, activeSeason]);

  // If the URL contains a `season` query param, read it on the client and set the active season.
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search || '');
      const seasonParam = params.get('season');
      if (seasonParam && SEASONS.includes(seasonParam)) {
        setActiveSeason(seasonParam);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const handleAdd = (product, size = '55ml') => {
    // Map our product shape to CartContext expected fragrance object
    const price = product.sizes && product.sizes[size] ? product.sizes[size] : product.price;

    const fragrance = {
      id: product.id,
      name: product.name,
      price,
      image: product.image,
      type: product.category
    };

    addToCart(fragrance, size);

    const itemForNotify = {
      id: product.id,
      name: product.name,
      image: product.image,
      selectedSize: size,
      price,
      currency: 'ZAR',
      locale: 'en-ZA'
    };

    notify(`${product.name} (${size}) added to cart`, itemForNotify);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Cover hero: full-width collection image, logo + cart controlled by Navbar */}
      <section className="relative w-full h-[420px] md:h-[520px] lg:h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-20 max-w-6xl mx-auto px-6 h-full flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">Seasonal Collections</h2>
            <p className="text-white/90 mb-6 max-w-3xl mx-auto">Explore fragrances curated for Spring, Summer, Autumn and Winter — handpicked to match the mood of each season.</p>

            <div className="flex flex-wrap gap-3 justify-center mt-4">
              {SEASONS.map(season => (
                <button
                  key={season}
                  onClick={() => setActiveSeason(season)}
                  className={`px-4 py-2 rounded-full font-semibold ${season === activeSeason ? 'bg-white text-black' : 'bg-white/20 text-white'}`}
                >
                  {season}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Products grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-2xl font-bold">{activeSeason} Favorites</h3>
          <p className="text-sm text-gray-500">Showing {products.length} fragrances</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p, idx) => (
            <ProductCard key={p.id} product={p} index={idx} onAdd={handleAdd} />
          ))}
        </div>
      </section>
    </div>
  );
}
