const collections = [
  {
    name: 'Winter Warmth',
    image: '/perfume1.jpg',
    description: 'Cozy up with rich, warm scents for winter.',
    limited: false,
  },
  {
    name: 'Spring Fresh',
    image: '/perfume2.jpg',
    description: 'Light, floral fragrances for a fresh start.',
    limited: false,
  },
  {
    name: 'Oud Royale (Limited Edition)',
    image: '/perfume3.jpg',
    description: 'Exclusive oud blend, only 5 left!',
    limited: true,
    countdown: 'Only 5 left!'
  },
];

export default function Collections() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {collections.map(col => (
          <div key={col.name} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition relative">
            <img src={col.image} alt={col.name} className="w-32 h-32 object-cover rounded-full mb-4" />
            <div className="font-semibold text-lg mb-2">{col.name}</div>
            <div className="text-gray-500 mb-2 text-center">{col.description}</div>
            {col.limited && (
              <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full animate-pulse">{col.countdown}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
