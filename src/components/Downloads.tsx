'use client';
import { motion } from 'framer-motion';
import { Download, Monitor, Apple, Laptop, Package, Clock, HardDrive, Timer, Scale, AlertTriangle, Coffee, ExternalLink } from 'lucide-react';

import { apps } from '@/data/downloads';

const PlatformIcon = ({ platform }: { platform: 'windows' | 'mac' | 'linux' }) => {
  switch (platform) {
    case 'windows':
      return <Monitor size={18} />;
    case 'mac':
      return <Apple size={18} />;
    case 'linux':
      return <Laptop size={18} />;
    default:
      return <Package size={18} />;
  }
};

export default function Downloads() {
  return (
    <section id="downloads" className="section">
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: '4rem' }}
        >
          <h2 className="section-title gradient-text font-display">Downloads</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            アプリケーションをダウンロード
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {apps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-hover"
              style={{
                padding: '2rem',
                borderRadius: '1rem',
                background: app.featured
                  ? 'linear-gradient(135deg, rgba(6,182,212,0.1), rgba(168,85,247,0.1))'
                  : 'rgba(30,41,59,0.5)',
                border: app.featured ? '1px solid rgba(6,182,212,0.3)' : '1px solid #334155',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {app.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    padding: '0.25rem 0.75rem',
                    background: 'linear-gradient(90deg, #06b6d4, #a855f7)',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'white',
                  }}
                >
                  Featured
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* App Header */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                    <div
                      style={{
                        width: '3.5rem',
                        height: '3.5rem',
                        borderRadius: '0.75rem',
                        background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(168,85,247,0.2))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Timer size={28} style={{ color: '#22d3ee' }} />
                    </div>
                    <div>
                      <h3
                        className="font-display"
                        style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f1f5f9' }}
                      >
                        {app.name}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#64748b', fontSize: '0.875rem', flexWrap: 'wrap' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Package size={14} />
                          {app.version}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Clock size={14} />
                          {app.lastUpdated}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#22c55e' }}>
                          <Scale size={14} />
                          {app.license} License
                        </span>
                      </div>
                    </div>
                  </div>
                  <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>{app.description}</p>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: '0.25rem 0.75rem',
                          background: 'rgba(6,182,212,0.1)',
                          border: '1px solid rgba(6,182,212,0.2)',
                          borderRadius: '9999px',
                          fontSize: '0.75rem',
                          color: '#22d3ee',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Download Buttons */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem',
                  }}
                >
                  {app.platforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.downloadUrl}
                      target={platform.downloadUrl.startsWith('http') ? '_blank' : undefined}
                      rel={platform.downloadUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1rem 1.25rem',
                        background: 'rgba(15,23,42,0.6)',
                        border: '1px solid #334155',
                        borderRadius: '0.75rem',
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#06b6d4';
                        e.currentTarget.style.background = 'rgba(6,182,212,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#334155';
                        e.currentTarget.style.background = 'rgba(15,23,42,0.6)';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ color: '#22d3ee' }}>
                          <PlatformIcon platform={platform.icon} />
                        </div>
                        <div>
                          <p style={{ fontWeight: 600, color: '#e2e8f0' }}>{platform.name}</p>
                          <p style={{ fontSize: '0.75rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <HardDrive size={12} />
                            {platform.fileSize}
                          </p>
                        </div>
                      </div>
                      {platform.downloadUrl.startsWith('http') ? (
                        <ExternalLink size={20} style={{ color: '#06b6d4' }} />
                      ) : (
                        <Download size={20} style={{ color: '#06b6d4' }} />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            marginTop: '2rem',
            padding: '2.5rem 2rem',
            borderRadius: '1rem',
            background: 'rgba(255, 95, 95, 0.05)',
            border: '1px solid rgba(255, 95, 95, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1.25rem',
          }}
        >
          <div
            style={{
              width: '3.5rem',
              height: '3.5rem',
              borderRadius: '1rem',
              background: 'rgba(255, 95, 95, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ff5f5f',
            }}
          >
            <Coffee size={28} />
          </div>
          <div>
            <h3
              className="font-display"
              style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.5rem' }}
            >
              Support My Work
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
              もし制作したツールがお役に立ちましたら、継続的な開発やメンテナンスをサポートいただけると大変励みになります。
            </p>
            <a
              href="https://ko-fi.com/maa3684"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.875rem 2rem',
                background: '#ff5f5f',
                borderRadius: '0.75rem',
                color: 'white',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 12px rgba(255, 95, 95, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 95, 95, 0.3)';
                e.currentTarget.style.background = '#ff4a4a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 95, 95, 0.2)';
                e.currentTarget.style.background = '#ff5f5f';
              }}
            >
              <Coffee size={20} />
              <span>Buy me a coffee on Ko-fi</span>
            </a>
          </div>
        </motion.div>

        {/* License & Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: '3rem',
            padding: '2rem',
            borderRadius: '0.75rem',
            background: 'rgba(30,41,59,0.3)',
            border: '1px solid #334155',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Scale size={20} style={{ color: '#22c55e' }} />
            <h4 className="font-display" style={{ fontSize: '1.125rem', fontWeight: 600, color: '#e2e8f0' }}>
              MIT License
            </h4>
          </div>
          <div
            style={{
              padding: '1rem',
              background: 'rgba(15,23,42,0.5)',
              borderRadius: '0.5rem',
              marginBottom: '1.5rem',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: '#94a3b8',
              lineHeight: 1.6,
            }}
          >
            <p style={{ marginBottom: '0.75rem' }}>
              Copyright (c) 2025 maa
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the &quot;Software&quot;), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              The above copyright notice and this permission notice shall be included in all
              copies or substantial portions of the Software.
            </p>
            <p>
              THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              SOFTWARE.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <AlertTriangle size={20} style={{ color: '#f59e0b' }} />
            <h4 className="font-display" style={{ fontSize: '1.125rem', fontWeight: 600, color: '#e2e8f0' }}>
              免責事項
            </h4>
          </div>
          <div style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.8 }}>
            <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                本ソフトウェアは「現状のまま」提供されます。作者は、本ソフトウェアの使用によって生じたいかなる損害についても責任を負いません。
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                本ソフトウェアの使用は、ユーザー自身の責任において行ってください。
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                本ソフトウェアは予告なく変更、または配布を中止する場合があります。
              </li>
              <li>
                サポートは保証されていません。問題が発生した場合は、
                <a
                  href="#contact"
                  style={{ color: '#22d3ee', textDecoration: 'none', marginLeft: '0.25rem' }}
                >
                  お問い合わせ
                </a>
                よりご連絡ください。
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
