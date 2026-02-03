import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Masahiro | AI/ML Engineer & Video Creator',
  description: 'AI/ML Engineer specializing in video processing, automation workflows, and GPU-accelerated systems. Python, CUDA, n8n, Docker.',
  keywords: ['AI', 'ML', 'Video Processing', 'CUDA', 'Python', 'n8n', 'Automation'],
  authors: [{ name: 'Masahiro' }],
  openGraph: {
    title: 'Masahiro | AI/ML Engineer & Video Creator',
    description: 'AI/ML Engineer specializing in video processing, automation workflows, and GPU-accelerated systems.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}

