'use client';
import { motion } from 'framer-motion';
import { Mail, Github, Send, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>お気軽にお問い合わせください</p>
        </motion.div>

        <div className="grid-2-cols">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Contact Info</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="mailto:zentunadance@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '0.75rem', background: 'rgba(30,41,59,0.5)', border: '1px solid #334155', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem', background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(168,85,247,0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={20} style={{ color: '#22d3ee' }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email</p>
                  <p style={{ color: '#cbd5e1' }}>zentunadance@gmail.com</p>
                </div>
              </a>

              <a href="https://github.com/maa964" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '0.75rem', background: 'rgba(30,41,59,0.5)', border: '1px solid #334155', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem', background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(168,85,247,0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Github size={20} style={{ color: '#22d3ee' }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>GitHub</p>
                  <p style={{ color: '#cbd5e1' }}>maa964</p>
                </div>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '0.75rem', background: 'rgba(30,41,59,0.5)', border: '1px solid #334155' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem', background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(168,85,247,0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={20} style={{ color: '#22d3ee' }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Location</p>
                  <p style={{ color: '#cbd5e1' }}>Hiroshima, Japan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            onSubmit={e => { e.preventDefault(); window.location.href = 'mailto:zentunadance@gmail.com'; }}
          >
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Name</label>
              <input type="text" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', background: 'rgba(30,41,59,0.5)', border: '1px solid #334155', color: 'white', outline: 'none' }} placeholder="Your name" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Email</label>
              <input type="email" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', background: 'rgba(30,41,59,0.5)', border: '1px solid #334155', color: 'white', outline: 'none' }} placeholder="your@email.com" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Message</label>
              <textarea rows={4} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', background: 'rgba(30,41,59,0.5)', border: '1px solid #334155', color: 'white', outline: 'none', resize: 'none' }} placeholder="Your message..." />
            </div>
            <button type="submit" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem 1.5rem', background: 'linear-gradient(90deg, #06b6d4, #9333ea)', borderRadius: '0.5rem', fontWeight: 600, color: 'white', border: 'none', cursor: 'pointer' }}>
              <Send size={18} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
