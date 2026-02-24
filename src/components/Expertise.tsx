'use client';
import { motion } from 'framer-motion';
import { expertiseData as expertise } from '@/data/expertise';

export default function Expertise() {
  return (
    <section id="expertise" className="section">
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title gradient-text">Core Expertise</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>専門分野と技術領域</p>
        </motion.div>

        <div className="grid-3-cols">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="card-hover"
              style={{ padding: '2rem', borderRadius: '1rem', background: 'rgba(30,41,59,0.5)', border: '1px solid #334155' }}
            >
              <div style={{ width: '4rem', height: '4rem', borderRadius: '0.75rem', background: item.color, padding: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <item.icon style={{ width: '100%', height: '100%', color: 'white' }} />
              </div>
              <h3 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>{item.title}</h3>
              <p style={{ color: '#94a3b8' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
