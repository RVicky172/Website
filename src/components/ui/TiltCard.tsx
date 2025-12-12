'use client';

import { useRef, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    tiltAmount?: number;
    glareOpacity?: number;
    scale?: number;
}

export function TiltCard({
    children,
    className = '',
    tiltAmount = 10,
    glareOpacity = 0.3,
    scale = 1.02,
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [tiltAmount, -tiltAmount]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-tiltAmount, tiltAmount]);

    const glareX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
    const glareY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const normalizedX = (e.clientX - centerX) / rect.width;
        const normalizedY = (e.clientY - centerY) / rect.height;

        x.set(normalizedX);
        y.set(normalizedY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                perspective: '1000px',
            }}
            whileHover={{ scale }}
            transition={{ duration: 0.2 }}
            className={`relative ${className}`}
        >
            {children}

            {/* Glare effect */}
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-xl overflow-hidden"
                style={{
                    background: useTransform(
                        [glareX, glareY],
                        ([latestX, latestY]) =>
                            `radial-gradient(circle at ${latestX} ${latestY}, rgba(255,255,255,${glareOpacity}), transparent 50%)`
                    ),
                    opacity: 0,
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
}
