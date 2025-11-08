'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function TestButtonPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Navigation Test Page</h1>
        
        <div className="space-y-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">useRouter Navigation</h2>
            <div className="space-x-4">
              <button
                onClick={() => router.push('/')}
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
              >
                Home (useRouter)
              </button>
              <button
                onClick={() => router.push('/shop')}
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
              >
                Shop (useRouter)
              </button>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Link Component Navigation</h2>
            <div className="space-x-4">
              <Link 
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all inline-block"
              >
                Home (Link)
              </Link>
              <Link 
                href="/shop"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all inline-block"
              >
                Shop (Link)
              </Link>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">window.location Navigation</h2>
            <div className="space-x-4">
              <button
                onClick={() => window.location.href = '/'}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
              >
                Home (window.location)
              </button>
              <button
                onClick={() => window.location.href = '/shop'}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
              >
                Shop (window.location)
              </button>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Standard HTML Link</h2>
            <div className="space-x-4">
              <a 
                href="/"
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all inline-block"
              >
                Home (HTML a tag)
              </a>
              <a 
                href="/shop"
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all inline-block"
              >
                Shop (HTML a tag)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}