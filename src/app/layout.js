import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Codesoftic | Enterprise Web Design, AI Automation & Digital Acceleration',
  description: 'Codesoftic architects intelligent digital platforms, AI automation systems, technical SEO dominance, and high-conversion web solutions for high-growth enterprises.',
  keywords: [
    'Codesoftic', 
    'Website Design', 
    'AI Audits', 
    'AI Automation', 
    'SEO', 
    'Performance Marketing', 
    'Incubation Centre', 
    'Next.js Web Development'
  ],
  authors: [{ name: 'Codesoftic Technologies' }],
  creator: 'Codesoftic Technologies',
  metadataBase: new URL('https://codesoftic.com'),
  openGraph: {
    title: 'Codesoftic — Enterprise Digital & AI Acceleration',
    description: 'Bespoke web architecture, automated agentic pipelines, and performance scaling.',
    url: 'https://codesoftic.com',
    siteName: 'Codesoftic',
    images: [
      {
        url: '/images/hero-poster.png',
        width: 1200,
        height: 630,
        alt: 'Codesoftic Digital Acceleration',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codesoftic — Enterprise Digital & AI Acceleration',
    description: 'Bespoke web architecture, automated agentic pipelines, and performance scaling.',
    creator: '@codesoftic',
  },
  icons: {
    icon: '/images/Logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/Logo.svg" type="image/svg+xml" />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - var(--header-height))', paddingTop: 'var(--header-height)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
