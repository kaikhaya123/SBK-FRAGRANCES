export default function Contact() {
  return (
    <div className="container mx-auto py-12 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <form className="bg-white rounded-2xl shadow-lg p-8 mb-8 flex flex-col gap-4">
        <input type="text" placeholder="Name" className="border rounded-full px-4 py-2" required />
        <input type="email" placeholder="Email" className="border rounded-full px-4 py-2" required />
        <textarea placeholder="Message" className="border rounded-2xl px-4 py-2 resize-none" rows={4} required />
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-full font-semibold shadow-lg transition hover:scale-105">Send Message</button>
      </form>
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition hover:scale-105">Order Now via WhatsApp</a>
        <div className="text-gray-700">
          <div className="font-bold">Store Info</div>
          <div>123 Fragrance Ave, Johannesburg</div>
          <div>Mon-Fri: 9am - 6pm</div>
          <div>Delivery: Gauteng & Nationwide</div>
        </div>
      </div>
    </div>
  );
}
