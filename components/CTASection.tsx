'use client';

import React from 'react';

interface CTASectionProps { onContactClick: () => void; }

export const CTASection: React.FC<CTASectionProps> = ({ onContactClick }) => {
  return (
    <section className="bg-ink py-28 md:py-40 relative overflow-hidden">

      {/* Subtle top border glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(184,150,90,0.06) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <span className="label">Ready to Begin</span>

        <h2 className="display mt-5 mb-7"
            style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4rem)' }}>
          AI Built for Decisions<br />That Can&apos;t Afford to Be Wrong
        </h2>

        <p className="body-lg mx-auto mb-12" style={{ maxWidth: '32rem' }}>
          Let&apos;s talk about your highest-stakes workflows and what it would mean
          to get them right, every time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={onContactClick}
            className="px-10 py-4 rounded bg-gold text-ink font-semibold text-sm
                       hover:bg-gold-light transition-all duration-200 shadow-xl shadow-gold/10">
            Book a Strategy Call
          </button>
          <button onClick={onContactClick}
            className="px-10 py-4 rounded border border-navy-600 text-slate font-semibold text-sm
                       hover:border-navy-500 hover:text-white transition-all duration-200">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};
