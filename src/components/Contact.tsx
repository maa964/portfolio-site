'use client';
import { motion } from 'framer-motion';
import { Terminal, Send, Shield, Zap, Info } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-[#0a0c0d] relative overflow-hidden flex flex-col items-center justify-center p-6">
      {/* CRT Background Effects (Simulated via overlay) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20 crt-grid" />

      {/* Decorative Corners (Hex strings from layout) */}
      <div className="absolute top-10 left-10 opacity-20 hidden lg:block z-0">
        <pre className="text-[10px] leading-tight text-primary font-mono">
          0x45 0x6E 0x63 0x72 0x79 0x70 0x74<br />
          0x53 0x74 0x61 0x74 0x75 0x73 0x3A<br />
          0x41 0x43 0x54 0x49 0x56 0x45 0x20
        </pre>
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 hidden lg:block text-right z-0">
        <pre className="text-[10px] leading-tight text-primary font-mono">
          &gt;&gt; NODE_LINK: ESTABLISHED<br />
          &gt;&gt; UPLINK_SPEED: 4.2GBPS<br />
          &gt;&gt; PACKET_LOSS: 0.00%
        </pre>
      </div>

      {/* Main Terminal Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="z-20 w-full max-w-4xl bg-[#111618]/90 border border-primary/30 rounded-lg backdrop-blur-md overflow-hidden shadow-[0_0_15px_rgba(37,192,244,0.2),inset_0_0_10px_rgba(37,192,244,0.1)]"
      >
        {/* Terminal Header */}
        <header className="flex items-center justify-between border-b border-primary/20 bg-primary/5 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="h-2 w-2 rounded-full bg-accent-magenta/60" />
              <div className="h-2 w-2 rounded-full bg-primary/40" />
              <div className="h-2 w-2 rounded-full bg-primary/20" />
            </div>
            <div className="ml-4 flex items-center gap-2">
              <Terminal size={14} className="text-primary" />
              <h2 className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase font-mono">System Access: Contact_Protocol v4.1</h2>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[9px] font-bold text-primary font-mono uppercase">Signal: Encrypted</span>
          </div>
        </header>

        {/* Main Interface Grid */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Sidebar - Stats */}
          <aside className="w-full lg:w-64 border-r border-primary/10 bg-black/20 p-6 flex flex-col gap-6">
            <div>
              <p className="text-[9px] font-bold text-primary/50 uppercase tracking-widest mb-3 font-mono">Diagnostic Data</p>
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-[9px] font-mono">
                    <span className="text-primary/70">CPU LOAD</span>
                    <span className="text-primary font-bold">12.4%</span>
                  </div>
                  <div className="h-1 w-full bg-primary/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[12%]" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-[9px] font-mono">
                    <span className="text-primary/70">MEM ALLOC</span>
                    <span className="text-primary font-bold">44.1%</span>
                  </div>
                  <div className="h-1 w-full bg-primary/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[44%]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <div className="p-3 border border-primary/20 rounded-lg bg-primary/5">
                <p className="text-[9px] text-primary/70 mb-2 font-mono">NEURAL_LINK</p>
                <div className="flex items-end gap-1 h-8">
                  <div className="w-1 bg-primary/40 h-[20%]" />
                  <div className="w-1 bg-primary h-[60%]" />
                  <div className="w-1 bg-primary/60 h-[40%]" />
                  <div className="w-1 bg-primary h-[90%]" />
                  <div className="w-1 bg-primary/80 h-[50%]" />
                  <div className="w-1 bg-primary h-[75%]" />
                  <div className="w-1 bg-primary/40 h-[30%]" />
                  <div className="w-1 bg-primary h-[85%]" />
                </div>
                <p className="text-[8px] text-primary font-mono mt-2 uppercase">Status: Stable</p>
              </div>
            </div>
          </aside>

          {/* Contact Form Area */}
          <main className="flex-1 p-8">
            <div className="mb-8">
              <h1 className="text-2xl font-black text-white mb-2 tracking-tight uppercase font-display italic">Initiating_Uplink...</h1>
              <p className="text-primary/60 text-xs font-light font-display">Please provide valid identity strings for data transmission.</p>
            </div>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold text-primary flex items-center gap-2 font-mono transition-colors group-focus-within:text-white">
                    <span className="text-primary/50 group-focus-within:text-primary">&gt;</span> {t('username')}:_
                  </label>
                  <input
                    className="w-full bg-black/40 border-2 border-primary/20 rounded-lg focus:border-primary focus:ring-0 focus:shadow-[0_0_15px_rgba(37,192,244,0.2)] text-white placeholder:text-primary/30 transition-all font-mono py-3 px-4 text-sm hover:border-primary/40"
                    placeholder="[ENTER IDENTITY]"
                    type="text"
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold text-primary flex items-center gap-2 font-mono transition-colors group-focus-within:text-white">
                    <span className="text-primary/50 group-focus-within:text-primary">&gt;</span> {t('emailCoordinates')}:_
                  </label>
                  <input
                    className="w-full bg-black/40 border-2 border-primary/20 rounded-lg focus:border-primary focus:ring-0 focus:shadow-[0_0_15px_rgba(37,192,244,0.2)] text-white placeholder:text-primary/30 transition-all font-mono py-3 px-4 text-sm hover:border-primary/40"
                    placeholder="[USER@NODE.DOMAIN]"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] font-bold text-primary flex items-center gap-2 font-mono transition-colors group-focus-within:text-white">
                  <span className="text-primary/50 group-focus-within:text-primary">&gt;</span> {t('dataPayload')}:_
                </label>
                <div className="relative">
                  <textarea
                    className="w-full bg-black/40 border-2 border-primary/20 focus:border-primary focus:ring-0 focus:shadow-[0_0_20px_rgba(37,192,244,0.15)] text-white placeholder:text-primary/30 transition-all font-mono p-4 rounded-lg resize-none text-sm hover:border-primary/40"
                    placeholder="[WRITE MESSAGE STRING]"
                    rows={4}
                  />
                  <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-30 group-focus-within:opacity-100 transition-opacity">
                    <span className="text-[9px] text-primary font-mono">Payload: Ready</span>
                    <span className="size-1.5 bg-primary rounded-full animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between pt-4 gap-6">
                <div className="flex items-center gap-4 text-[10px] font-mono">
                  <div className="flex items-center gap-2 px-2 py-1 bg-accent-magenta/10 rounded border border-accent-magenta/20">
                    <Zap size={10} className="text-accent-magenta" />
                    <span className="text-accent-magenta/80 tracking-tighter uppercase font-bold text-[8px]">Secure Channel</span>
                  </div>
                  <span className="text-primary/20">|</span>
                  <div className="text-primary/60">Latency: 24ms</div>
                </div>
                <button type="submit" className="group relative flex min-w-[240px] items-center justify-center overflow-hidden rounded-lg bg-primary px-8 py-4 transition-all hover:scale-[1.02] active:scale-[0.98] border-2 border-primary hover:shadow-[0_8px_30px_rgba(37,192,244,0.4)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30">
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                  <span className="relative text-xs font-black tracking-[0.2em] text-background-dark uppercase font-display">Initiate Transmission</span>
                  <Send size={14} className="ml-3 text-background-dark relative transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </main>
        </div>

        {/* Terminal Footer Status Bar */}
        <footer className="bg-black/40 border-t border-primary/20 px-6 py-3 flex items-center justify-between text-[9px] font-mono tracking-wider">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-primary/40 uppercase">Location:</span>
              <span className="text-primary">Tokyo_Node // JPN</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary/40 uppercase">Encryption:</span>
              <span className="text-primary">AES-256_RSA</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary/60 uppercase">Ready</span>
            <span className="w-1.5 h-1.5 bg-primary rounded-sm animate-pulse" />
          </div>
        </footer>
      </motion.div>

      {/* Decorative Bottom UI Elements */}
      <div className="mt-12 flex items-center gap-20 opacity-30 grayscale hover:grayscale-0 transition-all lg:flex hidden">
        <div className="flex flex-col items-center">
          <Zap className="text-primary mb-2" size={32} />
          <span className="text-[9px] font-bold tracking-[0.3em] text-primary uppercase font-mono">Scanning</span>
        </div>
        <div className="flex flex-col items-center">
          <Info className="text-primary mb-2" size={32} />
          <span className="text-[9px] font-bold tracking-[0.3em] text-primary uppercase font-mono">Processing</span>
        </div>
        <div className="flex flex-col items-center">
          <Shield className="text-primary mb-2" size={32} />
          <span className="text-[9px] font-bold tracking-[0.3em] text-primary uppercase font-mono">Protected</span>
        </div>
      </div>

      <style jsx>{`
        .crt-grid {
          background-image: 
            linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
            linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 4px, 3px 100%;
        }
      `}</style>
    </section>
  );
}
