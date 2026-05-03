// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '5 Star Auto Paints - Premium Automotive Paints for Garages',
  description: '5 Star Auto Paints supplies premium quality automotive paints, clear coats, primers, and painting accessories to professional garages and body shops. Fast delivery, expert support.',
  keywords: 'auto paints, car paint, automotive paint, garage supplies, body shop supplies, base coat, clear coat, primer, car painting, dent repair paint',
  openGraph: {
    title: '5 Star Auto Paints - Premium Automotive Paints',
    description: 'Professional grade automotive paints and supplies for garages',
    type: 'website',
    locale: 'en_US',
    siteName: '5 Star Auto Paints',
  },
  robots: 'index, follow',
  authors: [{ name: '5 Star Auto Paints' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Navigation Bar */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <span className="text-xl font-bold text-blue-600">5⭐ Auto Paints</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
                <a href="#products" className="text-gray-700 hover:text-blue-600">Products</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
              </div>
              <a
                href="#contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Get Quote
              </a>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}