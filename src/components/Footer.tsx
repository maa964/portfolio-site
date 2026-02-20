'use client';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="py-12 px-6 lg:px-20"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Branding */}
        <div>
          <p className="text-title mb-1" style={{ color: 'var(--text-primary)' }}>
            maa
          </p>
          <p className="text-small" style={{ color: 'var(--text-tertiary)' }}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8">
          {['GitHub', 'Twitter', 'Email'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-caption transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-caption transition-colors"
          style={{ color: 'var(--text-tertiary)' }}
        >
          <span>Back to top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
