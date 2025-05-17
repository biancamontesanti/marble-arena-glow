
import React from 'react';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import LiveRaces from '@/components/LiveRaces';
import HighlightsSection from '@/components/HighlightsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroCarousel />
        <LiveRaces />
        <HighlightsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
