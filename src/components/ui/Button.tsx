'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon,
  iconPosition = 'right',
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-xl
    transition-all duration-200 ease-out
    transform hover:scale-[1.02] active:scale-[0.95]
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-zinc-950
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    whitespace-nowrap
    select-none
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600
      text-white font-semibold
      shadow-lg shadow-blue-500/25
      hover:shadow-xl hover:shadow-purple-500/30
      hover:from-blue-600 hover:via-purple-600 hover:to-blue-700
      border border-blue-400/20
      backdrop-blur-sm
    `,
    secondary: `
      bg-gradient-to-br from-bg-secondary to-bg-tertiary
      text-text-primary
      border border-border-subtle
      hover:border-blue-500/40
      hover:shadow-lg hover:shadow-blue-500/10
      backdrop-blur-sm
    `,
    outline: `
      bg-transparent
      border-2 border-border-subtle
      text-text-secondary
      hover:border-blue-500/50
      hover:text-text-primary
      hover:bg-blue-500/5
      hover:shadow-lg hover:shadow-blue-500/10
      backdrop-blur-sm
    `,
    ghost: `
      bg-transparent
      text-text-secondary
      hover:text-text-primary
      hover:bg-white/5
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm min-h-[36px]',
    md: 'px-6 py-3 text-base min-h-[44px]',
    lg: 'px-8 py-4 text-lg min-h-[52px]',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      {children && <span className="flex-shrink-0">{children}</span>}
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
}
