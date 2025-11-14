import ProductCard from '../components/ProductCard';

const sampleProducts = [
  {
    id: 1,
    title: 'Signature Eau de Parfum',
    price: 'R1,250',
    image: '/images/Perfume business .jpeg',
    href: '/shop'
  },
  {
    id: 2,
    title: 'Luxury Round Bottle Set',
    price: 'R1,500',
    image: '/images/Perfume business .jpeg',
    href: '/shop'
  },
  {
    id: 3,
    title: 'Premium Car Diffuser',
    price: 'R800',
    image: '/images/car perfume 1.jpeg',
    href: '/shop'
  }
];

export default function BestSellersPage() {
  return (
    <main className="min-h-screen py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Best Sellers</h1>
        <p className="text-gray-600 mb-8">Our most-loved fragrances — curated for you.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
