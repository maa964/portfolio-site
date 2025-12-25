import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Philosophy from '@/components/Philosophy';
import AudioEngineering from '@/components/AudioEngineering';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="noise">
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <Skills />
        <Philosophy />
        <AudioEngineering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
