'use client';

import { motion } from 'framer-motion';
import { Spotlight } from './Spotlight';

interface TechItem {
    name: string;
    icon: string;
    category: 'Frontend' | 'Backend' | 'DevOps' | 'Tools';
    description: string;
}

const techStack: TechItem[] = [
    // Frontend
    { name: 'React', icon: '⚛️', category: 'Frontend', description: 'UI Library' },
    { name: 'TypeScript', icon: '📘', category: 'Frontend', description: 'Type Safety' },
    { name: 'Next.js', icon: '▲', category: 'Frontend', description: 'React Framework' },
    { name: 'Tailwind CSS', icon: '🎨', category: 'Frontend', description: 'Utility-first CSS' },
    { name: 'Framer Motion', icon: '🎬', category: 'Frontend', description: 'Animations' },

    // Backend
    { name: 'Node.js', icon: '🟢', category: 'Backend', description: 'Runtime Environment' },
    { name: 'GraphQL', icon: '◈', category: 'Backend', description: 'Query Language' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Backend', description: 'Relational DB' },
    { name: 'Redis', icon: '🔴', category: 'Backend', description: 'In-memory Store' },

    // DevOps
    { name: 'Docker', icon: '🐳', category: 'DevOps', description: 'Containerization' },
    { name: 'Kubernetes', icon: '☸️', category: 'DevOps', description: 'Orchestration' },
    { name: 'AWS', icon: '☁️', category: 'DevOps', description: 'Cloud Services' },
];

export function TechEcosystem() {
    return (
        <div className="w-full py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <Spotlight className="h-full">
                                <div className="p-6 flex flex-col items-center text-center gap-3 h-full justify-center">
                                    <span className="text-4xl filter drop-shadow-lg">{tech.icon}</span>
                                    <div>
                                        <h3 className="font-semibold text-text-primary text-sm lg:text-base">{tech.name}</h3>
                                        <p className="text-xs text-text-secondary mt-1">{tech.description}</p>
                                    </div>
                                    <span className="text-[10px] uppercase tracking-wider text-text-secondary/60 bg-bg-tertiary/50 px-2 py-1 rounded-full border border-border-subtle">
                                        {tech.category}
                                    </span>
                                </div>
                            </Spotlight>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
