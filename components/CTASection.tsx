'use client';

import React from 'react';

interface CTASectionProps {
  onContactClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onContactClick }) => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-cta-gradient">

      {/* Decorative ambient elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gold/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-gold/8" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-700/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <span className="section-eyebrow">Get Started</span>

        <h2 className="font-serif font-bold text-white mt-4 mb-6 leading-[1.1]"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}>
          AI Built for{' '}
          <span className="gold-gradient-text">Decisions That Matter</span>
        </h2>

        <p className="section-subtext mx-auto mb-12" style={{ maxWidth: '34rem' }}>
          If your team is making decisions that can&apos;t afford to be wrong,
          let&apos;s talk about what&apos;s possible.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onContactClick}
            className="inline-flex items-center justify-center px-10 py-4 rounded-md bg-gold text-navy-900 font-semibold text-base hover:bg-gold-light hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-px transition-all duration-300"
          >
            Book a Strategy Call
          </button>
          <button
            onClick={onContactClick}
            className="inline-flex items-center justify-center px-10 py-4 rounded-md border border-gold/40 text-gold font-semibold text-base hover:border-gold hover:bg-gold/8 hover:-translate-y-px transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};
