'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'tools', label: 'Tools' },
    { id: 'blog', label: 'Blog' },
    { id: 'audio', label: 'Audio' },
    { id: 'learning', label: 'Online Tools' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-20 py-4 transition-all duration-200"
        style={{
          background: isScrolled ? 'rgba(250, 250, 250, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(8px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-light)' : '1px solid transparent'
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-12">
            <motion.div
              whileHover={{ opacity: 0.7 }}
              className="cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <h2
                className="text-title"
                style={{ color: 'var(--text-primary)', fontWeight: 600 }}
              >
                maa
              </h2>
            </motion.div>

            {/* Navigation */}
            <nav className="hidden xl:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="nav-link"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            {/* Language Switcher */}
            <div
              className="hidden sm:flex items-center gap-1 p-1 rounded"
              style={{ background: 'var(--bg-secondary)' }}
            >
              {(['ja', 'en', 'zh'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className="px-3 py-1.5 text-small rounded transition-all"
                  style={{
                    background: language === lang ? 'var(--bg-primary)' : 'transparent',
                    color: language === lang ? 'var(--text-primary)' : 'var(--text-tertiary)',
                    fontWeight: language === lang ? 500 : 400
                  }}
                >
                  {lang === 'ja' ? 'JP' : lang === 'en' ? 'EN' : 'CN'}
                </button>
              ))}
            </div>

            {/* Contact Button */}
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary hidden md:flex"
            >
              Contact
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2"
              style={{ color: 'var(--text-primary)' }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 xl:hidden flex flex-col justify-center items-center"
            style={{ background: 'var(--bg-primary)' }}
          >
            <nav className="flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-headline transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Language Switcher Mobile */}
            <div className="flex gap-4 mt-12">
              {(['ja', 'en', 'zh'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className="px-6 py-2 text-caption rounded transition-all"
                  style={{
                    background: language === lang ? 'var(--text-primary)' : 'transparent',
                    color: language === lang ? 'var(--bg-primary)' : 'var(--text-secondary)',
                    border: `1px solid ${language === lang ? 'var(--text-primary)' : 'var(--border-medium)'}`
                  }}
                >
                  {lang === 'ja' ? 'Japanese' : lang === 'en' ? 'English' : 'Chinese'}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
