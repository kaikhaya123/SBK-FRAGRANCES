const images = [
  '/images/ssstik.io_1762189144483.jpeg',
  '/gallery2.jpg',
  '/gallery3.jpg',
  '/gallery4.jpg',
  '/gallery5.jpg',
  '/gallery6.jpg',
];

export default function Gallery() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`Gallery ${i+1}`} className="w-full h-64 object-cover rounded-2xl shadow-lg" />
        ))}
      </div>
      <div className="text-center mt-8">
        <h2 className="text-xl font-bold mb-4">See more on Instagram</h2>
        <a href="https://instagram.com" target="_blank" rel="noopener" className="text-pink-600 font-semibold underline">@sbkfragrances</a>
      </div>
    </div>
  );
}
