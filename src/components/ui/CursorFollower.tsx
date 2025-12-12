'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorFollowerProps {
    className?: string;
}

export function CursorFollower({ className = '' }: CursorFollowerProps) {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        // Check if device supports hover (not mobile)
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(hover: none)').matches);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsHidden(false);
        };

        const handleMouseEnter = () => setIsHidden(false);
        const handleMouseLeave = () => setIsHidden(true);

        const handleElementHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer');
            setIsPointer(!!isClickable);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseover', handleElementHover);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseover', handleElementHover);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    if (isMobile) return null;

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className={`fixed pointer-events-none z-[9999] mix-blend-difference ${className}`}
                animate={{
                    x: position.x - 10,
                    y: position.y - 10,
                    scale: isPointer ? 1.5 : 1,
                    opacity: isHidden ? 0 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            >
                <div
                    className="w-5 h-5 rounded-full bg-white"
                    style={{
                        boxShadow: '0 0 20px rgba(255,255,255,0.5)',
                    }}
                />
            </motion.div>

            {/* Trailing cursor */}
            <motion.div
                className="fixed pointer-events-none z-[9998]"
                animate={{
                    x: position.x - 20,
                    y: position.y - 20,
                    scale: isPointer ? 0.5 : 1,
                    opacity: isHidden ? 0 : 0.3,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                }}
            >
                <div
                    className="w-10 h-10 rounded-full border-2 border-white/50"
                    style={{
                        background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
                    }}
                />
            </motion.div>
        </>
    );
}
