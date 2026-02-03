'use client';
import { motion } from 'framer-motion';
import { Video, Mic, Globe, Server, BookOpen, ExternalLink, PenLine } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Enterprise Video System',
    subtitle: 'Jitsi Meet',
    desc: 'Docker/SSL/TLSベースの企業向けビデオ会議システム',
    icon: Server,
    image: '/images/page-03.png',
    tags: ['Docker', 'SSL/TLS', 'WebRTC'],
  },
  {
    id: 2,
    title: 'AI Video Enhancement',
    subtitle: 'GPU-Accelerated',
    desc: 'Real-ESRGAN, RIFE, LUTを活用したCUDA高速化パイプライン',
    icon: Video,
    image: '/images/page-04.png',
    tags: ['CUDA', 'Real-ESRGAN', 'RIFE'],
  },
  {
    id: 3,
    title: 'Whisper Transcription',
    subtitle: 'Speech-to-Text',
    desc: 'OpenAI Whisperによる高精度SRT/VTT自動生成',
    icon: Mic,
    image: '/images/page-05.png',
    tags: ['Whisper', 'SRT', 'VTT'],
  },
  {
    id: 4,
    title: 'Web Automation',
    subtitle: 'Information Retrieval',
    desc: 'n8n + API連携による自動情報収集・SEO最適化',
    icon: Globe,
    image: '/images/page-06.png',
    tags: ['n8n', 'API', 'SEO'],
  },
  {
    id: 5,
    title: 'Creator Learning Platform',
    subtitle: 'Learning Tools',
    desc: 'クリエイター向け学習サイト',
    icon: BookOpen,
    image: '/images/page-07.png',
    tags: ['Next.js', 'React', 'Vercel'],
    url: 'https://learning-tools-orpin.vercel.app/',
  },
  {
    id: 6,
    title: 'Tech Blog',
    subtitle: 'note.com',
    desc: '技術記事・クリエイティブ制作に関するブログ',
    icon: PenLine,
    image: '/images/page-08.png',
    tags: ['Blog', 'Tech', 'Creative'],
    url: 'https://note.com/maa964',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: 'rgba(15,23,42,0.5)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>主要プロジェクト</p>
        </motion.div>

        <div className="grid-2-cols">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-hover"
              style={{ borderRadius: '1rem', background: 'rgba(30,41,59,0.3)', border: '1px solid #334155', overflow: 'hidden' }}
            >
              <div style={{ position: 'relative', height: '12rem', overflow: 'hidden' }}>
                <Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover', opacity: 0.6 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0f172a, rgba(15,23,42,0.5), transparent)' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <p.icon style={{ width: '1.25rem', height: '1.25rem', color: '#22d3ee' }} />
                  <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{p.subtitle}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700 }}>{p.title}</h3>
                  {'url' in p && p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ color: '#22d3ee', display: 'flex', alignItems: 'center' }}>
                      <ExternalLink style={{ width: '1rem', height: '1rem' }} />
                    </a>
                  )}
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '1rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', borderRadius: '9999px', background: 'rgba(51,65,85,0.5)', color: '#cbd5e1' }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}