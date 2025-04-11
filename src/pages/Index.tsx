
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Platforms from '../components/Platforms';
import CodeExamples from '../components/CodeExamples';
import BleuScoreSection from '../components/BleuScoreSection';
import Installation from '../components/Installation';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Platforms />
        <CodeExamples />
        <BleuScoreSection />
        <Installation />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
