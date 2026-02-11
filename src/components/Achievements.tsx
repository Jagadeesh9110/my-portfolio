import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { FiCode, FiTarget } from 'react-icons/fi';
import { Trophy } from 'lucide-react';

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

const achievements = [
    {
        icon: Trophy,
        title: 'LeetCode Rating',
        value: '1519',
        label: 'Max Contest Rating',
        color: 'text-neon-green',
    },
    {
        icon: FiCode,
        title: 'Problems Solved',
        value: '450+',
        label: 'DSA Proficiency',
        color: 'text-neon-blue',
    },
    {
        icon: FiTarget,
        title: 'Active Contests',
        value: '40+',
        label: 'LeetCode & CodeChef',
        color: 'text-neon-green',
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
                className="relative z-10 max-w-4xl mx-auto section-padding text-center"
            >
                <motion.h3
                    variants={itemVariants}
                    className="text-xl md:text-2xl font-bold text-neon-blue mb-8 font-mono"
                >
                    Competitive Programming & DSA
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.title}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <Card className="glass-effect p-6 hover-glow group transition-all duration-300">
                                <div className="flex flex-col items-center text-center">
                                    <achievement.icon
                                        className={`w-8 h-8 mb-3 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}
                                    />
                                    <div
                                        className={`text-2xl md:text-3xl font-bold ${achievement.color} mb-2`}
                                    >
                                        {achievement.value}
                                    </div>
                                    <div className="text-lightest-slate font-semibold mb-1">
                                        {achievement.title}
                                    </div>
                                    <div className="text-slate text-sm">
                                        {achievement.label}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Achievements;
