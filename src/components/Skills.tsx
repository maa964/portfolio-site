'use client';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: 'Languages',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Rust', level: 70 },
      { name: 'Go', level: 65 },
      { name: 'Nim', level: 60 },
    ],
  },
  {
    name: 'AI/ML',
    skills: [
      { name: 'PyTorch', level: 85 },
      { name: 'CUDA', level: 80 },
      { name: 'Whisper', level: 90 },
      { name: 'Real-ESRGAN', level: 85 },
    ],
  },
  {
    name: 'Infrastructure',
    skills: [
      { name: 'Docker', level: 90 },
      { name: 'n8n', level: 95 },
      { name: 'CI/CD', level: 80 },
      { name: 'Kubernetes', level: 60 },
    ],
  },
];

const techBadges = ['PyPy', 'Numba', 'Cython', 'Codon', 'FFmpeg', 'Premiere Pro', 'DaVinci Resolve', 'Jitsi Meet', 'WebRTC', 'LangChain', 'LanceDB', 'OpenAI'];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title gradient-text">Technology Stack</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>技術スタックと習熟度</p>
        </motion.div>

        <div className="grid-3-cols" style={{ marginBottom: '4rem' }}>
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.2 }}
              style={{ padding: '1.5rem', borderRadius: '1rem', background: 'rgba(30,41,59,0.3)', border: '1px solid #334155' }}
            >
              <h3 className="font-display" style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1.5rem', color: '#22d3ee' }}>{cat.name}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cat.skills.map((s, si) => (
                  <div key={s.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>{s.name}</span>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{s.level}%</span>
                    </div>
                    <div style={{ height: '0.5rem', background: '#334155', borderRadius: '9999px', overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: ci * 0.2 + si * 0.1 }}
                        style={{ height: '100%', background: 'linear-gradient(90deg, #06b6d4, #a855f7)', borderRadius: '9999px' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
          {techBadges.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              style={{ padding: '0.5rem 1rem', borderRadius: '9999px', background: 'rgba(30,41,59,0.5)', border: '1px solid #334155', fontSize: '0.875rem', color: '#cbd5e1', cursor: 'default' }}
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
