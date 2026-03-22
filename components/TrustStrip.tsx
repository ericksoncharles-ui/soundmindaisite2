import React from 'react';
import { Container } from './shared/Container';

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-navy-900 border-y border-navy-700 py-8 md:py-12">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold hidden sm:block" />
          <p className="text-center text-cream text-lg md:text-xl font-medium">
            Built for teams making
            <span className="text-gold mx-2 font-semibold">high-stakes decisions</span>
          </p>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold hidden sm:block" />
        </div>
      </Container>
    </section>
  );
};
