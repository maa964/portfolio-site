'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, Infinity, Palette, Megaphone, FlaskConical, Rotate3d } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const filters = [
  { id: 'all', label: 'All Works', icon: <Infinity size={14} />, color: 'primary' },
  { id: 'gen-art', label: 'Generative Art', icon: <Palette size={14} />, color: 'accent-magenta' },
  { id: 'commercial', label: 'Commercial', icon: <Megaphone size={14} />, color: 'primary' },
  { id: 'experimental', label: 'Experimental', icon: <FlaskConical size={14} />, color: 'primary' },
  { id: '3d-ai', label: '3D-AI Hybrid', icon: <Rotate3d size={14} />, color: 'accent-magenta' },
];

const projects = [
  {
    id: 1,
    title: 'Neon Dreams',
    tag: 'Gen-Art',
    color: 'primary',
    desc: 'ハイパーカラーニューラル補間と時間的一貫性に関する研究',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFrvzGtfxZopOm9f-qikV65Iho7RWmi7s5W4LpQYJDqwpvb3_G5MUGr7VBYWg6ju2uN-QpqRby2yS89VgdwKtWqh6q7EEWlVkGHHZgZvIscBqtF1916KQsdbsrWovGTljTcK-_0fPv1TsKD1bKU0VAUnOWs4S_Pfek00PcSwVMRWoxD7N1uInkUSJISvcrvIueqq-JJIBQwF3m-lsPVPpelDtGXz_Bf7EeFd6ApmLdsuDXfzvrC_qhzwFuOkBsCGZe1gShII_TIEc',
    aspect: '[4/5]'
  },
  {
    id: 2,
    title: 'Cyber-Zen Flow',
    tag: 'Experimental',
    color: 'accent-magenta',
    desc: '拡散モデルの視点からミニマリスト建築を探る',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9vff5mV0oboAAbw0IESnuTaobCJzW_rWyMOFbGNzzu0m0kuO8lIEDnIg4u85wf2tUljMNYkPIknhrll7onUQOCaZOsVKmEdKgFEHVRilMbVwgpW4P5fpcF1qFYsD4opdLv5SebICMkrg8hJSbrVJtdENdumHttSD82rezn5dTLKEBWDHDMIJLC4B9UVarsmVIk8Njvvc6vGfmUf_4yYbCJAljKCyPBHvKlyyET8kgyu_5vXb-xHRHVwphEXDbrwVtbBPCNy3JzE',
    aspect: 'video'
  },
  {
    id: 3,
    title: 'Neural Cinema',
    tag: 'Commercial',
    color: 'primary',
    desc: 'ファッション写真用にカスタムトレーニングされた LoRA モデルのみを使用して作成されたブランド フィルム',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsE6HmnY6x8EKZFUVd2KTRfj5aPuEanTCTQ8AvixzHba4g_oYJR9H7MkCmpZNeaAHce_92HcDQMNhLMlk5dF-L065LCGqXIUNbdH4s_AuL4gXfJAZTshCqMQTV-guxy4ShEGfYKx-hzCwTK3PpWkZWCGY8fJ5BIxrePWb4kc-cvu51rCpVANcFqCvPpySufDvbjG7_KkzERYsDCRTsYQovVhLAVu90mhqtTlWw6hh382c4PkM5YMTK-mP9zxGZLM44ozRc5HuAO1k',
    aspect: 'square'
  },
  {
    id: 4,
    title: 'Algorithm City',
    tag: '3D-AI',
    color: 'primary',
    desc: '生成テクスチャリングによって強化された手続き型都市生成',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUPBLZhV3JjAG1Z87D-E-U7jeSjm4rr7XCVc_aFcZ-ccIZUwTQM2KiCd2gLGfc-dFh6omGieiEu1a5atS3SR5A0J_ysy7UBn9xZT283WWttjzl03nb24LLB5oB3Wz8_KA2rrWT1yvjqWrchmfu4-OdYlU6D96_9cw7ynGeE9H0pYl7JE0woBd0P0VOagYKyStaBwWwxSxj3ZOlEUybUIwlw37t4ZUdJyzsICZcuT4U1LRlK6OvmZWbotZ2MAyjd6CIObO5pJpqkvQ',
    aspect: '[4/3]'
  },
  {
    id: 5,
    title: 'Binary Sunset',
    tag: 'Experimental',
    color: 'accent-magenta',
    desc: 'スムーズな動きを実現する SVD-XT を使用した、短い縦型フォーマットのシネマティック',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrCnMS8PH-HiI1TQ--e6-Qoiv7dY1uIIZDX_V8dpEHCBF1lMTiuAvzspOrHhdAnwzkhjluZzAi7y-q0GaiU1UY9jJOiJFtILLpz9bzQ9P958XVwnhCVhKo43S2madjwGpJn1mEExpoJgmiDkxb5_DAQQtqYNRRJ3JlAbRrVy-hQ5lWUL_loxBCHbAST1iVPcWpbBJkgyHSkD-DIIvBgb6THQ4SUdgR4ShjzSXxWYymoh-X21mQtvYOfctrcEPDW5pfA4Z4kzEPHfg',
    aspect: '[9/16]'
  },
  {
    id: 6,
    title: 'Ghost in the ML',
    tag: 'Gen-Art',
    color: 'primary',
    desc: '美的選択としてのレイテンシーとアーティファクトの検討',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnCp4j0kdu_qVU8Q2zGMbXpC5NixH2r3s6yuqT0IlBv9mtvGQ65SY6DjZuKfAYOKKdvq85XhQXU-i7Fp_V1LQ9e92BGYuFLJ5X1Mtg2LhlcQ-QrXgR6boWch47Pzd8k0bquT_F7kBMhie4OmDjUz7Jd7arxpuCHV8FWcfdyynew3TwHnVy9r22k81L-69DE02wiKrstwub4dbQxHniW39gpW6KlZ7sa9hKlIWr6TQZHK5AXtoHR3hF1tX-cYquf9h3QoS0SwpvkZk',
    aspect: 'square'
  }
];

export default function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <section id="projects" className="py-24 bg-background-dark px-6 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Filter System */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-6 py-2 rounded-full border text-sm font-medium flex items-center gap-2 transition-all ${activeFilter === f.id
                ? `border-primary bg-primary/10 text-primary`
                : 'border-slate-700 hover:border-primary hover:text-primary bg-card-dark text-slate-400'
                }`}
            >
              {f.icon}
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode='popLayout'>
            {projects.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative overflow-hidden rounded-xl border border-slate-800 bg-card-dark cyber-glow-border transition-all duration-300"
              >
                <div className={`relative aspect-${p.aspect} overflow-hidden`}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                    unoptimized
                    priority={p.id <= 6}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent-magenta/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="text-white w-14 h-14" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-white group-hover:text-primary transition-colors">{p.title}</h3>
                    <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-${p.color}/10 border border-${p.color}/20 text-${p.color}`}>
                      {p.tag}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 line-clamp-2">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .cyber-glow-border:hover {
          box-shadow: 0 0 20px rgba(37, 192, 244, 0.4);
          border-color: #25c0f4;
        }
      `}</style>
    </section>
  );
}

