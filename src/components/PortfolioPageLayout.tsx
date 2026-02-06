'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioPages } from '@/lib/portfolioData';
import Navigation from '@/components/Navigation';

interface PortfolioPageParams {
    pageId: number;
}

export default function PortfolioPageLayout({ pageId }: PortfolioPageParams) {
    const currentPageData = portfolioPages.find((p) => p.id === pageId) || portfolioPages[0];
    const currentIndex = portfolioPages.findIndex((p) => p.id === pageId);

    const prevPage = currentIndex > 0 ? portfolioPages[currentIndex - 1] : null;
    const nextPage = currentIndex < portfolioPages.length - 1 ? portfolioPages[currentIndex + 1] : null;

    const prevHref = prevPage ? (prevPage.id === 1 ? '/' : `/p/${prevPage.id}`) : null;
    const nextHref = nextPage ? `/p/${nextPage.id}` : null;
    // Note: If nextPage is id 1 (which shouldn't happen if we move forward), it would be / but logic handles 1->2->...

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden flex flex-col">
            <Navigation currentPageId={pageId} />

            {/* Main Content */}
            <main className="flex-grow pt-24 pb-24 px-4 flex flex-col justify-center">
                <div className="container mx-auto max-w-7xl h-full flex flex-col items-center">

                    {/* Image Container */}
                    <div className="relative w-full aspect-video bg-slate-800/50 rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/5 border border-cyan-500/10">
                        <Image
                            src={`/images/page-${String(pageId).padStart(2, '0')}.png`}
                            alt={currentPageData.alt}
                            fill
                            className="object-contain"
                            priority={pageId === 1}
                            quality={100}
                            unoptimized={true}
                        />
                    </div>

                    {/* Indicators */}
                    <div className="mt-8 flex justify-center gap-2 flex-wrap">
                        {portfolioPages.map((p, index) => (
                            <Link
                                key={index}
                                href={p.id === 1 ? '/' : `/p/${p.id}`}
                                className={`h-2 rounded-full transition-all ${p.id === pageId
                                        ? 'w-8 bg-cyan-500'
                                        : 'w-2 bg-slate-600 hover:bg-slate-500'
                                    }`}
                                aria-label={`Go to page ${p.id}`}
                            />
                        ))}
                    </div>
                </div>
            </main>

            {/* Bottom Navigation Controls */}
            <div className="fixed bottom-8 left-0 right-0 z-30 pointer-events-none">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center max-w-7xl mx-auto">
                        {prevHref ? (
                            <Link
                                href={prevHref}
                                className="pointer-events-auto p-4 rounded-full backdrop-blur-md bg-slate-800/80 text-cyan-400 hover:bg-slate-700 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                                aria-label="Previous page"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </Link>
                        ) : (
                            <div className="p-4 w-14"></div> /* Spacer */
                        )}

                        <div className="pointer-events-auto px-6 py-3 bg-slate-800/80 backdrop-blur-md rounded-full border border-cyan-500/20 text-sm text-slate-300">
                            <span className="text-cyan-400 font-semibold">{pageId}</span>
                            <span className="mx-2">/</span>
                            <span>{portfolioPages.length}</span>
                        </div>

                        {nextHref ? (
                            <Link
                                href={nextHref}
                                className="pointer-events-auto p-4 rounded-full backdrop-blur-md bg-slate-800/80 text-cyan-400 hover:bg-slate-700 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                                aria-label="Next page"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </Link>
                        ) : (
                            <div className="p-4 w-14"></div> /* Spacer */
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
