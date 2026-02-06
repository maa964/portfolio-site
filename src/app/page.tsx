import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import ProductionTools from '@/components/ProductionTools';
import TechnicalArtifacts from '@/components/TechnicalArtifacts';
import AudioEngineering from '@/components/AudioEngineering';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-background-dark min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <ProductionTools />
        <TechnicalArtifacts />
        <AudioEngineering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
