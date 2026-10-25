import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { FiCode, FiTarget, FiExternalLink } from 'react-icons/fi';
import { Trophy, Award } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
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

const achievements = [
    {
        icon: Trophy,
        title: 'LeetCode Rating',
        value: '1519',
        label: 'Max Contest Rating',
        color: 'text-neon-green',
        href: 'https://leetcode.com/u/Jagadeeswar_Manyam/',
    },
    {
        icon: FiCode,
        title: 'Problems Solved',
        value: '500+',
        label: 'DSA Proficiency',
        color: 'text-neon-blue',
        href: 'https://leetcode.com/u/Jagadeeswar_Manyam/',
    },
    {
        icon: FiTarget,
        title: 'Active Contests',
        value: '40+',
        label: 'LeetCode & CodeChef',
        color: 'text-neon-green',
        href: 'https://leetcode.com/u/Jagadeeswar_Manyam/',
    },
    {
        icon: Award,
        title: '200 Days Badge',
        value: '2025',
        label: 'LeetCode Consistency',
        color: 'text-neon-blue',
        href: 'https://leetcode.com/u/Jagadeeswar_Manyam/',
    },
];

const Achievements = () => {
    return (
        <section className="relative py-16 md:py-24 bg-dark-navy overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-dark-navy via-light-navy to-dark-navy opacity-50" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative z-10 max-w-5xl mx-auto section-padding text-center"
            >
                <motion.div variants={itemVariants} className="mb-10">
                    <h3 className="text-xl md:text-2xl font-bold text-neon-blue mb-2 font-mono">
                        Competitive Programming & DSA
                    </h3>
                    <a
                        href="https://leetcode.com/u/Jagadeeswar_Manyam/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs md:text-sm text-slate hover:text-neon-blue transition-colors gap-1.5 cursor-target"
                    >
                        Verify on LeetCode <FiExternalLink className="w-3.5 h-3.5" />
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.title}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <a
                                href={achievement.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full cursor-target"
                            >
                                <Card className="glass-effect p-6 hover-glow group transition-all duration-300 h-full flex flex-col justify-between">
                                    <div className="flex flex-col items-center text-center">
                                        <achievement.icon
                                            className={`w-8 h-8 mb-3 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}
                                        />
                                        <div
                                            className={`text-2xl md:text-3xl font-bold ${achievement.color} mb-2`}
                                        >
                                            {achievement.value}
                                        </div>
                                        <div className="text-lightest-slate font-semibold mb-1 text-sm md:text-base">
                                            {achievement.title}
                                        </div>
                                        <div className="text-slate text-xs md:text-sm">
                                            {achievement.label}
                                        </div>
                                    </div>
                                </Card>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Achievements;
