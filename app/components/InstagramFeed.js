

// TikTok video IDs from provided links
const tiktokVideos = [
  '7566942153927068936',
  '7566634253190991112',
  '7564735471058767122',
];


export default function TiktokFeed() {
  // Uniform grid: all items same shape and size, perfectly aligned
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Follow Us on TikTok</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
        {tiktokVideos.map((id, idx) => (
          <div key={id} className="relative aspect-[9/16] rounded-2xl shadow-xl bg-white/70 overflow-hidden group flex items-center justify-center transition-transform hover:scale-105">
            <iframe
              src={`https://www.tiktok.com/embed/${id}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full border-0 rounded-2xl"
              title={`TikTok Video ${idx + 1}`}
            ></iframe>
            <a
              href="https://www.tiktok.com/@sbk_fragrances"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 bg-white/90 rounded-full p-1 shadow-md hover:scale-110 transition-transform"
              aria-label="Visit SBK Fragrances on TikTok"
            >
              <img src="/images/4138198.png" alt="TikTok Icon" className="w-7 h-7 object-contain" />
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="https://www.tiktok.com/@sbk_fragrances" target="_blank" rel="noopener" className="text-pink-600 font-semibold underline text-lg">@sbkfragrances</a>
      </div>
    </section>
  );
}
