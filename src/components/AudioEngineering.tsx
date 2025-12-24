'use client';
import { motion } from 'framer-motion';
import { Music, Headphones } from 'lucide-react';
import Image from 'next/image';

const audioSkills = [
  { name: 'Cubase', desc: '録音・編集DAW' },
  { name: 'iZotope RX', desc: 'オーディオ修復' },
  { name: 'iZotope Ozone', desc: 'マスタリング' },
  { name: 'iZotope Neutron', desc: 'AIミキシング' },
];

export default function AudioEngineering() {
  return (
    <section id="audio" className="section" style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.5) 0%, rgba(10,14,23,1) 100%)' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '9999px', background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)', marginBottom: '1rem' }}>
            <Headphones size={16} style={{ color: '#a855f7' }} />
            <span style={{ fontSize: '0.75rem', color: '#a855f7', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Side Service</span>
          </div>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>
            <span className="gradient-text">Audio Engineering</span>
          </h2>
          <p style={{ color: '#64748b', maxWidth: '32rem', margin: '0 auto' }}>
            ミックス＆マスタリングも承ります。<br />
            <span style={{ color: '#a855f7' }}>格安でご相談を受け付けております。</span>
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'center' }}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ position: 'relative', height: '16rem', borderRadius: '1rem', overflow: 'hidden', border: '1px solid #334155' }}
          >
            <Image src="/images/page-17.png" alt="Audio Engineering" fill style={{ objectFit: 'cover', opacity: 0.7 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(6,182,212,0.1))' }} />
            <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Music size={20} style={{ color: '#a855f7' }} />
              <span style={{ color: 'white', fontWeight: 600 }}>Mix & Mastering</span>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}
          >
            {audioSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(30,41,59,0.3)',
                  border: '1px solid #334155',
                }}
              >
                <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.25rem' }}>{skill.name}</h4>
                <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.875rem', color: '#64748b' }}
        >
          ※ 本業はAI/ML・動画処理・自動化システム開発です
        </motion.p>
      </div>
    </section>
  );
}
