import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { RootClientShell } from '@/components/RootClientShell';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Simran Bhamrah — Automation Engineer & Tech Lead',
  description:
    'Portfolio of Simran Bhamrah — Backend Developer and Tech Lead with 5+ years building enterprise automation, compliance workflows, and scalable web applications.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body
        className="min-h-full"
        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', background: 'var(--color-bg)' }}
        suppressHydrationWarning
      >
        <RootClientShell>{children}</RootClientShell>
      </body>
    </html>
  );
}
