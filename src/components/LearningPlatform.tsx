'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink, BookOpen, ArrowRight } from 'lucide-react';
import { learningFeatures as features } from '@/data/learning-platform';

export default function LearningPlatform() {
    const { t } = useLanguage();

    return (
        <section id="learning" className="py-24 bg-gradient-to-b from-[#0a0f11] to-[#0d1518] relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none cyber-grid" />

            {/* Accent Lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-magenta to-transparent opacity-30" />

            <div className="max-w-6xl mx-auto px-6 lg:px-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.3em] uppercase font-mono">
                        <BookOpen size={12} className="animate-pulse" />
                        Educational Platform
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none uppercase text-white mb-6">
                        Creator <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-magenta italic">Learning Hub</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        クリエイターのための実践的な学習プラットフォーム。AI/ML、映像制作、音響エンジニアリングの技術を体系的に習得できます。
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                >
                    {/* Main Card */}
                    <div className="relative bg-[#0d1518]/60 rounded-2xl border border-primary/20 overflow-hidden backdrop-blur-md p-8 md:p-12">
                        {/* Decorative Corner Brackets */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40" />
                        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/40" />
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/40" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/40" />

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left: Features */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="size-3 rounded-full bg-primary shadow-[0_0_12px_rgba(37,192,244,0.6)] animate-pulse" />
                                    <span className="text-[10px] font-mono text-primary uppercase tracking-widest font-bold">
                                        Platform Status: Active
                                    </span>
                                </div>

                                {features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + idx * 0.1 }}
                                        className="flex gap-4 group"
                                    >
                                        <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all flex-shrink-0">
                                            <feature.icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Right: CTA */}
                            <div className="relative">
                                <div className="p-8 bg-gradient-to-br from-primary/10 to-accent-magenta/10 rounded-xl border border-primary/20 backdrop-blur-sm">
                                    <div className="mb-6">
                                        <div className="inline-block px-3 py-1 mb-4 rounded bg-primary/20 border border-primary/30">
                                            <span className="text-[10px] font-mono text-primary uppercase tracking-widest font-bold">
                                                learning-tools-orpin.vercel.app
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">
                                            今すぐアクセス
                                        </h3>
                                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                            無料で利用できる学習リソースとツールを今すぐ体験してください。
                                        </p>
                                    </div>

                                    <a
                                        href="https://learning-tools-orpin.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative inline-flex items-center gap-3 w-full justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-background-dark font-bold rounded-lg transition-all shadow-[0_0_30px_rgba(37,192,244,0.3)] hover:shadow-[0_0_40px_rgba(37,192,244,0.5)]"
                                    >
                                        <span className="text-sm uppercase tracking-wider">プラットフォームを開く</span>
                                        <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </a>

                                    {/* Stats */}
                                    <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                                        <div className="text-center">
                                            <p className="text-2xl font-bold text-primary font-mono">24/7</p>
                                            <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Access</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-2xl font-bold text-accent-magenta font-mono">Free</p>
                                            <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Resources</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-2xl font-bold text-primary font-mono">∞</p>
                                            <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Updates</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Glow Effect */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent-magenta/20 rounded-2xl blur-2xl -z-10 opacity-50" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Info Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-background-dark/50 rounded-xl border border-primary/10"
                >
                    <div className="flex items-center gap-3">
                        <div className="size-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                            Platform Online • Last Updated: 2026-02-06
                        </span>
                    </div>
                    <a
                        href="https://learning-tools-orpin.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
                    >
                        <span className="text-sm font-medium">詳細を見る</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>

            <style jsx>{`
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
