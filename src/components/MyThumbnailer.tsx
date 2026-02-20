'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Layout, Sparkles, MousePointer2, ArrowRight, Layers } from 'lucide-react';

export default function MyThumbnailer() {
    const features = [
        {
            icon: <Sparkles size={20} />,
            title: 'AI-Enhanced Design',
            desc: '最新のAI技術を活用して、クリック率を最大化する魅力的なサムネイルを瞬時に生成'
        },
        {
            icon: <Layers size={20} />,
            title: 'A/B Testing Flow',
            desc: '複数のバリエーションをアップロードし、最も効果的なデザインをデータに基づいて選定'
        },
        {
            icon: <MousePointer2 size={20} />,
            title: 'Intuitive Interface',
            desc: '直感的なドラッグ＆ドロップ操作で、誰でもプロフェッショナルな品質を実現'
        }
    ];

    return (
        <section id="thumbnailer" className="py-24 bg-gradient-to-b from-[#0d1518] to-[#0a0f11] relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none cyber-grid" />

            {/* Accent Lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-magenta to-transparent opacity-30" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />

            <div className="max-w-6xl mx-auto px-6 lg:px-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-accent-magenta/10 border border-accent-magenta/20 text-accent-magenta text-[10px] font-bold tracking-[0.3em] uppercase font-mono">
                            <Layout size={12} className="animate-pulse" />
                            Visual Optimization Tool
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none uppercase text-white">
                            Thumbnail Maker <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-magenta to-primary italic">Thumbnailer</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 text-lg max-w-md leading-relaxed font-display">
                        クリエイターの成果を最大化するための、高度なサムネイル作成・最適化プラットフォーム。
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Interactive Preview Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 relative group"
                    >
                        <div className="relative bg-[#162024]/60 rounded-2xl border border-accent-magenta/20 overflow-hidden backdrop-blur-md">
                            {/* Browser Top Bar */}
                            <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center justify-between">
                                <div className="flex gap-1.5">
                                    <div className="size-2.5 rounded-full bg-red-500/40" />
                                    <div className="size-2.5 rounded-full bg-yellow-500/40" />
                                    <div className="size-2.5 rounded-full bg-green-500/40" />
                                </div>
                                <div className="bg-black/40 px-3 py-1 rounded text-[8px] font-mono text-slate-500 border border-white/5">
                                    https://my-thumbnailer.vercel.app/
                                </div>
                                <div className="w-10" />
                            </div>

                            {/* Content Preview */}
                            <div className="p-1 relative aspect-video overflow-hidden">
                                <div className="absolute inset-0 bg-[#0a0f11] flex items-center justify-center">
                                    <div className="text-center space-y-6">
                                        <div className="inline-block px-4 py-2 bg-accent-magenta/20 border border-accent-magenta/40 rounded-lg">
                                            <span className="text-accent-magenta font-mono font-bold animate-pulse text-xs uppercase tracking-[0.2em]">Next-Gen Creator Tools</span>
                                        </div>
                                        <h3 className="text-4xl font-black text-white italic tracking-tighter">BOOST YOUR <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-magenta to-primary">CLICK RATE</span></h3>
                                        <div className="flex justify-center gap-4">
                                            <div className="w-32 h-18 bg-white/5 rounded border border-white/10 flex items-center justify-center">
                                                <span className="text-[10px] text-white/40 font-mono">Variant A</span>
                                            </div>
                                            <div className="w-32 h-18 bg-accent-magenta/10 rounded border border-accent-magenta/30 flex items-center justify-center">
                                                <span className="text-[10px] text-accent-magenta/60 font-mono">Variant B</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1518] to-transparent opacity-60" />
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 size-32 bg-accent-magenta/20 blur-[60px] rounded-full -z-10 animate-pulse" />
                        <div className="absolute -bottom-6 -left-6 size-32 bg-primary/20 blur-[60px] rounded-full -z-10" />
                    </motion.div>

                    {/* Right: Info & Features */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-6">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                    className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group"
                                >
                                    <div className="size-12 rounded-xl bg-accent-magenta/10 border border-accent-magenta/20 flex items-center justify-center text-accent-magenta group-hover:bg-accent-magenta group-hover:text-background-dark transition-all flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <a
                                href="https://my-thumbnailer.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 w-full justify-center px-8 py-5 bg-gradient-to-r from-accent-magenta to-[#ff4db5] text-white font-black rounded-xl transition-all shadow-[0_0_30px_rgba(255,46,163,0.3)] hover:shadow-[0_0_45px_rgba(255,46,163,0.5)] active:scale-[0.98]"
                            >
                                <span className="text-sm uppercase tracking-[0.2em]">Open My Thumbnailer</span>
                                <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                <div className="absolute inset-0 rounded-xl overflow-hidden">
                                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[25deg] group-hover:left-[100%] transition-all duration-700 pointer-events-none" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats/Info Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 p-8 bg-[#162024]/40 rounded-2xl border border-white/5 flex flex-wrap items-center justify-around gap-8 backdrop-blur-sm"
                >
                    <div className="text-center group">
                        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1 group-hover:text-accent-magenta transition-colors">Integration</p>
                        <p className="text-2xl font-black text-white font-mono">Vercel Edge</p>
                    </div>
                    <div className="h-10 w-px bg-white/10 hidden md:block" />
                    <div className="text-center group">
                        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">Latency</p>
                        <p className="text-2xl font-black text-white font-mono">&lt; 100ms</p>
                    </div>
                    <div className="h-10 w-px bg-white/10 hidden md:block" />
                    <div className="text-center group">
                        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1 group-hover:text-accent-magenta transition-colors">Optimization</p>
                        <p className="text-2xl font-black text-white font-mono">Neural A/B</p>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                .cyber-grid {
                    background-image: 
                        linear-gradient(rgba(255, 46, 163, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 46, 163, 0.03) 1px, transparent 1px);
                    background-size: 50px 50px;
                }
            `}</style>
        </section>
    );
}
