import FAQList from '../components/FAQList';
import Link from 'next/link';

const faqs = [
  { q: 'How long does delivery take?', a: 'Standard delivery is 2–4 business days within Gauteng and 3–5 business days for other provinces.' },
  { q: 'What is your returns policy?', a: 'We accept returns within 14 days on unopened products — please see our Returns page for full details.' },
  { q: 'Do you offer wholesale pricing?', a: 'Yes — contact our wholesale team via the Contact page for bulk pricing and onboarding.' }
];

export default function SupportPage() {
  return (
    <main className="min-h-screen py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Support</h1>
        <p className="text-gray-600 mb-8">Find answers to common questions and get in touch with our support team.</p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <FAQList faqs={faqs} />
        </section>

        <section className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Need more help?</h3>
          <p className="text-gray-600 mb-4">If you can't find what you're looking for, reach out and our team will get back to you.</p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-black text-white rounded-md">Contact Support</Link>
        </section>
      </div>
    </main>
  );
}
