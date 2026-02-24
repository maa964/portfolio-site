'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, Play, Download, Share2, X, MemoryStick as Memory, Terminal, Settings2 } from 'lucide-react';
import { portfolioPages } from '@/lib/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

interface PortfolioPageParams {
    pageId: number;
}

export default function PortfolioPageLayout({ pageId }: PortfolioPageParams) {
    const { language, t } = useLanguage();
    const currentPageData = portfolioPages.find((p) => p.id === pageId) || portfolioPages[0];

    const title = currentPageData.title[language];
    const description = currentPageData.description[language];

    return (
        <div className="min-h-screen bg-background-dark text-slate-200 font-display flex items-center justify-center p-4 lg:p-10 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 opacity-20 cyber-grid" />

            {/* Main Modal Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-20 w-full max-w-6xl bg-card-dark/80 backdrop-blur-xl rounded-xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-primary/20"
            >
                {/* Scanline Effect Overlay */}
                <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

                {/* Left Side: Video/Media Showcase */}
                <div className="w-full lg:w-3/5 p-6 lg:p-10 flex flex-col gap-8 relative border-b lg:border-b-0 lg:border-r border-primary/10">
                    <div className="flex items-center gap-4 mb-2">
                        <span className="bg-primary/20 text-primary text-[10px] font-bold px-3 py-1 tracking-[0.2em] rounded uppercase shadow-[0_0_10px_rgba(37,192,244,0.1)]">Live Feed</span>
                        <span className="text-[10px] text-primary/40 font-mono">ID: {currentPageData.category}_{pageId.toString().padStart(3, '0')} {/* REV_2.4 */}</span>
                    </div>

                    {/* Media Container with Brackets */}
                    <div className="relative group">
                        {/* Brackets */}
                        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary z-20" />
                        <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary z-20" />
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary z-20" />
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary z-20" />

                        <div className="aspect-video bg-black rounded-sm overflow-hidden relative flex items-center justify-center group/player shadow-2xl">
                            <Image
                                src={`/images/${currentPageData.category}/screen.png`}
                                alt={currentPageData.alt}
                                fill
                                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover/player:bg-black/20 transition-colors duration-500" />
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="relative z-10 size-20 rounded-full bg-primary/10 border border-primary/40 text-primary flex items-center justify-center backdrop-blur-md hover:shadow-[0_0_20px_rgba(37,192,244,0.3)] transition-all"
                            >
                                <Play size={40} fill="currentColor" />
                            </motion.button>

                            {/* Player Meta */}
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-white/50">
                                <div className="flex items-center gap-4">
                                    <span>00:42 / 02:15</span>
                                    <div className="flex gap-2 items-center">
                                        <div className="size-1.5 bg-primary rounded-full animate-pulse" />
                                        <span>REC_ON</span>
                                    </div>
                                </div>
                                <span>4K | 60 FPS</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 mt-auto">
                        <button className="flex items-center gap-3 bg-primary text-background-dark font-black text-[10px] py-3.5 px-8 rounded uppercase tracking-widest hover:shadow-[0_0_20px_rgba(37,192,244,0.4)] transition-all">
                            <Download size={14} />
                            Download Raw_Output
                        </button>
                        <button className="flex items-center gap-3 border border-primary/30 text-primary font-black text-[10px] py-3.5 px-8 rounded uppercase tracking-widest hover:bg-primary/10 transition-all">
                            <Share2 size={14} />
                            Export Data
                        </button>
                    </div>
                </div>

                {/* Right Side: Technical Panel */}
                <div className="w-full lg:w-2/5 flex flex-col bg-background-dark/30">
                    {/* Panel Header */}
                    <div className="p-8 lg:p-10 flex justify-between items-start border-b border-primary/10">
                        <div>
                            <h2 className="text-white text-4xl font-black mb-2 tracking-tighter uppercase italic">{title}</h2>
                            <p className="text-primary/60 text-[10px] font-mono uppercase tracking-[0.3em] font-bold">TYPE: {currentPageData.category === 'A' ? 'GEN_VIDEO_SYNTH' : 'NEURAL_ARCH_V1'}</p>
                        </div>
                        <Link href="/" className="size-10 flex items-center justify-center rounded border border-accent-magenta/30 text-accent-magenta hover:bg-accent-magenta/10 transition-all">
                            <X size={20} />
                        </Link>
                    </div>

                    {/* Scrollable Data */}
                    <div className="flex-1 overflow-y-auto p-8 lg:p-10 space-y-10">
                        {/* Summary */}
                        <section>
                            <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-primary/30 pl-4 py-1">
                                {description}
                            </p>
                        </section>

                        {/* Tech Specs */}
                        <section>
                            <div className="flex items-center gap-2 mb-4">
                                <Memory size={16} className="text-primary" />
                                <h2 className="text-[10px] font-bold uppercase tracking-widest text-white/50">Technical Specs</h2>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['Runway Gen-2', 'Midjourney v6', 'Topaz Video AI'].map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-slate-300 font-mono uppercase">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Prompt Strategy */}
                        <section>
                            <div className="flex items-center gap-2 mb-4">
                                <Terminal size={16} className="text-primary" />
                                <h2 className="text-[10px] font-bold uppercase tracking-widest text-white/50">Prompt Strategy</h2>
                            </div>
                            <div className="bg-black/60 rounded border border-primary/20 p-5 font-mono text-[10px] leading-relaxed text-slate-400 relative group italic">
                                <div className="absolute top-2 right-2 text-[7px] text-primary/30 font-bold uppercase">Read Only</div>
                                <span className="text-primary">/imagine</span> cinematic wide shot of neo-tokyo grid, hyper-detailed architecture, volumetric neon lighting, heavy rain, anamorphic lens flares, cyberpunk aesthetic, high motion --ar 21:9 --v 6.0
                            </div>
                        </section>

                        {/* Parameters */}
                        <section>
                            <div className="flex items-center gap-2 mb-6">
                                <Settings2 size={16} className="text-primary" />
                                <h2 className="text-[10px] font-bold uppercase tracking-widest text-white/50">Generation Parameters</h2>
                            </div>
                            <div className="grid grid-cols-2 gap-y-6 gap-x-8 border-t border-primary/10 pt-6">
                                {[
                                    { label: 'Seed ID', val: '48293921004' },
                                    { label: 'CFG Scale', val: '7.5' },
                                    { label: 'Motion', val: '6 / 10' },
                                    { label: 'Steps', val: '50 [DDIM]' }
                                ].map((param) => (
                                    <div key={param.label} className="flex flex-col gap-1.5">
                                        <span className="text-[9px] uppercase text-slate-500 font-bold tracking-widest">{param.label}</span>
                                        <span className="text-xs font-mono text-primary/80 font-bold">{param.val}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Optimization Bar */}
                        <div className="p-4 bg-primary/10 border-l-4 border-primary rounded-r-md">
                            <p className="text-[10px] text-primary leading-tight font-bold uppercase tracking-tighter">
                                OPTIMIZATION_COMPLETE: Peak performance achieved. Utilizing cross-model temporal consistency.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Floating HUD info */}
            <div className="fixed top-8 left-8 text-primary/20 pointer-events-none hidden xl:block font-mono text-[9px] uppercase leading-relaxed">
                LAT: 35.6895° N<br />
                LONG: 139.6917° E<br />
                DATA_NODE: ESTABLISHED
            </div>
            <div className="fixed bottom-8 right-8 text-primary/20 pointer-events-none hidden xl:block font-mono text-[9px] text-right uppercase leading-relaxed">
                Cyber-Zen Nexus // OS_v0.9<br />
                (c) 2024 AI_ML_CORE<br />
                STATUS: MONITORING
            </div>
        </div>
    );
}
