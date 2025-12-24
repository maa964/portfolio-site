'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, FileText, FolderTree, Zap, Shield, Eye } from 'lucide-react';

const tabs = [
  { id: 'kaizen', label: '開発理念', icon: Sparkles },
  { id: 'docs', label: 'ドキュメント', icon: FileText },
  { id: 'structure', label: 'プロジェクト構成', icon: FolderTree },
  { id: 'performance', label: 'パフォーマンス', icon: Zap },
  { id: 'reliability', label: '信頼性', icon: Shield },
  { id: 'security', label: 'セキュリティ', icon: Eye },
];

const content: Record<string, { title: string; points: string[] }> = {
  kaizen: {
    title: '改善 (Kaizen) の精神',
    points: ['禅の原則とデジタルイノベーションの融合', 'コードは行数より美しさを追求', '動くコードだけでなく品質・保守性・安全性を意識', 'ボーイスカウトルール: コードを見つけた時より良い状態で残す'],
  },
  docs: {
    title: 'Documentation Practices',
    points: ['包括的なREADME.mdの作成', 'APIドキュメントの自動生成', 'インラインコメントで「なぜ」を説明', 'CHANGELOG.mdによる変更履歴管理'],
  },
  structure: {
    title: 'Project Structure',
    points: ['src/, tests/, docs/, scripts/, configs/ の標準構成', 'pyproject.toml によるモダンなパッケージ管理', 'Conventional Commits + feature branches', 'CI/CD パイプラインの自動化'],
  },
  performance: {
    title: 'Performance Optimization',
    points: ['CUDA/GPU 最適化による高速処理', 'PyPy, Numba, Cython の適材適所', '推測ではなく計測に基づく最適化', 'キャッシュ戦略とN+1問題の回避'],
  },
  reliability: {
    title: 'Reliability & Error Handling',
    points: ['早期エラー検出と明確なメッセージ', 'リトライ機構 (指数バックオフ)', 'サーキットブレーカーパターン', '適切なログとメトリクスで可観測性確保'],
  },
  security: {
    title: 'Security Practices',
    points: ['環境変数によるシークレット管理', 'すべての外部入力を検証', 'SQL/XSS インジェクション対策', '最小権限の原則を徹底'],
  },
};

export default function Philosophy() {
  const [active, setActive] = useState('kaizen');

  return (
    <section id="philosophy" className="py-24 px-4 md:px-8 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight gradient-text" style={{ fontFamily: 'Orbitron, monospace' }}>Development Philosophy</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">開発理念と品質基準</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
                active === t.id ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' : 'bg-slate-800/50 text-slate-400 border border-transparent hover:border-slate-600'
              }`}
            >
              <t.icon size={16} />
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-white" style={{ fontFamily: 'Orbitron, monospace' }}>{content[active].title}</h3>
            <ul className="space-y-4">
              {content[active].points.map((p, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                  <span className="text-slate-300">{p}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
