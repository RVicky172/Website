'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export const GlowOrbs = () => {
    const { scrollYProgress } = useScroll();

    // Parallax transforms
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <motion.div
                style={{ y: y1 }}
                animate={{
                    x: [0, 100, -50, 0],
                    rotate: [0, 90, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"
            />
            <motion.div
                style={{ y: y2 }}
                animate={{
                    x: [0, -150, 100, 0],
                    rotate: [0, -90, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[150px]"
            />
            <motion.div
                style={{ y: y3 }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/5 rounded-full blur-[180px]"
            />
        </div>
    );
};
