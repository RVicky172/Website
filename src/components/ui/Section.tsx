'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export function Section({
  children,
  id,
  className = '',
  title,
  subtitle,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className={`w-full py-20 px-4 md:px-8 lg:px-16 ${className}`}
    >
      {(title || subtitle) && (
        <motion.div variants={itemVariants} className="mb-12 text-center">
          {title && (
            <h2 className="section-title font-bold text-gray-900 dark:text-white mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
      <motion.div variants={containerVariants}>{children}</motion.div>
    </motion.section>
  );
}


