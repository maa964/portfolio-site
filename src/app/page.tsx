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
import { fetchRssArticles, type RssArticle } from '@/lib/rss';

const RSS_URL = 'https://note.com/maa964/rss';

export default async function Home() {
  let articles: RssArticle[] = [];
  try {
    articles = await fetchRssArticles(RSS_URL);
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
