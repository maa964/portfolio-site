'use client';
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Terminal, MapPin, Code, Video, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const radarSkills = [
  { label: 'AI/ML_DEV', value: 92 },
  { label: 'VIDEO_PROD', value: 85 },
  { label: 'WORKFLOW_AUTO', value: 78 },
  { label: 'CREATIVE_DIR', value: 82 },
  { label: 'PROMPT_ENG', value: 96 },
];

export default function Skills() {
  const { language, t } = useLanguage();
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  const rawLogs = useMemo(() => [
    '> INITIALIZING KERNEL_0x82...',
    '> Handshake established at 40ms',
    '> Loading skill_matrix_v2.0...',
    '> WARNING: CREATIVE_CAPACITY_OVERLOAD',
    '> Syncing visual_engine: RUNWAY_API',
    '> 01010011 01111001 01110011',
    '> SYSTEM_UPTIME: 99.99%',
    '> Rendering latent_space_v01...'
  ], []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTerminalLines(prev => [...prev.slice(-7), rawLogs[i % rawLogs.length]]);
      i++;
    }, 2000);
    return () => clearInterval(interval);
  }, [rawLogs]);

  return (
    <section id="skills" className="py-24 bg-background-dark/80 relative overflow-hidden min-h-screen px-6 lg:px-20">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 relative z-10">

        {/* Left Column: Profile Summary */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 rounded-xl border-l-4 border-l-primary shadow-xl"
          >
            <div className="w-full max-w-xs rounded-lg mb-6 relative overflow-hidden group">
              <Image
                src="/images/Image_fx.jpg"
                alt="Profile"
                width={400}
                height={400}
                className="object-contain w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight uppercase font-display">Identity_Null_01</h2>
            <p className="text-primary/80 text-[10px] font-medium uppercase tracking-[0.2em] mb-4 font-mono">Neural Architect & Visionary</p>
            <div className="space-y-4 text-slate-400 text-sm leading-relaxed font-display">
              <p>{t('heroSubtitle')}</p>
              <div className="flex items-center gap-2 border-t border-white/5 pt-4">
                <span className="text-[10px] uppercase tracking-widest text-primary/60 font-mono">Zone: Kernel_Stable [Hiroshima-01]</span>
              </div>
            </div>
          </motion.div>

          {/* Simple Skill Progress Bars */}
          <div className="space-y-4">
            <div className="glass-panel p-4 rounded-lg flex items-center gap-4 group hover:bg-primary/5 transition-all">
              <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center text-primary">
                <Code size={20} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-[10px] font-bold text-white font-mono uppercase tracking-widest">Python_Core</span>
                  <span className="text-[10px] text-primary font-mono">94%</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '94%' }} className="h-full bg-primary shadow-[0_0_8px_#25c0f4]" />
                </div>
              </div>
            </div>
            <div className="glass-panel p-4 rounded-lg flex items-center gap-4 group hover:bg-primary/5 transition-all">
              <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center text-accent-magenta">
                <Video size={20} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-[10px] font-bold text-white font-mono uppercase tracking-widest">Neural_Video</span>
                  <span className="text-[10px] text-accent-magenta font-mono">88%</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '88%' }} className="h-full bg-accent-magenta shadow-[0_0_8px_#ff2ea3]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Radar Chart Visualization */}
        <div className="col-span-12 lg:col-span-6 flex flex-col items-center justify-center relative min-h-[500px]">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Radar Decoration */}
            <div className="absolute w-[360px] h-[360px] border border-primary/20 radar-polygon opacity-20 animate-pulse" />
            <div className="absolute w-[280px] h-[280px] border border-primary/20 radar-polygon opacity-40" />
            <div className="absolute w-[200px] h-[200px] border border-primary/20 radar-polygon opacity-60" />

            {/* Axis Lines Simulation via rotate */}
            {[0, 72, 144, 216, 288].map(deg => (
              <div key={deg} className="absolute h-[360px] w-px bg-gradient-to-t from-transparent via-primary/30 to-transparent" style={{ transform: `rotate(${deg}deg)` }} />
            ))}

            {/* Data Polygon */}
            <div className="absolute w-80 h-80 bg-primary/20 border-2 border-primary radar-polygon shadow-[0_0_30px_rgba(37,192,244,0.3)] backdrop-blur-[2px]" />
          </div>

          {/* Labels (Positioned manually to match layout C) */}
          <div className="absolute top-4 text-center">
            <span className="text-[10px] font-bold text-primary block tracking-[0.2em] mb-1 font-mono uppercase">AI/ML_DEV</span>
            <span className="text-2xl font-black text-white font-display">92</span>
          </div>
          <div className="absolute top-1/3 -right-6 text-right">
            <span className="text-[10px] font-bold text-white block tracking-[0.2em] mb-1 font-mono uppercase">VIDEO_PROD</span>
            <span className="text-2xl font-black text-primary/80 font-display">85</span>
          </div>
          <div className="absolute bottom-12 right-12 text-right">
            <span className="text-[10px] font-bold text-white block tracking-[0.2em] mb-1 font-mono uppercase">WORKFLOW_AUTO</span>
            <span className="text-2xl font-black text-primary/80 font-display">78</span>
          </div>
          <div className="absolute bottom-12 left-12 text-left">
            <span className="text-[10px] font-bold text-white block tracking-[0.2em] mb-1 font-mono uppercase">CREATIVE_DIR</span>
            <span className="text-2xl font-black text-primary/80 font-display">82</span>
          </div>
          <div className="absolute top-1/3 -left-6 text-left">
            <span className="text-[10px] font-bold text-white block tracking-[0.2em] mb-1 font-mono uppercase">PROMPT_ENG</span>
            <span className="text-2xl font-black text-primary/80 font-display">96</span>
          </div>
        </div>

        {/* Right Column: System Status */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-xl overflow-hidden flex flex-col h-full border-t-4 border-t-accent-magenta/50"
          >
            <div className="bg-white/5 px-4 py-3 flex justify-between items-center border-b border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white font-mono">System_Status</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
            </div>

            <div className="p-4 space-y-6">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest font-mono">Neural_Load</span>
                  <span className="text-xs font-mono text-primary">42.8 GB/s</span>
                </div>
                <div className="grid grid-cols-10 gap-1 h-3">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className={`rounded-sm ${i < 6 ? 'bg-primary' : 'bg-white/10'}`} />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest font-mono">Live_Feed</span>
                <div className="bg-black/40 rounded p-3 font-mono text-[9px] text-primary/70 leading-relaxed overflow-hidden h-48 relative">
                  <div className="absolute top-0 left-0 w-full h-full p-3 flex flex-col gap-1">
                    {terminalLines.map((line, idx) => (
                      <p key={idx} className={line.includes('WARNING') ? 'text-accent-magenta' : 'text-primary/70'}>{line}</p>
                    ))}
                    <p className="text-primary animate-pulse">&gt; _</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-white/50 uppercase font-mono">Stability</span>
                  <span className="text-[10px] font-mono text-primary">STABLE_001</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-white/50 uppercase font-mono">Latency</span>
                  <span className="text-[10px] font-mono text-accent-magenta uppercase">0.12ms</span>
                </div>
              </div>
            </div>
          </motion.div>

          <button className="glass-panel p-6 rounded-xl flex items-center justify-between group cursor-pointer hover:border-primary transition-all">
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">Active_Protocol</span>
              <span className="text-sm font-bold text-white mt-1 group-hover:text-primary transition-colors font-display">NEURAL_NEXUS_SYNC</span>
            </div>
            <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .radar-polygon {
          clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        }
        .cyber-grid {
          background-image: 
            linear-gradient(to right, rgba(37, 192, 244, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 192, 244, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
