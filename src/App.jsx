import React, { Suspense, lazy } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import BlueprintBackground from './components/BlueprintBackground';

// Lazy load non-critical sections for performance
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const SystemArchitecture = lazy(() => import('./components/SystemArchitecture'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Certifications = lazy(() => import('./components/Certifications'));
const FrameScrollAnimation = lazy(() => import('./components/FrameScrollAnimation'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <>
      <BlueprintBackground />
      <Navbar />
      <Hero />
      
      <Suspense fallback={<div className="h-screen bg-black" />}>
        {/* Welcome to Portfolio Section */}
        <FrameScrollAnimation frameCount={240} />
        <About />
        <Skills />
        <SystemArchitecture />
        <Portfolio />
        <Certifications />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
