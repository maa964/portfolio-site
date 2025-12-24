import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Philosophy from '@/components/Philosophy';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="noise">
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <Skills />
        <Philosophy />
        <Contact />
=======
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
>>>>>>> 00b5dba0eeea418f825ba2b5c970e7493a341b40
      </main>
      <Footer />
    </div>
  );
}
