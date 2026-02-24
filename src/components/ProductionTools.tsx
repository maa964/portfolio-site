'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Download, ExternalLink, ChevronDown, Grid, EyeOff } from 'lucide-react';

import { tools } from '@/data/production-tools';

export default function ProductionTools() {
    const { t } = useLanguage();
    const [expandedTool, setExpandedTool] = useState<string | null>(null);
    const [showGrid, setShowGrid] = useState<string | null>(null);



    const toggleExpand = (id: string) => {
        setExpandedTool(expandedTool === id ? null : id);
    };

    const toggleGrid = (id: string) => {
        setShowGrid(showGrid === id ? null : id);
    };

    return (
        <section id="tools" className="py-24" style={{ background: 'var(--bg-primary)' }}>
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <header className="mb-16">
                    <p
                        className="text-small mb-3 uppercase tracking-wider font-mono"
                        style={{ color: 'var(--text-tertiary)' }}
                    >
                        Technical Specifications
                    </p>
                    <h2 className="text-headline mb-4" style={{ color: 'var(--text-primary)' }}>
                        Production Tools
                    </h2>
                    <p className="text-body max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
                        映像制作と生産性向上のための内製ツール。設計意図と技術仕様を公開。
                    </p>
                </header>

                {/* Tools List */}
                <div className="space-y-6">
                    {tools.map((tool, idx) => (
                        <motion.article
                            key={tool.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.03 }}
                            className="rounded-lg overflow-hidden"
                            style={{
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-light)'
                            }}
                        >
                            {/* Tool Header */}
                            <div className="p-6">
                                {/* Title Row */}
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3
                                            className="text-title mb-2"
                                            style={{ color: 'var(--text-primary)' }}
                                        >
                                            {tool.title}
                                        </h3>
                                        <p
                                            className="text-caption"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            {tool.summary}
                                        </p>
                                    </div>

                                    {/* Grid Toggle */}
                                    <button
                                        onClick={() => toggleGrid(tool.id)}
                                        className="p-2 rounded transition-colors"
                                        style={{
                                            background: showGrid === tool.id ? 'var(--bg-tertiary)' : 'transparent',
                                            color: 'var(--text-tertiary)'
                                        }}
                                        title="Toggle Grid Overlay"
                                    >
                                        {showGrid === tool.id ? <EyeOff size={16} /> : <Grid size={16} />}
                                    </button>
                                </div>

                                {/* Metadata Table */}
                                <div
                                    className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded mb-4"
                                    style={{
                                        background: 'var(--bg-primary)',
                                        border: '1px solid var(--border-light)',
                                        position: 'relative'
                                    }}
                                >
                                    {/* Grid Overlay */}
                                    {showGrid === tool.id && (
                                        <div
                                            className="absolute inset-0 pointer-events-none rounded"
                                            style={{
                                                background: `
                                                    linear-gradient(to right, rgba(26, 26, 26, 0.05) 1px, transparent 1px),
                                                    linear-gradient(to bottom, rgba(26, 26, 26, 0.05) 1px, transparent 1px)
                                                `,
                                                backgroundSize: '8px 8px',
                                                zIndex: 1
                                            }}
                                        />
                                    )}

                                    <div>
                                        <p className="text-small mb-1 font-mono" style={{ color: 'var(--text-tertiary)' }}>
                                            Period
                                        </p>
                                        <p className="text-caption font-mono" style={{ color: 'var(--text-primary)' }}>
                                            {tool.meta.period}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-small mb-1 font-mono" style={{ color: 'var(--text-tertiary)' }}>
                                            Scope
                                        </p>
                                        <p className="text-caption font-mono" style={{ color: 'var(--text-primary)' }}>
                                            {tool.meta.scope.join(' / ')}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-small mb-1 font-mono" style={{ color: 'var(--text-tertiary)' }}>
                                            Technology
                                        </p>
                                        <p className="text-caption font-mono" style={{ color: 'var(--text-primary)' }}>
                                            {tool.meta.technology.join(', ')}
                                        </p>
                                    </div>
                                </div>

                                {/* Technical Specs */}
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                    {tool.specs.map((spec) => (
                                        <div
                                            key={spec.label}
                                            className="p-3 rounded"
                                            style={{ background: 'var(--bg-primary)' }}
                                        >
                                            <p
                                                className="text-small mb-1 font-mono"
                                                style={{ color: 'var(--text-tertiary)' }}
                                            >
                                                {spec.label}
                                            </p>
                                            <p
                                                className="text-caption font-mono"
                                                style={{ color: 'var(--text-primary)' }}
                                            >
                                                {spec.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Expandable Section Toggle */}
                                {(tool.typography || tool.colors) && (
                                    <button
                                        onClick={() => toggleExpand(tool.id)}
                                        className="flex items-center gap-2 mt-4 text-small font-mono transition-colors"
                                        style={{ color: 'var(--text-tertiary)' }}
                                    >
                                        <span>Technical Details</span>
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform ${expandedTool === tool.id ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                )}
                            </div>

                            {/* Expanded Technical Details */}
                            {expandedTool === tool.id && (tool.typography || tool.colors) && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="px-6 pb-6"
                                >
                                    <div
                                        className="p-4 rounded"
                                        style={{
                                            background: 'var(--bg-primary)',
                                            border: '1px solid var(--border-light)'
                                        }}
                                    >
                                        {/* Typography Specs */}
                                        {tool.typography && (
                                            <div className="mb-6">
                                                <p
                                                    className="text-small font-mono mb-3 uppercase tracking-wider"
                                                    style={{ color: 'var(--text-tertiary)' }}
                                                >
                                                    Typography Specifications
                                                </p>
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-caption font-mono">
                                                        <thead>
                                                            <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                                                                <th className="text-left py-2 pr-4" style={{ color: 'var(--text-tertiary)' }}>Element</th>
                                                                <th className="text-left py-2 pr-4" style={{ color: 'var(--text-tertiary)' }}>Font</th>
                                                                <th className="text-left py-2 pr-4" style={{ color: 'var(--text-tertiary)' }}>Size</th>
                                                                <th className="text-left py-2 pr-4" style={{ color: 'var(--text-tertiary)' }}>Line-height</th>
                                                                <th className="text-left py-2" style={{ color: 'var(--text-tertiary)' }}>Weight</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {tool.typography.map((typo) => (
                                                                <tr
                                                                    key={typo.element}
                                                                    style={{ borderBottom: '1px solid var(--border-light)' }}
                                                                >
                                                                    <td className="py-2 pr-4" style={{ color: 'var(--text-primary)' }}>{typo.element}</td>
                                                                    <td className="py-2 pr-4" style={{ color: 'var(--text-secondary)' }}>{typo.font}</td>
                                                                    <td className="py-2 pr-4" style={{ color: 'var(--text-secondary)' }}>{typo.size}</td>
                                                                    <td className="py-2 pr-4" style={{ color: 'var(--text-secondary)' }}>{typo.lineHeight}</td>
                                                                    <td className="py-2" style={{ color: 'var(--text-secondary)' }}>{typo.weight}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        )}

                                        {/* Color Palette */}
                                        {tool.colors && (
                                            <div>
                                                <p
                                                    className="text-small font-mono mb-3 uppercase tracking-wider"
                                                    style={{ color: 'var(--text-tertiary)' }}
                                                >
                                                    Color Palette
                                                </p>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                                    {tool.colors.map((color) => (
                                                        <div
                                                            key={color.hex}
                                                            className="p-3 rounded"
                                                            style={{ border: '1px solid var(--border-light)' }}
                                                        >
                                                            <div
                                                                className="w-full h-8 rounded mb-2"
                                                                style={{ background: color.hex }}
                                                            />
                                                            <p
                                                                className="text-small font-mono mb-1"
                                                                style={{ color: 'var(--text-primary)' }}
                                                            >
                                                                {color.hex}
                                                            </p>
                                                            <p
                                                                className="text-small"
                                                                style={{ color: 'var(--text-tertiary)' }}
                                                            >
                                                                {color.role}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}

                            {/* Actions */}
                            {(tool.downloadUrl || tool.boothUrl || tool.githubUrl) && (
                                <div
                                    className="px-6 py-4 flex gap-3"
                                    style={{ borderTop: '1px solid var(--border-light)' }}
                                >
                                    {tool.githubUrl && (
                                        <a
                                            href={tool.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary"
                                        >
                                            <ExternalLink size={14} />
                                            <span>GitHub</span>
                                        </a>
                                    )}
                                    {tool.downloadUrl && (
                                        <a
                                            href={tool.downloadUrl}
                                            download
                                            className="btn-primary"
                                        >
                                            <Download size={14} />
                                            <span>Download</span>
                                        </a>
                                    )}
                                    {tool.boothUrl && (
                                        <a
                                            href={tool.boothUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-secondary"
                                        >
                                            <ExternalLink size={14} />
                                            <span>BOOTH</span>
                                        </a>
                                    )}
                                </div>
                            )}
                        </motion.article>
                    ))}
                </div>

                {/* Design Principles Footer */}
                <footer
                    className="mt-16 p-6 rounded-lg"
                    style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-light)'
                    }}
                >
                    <p
                        className="text-small font-mono mb-4 uppercase tracking-wider"
                        style={{ color: 'var(--text-tertiary)' }}
                    >
                        Design Principles
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <p className="text-caption mb-1" style={{ color: 'var(--text-primary)' }}>
                                Honest
                            </p>
                            <p className="text-small" style={{ color: 'var(--text-tertiary)' }}>
                                設計の意図と事実のみを提示
                            </p>
                        </div>
                        <div>
                            <p className="text-caption mb-1" style={{ color: 'var(--text-primary)' }}>
                                Understandable
                            </p>
                            <p className="text-small" style={{ color: 'var(--text-tertiary)' }}>
                                構造を明かし直感的に伝える
                            </p>
                        </div>
                        <div>
                            <p className="text-caption mb-1" style={{ color: 'var(--text-primary)' }}>
                                Thorough
                            </p>
                            <p className="text-small" style={{ color: 'var(--text-tertiary)' }}>
                                最後の一点まで首尾一貫
                            </p>
                        </div>
                    </div>
                </footer>

            </div>
        </section>
    );
}
