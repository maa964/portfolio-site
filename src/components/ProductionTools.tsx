'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Code, Zap, Settings, Download, FileText, Terminal, ChevronRight, Timer, ExternalLink, Heart, ListTodo, FileVideo } from 'lucide-react';

export default function ProductionTools() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('tools');

    const tools = [
        {
            id: 'upscaler',
            title: 'Video Upscaler',
            subtitle: '4K Neural Enhancement',
            icon: <Settings size={24} />,
            desc: 'Real-ESRGAN アーキテクチャを活用し、低解像度の映像アセットのフレーム品質を向上させ、ノイズを低減し、ディテールを再構築します。',
            architecture: 'Real-ESRGAN',
            process: '4x Scaling',
            framework: 'PyTorch 2.1',
            performance: '24.5 FPS AVG',
            color: 'primary',
            accent: '#25c0f4',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa_l3leHVEnobO8ac0ujSEs3OHnFiyUo6_m1JRkRi6NOBZxdItd0No6Jm_RL9oP67Wh2ktnbpXeSdau1-hRZp7uQFUTS55zRlG4NbGtSNV_LSRB-IeGOw_ZShaiEHzavJst_DzLY-j-8TlrQ9EeNl9drdV4MlZj1MLojFNG9v9Eiq4lgHQ1zW2UpYw1C9Dje-3ajmdjeCKusjswkmW4gCE-nQZoDfBalhzGh26fH79rRg78ictqn_vrjvg9ftUrtPKvQU1XNI3_Tc'
        },
        {
            id: 'interpolator',
            title: 'Frame Interpolator',
            subtitle: 'Smooth Motion',
            icon: <Zap size={24} />,
            desc: '光学フロー推定を使用して、24fps のシネマティック映像を滑らかな 60fps または 120fps のスローモーションに変換します。',
            architecture: 'RIFE (Real-Time IFE)',
            precision: 'FP16 / Mixed',
            latency: '14ms @ 1080p',
            color: 'accent-magenta',
            accent: '#ff2ea3',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjfE448v1HfErzFnkT9Vi-mVwzUvIa4FR_D0nh03Rr6g9nYRveHyyGSgYFvxTHIGSI5yKem0toKJNEDLUfMhTohyR1JwJCS-3e-YorNnFnTDw8wgrur0svmJaqqH7Ef_1yjJ6Cgp_7fU8zJvXkly4VqAfa4-hlySkzjoSrxx4ov7eWThnFEXgEola3EzweOA6RLayFaC3VhpRV-yZG9bneGyCs772lS-VLNLRfUXgvpEJ4xnuxoHHUb2P0_rFEi8nePDMMJW0vS38'
        },
        {
            id: 'ae-plugin',
            title: 'AE Pipeline Plugin',
            subtitle: 'Native Integration',
            icon: <Code size={24} />,
            desc: 'タイムライン内で直接 GPU アクセラレーションによるニューラル推論を行うための、ネイティブ After Effects ブリッジ。',
            compatibility: 'AE 2022+ / CUDA',
            interface: 'C++ / Adobe SDK',
            engine: 'LibTorch Backend',
            color: 'primary',
            accent: '#25c0f4'
        },
        {
            id: 'pomodoro',
            title: 'Pomodoro Timer',
            subtitle: 'Focus Management',
            icon: <Timer size={24} />,
            desc: 'シンプルでカスタマイズ可能なポモドーロ・テクニック用タイマー。25分の作業と5分の休憩を自動切替、デジタル/アナログ表示切替、背景色・文字色のカスタマイズに対応。',
            compatibility: 'Windows',
            interface: 'Desktop App',
            engine: 'Standalone .exe',
            color: 'accent-magenta',
            accent: '#ff2ea3',
            downloadUrl: '/downloads/PomodroTimer.zip',
            boothUrl: 'https://maa964.booth.pm/items/7977463',
            image: '/images/pomodro01.jpg'
        },
        {
            id: 'taskmanager',
            title: 'Task Manager',
            subtitle: 'Productivity Tool',
            icon: <ListTodo size={24} />,
            desc: 'シンプルで使いやすいタスク管理ツール。タスクの追加・編集・削除、優先度設定、進捗管理に対応。効率的なワークフローをサポートします。',
            compatibility: 'Windows',
            interface: 'Desktop App',
            engine: 'Standalone .exe',
            color: 'primary',
            accent: '#25c0f4',
            boothUrl: 'https://maa964.booth.pm/items/7977565',
            image: '/images/taskmanager01.jpg'
        },
        {
            id: 'media-converter',
            title: 'いろんなメディア変換ツール',
            subtitle: 'Media Converter',
            icon: <FileVideo size={24} />,
            desc: '画像・動画を高速に一括変換できるWindows向けデスクトップアプリ。NVIDIA CUDA GPU対応で高速処理、AI画像強化機能搭載。PNG、JPG、HEIC、WebP、SVGなどの画像形式と、MP4、MOV、WebMなどの動画形式に対応。',
            compatibility: 'Windows',
            interface: 'Desktop App',
            engine: 'CUDA Accelerated',
            color: 'accent-magenta',
            accent: '#ff2ea3',
            boothUrl: 'https://maa964.booth.pm/items/8007334'
        }
    ];

    return (
        <section id="tools" className="py-24 bg-[#0a0f11] relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none cyber-grid" />

            <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 text-primary mb-6">
                        <div className="size-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">System Online: Internal Tools v4.2.0</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none uppercase text-white mb-6">
                        Internal Tools & <span className="text-primary italic">Plugins</span>
                    </h2>
                    <p className="text-slate-400 max-w-3xl text-lg">
                        自動化されたシネマティック強化のために設計された、高性能ディープラーニングモデルと VFX 統合。
                    </p>
                </div>

                {/* Main Tool: Video Upscaler */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 bg-[#0d1518] rounded-xl border border-primary/10 overflow-hidden"
                >
                    <div className="flex flex-col lg:flex-row min-h-[500px]">
                        {/* Visual Comparison */}
                        <div className="lg:w-3/5 relative overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-50 grayscale"
                                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8AigVMJpA728X874z2leFWedo1TV63Nm36Y-JXYhoDpUiz9ZKdCY4AEewaYADZQshNcHJeI9CE0kIZ9Zt5UlNBAkTe5G3XNuqyJ2XXKsVmfYMcws7x_wm0UzvEA8ZnWG-4nAChJ88NIwpHIUL1Ew_NGfZgzUdeYi5Lhu0vrozsZmR3QAws1sA7HK2J6rc3z3-vTktRwL4zoAKMM6LOwkTTAeZfln9W3p-32CFNyCAxBbibom5Ys-lCmzgC3MFW6NfTbyxAfZmigo')` }}
                            />
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('${tools[0].image}')`,
                                    clipPath: 'inset(0 0 0 50%)'
                                }}
                            />
                            {/* Divider */}
                            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary shadow-[0_0_15px_#25c0f4] z-20">
                                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-8 rounded-full bg-background-dark border-2 border-primary flex items-center justify-center">
                                    <ChevronRight size={14} className="text-primary" />
                                </div>
                            </div>
                            {/* Labels */}
                            <div className="absolute top-4 left-4 z-10 bg-background-dark/60 backdrop-blur px-3 py-1 rounded text-[10px] font-mono text-white/50 border border-white/10 uppercase tracking-widest">
                                Source: 480p SD
                            </div>
                            <div className="absolute top-4 right-4 z-10 bg-primary px-3 py-1 rounded text-[10px] font-mono text-background-dark font-bold uppercase tracking-widest">
                                Output: 4K Neural Upscale
                            </div>
                        </div>

                        {/* Technical Specs */}
                        <div className="lg:w-2/5 p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-primary/10 bg-[#11181b]/50">
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-bold uppercase tracking-tight text-white">Video Upscaler</h3>
                                    <Settings size={20} className="text-primary/40" />
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-[10px] font-mono text-primary uppercase tracking-widest mb-3">Model Architecture</p>
                                        <div className="bg-background-dark/80 p-4 rounded-lg border border-primary/5 font-mono text-sm space-y-2">
                                            <p className="text-slate-300"><span className="text-primary">&gt;&gt;</span> Architecture: Real-ESRGAN</p>
                                            <p className="text-slate-300"><span className="text-primary">&gt;&gt;</span> Process: 4x Scaling</p>
                                            <p className="text-slate-300"><span className="text-primary">&gt;&gt;</span> Framework: PyTorch 2.1</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-mono text-primary uppercase tracking-widest mb-3">Telemetry / Performance</p>
                                        <div className="flex items-end gap-1 h-12">
                                            {[30, 45, 60, 50, 85, 70, 40].map((height, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-1 rounded-t-sm"
                                                    style={{
                                                        height: `${height}%`,
                                                        backgroundColor: i === 4 ? '#25c0f4' : 'rgba(37, 192, 244, 0.3)'
                                                    }}
                                                />
                                            ))}
                                        </div>
                                        <div className="flex justify-between mt-2 font-mono text-[10px] text-slate-500">
                                            <span>Inference Speed</span>
                                            <span className="text-primary">24.5 FPS AVG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 mt-8">
                                <button className="group relative bg-primary/10 hover:bg-primary text-primary hover:text-background-dark border-2 border-primary/40 hover:border-primary px-4 py-3 rounded-lg text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 hover:shadow-[0_4px_20px_rgba(37,192,244,0.3)] hover:-translate-y-0.5 active:translate-y-0">
                                    <Download size={14} className="transition-transform group-hover:scale-110" /> GitHub
                                </button>
                                <button className="group relative bg-slate-800 hover:bg-slate-700 text-white border-2 border-slate-600 hover:border-slate-500 px-4 py-3 rounded-lg text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 hover:shadow-[0_4px_15px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 active:translate-y-0">
                                    <FileText size={14} className="transition-transform group-hover:scale-110" /> Docs
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Secondary Tools Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {tools.slice(1).map((tool, idx) => (
                        <motion.div
                            key={tool.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="bg-[#0d1518] rounded-xl border-2 border-primary/10 overflow-hidden flex flex-col transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(37,192,244,0.1)]"
                        >
                            <div className="h-64 relative">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: tool.image ? `url('${tool.image}')` : 'none', backgroundColor: '#11181b' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1518] to-transparent" />
                                <div className="absolute bottom-4 left-6 flex items-center gap-2">
                                    <div
                                        className="size-2 rounded-full"
                                        style={{
                                            backgroundColor: tool.accent,
                                            boxShadow: `0 0 8px ${tool.accent}`
                                        }}
                                    />
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/80">
                                        {tool.architecture || 'SDK Integration'}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold uppercase text-white mb-2">{tool.title}</h3>
                                    <p className="text-slate-400 text-sm">{tool.desc}</p>
                                </div>
                                <div className="space-y-4 mb-8">
                                    {tool.precision && (
                                        <div className="flex justify-between items-center py-2 border-b border-primary/5 font-mono text-xs">
                                            <span className="text-slate-500">PRECISION</span>
                                            <span className="text-primary">{tool.precision}</span>
                                        </div>
                                    )}
                                    {tool.latency && (
                                        <div className="flex justify-between items-center py-2 border-b border-primary/5 font-mono text-xs">
                                            <span className="text-slate-500">LATENCY</span>
                                            <span className="text-primary">{tool.latency}</span>
                                        </div>
                                    )}
                                    {tool.compatibility && (
                                        <div className="flex justify-between items-center py-2 border-b border-primary/5 font-mono text-xs">
                                            <span className="text-slate-500">COMPATIBILITY</span>
                                            <span className="text-primary">{tool.compatibility}</span>
                                        </div>
                                    )}
                                    {tool.interface && (
                                        <div className="flex justify-between items-center py-2 border-b border-primary/5 font-mono text-xs">
                                            <span className="text-slate-500">INTERFACE</span>
                                            <span className="text-primary">{tool.interface}</span>
                                        </div>
                                    )}
                                    {tool.engine && (
                                        <div className="flex justify-between items-center py-2 border-b border-primary/5 font-mono text-xs">
                                            <span className="text-slate-500">ENGINE</span>
                                            <span className="text-primary">{tool.engine}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="mt-auto">
                                    {tool.downloadUrl || tool.boothUrl ? (
                                        <div className={tool.downloadUrl && tool.boothUrl ? "grid grid-cols-2 gap-3" : "flex flex-col gap-3"}>
                                            {tool.downloadUrl && (
                                                <a
                                                    href={tool.downloadUrl}
                                                    download
                                                    className="group font-bold py-3 rounded-lg text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 border-2 hover:-translate-y-0.5 active:translate-y-0"
                                                    style={{
                                                        backgroundColor: tool.accent,
                                                        color: '#0a0f11',
                                                        borderColor: tool.accent,
                                                        boxShadow: `0 0 0 0 ${tool.accent}40`
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.boxShadow = `0 8px 25px ${tool.accent}50`;
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.boxShadow = `0 0 0 0 ${tool.accent}40`;
                                                    }}
                                                >
                                                    <Download size={14} className="transition-transform group-hover:scale-110" /> Direct
                                                </a>
                                            )}
                                            {tool.boothUrl && (
                                                <a
                                                    href={tool.boothUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group font-bold py-3 rounded-lg text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 border-2 hover:-translate-y-0.5 active:translate-y-0"
                                                    style={{
                                                        backgroundColor: tool.downloadUrl ? 'transparent' : tool.accent,
                                                        color: tool.downloadUrl ? tool.accent : '#0a0f11',
                                                        borderColor: tool.downloadUrl ? `${tool.accent}60` : tool.accent
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.borderColor = tool.accent;
                                                        e.currentTarget.style.boxShadow = `0 4px 15px ${tool.accent}30`;
                                                        if (tool.downloadUrl) {
                                                            e.currentTarget.style.backgroundColor = `${tool.accent}15`;
                                                        }
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.borderColor = tool.downloadUrl ? `${tool.accent}60` : tool.accent;
                                                        e.currentTarget.style.boxShadow = 'none';
                                                        if (tool.downloadUrl) {
                                                            e.currentTarget.style.backgroundColor = 'transparent';
                                                        }
                                                    }}
                                                >
                                                    <ExternalLink size={14} className="transition-transform group-hover:scale-110" /> BOOTH
                                                </a>
                                            )}
                                        </div>
                                    ) : (
                                        <button
                                            className="group w-full font-bold py-3 rounded-lg text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 border-2 hover:-translate-y-0.5 active:translate-y-0"
                                            style={{
                                                backgroundColor: tool.id === 'interpolator' ? tool.accent : 'transparent',
                                                color: tool.id === 'interpolator' ? '#0a0f11' : tool.accent,
                                                borderColor: tool.id === 'interpolator' ? tool.accent : `${tool.accent}60`
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.boxShadow = `0 4px 20px ${tool.accent}40`;
                                                e.currentTarget.style.borderColor = tool.accent;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.boxShadow = 'none';
                                                e.currentTarget.style.borderColor = tool.id === 'interpolator' ? tool.accent : `${tool.accent}60`;
                                            }}
                                        >
                                            {tool.id === 'interpolator' && <><Zap size={14} className="transition-transform group-hover:scale-110" /> Download Plugin</>}
                                            {tool.id === 'ae-plugin' && <><Code size={14} className="transition-transform group-hover:scale-110" /> Get C++ SDK</>}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Bar */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-background-dark/50 rounded-xl border border-primary/10">
                    <div className="space-y-1">
                        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Global Uptime</p>
                        <p className="text-2xl font-bold text-white font-mono">99.998%</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Frames Processed</p>
                        <p className="text-2xl font-bold text-white font-mono">1.2M+</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Avg Efficiency</p>
                        <p className="text-2xl font-bold text-primary font-mono">+42%</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Active Installs</p>
                        <p className="text-2xl font-bold text-white font-mono">14.2k</p>
                    </div>
                </div>

                {/* Ko-fi Support Section */}
                <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 border border-primary/10 backdrop-blur-sm">
                    <div className="flex flex-col items-center text-center">
                        <Heart size={32} className="text-[#ff2ea3] fill-[#ff2ea3] mb-4 animate-pulse" />
                        <h3 className="text-white text-xl font-bold mb-3">
                            開発を応援してください
                        </h3>
                        <p className="text-slate-400 text-sm max-w-lg mb-6 leading-relaxed">
                            これらのツールは無料で提供しています。もし気に入っていただけたら、Ko-fiで開発をサポートしていただけると嬉しいです。いただいたご支援は、新しいツールの開発や既存ツールの改善に活用させていただきます。
                        </p>
                        <a
                            href="https://ko-fi.com/maa3684"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 px-10 py-5 rounded-xl bg-gradient-to-r from-[#ff5e5b] to-[#ff2ea3] hover:shadow-[0_0_40px_rgba(255,46,163,0.5)] hover:scale-105 transition-all duration-300"
                        >
                            <Heart size={24} className="text-white fill-white group-hover:animate-bounce" />
                            <span className="text-white text-lg font-bold tracking-wide">
                                Ko-fi で応援する
                            </span>
                        </a>
                    </div>
                </div>
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
