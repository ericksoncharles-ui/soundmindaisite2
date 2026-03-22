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
          'bg-navy-800 border border-navy-700 rounded-lg p-6 transition-all duration-300',
          hover && 'hover:border-gold hover:shadow-lg hover:shadow-gold/10',
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
