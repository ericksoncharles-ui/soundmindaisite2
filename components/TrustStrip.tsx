import React from 'react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="border-y border-navy-700/40 bg-navy-800/50 py-7">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4">
          <div className="hidden sm:block h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
          <p className="text-center text-sm md:text-base font-medium tracking-wide text-muted">
            Built for teams where the cost of a wrong decision is{' '}
            <span className="text-cream font-semibold">measured in millions</span>
          </p>
          <div className="hidden sm:block h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
        </div>
      </div>
    </section>
  );
};
