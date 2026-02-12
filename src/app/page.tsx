import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import ProductionTools from '@/components/ProductionTools';
import TechnicalArtifacts from '@/components/TechnicalArtifacts';
import AudioEngineering from '@/components/AudioEngineering';
import LearningPlatform from '@/components/LearningPlatform';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getRssArticles, type RssArticle } from '@/lib/rss';

export default async function Home() {
  let articles: RssArticle[] = [];
  try {
    articles = await getRssArticles();
  } catch (error) {
    console.error('Failed to fetch RSS:', error);
  }

  return (
    <div className="bg-background-dark min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <ProductionTools />
        <TechnicalArtifacts articles={articles} />
        <AudioEngineering />
        <LearningPlatform />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
