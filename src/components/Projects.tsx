'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { filters, projectsData as projects } from '@/data/projects';

export default function Projects() {
  useLanguage(); // Context for future i18n
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <section id="projects" className="py-24" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-small mb-4 uppercase tracking-wider"
            style={{ color: 'var(--text-tertiary)' }}
          >
            Portfolio
          </p>
          <h2 className="text-headline" style={{ color: 'var(--text-primary)' }}>
            Selected Works
          </h2>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className="px-4 py-2 text-caption rounded transition-all"
              style={{
                background: activeFilter === f.id ? 'var(--text-primary)' : 'var(--bg-secondary)',
                color: activeFilter === f.id ? 'var(--bg-primary)' : 'var(--text-secondary)',
                border: `1px solid ${activeFilter === f.id ? 'var(--text-primary)' : 'var(--border-light)'}`
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {projects.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group rounded-lg overflow-hidden transition-all"
                style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}
              >
                {/* Media */}
                <div className="relative aspect-video overflow-hidden">
                  {p.video ? (
                    <video
                      src={p.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-title" style={{ color: 'var(--text-primary)' }}>
                      {p.title}
                    </h3>
                    <span
                      className="text-small px-2 py-1 rounded"
                      style={{ background: 'var(--bg-tertiary)', color: 'var(--text-tertiary)' }}
                    >
                      {p.category}
                    </span>
                  </div>
                  <p className="text-caption" style={{ color: 'var(--text-secondary)' }}>
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
