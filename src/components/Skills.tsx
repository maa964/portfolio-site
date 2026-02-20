'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const skills = [
  { label: 'AI/ML Development', value: 92 },
  { label: 'Video Production', value: 85 },
  { label: 'Workflow Automation', value: 78 },
  { label: 'Creative Direction', value: 82 },
  { label: 'Prompt Engineering', value: 96 },
];

const techStack = [
  { category: 'Languages', items: ['Python', 'TypeScript', 'C++'] },
  { category: 'ML/AI', items: ['PyTorch', 'TensorFlow', 'Diffusion Models'] },
  { category: 'Tools', items: ['After Effects', 'DaVinci Resolve', 'Blender'] },
  { category: 'Infrastructure', items: ['Docker', 'AWS', 'CUDA'] },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Profile */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Photo */}
              <div
                className="w-full max-w-xs rounded-lg mb-6 overflow-hidden"
                style={{ border: '1px solid var(--border-light)' }}
              >
                <Image
                  src="/images/Image_fx.jpg"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="object-contain w-full h-auto grayscale"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <h2 className="text-headline mb-2" style={{ color: 'var(--text-primary)' }}>
                maa
              </h2>
              <p className="text-caption mb-4" style={{ color: 'var(--text-tertiary)' }}>
                Creative Developer & Designer
              </p>
              <p className="text-body mb-6" style={{ color: 'var(--text-secondary)' }}>
                {t('heroSubtitle')}
              </p>

              {/* Location */}
              <p className="text-small" style={{ color: 'var(--text-tertiary)' }}>
                Based in Hiroshima, Japan
              </p>
            </motion.div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Header */}
              <div className="mb-8">
                <p
                  className="text-small mb-4 uppercase tracking-wider"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  Expertise
                </p>
                <h2 className="text-headline" style={{ color: 'var(--text-primary)' }}>
                  Skills & Capabilities
                </h2>
              </div>

              {/* Skill Bars */}
              <div className="space-y-6 mb-12">
                {skills.map((skill, idx) => (
                  <div key={skill.label}>
                    <div className="flex justify-between mb-2">
                      <span className="text-caption" style={{ color: 'var(--text-primary)' }}>
                        {skill.label}
                      </span>
                      <span className="text-small font-mono" style={{ color: 'var(--text-tertiary)' }}>
                        {skill.value}%
                      </span>
                    </div>
                    <div
                      className="h-1 rounded-full overflow-hidden"
                      style={{ background: 'var(--border-light)' }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        className="h-full rounded-full"
                        style={{ background: 'var(--text-primary)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div
                className="p-6 rounded-lg"
                style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-light)' }}
              >
                <h3 className="text-title mb-6" style={{ color: 'var(--text-primary)' }}>
                  Tech Stack
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {techStack.map((stack) => (
                    <div key={stack.category}>
                      <p className="text-small mb-3" style={{ color: 'var(--text-tertiary)' }}>
                        {stack.category}
                      </p>
                      <ul className="space-y-1">
                        {stack.items.map((item) => (
                          <li
                            key={item}
                            className="text-caption"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
