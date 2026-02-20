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
    <div className="grid lg:grid-cols-[55fr_45fr] gap-10 lg:gap-16 items-center w-full mt-20 md:mt-24">
      {/* LEFT COLUMN — Identity + CTAs */}
      <div className="order-2 lg:order-1 text-center lg:text-left">
        <motion.p
          variants={itemVariants}
          className="font-mono text-neon-blue text-sm md:text-base mb-4"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-lightest-slate mb-3 leading-tight"
        >
          Manyam Jagadeeswar Reddy
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl font-semibold text-neon-blue/80 mb-6"
        >
          Full-Stack Engineer building scalable real-time systems
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-slate max-w-xl mb-8 leading-relaxed"
        >
          I design and deploy production-grade systems with distributed architectures, JWT-secured real-time pipelines, and cloud-native deployments on AWS.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cursor-target inline-flex items-center bg-neon-blue text-dark-navy font-medium px-7 py-3 rounded-lg transition-all duration-300 hover:bg-neon-blue/90"
          >
            View Projects
          </motion.a>

          <motion.a
            href="/resume.pdf"
            download="Manyam_Jagadeeswar_Reddy_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-target inline-flex items-center bg-transparent border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-navy font-medium px-7 py-3 rounded-lg transition-all duration-300 group"
          >
            <FiDownload className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start space-x-4">
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
              <social.icon className="w-5 h-5" />
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* RIGHT COLUMN — Profile Image */}
      <motion.div
        variants={itemVariants}
        className="order-1 lg:order-2 flex justify-center"
      >
        <div className="relative">
          {/* Clean border accent */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-neon-blue/30 to-neon-green/10 blur-sm" />
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-light-navy">
            <Avatar className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl">
              <AvatarImage
                src="/profile.jpg"
                alt="Manyam Jagadeeswar Reddy"
                className="object-cover rounded-2xl"
              />
              <AvatarFallback className="bg-lightest-navy text-neon-blue text-4xl md:text-5xl font-bold rounded-2xl">
                MJR
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator — pinned to bottom-center of the section */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:col-span-2"
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
    </div>
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
        className="relative z-10 max-w-6xl mx-auto section-padding"
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