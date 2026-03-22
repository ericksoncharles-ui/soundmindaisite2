'use client';

import React from 'react';
import { Container } from './shared/Container';

interface Differentiator {
  title: string;
  description: string;
}

export const Differentiators: React.FC = () => {
  const differentiators: Differentiator[] = [
    {
      title: 'Built for Real-World Execution',
      description: 'Our systems are designed for production environments with mission-critical requirements.',
    },
    {
      title: 'Focused on High-Stakes Decisions',
      description: 'Every feature is optimized for decisions that move markets and shape futures.',
    },
    {
      title: 'Precision Over Hype',
      description: 'We prioritize accuracy and reliability over flashy features or generic capabilities.',
    },
    {
      title: 'Strategy + Implementation',
      description: 'Beyond software—we partner in your execution, not just selling you a tool.',
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-32 bg-gradient-navy">
      <Container>
        <div className="text-center mb-16">
          <h2 className="section-title">Why SoundMind AI</h2>
          <p className="text-lg text-cream max-w-2xl mx-auto">
            Different by design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="border-l-2 border-gold pl-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-cream text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
