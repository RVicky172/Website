'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FullScreenSectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    title?: string;
    subtitle?: string;
    gradientTitle?: boolean;
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
    gradientTitle = true,
}: FullScreenSectionProps) {
    return (
        <motion.section
            id={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
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
            {/* Subtle background gradient orbs */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto">
                {(title || subtitle) && (
                    <motion.div
                        variants={titleVariants}
                        className="mb-16 text-center"
                    >
                        {title && (
                            <div className="relative inline-block">
                                {/* Decorative accent line */}
                                <motion.div
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                />
                                <h2 className={`
                                    text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4
                                    ${gradientTitle
                                        ? 'bg-gradient-to-r from-text-primary via-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient'
                                        : 'text-text-primary'
                                    }
                                `}>
                                    {title}
                                </h2>
                            </div>
                        )}
                        {subtitle && (
                            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto text-balance leading-relaxed">
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
