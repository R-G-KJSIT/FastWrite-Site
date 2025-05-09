import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Platforms from '../components/Platforms';
import CodeExamples from '../components/CodeExamples';
import BleuScoreSection from '../components/BleuScoreSection';
import Installation from '../components/Installation';
import Footer from '../components/Footer';
import Confetti from 'react-confetti';

const Index = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  useEffect(() => {
    // Show confetti and message on initial load
    setIsConfettiActive(true);

    // Hide confetti after 5 seconds
    setTimeout(() => {
      setIsConfettiActive(false);
    }, 5000);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {isConfettiActive && (
        <>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            colors={['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548']}
          />
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
            <div className="bg-white text-black p-4 rounded-md shadow-lg text-xl font-bold">
              🎉 10K Global Downloads! 🎉
            </div>
          </div>
        </>
      )}
      <main>
        <div className="text-center">
          <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text">
            10K Downloads!
          </span>
        </div>
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
