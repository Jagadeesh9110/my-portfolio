import { memo } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FiExternalLink } from 'react-icons/fi';

const techStack = [
    'Next.js 15',
    'MongoDB',
    'Socket.IO',
    'AWS EC2',
    'Upstox API',
    'JWT Auth',
];

const highlights = [
    'Split-process architecture — Next.js on Vercel + standalone Socket.IO on EC2, JWT-secured WebSocket handshake with RBAC',
    'Cron-driven ingestion pipeline for NIFTY 500 via Upstox API with batched requests and MongoDB bulk upserts',
    'Dual-write MongoDB strategy — TTL-indexed intraday snapshots + persistent closing-window fallback',
    'Dynamic SEO for 500+ stock pages — generateMetadata(), DB-driven sitemap, ISR (3600s)',
    '3-step admin MFA (password → SMS → email OTP) with DB-backed rate limiting',
];

const Experience = memo(() => {
    return (
        <section className="py-28 bg-dark-navy relative overflow-hidden">
            {/* Very subtle background wash — no glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-blue/[0.02] rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto section-padding relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="font-mono text-neon-blue mr-4">03.</span>
                        Experience
                    </h2>
                    <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full" />
                </motion.div>

                {/* Two-Column Layout — image-dominant */}
                <div className="grid lg:grid-cols-[3fr_1.6fr] gap-8 lg:gap-10 items-start">
                    {/* Left Column — Screenshot (visually dominant) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:sticky lg:top-24"
                    >
                        {/* Subtle border — reduced glow */}
                        <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-neon-blue/25 via-transparent to-neon-blue/5">
                            <div className="rounded-xl overflow-hidden bg-light-navy">
                                <img
                                    src="/future-stocks.png"
                                    alt="FutureStocks — Real-Time Market Intelligence Platform"
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column — Role Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-5"
                    >
                        {/* Title — larger product name, subtler subtitle */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-lightest-slate mb-1">
                                FutureStocks
                            </h3>
                            <p className="text-base text-slate/70 mb-3">
                                Market Intelligence Platform
                            </p>
                            <div className="space-y-0.5">
                                <p className="text-sm text-light-slate font-medium">Freelance Full-Stack Developer</p>
                                <p className="text-sm text-slate">Jan 2026 – Present</p>
                            </div>
                        </div>

                        {/* Positioning Line + Architecture Context */}
                        <div className="border-l-2 border-neon-blue/30 pl-4 space-y-3">
                            <p className="text-light-slate leading-relaxed">
                                A production market intelligence platform serving NIFTY 500 real-time stock data to end users.
                                Architected as a <span className="text-neon-green">split-process system</span> — Next.js on Vercel handles HTTP
                                and server actions, while a standalone Socket.IO server on AWS EC2 handles persistent WebSocket
                                connections. The two share a JWT signing secret but have{' '}
                                <span className="text-neon-green">zero code coupling</span>.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-white/5" />

                        {/* Engineering Highlights — short, scannable */}
                        <div className="space-y-2.5">
                            {highlights.map((item, i) => (
                                <div key={i} className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-3 mt-[7px] flex-shrink-0" />
                                    <p className="text-light-slate text-sm leading-snug">{item}</p>
                                </div>
                            ))}
                        </div>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech) => (
                                <Badge
                                    key={tech}
                                    variant="secondary"
                                    className="text-xs bg-lightest-navy/50 text-neon-blue border border-neon-blue/20 font-mono"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        {/* CTA */}
                        <div>
                            <Button
                                onClick={() => window.open('https://www.thefuturestocks.com', '_blank')}
                                className="bg-neon-blue hover:bg-neon-blue/90 text-dark-navy font-semibold px-6 cursor-target"
                            >
                                <FiExternalLink className="w-4 h-4 mr-2" />
                                View Live
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
});

export default Experience;
