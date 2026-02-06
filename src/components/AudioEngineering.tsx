'use client';
import { motion } from 'framer-motion';
import { Headphones } from 'lucide-react';
import Image from 'next/image';

export default function AudioEngineering() {
  return (
    <section id="audio" className="section" style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.5) 0%, rgba(10,14,23,1) 100%)' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '9999px', background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)', marginBottom: '1rem' }}>
            <Headphones size={16} style={{ color: '#a855f7' }} />
            <span style={{ fontSize: '0.75rem', color: '#a855f7', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Side Service</span>
          </div>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>
            <span className="gradient-text">Sound Engineering</span>
          </h2>
          <p style={{ color: '#64748b' }}>Mix / Mastering</p>
          <p style={{ color: '#a855f7', marginTop: '0.5rem' }}>相場よりお手軽な価格の相談が可能です</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', border: '1px solid #334155' }}
        >
          <Image 
            src="/images/page-17.png" 
            alt="Sound Engineering Skills - Cubase, iZotope RX, Ozone, Neutron" 
            width={1920} 
            height={1080} 
            style={{ width: '100%', height: 'auto' }} 
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.875rem', color: '#64748b' }}
        >
          * Main: AI/ML, Video Processing, Automation
        </motion.p>
      </div>
    </section>
  );
}
