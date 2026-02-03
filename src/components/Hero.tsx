'use client';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(15,23,42,0.5), rgb(15,23,42))' }} />

      {/* Animated orbs */}
      <div style={{ position: 'absolute', top: '25%', left: '25%', width: '24rem', height: '24rem', background: 'rgba(6,182,212,0.2)', borderRadius: '50%', filter: 'blur(48px)', animation: 'pulse 2s infinite' }} />
      <div style={{ position: 'absolute', bottom: '25%', right: '25%', width: '24rem', height: '24rem', background: 'rgba(168,85,247,0.2)', borderRadius: '50%', filter: 'blur(48px)', animation: 'pulse 2s infinite', animationDelay: '1s' }} />

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 1.5rem', maxWidth: '64rem' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="animate-float"
          style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            position: 'relative',
            width: '180px',
            height: '180px',
            padding: '4px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)',
            boxShadow: '0 0 40px rgba(6, 182, 212, 0.4)',
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid #0a0e17',
              background: '#0a0e17',
            }}>
              <Image
                src="/images/Image_fx.jpg"
                alt="Masahiro"
                width={180}
                height={180}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p style={{ color: '#22d3ee', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.875rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>WELCOME TO MY PORTFOLIO</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontFamily: 'Orbitron, monospace', fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1 }}
        >
          <span style={{ color: 'white' }}>MASAHIRO</span>
          <br />
          <span className="gradient-text">AI/ML Engineer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', color: '#94a3b8', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem' }}
        >
          Video Creator & Automation Architect
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}
        >
          <a href="#projects" style={{ position: 'relative', padding: '1rem 2rem', background: 'linear-gradient(to right, #06b6d4, #9333ea)', borderRadius: '0.5rem', fontWeight: 600, color: 'white', textDecoration: 'none', overflow: 'hidden' }}>
            <span style={{ position: 'relative', zIndex: 10 }}>View Projects</span>
          </a>
          <a href="#contact" style={{ padding: '1rem 2rem', border: '1px solid #475569', borderRadius: '0.5rem', fontWeight: 600, color: 'white', textDecoration: 'none', transition: 'all 0.3s' }}>
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '3rem' }}
        >
          <a href="https://github.com/maa964" target="_blank" rel="noopener noreferrer" style={{ color: '#64748b', transition: 'color 0.3s' }}>
            <Github size={24} />
          </a>
          <a href="mailto:zentunadance@gmail.com" style={{ color: '#64748b', transition: 'color 0.3s' }}>
            <Mail size={24} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
      >
        <a href="#expertise" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#64748b', textDecoration: 'none', transition: 'color 0.3s' }}>
          <span style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>Scroll</span>
          <ChevronDown className="animate-bounce" size={20} />
        </a>
      </motion.div>
    </section>
  );
}
