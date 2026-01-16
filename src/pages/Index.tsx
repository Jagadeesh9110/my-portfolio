import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import { SkillConstellation } from '@/components/SkillConstellation';
import { Tools } from '@/components/Tools';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import AIChatbot from '@/components/AIChatbot';
import TargetCursor from "@/components/TargetCursor";


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

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <SkillConstellation />
      </section>

      <Tools />

      <Projects />

      <section id="contact">
        <Contact />
      </section>

      <AIChatbot />
    </div>
  );
}

export default Index;