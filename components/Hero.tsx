'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from './shared/Button';
import { Container } from './shared/Container';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="relative min-h-screen bg-gradient-navy flex items-center justify-center pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold/3 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              AI Built for
              <span className="block text-gold mt-2">Decisions That Matter</span>
            </h1>

            <p className="text-lg md:text-xl text-cream mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              High-stakes decision intelligence for financial services, private equity, and enterprise leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                See Use Cases
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 relative h-96 lg:h-full flex items-center justify-center">
            <div className="relative w-full h-full max-w-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Sailboat SVG */}
              <svg
                viewBox="0 0 200 280"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full opacity-70 drop-shadow-lg"
              >
                {/* Hull */}
                <path
                  d="M 80 220 Q 100 240 120 220 L 110 140 L 90 140 Z"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />

                {/* Mast */}
                <line x1="100" y1="60" x2="100" y2="220" stroke="#D4AF37" strokeWidth="1" opacity="0.6" />

                {/* Main sail */}
                <path
                  d="M 100 70 L 100 210 Q 140 140 100 210"
                  fill="#D4AF37"
                  opacity="0.15"
                  stroke="#D4AF37"
                  strokeWidth="1"
                />

                {/* Jib sail */}
                <path
                  d="M 100 80 L 100 210 Q 70 150 100 210"
                  fill="#D4AF37"
                  opacity="0.25"
                  stroke="#D4AF37"
                  strokeWidth="1"
                />

                {/* Water waves */}
                <path
                  d="M 50 240 Q 60 245 70 240 T 90 240 T 110 240 T 130 240 T 150 240"
                  stroke="#D4AF37"
                  strokeWidth="0.8"
                  fill="none"
                  opacity="0.4"
                />
                <path
                  d="M 45 255 Q 55 260 65 255 T 85 255 T 105 255 T 125 255 T 145 255"
                  stroke="#D4AF37"
                  strokeWidth="0.8"
                  fill="none"
                  opacity="0.3"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
