"use client";
import { useState } from 'react';

const products = [
  {
    id: 'amber-nights',
    name: 'Amber Nights',
    image: '/perfume1.jpg',
    description: 'Warm amber, musk, and vanilla for a sensual evening.',
    price: 'R450',
    scent: 'Amber, Musk, Vanilla',
    season: 'Winter',
    type: 'Oriental',
  },
  {
    id: 'spring-blossom',
    name: 'Spring Blossom',
    image: '/perfume2.jpg',
    description: 'Fresh jasmine, citrus, and green tea for a lively day.',
    price: 'R400',
    scent: 'Jasmine, Citrus, Green Tea',
    season: 'Spring',
    type: 'Floral',
  },
  {
    id: 'oud-royale',
    name: 'Oud Royale',
    image: '/perfume3.jpg',
    description: 'Luxurious oud, rose, and patchouli for a royal touch.',
    price: 'R600',
    scent: 'Oud, Rose, Patchouli',
    season: 'All',
    type: 'Woody',
  },
];

const scentTypes = [...new Set(products.map(p => p.type))];
const seasons = [...new Set(products.map(p => p.season))];

export default function Shop() {
  const [type, setType] = useState('');
  const [season, setSeason] = useState('');

  const filtered = products.filter(p =>
    (!type || p.type === type) && (!season || p.season === season)
  );

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Shop Perfumes</h1>
      <div className="flex gap-4 mb-8">
        <select value={type} onChange={e => setType(e.target.value)} className="border rounded-full px-4 py-2">
          <option value="">All Types</option>
          {scentTypes.map(t => <option key={t}>{t}</option>)}
        </select>
        <select value={season} onChange={e => setSeason(e.target.value)} className="border rounded-full px-4 py-2">
          <option value="">All Seasons</option>
          {seasons.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filtered.map(product => (
          <div key={product.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
            <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-full mb-4" />
            <div className="font-semibold text-lg mb-2">{product.name}</div>
            <div className="text-gray-500 mb-2">{product.scent}</div>
            <div className="mb-2">{product.description}</div>
            <div className="font-bold text-green-700 mb-4">{product.price}</div>
            <a href={`/shop/${product.id}`} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow mb-2">View Details</a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener" className="bg-green-100 hover:bg-green-200 text-green-700 px-4 py-1 rounded-full font-semibold text-sm">Order via WhatsApp</a>
          </div>
        ))}
      </div>
    </div>
  );
}
