'use client';

import React from 'react';
import { Button } from './shared/Button';
import { Container } from './shared/Container';

interface CTASectionProps {
  onContactClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onContactClick }) => {
  return (
    <section className="py-20 md:py-32 bg-gradient-navy-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
            AI Built for
            <span className="block text-gold mt-2">Decisions That Matter</span>
          </h2>

          <p className="text-xl text-cream mb-12 leading-relaxed">
            Ready to transform how your organization makes high-stakes decisions?
            Let&apos;s talk about what&apos;s possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={onContactClick}
              className="hover:scale-105"
            >
              Book a Strategy Call
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="hover:scale-105"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
