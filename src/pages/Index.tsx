import React, { Suspense, lazy } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TargetCursor from "@/components/TargetCursor";

// Lazy load components for performance
const Achievements = lazy(() => import('@/components/Achievements'));
const About = lazy(() => import('@/components/About'));
const Experience = lazy(() => import('@/components/Experience'));
// Handle named exports
const SkillConstellation = lazy(() => import('@/components/SkillConstellation').then(module => ({ default: module.SkillConstellation })));
const Tools = lazy(() => import('@/components/Tools').then(module => ({ default: module.Tools })));
const Projects = lazy(() => import('@/components/Projects'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));
const AIChatbot = lazy(() => import('@/components/AIChatbot'));

const LoadingFallback = () => <div className="min-h-[50vh] flex items-center justify-center text-neon-blue">Loading...</div>;

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-navy">
      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />

      <Navigation />

      <section id="hero" >
        <Hero />
      </section>

      <section id="achievements">
        <Suspense fallback={<div className="h-40" />}>
          <Achievements />
        </Suspense>
      </section>

      <section id="about">
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
      </section>

      <section id="experience">
        <Suspense fallback={<LoadingFallback />}>
          <Experience />
        </Suspense>
      </section>

      <section id="skills">
        <Suspense fallback={<LoadingFallback />}>
          <SkillConstellation />
        </Suspense>
      </section>

      <Suspense fallback={<LoadingFallback />}>
        <Tools />
      </Suspense>

      <section id="projects">
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
      </section>

      <section id="contact">
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </section>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <Suspense fallback={null}>
        <AIChatbot />
      </Suspense>
    </div>
  );
}

export default Index;