'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

const portfolioPages = [
  { id: 1, title: 'Hero', alt: 'Masahiro - AI/ML Engineer & Video Creator' },
  { id: 2, title: 'Core Expertise', alt: '専門分野' },
  { id: 3, title: 'Enterprise Video System', alt: 'Jitsi Meetプロジェクト' },
  { id: 4, title: 'AI Video Enhancement', alt: 'AI動画処理パイプライン' },
  { id: 5, title: 'Whisper Transcription', alt: 'Whisper文字起こしシステム' },
  { id: 6, title: 'Web Automation', alt: 'Web情報自動取得' },
  { id: 7, title: 'Technology Stack', alt: '技術スタック' },
  { id: 8, title: 'Development Philosophy', alt: '開発理念' },
  { id: 9, title: 'Documentation', alt: 'ドキュメント' },
  { id: 10, title: 'Project Structure', alt: 'プロジェクト構成' },
  { id: 11, title: 'Performance', alt: 'パフォーマンス最適化' },
  { id: 12, title: 'Reliability', alt: '信頼性・エラーハンドリング' },
  { id: 13, title: 'Security', alt: 'セキュリティ' },
  { id: 14, title: 'Future Vision', alt: '未来ビジョン' },
  { id: 15, title: 'Contact', alt: '連絡先' },
];

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // プリロード処理
    const preloadImages = async () => {
      const promises = portfolioPages.map((page) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.src = `/images/page-${String(page.id).padStart(2, '0')}.png`;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setIsLoading(false);
      } catch (error) {
        console.error('画像のプリロードに失敗しました:', error);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      } else if (e.key === 'ArrowRight' && currentPage < portfolioPages.length - 1) {
        setCurrentPage(currentPage + 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage < portfolioPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (index: number) => {
    setCurrentPage(index);
    setIsMenuOpen(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-500 animate-spin"></div>
          </div>
          <p className="text-xl text-cyan-400 font-light tracking-wider">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* ナビゲーションヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Masahiro Portfolio
            </h1>
            <span className="hidden md:block text-sm text-slate-400">
              {currentPage + 1} / {portfolioPages.length}
            </span>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center gap-6">
            {portfolioPages.slice(0, 5).map((page, index) => (
              <button
                key={page.id}
                onClick={() => goToPage(index)}
                className={`text-sm transition-colors ${
                  currentPage === index
                    ? 'text-cyan-400 font-semibold'
                    : 'text-slate-300 hover:text-cyan-300'
                }`}
              >
                {page.title}
              </button>
            ))}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* フルスクリーンメニュー */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {portfolioPages.map((page, index) => (
                <button
                  key={page.id}
                  onClick={() => goToPage(index)}
                  className={`p-6 rounded-lg border transition-all ${
                    currentPage === index
                      ? 'bg-cyan-500/10 border-cyan-500 shadow-lg shadow-cyan-500/20'
                      : 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-sm text-cyan-400 mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="text-lg font-semibold text-slate-100 mb-1">{page.title}</div>
                  <div className="text-sm text-slate-400">{page.alt}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* メインコンテンツエリア */}
      <main className="pt-20 pb-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="relative aspect-video bg-slate-800/50 rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/5 border border-cyan-500/10">
            <Image
              src={`/images/page-${String(portfolioPages[currentPage].id).padStart(2, '0')}.png?v=${portfolioPages[currentPage].id}`}
              alt={portfolioPages[currentPage].alt}
              fill
              className="object-contain"
              priority={currentPage === 0}
              quality={100}
              unoptimized={true}
            />
          </div>

          {/* ページインジケーター */}
          <div className="mt-8 flex justify-center gap-2">
            {portfolioPages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`h-2 rounded-full transition-all ${
                  currentPage === index
                    ? 'w-8 bg-cyan-500'
                    : 'w-2 bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </main>

      {/* ナビゲーションコントロール */}
      <div className="fixed bottom-8 left-0 right-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`p-4 rounded-full backdrop-blur-md transition-all ${
                currentPage === 0
                  ? 'bg-slate-800/30 text-slate-600 cursor-not-allowed'
                  : 'bg-slate-800/80 text-cyan-400 hover:bg-slate-700 hover:shadow-lg hover:shadow-cyan-500/20'
              }`}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="px-6 py-3 bg-slate-800/80 backdrop-blur-md rounded-full border border-cyan-500/20 text-sm text-slate-300">
              <span className="text-cyan-400 font-semibold">{currentPage + 1}</span>
              <span className="mx-2">/</span>
              <span>{portfolioPages.length}</span>
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === portfolioPages.length - 1}
              className={`p-4 rounded-full backdrop-blur-md transition-all ${
                currentPage === portfolioPages.length - 1
                  ? 'bg-slate-800/30 text-slate-600 cursor-not-allowed'
                  : 'bg-slate-800/80 text-cyan-400 hover:bg-slate-700 hover:shadow-lg hover:shadow-cyan-500/20'
              }`}
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
