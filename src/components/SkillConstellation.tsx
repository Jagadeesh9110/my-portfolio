import { motion, type Variants } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
  fullWidth?: boolean;
}

const skillCategories: SkillCategory[] = [
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
    title: 'Java Backend',
    skills: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'JDBC',
      'REST APIs',
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      'Node.js',
      'Express.js',
      'JWT',
      'OAuth 2.0',
      'RBAC',
      'WebSockets',
    ],
  },
  {
    title: 'Databases',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Prisma',
      'Mongoose',
      'SQL',
    ],
  },
  {
    title: 'Cloud, Tools & Core CS',
    skills: [
      'AWS EC2',
      'Docker',
      'Git',
      'GitHub',
      'Linux',
      'Data Structures & Algorithms',
      'OOP',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
    ],
    fullWidth: true,
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
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="font-mono text-neon-blue mr-3">4.</span>
            Skills & Technologies
          </h3>
          <p className="text-light-slate text-base md:text-lg">
            Technologies I use to build full-stack applications and backend systems.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`glass-effect rounded-2xl p-6 md:p-8 hover-glow transition-all duration-300 border border-white/10 ${
                category.fullWidth ? 'md:col-span-2' : ''
              }`}
            >
              <h4 className="text-xl font-bold text-neon-blue mb-5">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="whitespace-nowrap rounded-xl
                      bg-white/5 px-4 py-2 text-sm
                      font-medium text-slate-200
                      border border-white/10
                      hover:bg-white/10 hover:border-neon-blue/30 transition-all duration-200"
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
