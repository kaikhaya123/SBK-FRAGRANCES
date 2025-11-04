// This is the main entry for Next.js app directory routing
import './globals.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export const metadata = {
  title: 'SBK FRAGRANCESsa',
  description: 'Bringing to life the fragrance you love',
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
