// This is the main entry for Next.js app directory routing
import './globals.css';
import './styles/fullpage.css';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import AnimatedLayout from './components/AnimatedLayout';

export const metadata = {
  title: 'SBK Fragrances',
  description: 'Unveiling the essence of luxury and uniqueness in every scent.',
  icons: {
    icon: '/images/Elegant_SBK_Fragrance_Logo_Design-removebg-preview.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="SBK FRAGRANCESsa" />
        <meta property="og:description" content="Bringing to life the fragrance you love" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900">
        <Navbar />
        <AnimatedLayout>
          <main>{children}</main>
        </AnimatedLayout>
        <Footer />
      </body>
    </html>
  );
}
