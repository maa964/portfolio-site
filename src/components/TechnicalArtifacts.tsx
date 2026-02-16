'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, ArrowRight, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { RssArticle } from '@/lib/rss';

const INITIAL_DISPLAY_COUNT = 9;

interface TechnicalArtifactsProps {
    articles: RssArticle[];
}

export default function TechnicalArtifacts({ articles }: TechnicalArtifactsProps) {
    const { t } = useLanguage();
    const [isExpanded, setIsExpanded] = useState(false);

    const displayedArticles = isExpanded ? articles : articles.slice(0, INITIAL_DISPLAY_COUNT);
    const hasMoreArticles = articles.length > INITIAL_DISPLAY_COUNT;
    const remainingCount = articles.length - INITIAL_DISPLAY_COUNT;

    return (
        <section id="blog" className="py-24 bg-[#0a0f11] relative overflow-hidden min-h-screen">
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
                {/* Hero & Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase mb-6 font-display italic">
                            Technical <span className="text-primary">Artifacts</span>
                        </h1>
                        <p className="text-slate-400 text-lg font-display leading-relaxed">
                            {t('decryptingFrontier')}
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-primary/40 font-mono text-[10px] uppercase tracking-widest border border-primary/10 px-3 py-1 bg-primary/5 rounded">
                        <Radio size={12} className="animate-pulse" />
                        Status: Online // Latency: 12ms
                    </div>
                </div>

                {/* Source Badge */}
                <div className="flex gap-3 flex-wrap p-2 border border-primary/10 rounded-xl bg-card-dark/30 backdrop-blur-sm mb-12">
                    <a
                        href="https://note.com/maa964"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all bg-primary text-background-dark shadow-[0_0_15px_rgba(37,192,244,0.3)] flex items-center gap-2"
                    >
                        note.com/maa964
                        <ExternalLink size={10} />
                    </a>
                    <span className="px-5 py-2 text-primary/60 text-[10px] font-bold uppercase tracking-widest">
                        {articles.length} Articles
                    </span>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {displayedArticles.map((art) => (
                        <motion.a
                            key={art.id}
                            href={art.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col bg-[#162024]/40 backdrop-blur-md rounded-lg overflow-hidden border border-primary/10 hover:border-primary transition-all duration-300 shadow-xl cursor-pointer"
                        >
                            {/* Scanline Hover Effect */}
                            <div className="absolute inset-x-0 h-px bg-primary shadow-[0_0_15px_#25c0f4] z-20 opacity-0 group-hover:opacity-100 group-hover:animate-scanline pointer-events-none" />

                            <div className="relative h-32 overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent-magenta/10" />
                                <div className="absolute inset-0 bg-[#0a0f11]/60" />
                                <span className="relative z-10 text-3xl font-black font-display italic text-primary/30 tracking-tighter group-hover:text-primary/50 transition-colors">
                                    note.com
                                </span>
                                <div className="absolute top-3 left-3 bg-[#0a0f11]/80 px-2 py-0.5 border border-primary/30 rounded text-[8px] font-mono text-primary uppercase font-bold tracking-tighter">
                                    ID: {art.id}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-accent-magenta font-mono text-[9px] font-bold uppercase tracking-widest">#AI_論文</span>
                                    <span className="text-white/20 text-[9px]">•</span>
                                    <span className="text-white/40 font-mono text-[9px]">{art.pubDate}</span>
                                </div>
                                <h3 className="text-white text-lg font-bold leading-tight mb-4 group-hover:text-primary transition-colors font-display italic line-clamp-2">
                                    {art.title}
                                </h3>
                                <div className="mt-auto">
                                    <p className="text-slate-500 text-[11px] leading-relaxed mb-6 line-clamp-3 group-hover:text-slate-300 transition-colors">
                                        {art.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                                        Read_Full_Log
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* And More Button */}
                {hasMoreArticles && (
                    <div className="flex justify-center mb-16">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="group flex items-center gap-3 px-8 py-3 rounded-lg border border-primary/30 bg-[#162024]/40 backdrop-blur-md hover:border-primary hover:bg-primary/10 transition-all duration-300"
                        >
                            <span className="text-primary text-[11px] font-black uppercase tracking-widest">
                                {isExpanded ? 'Show Less' : `And ${remainingCount} More`}
                            </span>
                            {isExpanded ? (
                                <ChevronUp size={16} className="text-primary" />
                            ) : (
                                <ChevronDown size={16} className="text-primary group-hover:animate-bounce" />
                            )}
                        </button>
                    </div>
                )}
            </div>

            {/* Float HUD Elements relative to section */}
            <div className="absolute top-24 left-6 hidden lg:block opacity-20 pointer-events-none font-mono text-[9px] text-primary">
                <div className="flex flex-col gap-1 mb-6">
                    <div className="w-12 h-1 bg-primary" />
                    <div className="w-8 h-1 bg-primary/50" />
                    <div className="w-10 h-1 bg-primary/30" />
                </div>
                <div className="flex flex-col gap-1 uppercase">
                    <span>Coord: 34.0522° N</span>
                    <span>Data: 118.2437° W</span>
                    <span className="text-accent-magenta">Secure_Link: YES</span>
                </div>
            </div>

            <style jsx>{`
                @keyframes scanline {
                    0% { top: 0%; }
                    100% { top: 100%; }
                }
                .animate-scanline {
                    animation: scanline 2s linear infinite;
                }
                .cyber-grid {
                    background-image: 
                        linear-gradient(rgba(37, 192, 244, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(37, 192, 244, 0.03) 1px, transparent 1px);
                    background-size: 50px 50px;
                }
            `}</style>
        </section>
    );
}
