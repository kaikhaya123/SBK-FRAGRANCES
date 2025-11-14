import Link from 'next/link';

const routes = [
  '/',
  '/shop',
  '/collections',
  '/bestsellers',
  '/about',
  '/faq',
  '/contact',
  '/support',
  '/shipping',
  '/returns'
];

export default function SitemapPage() {
  return (
    <main className="min-h-screen py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Sitemap</h1>
        <p className="text-gray-600 mb-8">Quick links to key pages.</p>

        <ul className="space-y-2 text-lg">
          {routes.map((r) => (
            <li key={r}>
              <Link href={r} className="text-blue-600 hover:underline">{r}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

