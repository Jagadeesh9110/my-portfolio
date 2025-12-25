import React from "react";
import { motion } from "framer-motion";

// ---- Skills list (flattened, no categories) ----
const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "WebSockets",
  "JWT",
  "OAuth 2.0",
];

export const SkillConstellation = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <div className="max-w-8xl mx-auto section-padding">
        {/* Section Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
          <span className="font-mono text-neon-blue mr-4">02.</span>
          Skills & Technologies
        </h3>

        {/* Skills Card */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 
                bg-lightest-navy px-6 py-10">

          <div className="skills-marquee">
            <div className="skills-track">
              {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, index) => (
                <span
                  key={index}
                  className="mx-4 whitespace-nowrap rounded-lg
                     bg-white/5 px-6 py-3 text-base md:text-lg
                     font-medium text-slate-200
                     border border-white/10
                     hover:bg-white/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

    </motion.section>
  );
};
