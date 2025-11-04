// Placeholder for Footer component
export function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-lg shadow-inner rounded-t-2xl py-8 px-4 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="font-bold text-lg">SBK FRAGRANCESsa</div>
          <div className="text-sm text-gray-600">&copy; {new Date().getFullYear()} All rights reserved.</div>
        </div>
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
            <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5zm0 1.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5zm6.5 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
          </a>
        </div>
        <div className="text-sm text-gray-600">
          <div>Contact: info@sbkfragrances.com</div>
          <div>Subscribe to our newsletter</div>
          <form className="flex gap-2 mt-2">
            <input type="email" placeholder="Your email" className="px-3 py-1 rounded-full border border-gray-300 focus:outline-none" />
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full font-semibold">Sign Up</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
