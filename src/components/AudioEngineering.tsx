'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Play, Pause, Volume2, Maximize, BarChart3, Zap, Radio, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { audioServices as services } from '@/data/audio-engineering';

export default function AudioEngineering() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="audio" className="py-24 bg-[#0a0f11] relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none cyber-grid" />

      <div className="max-w-6xl mx-auto px-6 lg:px-20 relative z-10">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.3em] uppercase font-mono">
            <Radio size={12} className="animate-pulse" />
            Aural Architectures
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter font-display italic">
            Sound Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-magenta">Services</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto font-display leading-relaxed mb-8">
            現代メディアのための高忠実度音響彫刻。AIによる分析とアナログの温かみを融合し、没入感のある聴覚体験を創造します
          </p>
          <Link href="/mix-mastering" className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 transition-all rounded-full uppercase tracking-widest font-bold text-xs group">
            <span>View Full Details</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Audio Preview Interface (Main Feature) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-8 rounded-2xl bg-[#162024]/60 border border-primary/20 backdrop-blur-md relative overflow-hidden"
        >
          {/* Decorative Corner Brackets */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/40" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/40" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/40" />

          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Waveform Visualization */}
            <div className="flex-1 w-full">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold">Sample Audio// Track_01</span>
                <span className="text-[10px] font-mono text-slate-500">00:42 / 03:28</span>
              </div>

              {/* Waveform Display */}
              <div className="relative h-32 bg-black/40 rounded-lg border border-primary/10 overflow-hidden mb-6 flex items-center justify-center px-4">
                <div className="flex items-end gap-1 h-full w-full justify-center">
                  {Array.from({ length: 60 }).map((_, i) => {
                    const height = Math.sin(i * 0.3) * 40 + 50;
                    return (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: isPlaying ? `${height}%` : `${height * 0.5}%` }}
                        transition={{ duration: 0.1, delay: i * 0.01 }}
                        className="w-1 rounded-full bg-gradient-to-t from-primary to-accent-magenta"
                        style={{ opacity: 0.6 + (i % 10) * 0.04 }}
                      />
                    );
                  })}
                </div>
                {/* Playhead */}
                <div className="absolute left-1/3 top-0 bottom-0 w-px bg-accent-magenta shadow-[0_0_8px_rgba(255,46,163,0.8)]" />
              </div>

              {/* Playback Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="size-12 rounded-full bg-primary hover:bg-primary/80 transition-all flex items-center justify-center group shadow-[0_0_20px_rgba(37,192,244,0.4)]"
                  >
                    {isPlaying ? <Pause size={20} className="text-background-dark" /> : <Play size={20} className="text-background-dark ml-1" />}
                  </button>
                  <div className="flex items-center gap-2">
                    <Volume2 size={16} className="text-primary" />
                    <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-primary" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500 uppercase">
                  <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-primary">WAV</span>
                  <span>48kHz / 24bit</span>
                </div>
              </div>
            </div>

            {/* Metadata Panel */}
            <div className="w-full md:w-64 space-y-4">
              <div className="p-4 bg-black/40 rounded-lg border border-primary/10">
                <p className="text-[9px] font-mono text-primary/50 uppercase tracking-widest mb-2">Signal_Analysis</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Peak Level</span>
                    <span className="text-primary font-mono">-3.2 dB</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">RMS Average</span>
                    <span className="text-primary font-mono">-12.4 dB</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Dynamic Range</span>
                    <span className="text-accent-magenta font-mono">14.2 dB</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-accent-magenta/5 rounded-lg border border-accent-magenta/20">
                <p className="text-[9px] font-mono text-accent-magenta/70 uppercase tracking-widest mb-2">Loudness_Target</p>
                <div className="flex items-center gap-2">
                  <BarChart3 size={14} className="text-accent-magenta" />
                  <span className="text-sm font-bold text-white">-14 LUFS</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-xl bg-[#162024]/40 border border-primary/10 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden backdrop-blur-md"
            >
              <div className="flex items-center gap-5 mb-6">
                <div
                  className="size-14 rounded-lg flex items-center justify-center border transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${s.accent}20`,
                    borderColor: `${s.accent}40`,
                    color: s.accent
                  }}
                >
                  <s.icon size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight font-display">{s.title}</h3>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold" style={{ color: s.accent }}>{s.subtitle}</p>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                {s.desc}
              </p>

              <div className="mt-auto">
                <p className="text-slate-500 text-[9px] uppercase font-mono tracking-widest mb-3 font-bold">Signal_Path // Gear</p>
                <div className="flex flex-wrap gap-2">
                  {s.gear.map((g) => (
                    <span
                      key={g}
                      className="px-2.5 py-1 rounded text-[10px] font-mono bg-white/5 border border-white/10 font-bold tracking-tight"
                      style={{ color: s.accent, borderColor: `${s.accent}30` }}
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              {/* Level Meter Strip */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 flex">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  className="h-full"
                  style={{ backgroundColor: `${s.accent}99` }}
                />
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '10%' }}
                  className="h-full"
                  style={{ backgroundColor: s.accent }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Monitoring Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-primary/5 border border-primary/10 flex flex-col gap-3 backdrop-blur-sm">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <BarChart3 size={16} className="text-primary" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Mix Dynamics</span>
              </div>
              <span className="text-[10px] font-mono text-primary">-12 LUFS Target</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: '65%' }} className="h-full bg-primary" />
            </div>
            <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Signal Analysis: Active</span>
          </div>
          <div className="p-6 rounded-xl bg-accent-magenta/5 border border-accent-magenta/10 flex flex-col gap-3 backdrop-blur-sm">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-accent-magenta" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Loudness Ceiling</span>
              </div>
              <span className="text-[10px] font-mono text-accent-magenta">-6 LUFS Ceiling</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: '88%' }} className="h-full bg-accent-magenta" />
            </div>
            <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Verification: Complete</span>
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
