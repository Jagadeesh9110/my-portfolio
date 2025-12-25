import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';


// global cursor follower , Appears only when activated by hover targets (projects).
const CursorFollower = () => {
    const [active, setActive] = useState(false);

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

    // Global API (used by project cards)
    useEffect(() => {
        (window as any).__CURSOR__ = {
            enter: () => setActive(true),
            leave: () => setActive(false),
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
            {/* Small dot (always visible) */}
            <motion.div
                className="absolute w-2 h-2 rounded-full bg-neon-blue"
                animate={{ scale: active ? 0 : 1 }}
            />

            {/* Hover ring */}
            <motion.div
                animate={{
                    scale: active ? 1 : 0,
                    opacity: active ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="
          w-10 h-10
          rounded-full
          border border-neon-blue/70
          flex items-center justify-center
        "
            >
                <span className="text-neon-blue text-lg leading-none">+</span>
            </motion.div>
        </motion.div>
    );
};

export default CursorFollower;