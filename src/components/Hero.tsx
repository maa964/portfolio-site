'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col justify-center px-6 lg:px-20 py-24"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Minimal label */}
          <p
            className="text-small mb-6 uppercase tracking-wider"
            style={{ color: 'var(--text-tertiary)' }}
          >
            Creative Developer & Designer
          </p>

          {/* Main heading - clean typography */}
          <h1
            className="text-display mb-8"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('heroTitlePrefix')}{' '}
            <span style={{ color: 'var(--text-secondary)' }}>
              {t('heroTitleSuffix')}
            </span>
          </h1>

          {/* Subtitle - readable, not decorated */}
          <p
            className="text-body max-w-2xl mb-12"
            style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}
          >
            {t('heroSubtitle')}
          </p>

          {/* CTA Buttons - functional, not decorative */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="btn-primary group"
            >
              <span>{t('viewProjects') || 'プロジェクトを見る'}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-secondary"
            >
              <span>{t('getInTouch') || 'お問い合わせ'}</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - subtle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo('projects')}
      >
        <span
          className="text-small"
          style={{ color: 'var(--text-muted)' }}
        >
          Scroll
        </span>
        <div
          className="scroll-indicator p-2"
          style={{ border: '1px solid var(--border-light)', borderRadius: '50%' }}
        >
          <ChevronDown size={16} style={{ color: 'var(--text-muted)' }} />
        </div>
      </motion.div>

      {/* Simple divider */}
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: 'var(--border-light)' }}
      />
    </section>
  );
}
