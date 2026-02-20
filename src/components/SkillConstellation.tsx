import { motion, type Variants } from 'framer-motion';
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT Authentication',
      'OAuth 2.0',
      'Role-Based Access Control (RBAC)',
      'WebSockets (Socket.IO)',
    ],
  },
  {
    title: 'Databases',
    skills: [
      'MongoDB',
      'PostgreSQL',
      'Mongoose',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    skills: [
      'AWS EC2',
      'Vercel',
      'Render',
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export const SkillConstellation = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-dark-navy"
    >
      <div className="max-w-6xl mx-auto section-padding">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="font-mono text-neon-blue mr-4">04.</span>
            Skills & Technologies
          </h3>
          <p className="text-light-slate">
            Technologies I use to design, build, and ship production systems.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-effect rounded-xl p-6 hover-glow transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-neon-blue mb-4">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="whitespace-nowrap rounded-lg
                      bg-white/5 px-4 py-2 text-sm
                      font-medium text-slate-200
                      border border-white/10
                      hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
