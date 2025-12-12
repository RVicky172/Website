'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressProps {
    className?: string;
}

export function ScrollProgress({ className = '' }: ScrollProgressProps) {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            className={`fixed top-0 left-0 right-0 h-1 z-[100] origin-left ${className}`}
            style={{
                scaleX,
                background: 'linear-gradient(90deg, #3b82f6, #a855f7, #22d3ee)',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.3s ease',
            }}
        />
    );
}
