export default function InstagramFeed() {
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Follow Us on Instagram</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {/* Replace with real Instagram embed or API integration */}
        <img src="/insta1.jpg" alt="Instagram 1" className="w-32 h-32 object-cover rounded-xl" />
        <img src="/insta2.jpg" alt="Instagram 2" className="w-32 h-32 object-cover rounded-xl" />
        <img src="/insta3.jpg" alt="Instagram 3" className="w-32 h-32 object-cover rounded-xl" />
        <img src="/insta4.jpg" alt="Instagram 4" className="w-32 h-32 object-cover rounded-xl" />
      </div>
      <div className="text-center mt-6">
        <a href="https://instagram.com" target="_blank" rel="noopener" className="text-pink-600 font-semibold underline">@sbkfragrances</a>
      </div>
    </section>
  );
}
