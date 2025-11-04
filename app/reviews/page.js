const reviews = [
  {
    name: 'Aisha M.',
    photo: '/customer1.jpg',
    rating: 5,
    text: 'Absolutely in love with Amber Nights! Fast delivery and beautiful packaging.'
  },
  {
    name: 'Sipho K.',
    photo: '/customer2.jpg',
    rating: 5,
    text: 'The scent lasts all day. Will definitely order again!'
  },
  {
    name: 'Nomsa D.',
    photo: '/customer3.jpg',
    rating: 5,
    text: 'Great service and expert advice. Found my new signature scent!'
  },
];

export default function Reviews() {
  return (
    <div className="container mx-auto py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Customer Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {reviews.map(r => (
          <div key={r.name} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <img src={r.photo} alt={r.name} className="w-16 h-16 object-cover rounded-full mb-4" />
            <div className="font-semibold mb-2">{r.name}</div>
            <div className="text-yellow-400 mb-2">{'★'.repeat(r.rating)}</div>
            <div className="text-gray-600 text-center">“{r.text}”</div>
          </div>
        ))}
      </div>
      <form className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-2">Leave a Review</h2>
        <input type="text" placeholder="Name" className="border rounded-full px-4 py-2" required />
        <input type="number" min="1" max="5" placeholder="Rating (1-5)" className="border rounded-full px-4 py-2" required />
        <textarea placeholder="Your review" className="border rounded-2xl px-4 py-2 resize-none" rows={3} required />
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-full font-semibold shadow-lg transition hover:scale-105">Submit Review</button>
      </form>
    </div>
  );
}
