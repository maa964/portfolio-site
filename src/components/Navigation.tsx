'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { portfolioPages } from '@/lib/portfolioData';

export default function Navigation({ currentPageId }: { currentPageId?: number }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/10">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-80 transition-opacity">
                            Masahiro Portfolio
                        </Link>
                        {currentPageId && (
                            <span className="hidden md:block text-sm text-slate-400">
                                {currentPageId} / {portfolioPages.length}
                            </span>
                        )}
                    </div>

                    <nav className="hidden lg:flex items-center gap-6">
                        <Link
                            href="/"
                            className={`text-sm transition-colors ${currentPageId === 1 ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-cyan-300'}`}
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/mix-mastering"
                            className={`text-sm transition-colors ${!currentPageId ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-cyan-300'}`}
                        >
                            Mix & Mastering
                        </Link>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-slate-300 hover:text-cyan-400 transition-colors ml-4"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </nav>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </header>

            {/* Full Screen Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-lg overflow-y-auto">
                    <div className="container mx-auto px-4 py-24">
                        <div className="mb-8 flex justify-center gap-4">
                            <Link href="/" onClick={() => setIsMenuOpen(false)} className="px-6 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 hover:border-cyan-500/50 transition-all">
                                Portfolio
                            </Link>
                            <Link href="/mix-mastering" onClick={() => setIsMenuOpen(false)} className="px-6 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 hover:border-purple-500/50 transition-all">
                                Mix & Mastering
                            </Link>
                        </div>

                        <h2 className="text-center text-xl text-slate-400 mb-6">Portfolio Pages</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                            {portfolioPages.map((page) => (
                                <Link
                                    key={page.id}
                                    href={page.id === 1 ? '/' : `/p/${page.id}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`p-6 rounded-lg border transition-all ${currentPageId === page.id
                                            ? 'bg-cyan-500/10 border-cyan-500 shadow-lg shadow-cyan-500/20'
                                            : 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800'
                                        }`}
                                >
                                    <div className="text-sm text-cyan-400 mb-2">
                                        {String(page.id).padStart(2, '0')}
                                    </div>
                                    <div className="text-lg font-semibold text-slate-100 mb-1">{page.title}</div>
                                    <div className="text-sm text-slate-400">{page.alt}</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
