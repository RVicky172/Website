'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UIIcons } from '@/src/lib/techIcons';

interface Testimonial {
    name: string;
    role: string;
    text: string;
}

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
    autoPlayInterval?: number;
    className?: string;
}

export function TestimonialCarousel({
    testimonials,
    autoPlayInterval = 5000,
    className = '',
}: TestimonialCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState(0);

    const next = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const prev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, [testimonials.length]);

    const goTo = useCallback((index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    }, [currentIndex]);

    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(next, autoPlayInterval);
        return () => clearInterval(timer);
    }, [isPaused, autoPlayInterval, next]);

    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (dir: number) => ({
            x: dir < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.9,
        }),
    };

    return (
        <div
            className={`relative w-full max-w-4xl mx-auto ${className}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Main Carousel Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-bg-secondary/90 to-bg-tertiary/50 border border-border-subtle shadow-2xl min-h-[300px] backdrop-blur-sm">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: 'spring', stiffness: 200, damping: 25 },
                            opacity: { duration: 0.3 },
                            scale: { duration: 0.3 },
                        }}
                        className="p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8"
                    >
                        {/* Quote decoration */}
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center border border-blue-500/20">
                                <UIIcons.Quote size={32} className="text-blue-400 fill-blue-400/20" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="text-center md:text-left space-y-6 flex-1">
                            <div className="flex justify-center md:justify-start gap-1 text-yellow-500 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <UIIcons.Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-xl md:text-2xl font-medium text-text-primary leading-relaxed italic">
                                "{testimonials[currentIndex].text}"
                            </p>

                            <div className="pt-6 border-t border-border-subtle/50">
                                <h4 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    {testimonials[currentIndex].name}
                                </h4>
                                <p className="text-text-secondary text-sm font-medium mt-1">
                                    {testimonials[currentIndex].role}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                    onClick={prev}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-bg-primary/50 border border-border-subtle hover:border-blue-500/30 text-text-secondary hover:text-blue-400 transition-all hover:scale-105 backdrop-blur-sm shadow-lg hover:shadow-blue-500/10 z-10"
                    aria-label="Previous testimonial"
                >
                    <UIIcons.ChevronLeft size={24} />
                </button>
                <button
                    onClick={next}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-bg-primary/50 border border-border-subtle hover:border-blue-500/30 text-text-secondary hover:text-blue-400 transition-all hover:scale-105 backdrop-blur-sm shadow-lg hover:shadow-blue-500/10 z-10"
                    aria-label="Next testimonial"
                >
                    <UIIcons.ChevronRight size={24} />
                </button>
            </div>

            {/* Navigation Dots relative to container */}
            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goTo(index)}
                        className={`transition-all duration-300 rounded-full ${index === currentIndex
                            ? 'w-8 h-2 bg-gradient-to-r from-blue-500 to-purple-500'
                            : 'w-2 h-2 bg-border-subtle hover:bg-blue-500/30'
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
