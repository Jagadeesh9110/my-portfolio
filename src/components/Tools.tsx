import { motion, type Variants } from 'framer-motion';
import { Card } from '@/components/ui/card';

import {
    SiGit,
    SiGithub,
    SiVsco,
    SiPostman,
} from 'react-icons/si';

const tools = [
    { name: 'VS Code', icon: SiVsco, color: '#007ACC' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#E8E8E8' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
];

const staggerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const toolItemVariants: Variants = {
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

export const Tools = () => {
    return (
        <motion.div className="max-w-7xl mx-auto section-padding">
            {/* --- TOOLS SECTION --- */}
            <div className="mt-24">
                {/* Tools Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h3 className="text-3xl font-bold text-center mb-4">Tools I Use</h3>
                    <div className="w-20 h-1 bg-neon-blue mx-auto rounded-full" />
                </motion.div>

                {/* Staggered Tools Grid */}
                <motion.div
                    variants={staggerContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
                >
                    {tools.map((tool) => (
                        <motion.div key={tool.name} variants={toolItemVariants}>
                            <Card className="glass-effect hover-glow p-4 flex flex-col items-center justify-center transition-all duration-300 group">
                                <tool.icon
                                    className="w-8 h-8 mb-2 text-light-slate group-hover:scale-110 transition-transform duration-300"
                                    style={{ color: tool.color }}
                                />
                                <p className="text-xs font-medium text-light-slate group-hover:text-lightest-slate transition-colors">
                                    {tool.name}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            {/* --- END: TOOLS SECTION --- */}
        </motion.div>
    );
};
