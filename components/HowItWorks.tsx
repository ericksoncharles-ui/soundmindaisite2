'use client';

import React from 'react';
import { Container } from './shared/Container';
import { ChevronRight } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
}

export const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      number: 1,
      title: 'Diagnose',
      description: 'We analyze your existing workflows, data infrastructure, and decision-making bottlenecks.',
    },
    {
      number: 2,
      title: 'Design',
      description: 'Custom AI systems are designed to integrate seamlessly with your existing processes.',
    },
    {
      number: 3,
      title: 'Deploy',
      description: 'Implementation, training, and ongoing optimization to drive measurable impact.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-navy-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="section-title">Our Approach</h2>
          <p className="text-lg text-cream max-w-2xl mx-auto">
            From diagnosis to deployment in weeks, not months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step number circle */}
              <div className="flex items-center justify-center mb-6 relative z-10">
                <div className="w-16 h-16 bg-gold/10 border-2 border-gold rounded-full flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-gold">{step.number}</span>
                </div>
              </div>

              {/* Step content */}
              <div className="text-center">
                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-cream text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-6 text-gold">
                  <ChevronRight className="rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
