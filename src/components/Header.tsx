'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Zap, Laptop } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'tools', label: 'TOOLS' },
    { id: 'blog', label: 'BLOG' },
    { id: 'audio', label: 'AUDIO' },
    { id: 'learning', label: 'LEARNING' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-20 py-4 transition-all duration-300 ${isScrolled ? 'bg-background-dark/80 backdrop-blur-md border-b border-primary/20 shadow-lg' : 'bg-transparent border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Nav */}
          <div className="flex items-center gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Laptop size={24} className="text-primary group-hover:animate-pulse" />
              <h2 className="text-white text-xl font-bold leading-tight tracking-tight uppercase font-display">
                Cyber-Zen <span className="text-primary font-light">Nexus</span>
              </h2>
            </motion.div>

            <nav className="hidden xl:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="nav-link text-white/70 text-[10px] font-bold tracking-[0.2em] uppercase"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            {/* HUD Language Switcher */}
            <div className="hidden sm:flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-lg">
              {(['ja', 'en', 'zh'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-0.5 text-[9px] font-bold font-mono rounded transition-all uppercase ${language === lang ? 'bg-primary text-background-dark' : 'text-slate-500 hover:text-primary'
                    }`}
                >
                  {lang === 'ja' ? 'JP' : lang === 'en' ? 'EN' : 'CN'}
                </button>
              ))}
            </div>

            {/* HUD Search Emulation */}
            <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-card-dark/60 border border-primary/20 rounded-lg focus-within:border-primary transition-all">
              <Search size={14} className="text-primary/50" />
              <input
                type="text"
                placeholder="Search Data Streams..."
                className="bg-transparent border-none focus:ring-0 text-[10px] text-white placeholder:text-white/20 uppercase tracking-widest w-32 xl:w-48 font-mono"
              />
            </div>

            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary hidden md:flex min-w-[120px] py-2.5 px-5"
            >
              <Zap size={14} />
              Connect
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-background-dark/98 backdrop-blur-xl xl:hidden p-10 flex flex-col justify-center items-center gap-12"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-3xl font-black text-white hover:text-primary transition-all uppercase tracking-tighter"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="flex gap-4">
              {(['ja', 'en', 'zh'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-6 py-2 text-xs font-bold border ${language === lang
                    ? 'bg-primary border-primary text-background-dark'
                    : 'border-primary/20 text-primary'
                    }`}
                >
                  {lang === 'ja' ? 'JAPANESE' : lang === 'en' ? 'ENGLISH' : 'CHINESE'}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
