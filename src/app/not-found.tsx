'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center p-6 text-center"
            style={{ background: 'var(--bg-primary)' }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md"
            >
                {/* 404 Header */}
                <p
                    className="text-small mb-4 font-mono uppercase tracking-[0.2em]"
                    style={{ color: 'var(--text-tertiary)' }}
                >
                    Error Code: 404
                </p>

                <h1
                    className="text-display mb-6"
                    style={{ color: 'var(--text-primary)' }}
                >
                    Page Not Found
                </h1>

                <div
                    className="w-12 h-[1px] mx-auto mb-8"
                    style={{ background: 'var(--border-medium)' }}
                />

                <p
                    className="text-body mb-12"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    リクエストされたページは見つかりませんでした。<br />
                    URLが正しいか、またはページが移動した可能性があります。
                </p>

                {/* Back to Home Button */}
                <Link
                    href="/"
                    className="btn-primary"
                >
                    <ArrowLeft size={16} />
                    <span>Return to Home</span>
                </Link>

                {/* Subtle Grid Background Decor */}
                <div
                    className="fixed inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, var(--text-primary) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--text-primary) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                        zIndex: -1
                    }}
                />
            </motion.div>
        </div>
    );
}
