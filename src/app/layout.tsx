import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import { Navbar } from '@/src/components/ui/Navbar';
import { ThemeProvider } from '@/src/lib/ThemeContext';
import { ScrollProgress } from '@/src/components/ui/ScrollProgress';
import { CursorFollower } from '@/src/components/ui/CursorFollower';
import { ParticleField } from '@/src/components/ui/ParticleField';
import { GlowOrbs } from '@/src/components/ui/GlowOrbs';
import { BackToTop } from '@/src/components/ui/BackToTop';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Vicky Kumar | Associate Staff Engineer | Full-Stack Architect',
  description:
    'Vicky Kumar is a Staff Engineer specializing in cloud-native architectures, high-performance web systems, and AI-driven development. 9+ years experience delivering enterprise solutions globally.',
  keywords:
    'Staff Engineer, Full-Stack Architect, React Specialist, Next.js Expert, Cloud-Native IDE, Vicky Kumar, Vicky Rohilla, AI Integration, Enterprise Web Architecture',
  authors: [{ name: 'Vicky Kumar' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vickykumar.dev',
    siteName: 'Vicky Kumar Portfolio',
    title: 'Vicky Kumar - Associate Staff Engineer',
    description:
      'Full-Stack Engineer with 9+ years building enterprise-scale applications.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@vickykumar',
  },
};

import SmoothScroll from '@/src/components/SmoothScroll';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050505" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                const html = document.documentElement;
                html.setAttribute('data-theme', theme);
                if (theme === 'light') {
                  html.classList.add('light');
                  html.classList.remove('dark');
                } else {
                  html.classList.add('dark');
                  html.classList.remove('light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden transition-colors duration-300 font-inter bg-grid-pattern relative">
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <SmoothScroll>
          <ThemeProvider>
            <GlowOrbs />
            <div className="fixed inset-0 z-0 pointer-events-none">
              <ParticleField className="opacity-40" particleCount={50} />
            </div>
            <div className="relative z-10">
              <ScrollProgress />
              <CursorFollower />
              <Navbar />
              <main id="main-content" className="relative">{children}</main>
              <BackToTop />
            </div>
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}

