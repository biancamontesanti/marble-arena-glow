import React from 'react';
import Layout from '@/components/Layout';
import HeroCarousel from '@/components/HeroCarousel';
import LiveRaces from '@/components/LiveRaces';
import HighlightsSection from '@/components/HighlightsSection';

const Index = () => {
  return (
    <Layout>
      <HeroCarousel />
      <LiveRaces />
      <HighlightsSection />
    </Layout>
  );
};

export default Index;
