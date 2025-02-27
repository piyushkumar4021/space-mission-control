import type { Metadata } from 'next';
import { Bebas_Neue } from 'next/font/google';
import './globals.css';

import Navbar from './navbar';
import Footer from './footer';
import Background from '../components/background';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Space Mission Control',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${bebas_neue.variable} antialiased`}>
        <Background />
        <div className='container max-w-screen-xl mx-auto flex flex-col min-h-screen'>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
