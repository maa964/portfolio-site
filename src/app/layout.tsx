import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'maa | AI/ML Engineer & Video Creator',
  description: 'AI/ML Engineer specializing in video processing, automation workflows, and GPU-accelerated systems. Python, CUDA, n8n, Docker.',
  keywords: ['AI', 'ML', 'Video Processing', 'CUDA', 'Python', 'n8n', 'Automation'],
  authors: [{ name: 'maa' }],
  openGraph: {
    title: 'maa | AI/ML Engineer & Video Creator',
    description: 'AI/ML Engineer specializing in video processing, automation workflows, and GPU-accelerated systems.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block" />
      </head>
      <body className="antialiased bg-background-dark selection:bg-primary/30 selection:text-primary">
        <div className="scanline" />
        <div className="noise-overlay" />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
