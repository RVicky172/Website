'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FullScreenSectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    title?: string;
    subtitle?: string;
    gradientFrom?: string;
    gradientTo?: string;
}

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

const slideInVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94] as const
        },
    },
};

const titleVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94] as const
        },
    },
};

export function FullScreenSection({
    children,
    id,
    className = '',
    title,
    subtitle,
}: FullScreenSectionProps) {
    return (
        <motion.section
            id={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className={`
        w-full min-h-screen
        flex flex-col items-center justify-center
        px-4 md:px-8 lg:px-16
        py-24
        relative overflow-hidden
        ${className}
      `}
        >
            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto">
                {(title || subtitle) && (
                    <motion.div
                        variants={titleVariants}
                        className="mb-16 text-center"
                    >
                        {title && (
                            <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 tracking-tight">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto text-balance">
                                {subtitle}
                            </p>
                        )}
                    </motion.div>
                )}
                <motion.div variants={slideInVariants}>
                    {children}
                </motion.div>
            </div>
        </motion.section>
    );
}
