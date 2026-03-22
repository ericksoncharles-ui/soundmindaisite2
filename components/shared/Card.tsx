import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative rounded-lg border border-navy-700/60 bg-navy-800 p-6 transition-all duration-300',
          hover && 'hover:border-gold/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-navy-950/60',
          hover && 'before:absolute before:inset-x-0 before:top-0 before:h-px before:w-0 before:bg-gold/60',
          hover && 'before:transition-all before:duration-300 hover:before:w-full before:rounded-t-lg',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
