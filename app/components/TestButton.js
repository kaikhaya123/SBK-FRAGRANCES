'use client';

import { useRouter } from 'next/navigation';

export default function TestButton() {
  const router = useRouter();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => router.push('/shop')}
        className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:text-black border-2 border-black transition-all duration-300"
      >
        Test Shop Navigation
      </button>
    </div>
  );
}