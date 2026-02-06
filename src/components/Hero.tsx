'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative pt-12 pb-16 lg:pt-24 lg:pb-32 px-6 lg:px-20 overflow-hidden bg-background-dark">
      {/* Background Decorative Mesh Filter (simulating the holographic feel from code.html) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-4 text-white uppercase italic">
            {t('heroTitlePrefix')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-magenta animate-pulse">
              {t('heroTitleSuffix')}
            </span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed mb-6 font-display">
            {t('heroSubtitle')}
          </p>
        </motion.div>

        {/* HUD Elements as shown in the layout (simulated status bar) */}
        <div className="mt-12 flex justify-center items-center gap-8 font-mono text-[9px] text-primary/40 uppercase tracking-[0.4em]">
          <div className="flex items-center gap-2">
            <span className="size-1 bg-primary rounded-full animate-ping" />
            System.Link // Establish
          </div>
          <div className="hidden sm:block">
            X-Coords: 42.09 // Y-Coords: 18.22
          </div>
          <div className="flex items-center gap-2">
            <span className="size-1 bg-accent-magenta rounded-full animate-pulse" />
            Neural_Load: Optimal
          </div>
        </div>
      </div>

      {/* Hero Divider (Thin glow line as seen in several folder layouts) */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
