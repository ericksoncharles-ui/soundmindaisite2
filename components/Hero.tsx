'use client';

import React from 'react';

interface HeroProps {
  onContactClick: () => void;
}

const SailboatSVG = () => (
  <svg
    viewBox="0 0 320 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    aria-hidden="true"
  >
    {/* Mast */}
    <line x1="160" y1="48" x2="160" y2="310" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

    {/* Main sail — billowing right */}
    <path
      d="M 160 58 L 160 295 Q 248 185 160 295 Z"
      fill="#C9A84C"
      fillOpacity="0.07"
      stroke="#C9A84C"
      strokeWidth="1"
      strokeOpacity="0.4"
    />

    {/* Jib sail — forward left */}
    <path
      d="M 160 75 L 160 285 Q 100 200 160 285 Z"
      fill="#C9A84C"
      fillOpacity="0.12"
      stroke="#C9A84C"
      strokeWidth="1"
      strokeOpacity="0.5"
    />

    {/* Boom */}
    <line x1="120" y1="295" x2="230" y2="305" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.35" strokeLinecap="round" />

    {/* Hull */}
    <path
      d="M 110 308 Q 160 335 210 308 L 200 295 L 120 295 Z"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeOpacity="0.55"
    />

    {/* Waterline */}
    <line x1="90" y1="335" x2="230" y2="335" stroke="#C9A84C" strokeWidth="0.75" strokeOpacity="0.2" />

    {/* Water waves */}
    <path d="M 60 350 Q 80 345 100 350 T 140 350 T 180 350 T 220 350 T 260 350"
      stroke="#C9A84C" strokeWidth="0.75" strokeOpacity="0.18" fill="none" strokeLinecap="round"/>
    <path d="M 50 366 Q 72 360 94 366 T 138 366 T 182 366 T 226 366 T 270 366"
      stroke="#C9A84C" strokeWidth="0.75" strokeOpacity="0.12" fill="none" strokeLinecap="round"/>
    <path d="M 70 380 Q 90 375 110 380 T 148 380 T 186 380 T 224 380"
      stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.08" fill="none" strokeLinecap="round"/>
  </svg>
);

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[480px] h-[480px] rounded-full bg-gold/4 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/5 w-[320px] h-[320px] rounded-full bg-navy-700/40 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-screen py-32">

          {/* Left — Copy */}
          <div className="animate-fade-up">
            <p className="section-eyebrow mb-6">Decision Intelligence Platform</p>

            <h1 className="font-serif font-bold text-white leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)' }}>
              AI Built for{' '}
              <span className="gold-gradient-text">High-Stakes</span>{' '}
              Decisions
            </h1>

            <p className="section-subtext mb-10">
              Purpose-built AI decision intelligence for financial services, private equity,
              and enterprise leaders who can&apos;t afford to get it wrong.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-gold text-navy-900 font-semibold text-base hover:bg-gold-light hover:shadow-xl hover:shadow-gold/25 hover:-translate-y-px transition-all duration-300"
              >
                Book a Strategy Call
              </button>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-md border border-gold/40 text-gold font-semibold text-base hover:border-gold hover:bg-gold/8 hover:-translate-y-px transition-all duration-300"
              >
                See Use Cases
              </a>
            </div>
          </div>

          {/* Right — Sailboat illustration */}
          <div
            className="flex items-center justify-center lg:justify-end animate-fade-in"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            <div className="w-72 h-96 lg:w-80 lg:h-[420px] opacity-80">
              <SailboatSVG />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
};
