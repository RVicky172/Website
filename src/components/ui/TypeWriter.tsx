'use client';

import { useState, useEffect, useCallback } from 'react';

interface TypeWriterProps {
    words: string[];
    className?: string;
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    loop?: boolean;
}

export function TypeWriter({
    words,
    className = '',
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000,
    loop = true,
}: TypeWriterProps) {
    const [displayText, setDisplayText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const tick = useCallback(() => {
        const currentWord = words[wordIndex];

        if (isPaused) return;

        if (isDeleting) {
            setDisplayText(currentWord.substring(0, displayText.length - 1));
            if (displayText.length === 0) {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        } else {
            setDisplayText(currentWord.substring(0, displayText.length + 1));
            if (displayText === currentWord) {
                if (loop || wordIndex < words.length - 1) {
                    setIsPaused(true);
                    setTimeout(() => {
                        setIsPaused(false);
                        setIsDeleting(true);
                    }, pauseDuration);
                }
            }
        }
    }, [displayText, isDeleting, isPaused, loop, pauseDuration, wordIndex, words]);

    useEffect(() => {
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        const timer = setTimeout(tick, speed);
        return () => clearTimeout(timer);
    }, [tick, isDeleting, deletingSpeed, typingSpeed]);

    return (
        <span className={className}>
            {displayText}
            <span className="inline-block w-[3px] h-[1em] bg-current ml-1 animate-pulse" />
        </span>
    );
}
