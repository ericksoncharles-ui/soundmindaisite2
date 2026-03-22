import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-300 cursor-pointer whitespace-nowrap';

    const variants = {
      primary:
        'bg-gold text-navy-900 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-px active:translate-y-0',
      secondary:
        'border border-gold/60 text-gold hover:border-gold hover:bg-gold/8 hover:-translate-y-px active:translate-y-0',
      ghost:
        'text-cream hover:text-gold transition-colors',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-2.5 text-sm',
      lg: 'px-8 py-3.5 text-base',
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
