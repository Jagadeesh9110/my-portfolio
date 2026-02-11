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
              <div className="space-y-4 text-light-slate">
                <p>
                  I'm a <span className="font-bold text-lightest-slate">Full-Stack Developer</span> focused on building
                  <span className="text-neon-green"> production-grade systems</span> with clean architecture,
                  reliable backends, and responsive interfaces.
                </p>
                <p>
                  I've built platforms with{' '}
                  <span className="text-neon-green">JWT/OAuth authentication</span>,{' '}
                  <span className="text-neon-green">WebSocket-driven dashboards</span>, and{' '}
                  <span className="text-neon-green">distributed protocol simulators</span> — always
                  prioritizing correctness, scalability, and clean separation of concerns.
                </p>
                <p>
                  Currently seeking <span className="font-bold text-lightest-slate">SDE / Full-Stack internship</span> roles
                  where I can contribute to real engineering teams and production systems.
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
                  <p className="text-neon-blue font-medium">B.Tech — Data Science and Artificial Intelligence</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-slate text-sm">Expected Graduation: 2027</p>
                    <p className="text-neon-green font-bold text-sm">GPA: 8.21</p>
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
                  Data Structures & Algorithms (DSA)
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-neon-green rounded-full mr-3 flex-shrink-0" />
                  Object-Oriented Programming (OOP)
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-neon-green rounded-full mr-3 flex-shrink-0" />
                  Database Management Systems (DBMS)
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-neon-green rounded-full mr-3 flex-shrink-0" />
                  Operating Systems (OS) & Computer Networks
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