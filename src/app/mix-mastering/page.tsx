'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function MixMasteringPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-200">
            <Navigation />

            <main className="pt-24 pb-12 px-4 container mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                            Mix & Mastering Engineer
                        </h1>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Creating sonic depth and clarity for your music.
                            Specializing in balancing frequencies, enhancing dynamics, and delivering broadcast-ready audio.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
                                <h3 className="text-xl font-semibold text-purple-300 mb-2">Mixing</h3>
                                <p className="text-slate-400 text-sm">
                                    Balancing individual tracks to create a cohesive and powerful sound.
                                    EQ, Compression, Saturation, and Spatial processing.
                                </p>
                            </div>

                            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
                                <h3 className="text-xl font-semibold text-pink-300 mb-2">Mastering</h3>
                                <p className="text-slate-400 text-sm">
                                    The final polish. Ensuring consistent volume, tonal balance, and translation across all playback systems.
                                </p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all">
                                Request Quote
                            </button>
                        </div>
                    </div>

                    {/* Image/Visual - Using page-05 (Whisper/Audio) as theme or general studio vibe */}
                    <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-purple-500/20 group">
                        <Image
                            src="/images/page-05.png"
                            alt="Mix and Mastering Workstation"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                    </div>
                </div>

                {/* Equipment / Portfolio Placeholder */}
                <div className="mt-24">
                    <h2 className="text-2xl font-bold mb-8 text-center text-slate-300">Selected Works & Equipment</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-square bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700 hover:border-purple-500/50 transition-colors">
                                <span className="text-slate-600">Track {i}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
