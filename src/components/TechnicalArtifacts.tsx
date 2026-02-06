'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, ArrowRight, Search, ChevronLeft, ChevronRight, Database, Terminal, Code, Share, Mail, ArrowUp } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const articles = [
    {
        id: '8829-X',
        tag: '#Neural_Rendering',
        date: '2024.05.12',
        title: 'Optimizing Latent Space: My Stable Diffusion Workflow',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD9WytOlclROqlrnuin6EEkPoLrmCCKLz_kR0mYCToKQnVI8ViSCeFILtjnv_T2jjbkISv7e4H0JBf7iWy8LjXWcW45NKbTMizx98s57ZKmMVSL8rNek7YQjQVKSMJgMFTuECB5_qr-tYIQUGtqtdbJtmeuSpBlXnHbQcCVbQ2KSIWPmRP_9eLlPIZuWImhyz0P5Co9zDmV8rdABbgEC11Qel_xJUaraqlIxrGb0alEJkdF8_pIFK7j5UzE3rkUGboOT-zkirnPWg',
        desc: 'Deep dive into the mathematical shortcuts for reducing VRAM usage while maximizing image fidelity in SDXL.'
    },
    {
        id: '4412-A',
        tag: '#Glitch_Art',
        date: '2024.04.28',
        title: 'Automated Video Glitch with Python Scripts',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtJysLH3Pv9qtclFopC7XaFdTVcUsZgxtoU8fc_9gwEin4r_jCspdCALjHzg_XqzXK9BGFfSi3CD7S12fppTG_PSjaxdRIP0Gm5kYH__B0H7jSN60FoQZDZy0Z30f0doYXUwWh_BiDXMbHW7oIaE2tVYsAJYeYPxynNn8h4df7frxdfcJLdKq9EFn1BIN05GUy8N2RqhySyKLQ3yh--1XKYkLdZQjzdX6jBnXVVR4uiVvXpf0pPmVWDTz8dlJovfEfx4OPvBXdbQA',
        desc: 'Hacking the MP4 container format to create repeatable, procedural artifacts for aesthetic video production.'
    },
    {
        id: '2901-B',
        tag: '#Vector_DB',
        date: '2024.04.15',
        title: 'Vector Databases for LLM Content Retrieval',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl-b8GEPrgPPVLpeKjuv4_e4a77v_YfQk0IVoyH54S1smiX2bvKtFsSybtRc3dkeaeFNCA70GgfPL1z4UfsNVkk6QCHft-9m9Tmd4qbuSN4sImu1XZ9ebgiEKpWCTsXrUfSAq3gw1gWg2x9gCJb4UwKxNriaqdDWVyNkOweRd0P5CFG1HSyPv_qvaJh6dBkqrj7F8G47WHYf3k1wJby6LCXtAheN-6nLewdDStlIGq1drcYrgATRnjveKr11EP--ZzHBewBEbVoPs',
        desc: 'How to architect a RAG system that handles millions of technical documents with sub-second retrieval.'
    },
    {
        id: '7731-K',
        tag: '#Synth_Media',
        date: '2024.03.30',
        title: 'The Future of Cinematic Synthesis',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1dskRQVS_OaDclrZD9nR12ZNskBjRJ1QlQy6YfwTIxTWOxq0SE9XGwSXqH3g51DQos0mTHm_iN8neuE7zSZ1gv7LEmco5PwZEDrW_IGCuVBcR4yP6KCoJQzDY0MHtkJPGy8_zT-Y1rah_KJ3Jv_A0VaIHg1uLEDjoD4a4QIeMHv37QroqDKQ5Lzy9KN1a5Vp1zah4DgCVqyoogTNu6oqHN9qqsHeAUJixafeQIk6sQEa_BG6RXlGOkHHUSIaowGm7z4Y61WV8Whw',
        desc: 'Exploring the ethics and workflows of using generative AI in high-end film production pipelines.'
    },
    {
        id: '0019-Z',
        tag: '#Interpolation',
        date: '2024.03.12',
        title: 'Deep Learning for Video Frame Interpolation',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACf5F3X6vJsPfRIe5SKdJPoNV956yNL_OZ1ewBwOP_Yq1vKU624UnLVollxqdMQLuPkabKmi2vfZXEMrbs_LsEJoQsfAPyJ21aWSHGaNsEIuqR5pjNk6hlEJYF0ZBbnbzeAJ_620apFKDyYuWNVI-FMqKMeXbkXEu4fvU7X-FtXKHci2jzrmKM8hDTAjVrzIxRf2jdp5n2ikCN7piB19F87rVBcOzLWt0szW85frR7zsUhQb2ipWl_Qh7-HkLsB0dDXvMPT65bJGw',
        desc: 'Benchmarking RIFE vs. DAIN for generating ultra-slow motion from standard 24fps cinema footage.'
    },
    {
        id: '5521-M',
        tag: '#RealTime',
        date: '2024.02.25',
        title: 'Neural Rendering in Real-time Environments',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNG9_JCHvvF3vES6HtZ90hdw-smIhp_5I_ze66JMdW883xzMQyS514d-lZYqENNxCKa05giaxIDgO0bzUg8mOtdEr37dq8zCDbhSfKuIp_8Z2V7Yo3FvNpjPDUBxxINvBCyR2gbqupfiqZ-oGJ99w1vu00a71rDIfmcgJJdHy6xXJmdVBTBzICZ-kjMpYqCYH3mK-dR1K7Lfnf1uImZUxDO4WazoesmQQRfm2U20rcB3KlAAfNFVGx7rPbsF0numMnJjyU-oU1laM',
        desc: 'Implementing Instant-NGP inside Unreal Engine 5 for photorealistic digital twins.'
    }
];

export default function TechnicalArtifacts() {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('All_Entries');

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

                {/* Category Filters */}
                <div className="flex gap-3 flex-wrap p-2 border border-primary/10 rounded-xl bg-card-dark/30 backdrop-blur-sm mb-12">
                    {['All_Entries', 'AI/ML_Models', 'Machine_Leaning', 'Python_Scripts', 'Gen_Video'].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${activeFilter === filter
                                ? 'bg-primary text-background-dark shadow-[0_0_15px_rgba(37,192,244,0.3)]'
                                : 'text-primary/60 hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {articles.map((art) => (
                        <motion.article
                            key={art.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col bg-[#162024]/40 backdrop-blur-md rounded-lg overflow-hidden border border-primary/10 hover:border-primary transition-all duration-300 shadow-xl"
                        >
                            {/* Scanline Hover Effect */}
                            <div className="absolute inset-x-0 h-px bg-primary shadow-[0_0_15px_#25c0f4] z-20 opacity-0 group-hover:opacity-100 group-hover:animate-scanline pointer-events-none" />

                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={art.image}
                                    alt={art.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#162024] via-transparent to-transparent" />
                                <div className="absolute top-4 left-4 bg-[#0a0f11]/80 px-2.5 py-1 border border-primary/30 rounded text-[9px] font-mono text-primary uppercase font-bold tracking-tighter">
                                    ID: {art.id}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-accent-magenta font-mono text-[9px] font-bold uppercase tracking-widest">{art.tag}</span>
                                    <span className="text-white/20 text-[9px]">•</span>
                                    <span className="text-white/40 font-mono text-[9px]">{art.date}</span>
                                </div>
                                <h3 className="text-white text-lg font-bold leading-tight mb-4 group-hover:text-primary transition-colors font-display italic">
                                    {art.title}
                                </h3>
                                <div className="mt-auto">
                                    <p className="text-slate-500 text-[11px] leading-relaxed mb-6 line-clamp-2 group-hover:text-slate-300 transition-colors">
                                        {art.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                                        Read_Full_Log
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-4">
                    <button className="flex size-10 items-center justify-center rounded border border-primary/20 text-primary hover:bg-primary/10 transition-colors">
                        <ChevronLeft size={18} />
                    </button>
                    <button className="text-xs font-black size-10 flex items-center justify-center rounded bg-primary text-background-dark shadow-[0_0_15px_rgba(37,192,244,0.3)]">01</button>
                    <button className="text-xs font-black size-10 flex items-center justify-center rounded border border-primary/20 text-white/50 hover:text-primary hover:border-primary/50 transition-colors">02</button>
                    <button className="text-xs font-black size-10 flex items-center justify-center rounded border border-primary/20 text-white/50 hover:text-primary hover:border-primary/50 transition-colors">03</button>
                    <span className="text-white/20">...</span>
                    <button className="flex size-10 items-center justify-center rounded border border-primary/20 text-primary hover:bg-primary/10 transition-colors">
                        <ChevronRight size={18} />
                    </button>
                </div>
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
