'use client';

import { motion } from 'framer-motion';
import { getTechIcon, skillColors } from '@/src/lib/techIcons';

interface SkillCardProps {
  skill: string;
  delay?: number;
  categoryIndex?: number;
  index?: number;
}

import { Spotlight } from './Spotlight';

export function SkillCard({ skill, delay = 0 }: SkillCardProps) {
  const IconComponent = getTechIcon(skill);
  const colorClass = skillColors[skill] || 'text-zinc-400';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
    >
      <Spotlight className="p-4 flex flex-col items-center justify-center gap-3 h-24 group cursor-default">
        <div className={`text-3xl ${colorClass} grayscale group-hover:grayscale-0 transition-all duration-300`}>
          <IconComponent />
        </div>
        <span className="text-zinc-500 group-hover:text-zinc-200 transition-colors font-medium text-xs tracking-wide">{skill}</span>
      </Spotlight>
    </motion.div>
  );
}
