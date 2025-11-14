import './globals.css';
import './styles/fullpage.css';
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import ClientLayout from './components/ClientLayout';
import { CartProvider } from './context/CartContext';

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant'
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
});

export const metadata = {
  title: 'SBK Fragrances',
  description: 'Unveiling the essence of luxury and uniqueness in every scent.',
  icons: {
    icon: '/images/Elegant_SBK_Fragrance_Logo_Design-removebg-preview.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorantGaramond.variable} h-full`}>
      <head>
        {/* Primary Meta Tags */}
        {/* Mobile-friendly viewport: allow pinch-zoom for accessibility */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="SBK Fragrances" />
        <meta property="og:description" content="Bringing to life the fragrance you love" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        
        {/* Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/images/hero-image.webp" as="image" type="image/webp" />
        
        {/* PWA meta tags */}
        <meta name="application-name" content="SBK Fragrances" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SBK Fragrances" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* GSAP and ScrollTrigger */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
      </head>
  {/* suppress hydration warnings at the root to avoid mismatches caused by browser extensions */}
  <body suppressHydrationWarning className="min-h-screen bg-white text-gray-900 font-sans">
        <CartProvider>
          <ClientLayout>{children}</ClientLayout>
        </CartProvider>
      </body>
    </html>
  );
}
