'use client';

import React from 'react';

interface HeroProps { onContactClick: () => void; }

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-hero">

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-overlay opacity-100 pointer-events-none" />

      {/* Radial vignette over grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, #0A1628 100%)' }} />

      {/* Top-center light source */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gold/20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-48 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(184,150,90,0.07) 0%, transparent 70%)' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-10 pt-32 pb-28 text-center">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 mb-10">
          <div className="h-px w-8 bg-gold/50" />
          <span className="label">Decision Intelligence</span>
          <div className="h-px w-8 bg-gold/50" />
        </div>

        {/* Headline */}
        <h1 className="display mb-7"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
          AI Engineered for
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #CCA96E 0%, #B8965A 40%, #9A7A44 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            High-Stakes Decisions
          </span>
        </h1>

        {/* Subline */}
        <p className="body-lg mx-auto mb-12" style={{ maxWidth: '36rem' }}>
          Purpose-built intelligence for financial services, private equity,
          and enterprise leaders navigating decisions where the margin for error is zero.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={onContactClick}
            className="px-8 py-3.5 rounded bg-gold text-ink font-semibold text-sm
                       hover:bg-gold-light transition-all duration-200 shadow-lg shadow-gold/10">
            Book a Strategy Call
          </button>
          <a href="#services"
            className="px-8 py-3.5 rounded border border-navy-600 text-slate font-semibold text-sm
                       hover:border-navy-500 hover:text-white transition-all duration-200">
            See Capabilities
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 pt-10 border-t border-line grid grid-cols-3 gap-px bg-line max-w-2xl mx-auto rounded overflow-hidden">
          {[
            { n: '10×',   label: 'Faster due diligence' },
            { n: '98%',   label: 'Document accuracy' },
            { n: '$0',    label: 'Cost of wrong decisions' },
          ].map(({ n, label }) => (
            <div key={label} className="bg-navy-900 py-6 px-4">
              <div className="font-serif text-2xl font-semibold text-white mb-1">{n}</div>
              <div className="text-xs text-muted">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0A1628, transparent)' }} />
    </section>
  );
};
