const faqs = [
  {
    q: 'How long does shipping take?',
    a: 'Shipping typically takes 2-4 business days nationwide.'
  },
  {
    q: 'What is your return policy?',
    a: 'Returns are accepted within 7 days for unopened products. Please contact us for assistance.'
  },
  {
    q: 'How do I choose the right fragrance?',
    a: 'Consider your personality, the season, and where you’ll wear it. Try our sample packs or ask us for advice!'
  },
  {
    q: 'How can I make my fragrance last longer?',
    a: 'Apply to pulse points, moisturize your skin, and avoid rubbing your wrists together.'
  },
];

export default function FAQ() {
  return (
    <div className="container mx-auto py-12 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-6">
            <div className="font-semibold mb-2">{faq.q}</div>
            <div className="text-gray-700">{faq.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
