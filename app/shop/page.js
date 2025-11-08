'use client';

import React from 'react';
import Link from 'next/link';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our Collections
          </h1>
          <Link 
            href="/"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border-2 border-black transition-all duration-300"
          >
            Back Home
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <div className="aspect-w-1 aspect-h-1 mb-6">
              <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl text-gray-400">Coming Soon</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Products</h3>
            <p className="text-gray-600">We're preparing something special for you. Stay tuned!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
