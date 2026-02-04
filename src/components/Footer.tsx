'use client';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-slate-500 text-sm">
          © {new Date().getFullYear()} maa. All rights reserved.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-2 text-slate-500 text-sm">
          Built with <Heart size={14} className="text-red-500" /> using Next.js & Tailwind CSS
        </motion.p>
      </div>
    </footer>
  );
}
