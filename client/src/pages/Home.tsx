import ParticleBackground from '@/components/ParticleBackground';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CommunityReviews from '@/components/CommunityReviews';
import Roadmap from '@/components/Roadmap';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Hero2 from '@/components/Hero2';


export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Hero />
      <Features />
      <CommunityReviews />
      <Roadmap />
      <Hero2 />
      <FAQ />
      <Footer />
    </main>
  );
}