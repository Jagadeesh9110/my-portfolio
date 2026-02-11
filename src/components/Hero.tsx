import React, { useEffect, useState, memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

//  All constants moved outside the component to optmize the performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};



const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/Jagadeesh9110', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jagadeeswar-reddy-manyam', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:manyamjagadeeswar7989@gmail.com', label: 'Email' },
];

//  Created a new memoized component for the static content
const MemoizedHeroContent = memo(() => {
  return (
    <>
      {/* Profile Photo */}
      <motion.div variants={itemVariants} className="mb-8 mt-20 md:mt-24 flex justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-green p-1 animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-dark-navy"></div>
          </div>
          <Avatar className="relative w-32 h-32 md:w-40 md:h-40 border-4 border-transparent hover-glow transition-all duration-300">
            <AvatarImage
              src="/profile.jpg"
              alt="Manyam Jagadeeswar Reddy"
              className="object-cover"
            />
            <AvatarFallback className="bg-lightest-navy text-neon-blue text-2xl md:text-3xl font-bold">
              MJR
            </AvatarFallback>
          </Avatar>
          {/* Decorative ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-neon-blue/30"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-6">
        <span className="font-mono text-neon-blue text-sm md:text-base">
          Full-Stack Engineer | Scalable Web Systems
        </span>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-lightest-slate mb-4"
      >
        Manyam Jagadeeswar Reddy
      </motion.h1>

      <motion.h2
        variants={itemVariants}
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate mb-10"
      >
        I design and scale production-ready full-stack systems with responsive interfaces, real-time communication, secure backend architecture, and performance-driven engineering.
      </motion.h2>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="cursor-target inline-flex items-center bg-neon-blue text-dark-navy font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:bg-neon-blue/90 group"
        >
          View Projects
        </motion.a>

        <motion.a
          href="/resume.pdf"
          download="Manyam_Jagadeeswar_Reddy_Resume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-target inline-flex items-center bg-transparent border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-navy font-medium px-8 py-4 rounded-lg transition-all duration-300 group"
        >
          <FiDownload className="w-5 h-5 mr-2 group-hover:animate-bounce" />
          Download Resume
        </motion.a>

        <div className="flex items-center space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="cursor-target p-3 text-light-slate hover:text-neon-blue hover:-translate-y-1 transition-all duration-300 hover-glow rounded-lg glass-effect"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <social.icon className="w-6 h-6" />
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-light-slate rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-light-slate rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </>
  );
});

//  The main Hero component now only handles state and minimal JSX
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
  }, []); // Memoized handler

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-navy via-light-navy to-dark-navy animate-gradient-shift opacity-90" />

      {/* Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border border-neon-blue/30 rotate-45"
        animate={{
          y: [0, -20, 0],
          rotate: [45, 75, 45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-neon-green/10 rounded-full"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      {/* Main Content (this div moves) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto section-padding text-center"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        {/* 4. Render the memoized content, which will not re-render on mouse move */}
        <MemoizedHeroContent />
      </motion.div>
    </section>
  );
};

export default Hero;