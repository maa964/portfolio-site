'use client';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="mb-12">
            <p
              className="text-small mb-4 uppercase tracking-wider"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Contact
            </p>
            <h2 className="text-headline mb-4" style={{ color: 'var(--text-primary)' }}>
              Get in Touch
            </h2>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              プロジェクトのご相談やお問い合わせは、以下のフォームからお気軽にどうぞ。
            </p>
          </div>

          {/* Form */}
          <form
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  className="text-small block mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {t('username')}
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded text-body transition-all"
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="text-small block mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {t('emailCoordinates')}
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded text-body transition-all"
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                className="text-small block mb-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                {t('dataPayload')}
              </label>
              <textarea
                placeholder="Your message..."
                rows={5}
                className="w-full px-4 py-3 rounded text-body resize-none transition-all"
                style={{
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <button type="submit" className="btn-primary">
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </div>
          </form>

          {/* Additional Info */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: '1px solid var(--border-light)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <p className="text-small mb-1" style={{ color: 'var(--text-tertiary)' }}>
                  Location
                </p>
                <p className="text-caption" style={{ color: 'var(--text-primary)' }}>
                  Hiroshima, Japan
                </p>
              </div>
              <div>
                <p className="text-small mb-1" style={{ color: 'var(--text-tertiary)' }}>
                  Response Time
                </p>
                <p className="text-caption" style={{ color: 'var(--text-primary)' }}>
                  Within 24 hours
                </p>
              </div>
              <div>
                <p className="text-small mb-1" style={{ color: 'var(--text-tertiary)' }}>
                  Availability
                </p>
                <p className="text-caption" style={{ color: 'var(--text-primary)' }}>
                  Open for projects
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
