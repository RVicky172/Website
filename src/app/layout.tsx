import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import { Navbar } from '@/src/components/ui/Navbar';
import { ThemeProvider } from '@/src/lib/ThemeContext';
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
  title: 'Vicky Kumar - Associate Staff Engineer',
  description:
    'Interactive portfolio showcasing 9+ years of experience building scalable web applications serving millions globally.',
  keywords:
    'developer, portfolio, react, nextjs, full stack, web development, typescript, cloud-native',
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
        <meta name="theme-color" content="#09090b" />
        <link rel="icon" href="/favicon.ico" />
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
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden transition-colors duration-300 font-inter">
        <SmoothScroll>
          <ThemeProvider>
            <Navbar />
            <main className="relative">{children}</main>
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}

