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

export default function ProductDetail({ params }) {
  const product = products.find(p => p.id === params.id);
  if (!product) return <div className="container mx-auto py-12">Product not found.</div>;
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded-2xl shadow-lg" />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="text-gray-500 mb-2">{product.scent}</div>
          <div className="mb-4">{product.description}</div>
          <div className="font-bold text-green-700 text-xl mb-4">{product.price}</div>
          <div className="mb-4">
            <span className="font-semibold">Delivery:</span> Nationwide courier, 2-4 days
          </div>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition hover:scale-105">Order Now via WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
