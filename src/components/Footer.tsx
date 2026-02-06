'use client';
import { motion } from 'framer-motion';
import { Terminal, Code, Share2, Mail, ArrowUpCircle, Laptop } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-primary/10 bg-card-dark/20 py-16 px-6 lg:px-20 mt-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">

        {/* Branding & Attribution */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-primary">
            <Laptop size={20} />
            <span className="font-black uppercase tracking-[0.2em] text-xs">Cyber-Zen // V 2.0.4</span>
          </div>
          <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.2em] max-w-xs">
            © {new Date().getFullYear()} Neural_Protocol. <br />
            Constructed with Next.js & Artificial Intelligence.
          </p>
        </div>

        {/* Social Nodes */}
        <div className="flex gap-10">
          {[
            { icon: <Terminal size={20} />, label: 'Terminal' },
            { icon: <Code size={20} />, label: 'Code' },
            { icon: <Share2 size={20} />, label: 'Share' },
            { icon: <Mail size={20} />, label: 'Mail' }
          ].map((social, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.2, color: '#25c0f4' }}
              className="text-white/30 hover:text-primary transition-colors duration-300"
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-primary/40 hover:text-primary transition-all text-[10px] font-black uppercase tracking-[0.3em] group"
        >
          Back_to_Top
          <ArrowUpCircle size={18} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Decorative HUD background info */}
      <div className="absolute bottom-4 left-6 opacity-5 pointer-events-none font-mono text-[8px] text-primary">
        RELAY_NODE: ACTIVE // TEMP: 32C // LOAD: 0.12
      </div>
    </footer>
  );
}
