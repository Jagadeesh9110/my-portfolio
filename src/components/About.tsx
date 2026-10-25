import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';


const About = memo(() => {
  return (
    <section className="py-20 bg-dark-navy relative">
      <div className="max-w-6xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="font-mono text-neon-blue mr-4">02.</span>
            About Me
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass-effect p-8 hover-glow h-full">
              <h3 className="text-2xl font-bold text-neon-blue mb-6">
                Background
              </h3>
              <div className="space-y-4 text-light-slate leading-relaxed">
                <p>
                  I'm a B.Tech student in Data Science and Artificial Intelligence at{' '}
                  <span className="font-bold text-lightest-slate">IIIT Dharwad</span> (graduating in 2027), and a{' '}
                  <span className="text-neon-green font-semibold">Software Development Apprentice at Boeing</span>.
                </p>
                <p>
                  I enjoy building full-stack applications, backend services, and real-time systems. My technical interests include{' '}
                  <span className="text-neon-blue">Java backend development</span>, system design, databases, distributed systems, and reliable software.
                </p>
                <p>
                  I focus on correctness, scalability, and clean system design — aiming to build software that survives real-world usage.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="glass-effect p-8 hover-glow">
              <h3 className="text-2xl font-bold text-neon-blue mb-6">
                Education
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-lightest-slate">
                    Indian Institute of Information Technology Dharwad
                  </h4>
                  <p className="text-neon-blue font-medium mt-1">B.Tech in Data Science and Artificial Intelligence</p>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-slate text-sm">Expected Graduation: 2027</p>
                    <p className="text-neon-green font-bold text-sm">CGPA: 8.42</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-effect p-8 hover-glow">
              <h3 className="text-2xl font-bold text-neon-blue mb-6">
                Core Concepts
              </h3>
              <div className="space-y-3 text-light-slate">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-neon-green rounded-full mr-3 flex-shrink-0" />
                  Data Structures and Algorithms
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-neon-green rounded-full mr-3 flex-shrink-0" />
                  Object-Oriented Programming
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-neon-green rounded-full mr-3 flex-shrink-0" />
                  Database Management Systems
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-neon-green rounded-full mr-3 flex-shrink-0" />
                  Operating Systems
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-neon-green rounded-full mr-3 flex-shrink-0" />
                  Computer Networks
                </div>
              </div>
            </Card>
          </motion.div>
        </div>


      </div>
    </section>
  );
});

export default About;