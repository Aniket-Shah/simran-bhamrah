import './globals.css';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import { initSmoothScroll } from '@/lib/smooth-scroll';
import { PageTransition } from '@/components/motion/PageTransition';
import { CustomCursor } from '@/components/motion/CustomCursor';
import type { Metadata } from 'next';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Simran Bhamrah — Automation Engineer & Tech Lead',
  description: 'Portfolio of Simran Bhamrah — Backend Developer and Tech Lead with 5+ years building enterprise automation, compliance workflows, and scalable web applications.',
  openGraph: {
    title: 'Simran Bhamrah — Automation Engineer & Tech Lead',
    description: 'Portfolio of Simran Bhamrah — Backend Developer and Tech Lead with 5+ years building enterprise automation, compliance workflows, and scalable web applications.',
    images: [{ url: '/og-image.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>\n      <body className="min-h-full flex flex-col">
        <CustomCursor />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
