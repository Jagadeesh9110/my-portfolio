import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorFollower = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [cursorText, setCursorText] = useState('');

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const x = useSpring(mouseX, { stiffness: 500, damping: 40 });
    const y = useSpring(mouseY, { stiffness: 500, damping: 40 });

    // Mouse Tracking
    useEffect(() => {
        const move = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, [mouseX, mouseY]);

    // Global API for project cards
    useEffect(() => {
        (window as any).__CURSOR__ = {
            show: (text: string) => {
                setIsHovering(true);
                setCursorText(text);
            },
            hide: () => {
                setIsHovering(false);
                setCursorText('');
            },
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none"
            style={{
                x,
                y,
                translateX: "-50%",
                translateY: "-50%",
            }}
        >
            {/* Default cursor - Circle with centered dot */}
            <motion.div
                className="relative flex items-center justify-center"
                animate={{
                    scale: isHovering ? 0 : 1,
                    opacity: isHovering ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {/* Outer circle */}
                <div className="w-8 h-8 rounded-full border-2 border-neon-blue/60 flex items-center justify-center">
                    {/* Inner dot */}
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                </div>
            </motion.div>

            {/* Hover cursor - Larger circle with + */}
            <motion.div
                animate={{
                    scale: isHovering ? 1 : 0,
                    opacity: isHovering ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <div className="w-20 h-20 rounded-full border-2 border-neon-blue/70 bg-neon-blue/5 flex items-center justify-center">
                    <span className="text-neon-blue text-2xl font-light leading-none">+</span>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default CursorFollower;