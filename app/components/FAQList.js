export default function FAQList({ faqs = [] }) {
  return (
    <div className="space-y-4">
      {faqs.map((f, i) => (
        <details key={i} className="bg-white rounded-lg p-4 shadow-sm">
          <summary className="cursor-pointer font-semibold">{f.q}</summary>
          <div className="mt-3 text-sm text-gray-600">{f.a}</div>
        </details>
      ))}
    </div>
  );
}
