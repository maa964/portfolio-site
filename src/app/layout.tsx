import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Masahiro - AI/ML Engineer & Video Creator',
  description: 'ポートフォリオサイト：AI/ML開発、動画制作・編集、ワークフロー自動化のスペシャリスト。Python、Rust、CUDA、Premiere Pro、n8nを活用した革新的なソリューションを提供。',
  keywords: ['AI/ML', 'Video Production', 'Workflow Automation', 'Python', 'Rust', 'CUDA', 'n8n'],
  authors: [{ name: 'Masahiro' }],
  openGraph: {
    title: 'Masahiro - AI/ML Engineer & Video Creator',
    description: '禅とデジタルの融合 - AI/ML開発と動画制作のポートフォリオ',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
