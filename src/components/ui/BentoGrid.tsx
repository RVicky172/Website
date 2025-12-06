'use client';

import { ReactNode } from 'react';
import { Spotlight } from './Spotlight';

export function BentoGrid({ children, className = '' }: { children: ReactNode; className?: string }) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ${className}`}>
            {children}
        </div>
    );
}

export function BentoItem({
    children,
    className = '',
    colSpan = 1,
    rowSpan = 1,
}: {
    children: ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3;
    rowSpan?: 1 | 2;
}) {
    const colSpanClass = {
        1: 'md:col-span-1',
        2: 'md:col-span-2',
        3: 'md:col-span-3',
    }[colSpan];

    const rowSpanClass = {
        1: 'md:row-span-1',
        2: 'md:row-span-2',
    }[rowSpan];

    return (
        <Spotlight className={`${colSpanClass} ${rowSpanClass} ${className}`}>
            {children}
        </Spotlight>
    );
}
