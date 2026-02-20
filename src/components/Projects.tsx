'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'gen-art', label: 'Generative' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'experimental', label: 'Experimental' },
  { id: '3d-ai', label: '3D-AI' },
];

const projects = [
  {
    id: 1,
    title: 'Neural Interpolation',
    category: 'Experimental',
    desc: 'ハイパーカラーニューラル補間と時間的一貫性に関する研究',
    video: '/sample02.mp4',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFrvzGtfxZopOm9f-qikV65Iho7RWmi7s5W4LpQYJDqwpvb3_G5MUGr7VBYWg6ju2uN-QpqRby2yS89VgdwKtWqh6q7EEWlVkGHHZgZvIscBqtF1916KQsdbsrWovGTljTcK-_0fPv1TsKD1bKU0VAUnOWs4S_Pfek00PcSwVMRWoxD7N1uInkUSJISvcrvIueqq-JJIBQwF3m-lsPVPpelDtGXz_Bf7EeFd6ApmLdsuDXfzvrC_qhzwFuOkBsCGZe1gShII_TIEc',
  },
  {
    id: 2,
    title: 'Cyber-Zen Flow',
    category: 'Experimental',
    desc: '拡散モデルの視点からミニマリスト建築を探る',
    video: '/sample05.mp4',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9vff5mV0oboAAbw0IESnuTaobCJzW_rWyMOFbGNzzu0m0kuO8lIEDnIg4u85wf2tUljMNYkPIknhrll7onUQOCaZOsVKmEdKgFEHVRilMbVwgpW4P5fpcF1qFYsD4opdLv5SebICMkrg8hJSbrVJtdENdumHttSD82rezn5dTLKEBWDHDMIJLC4B9UVarsmVIk8Njvvc6vGfmUf_4yYbCJAljKCyPBHvKlyyET8kgyu_5vXb-xHRHVwphEXDbrwVtbBPCNy3JzE',
  },
  {
    id: 3,
    title: 'Neural Cinema',
    category: 'Commercial',
    desc: 'ファッション写真用にカスタムトレーニングされた LoRA モデルのみを使用して作成されたブランド フィルム',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsE6HmnY6x8EKZFUVd2KTRfj5aPuEanTCTQ8AvixzHba4g_oYJR9H7MkCmpZNeaAHce_92HcDQMNhLMlk5dF-L065LCGqXIUNbdH4s_AuL4gXfJAZTshCqMQTV-guxy4ShEGfYKx-hzCwTK3PpWkZWCGY8fJ5BIxrePWb4kc-cvu51rCpVANcFqCvPpySufDvbjG7_KkzERYsDCRTsYQovVhLAVu90mhqtTlWw6hh382c4PkM5YMTK-mP9zxGZLM44ozRc5HuAO1k',
  },
  {
    id: 4,
    title: 'Algorithm City',
    category: '3D-AI',
    desc: '生成テクスチャリングによって強化された手続き型都市生成',
    video: '/sample03.mp4',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUPBLZhV3JjAG1Z87D-E-U7jeSjm4rr7XCVc_aFcZ-ccIZUwTQM2KiCd2gLGfc-dFh6omGieiEu1a5atS3SR5A0J_ysy7UBn9xZT283WWttjzl03nb24LLB5oB3Wz8_KA2rrWT1yvjqWrchmfu4-OdYlU6D96_9cw7ynGeE9H0pYl7JE0woBd0P0VOagYKyStaBwWwxSxj3ZOlEUybUIwlw37t4ZUdJyzsICZcuT4U1LRlK6OvmZWbotZ2MAyjd6CIObO5pJpqkvQ',
  },
  {
    id: 5,
    title: 'Binary Sunset',
    category: 'Experimental',
    desc: 'スムーズな動きを実現する SVD-XT を使用した、短い縦型フォーマットのシネマティック',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrCnMS8PH-HiI1TQ--e6-Qoiv7dY1uIIZDX_V8dpEHCBF1lMTiuAvzspOrHhdAnwzkhjluZzAi7y-q0GaiU1UY9jJOiJFtILLpz9bzQ9P958XVwnhCVhKo43S2madjwGpJn1mEExpoJgmiDkxb5_DAQQtqYNRRJ3JlAbRrVy-hQ5lWUL_loxBCHbAST1iVPcWpbBJkgyHSkD-DIIvBgb6THQ4SUdgR4ShjzSXxWYymoh-X21mQtvYOfctrcEPDW5pfA4Z4kzEPHfg',
  },
  {
    id: 6,
    title: 'Ghost in the ML',
    category: 'Gen-Art',
    desc: '美的選択としてのレイテンシーとアーティファクトの検討',
    video: '/sample04.mp4',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnCp4j0kdu_qVU8Q2zGMbXpC5NixH2r3s6yuqT0IlBv9mtvGQ65SY6DjZuKfAYOKKdvq85XhQXU-i7Fp_V1LQ9e92BGYuFLJ5X1Mtg2LhlcQ-QrXgR6boWch47Pzd8k0bquT_F7kBMhie4OmDjUz7Jd7arxpuCHV8FWcfdyynew3TwHnVy9r22k81L-69DE02wiKrstwub4dbQxHniW39gpW6KlZ7sa9hKlIWr6TQZHK5AXtoHR3hF1tX-cYquf9h3QoS0SwpvkZk',
  }
];

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
