'use client';

import { useState } from 'react';

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

function FAQItem({ faq, index, expandedIndex, setExpandedIndex }) {
  const isOpen = expandedIndex === index;

  return (
    <div className="w-full">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
        onClick={() => setExpandedIndex(isOpen ? -1 : index)}
        className="w-full text-left bg-white rounded-2xl shadow p-4 sm:p-6 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      >
        <span className="font-semibold text-base sm:text-lg">{faq.q}</span>
        <span className="ml-4 text-indigo-600 text-xl" aria-hidden>
          {isOpen ? '−' : '+'}
        </span>
      </button>

      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-button-${index}`}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 mt-3' : 'max-h-0'}`}
      >
        <div className="px-4 sm:px-6 pb-4 text-gray-700 text-sm sm:text-base">
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">Frequently Asked Questions</h1>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              expandedIndex={expandedIndex}
              setExpandedIndex={setExpandedIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
