'use client';

import { motion } from 'framer-motion';
import { getTechIcon, skillColors } from '@/src/lib/techIcons';

interface SkillCardProps {
  skill: string;
  delay?: number;
  categoryIndex?: number;
  index?: number;
}

export function SkillCard({ skill, delay = 0 }: SkillCardProps) {
  const IconComponent = getTechIcon(skill);
  const colorClass = skillColors[skill] || 'text-gray-400';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(59, 130, 246, 0.2)' }}
      className="glass-light p-3 rounded-xl border border-opacity-30 hover:border-blue-400 dark:hover:border-blue-500 transition-all cursor-pointer flex flex-col items-center justify-center text-center min-h-20 gap-1.5 group"
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: 8 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className={`text-2xl ${colorClass} group-hover:drop-shadow-lg transition-all`}
      >
        <IconComponent />
      </motion.div>
      <span className="text-gray-700 dark:text-gray-200 font-semibold text-xs line-clamp-2">{skill}</span>
    </motion.div>
  );
}
