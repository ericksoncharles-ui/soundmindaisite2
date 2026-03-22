import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Diagnose',
    description:
      'We map your existing workflows, data sources, and decision bottlenecks to identify exactly where AI creates leverage.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Custom AI systems are architected to integrate with your infrastructure—no rip-and-replace, no disruption.',
  },
  {
    number: '03',
    title: 'Deploy',
    description:
      'Iterative implementation with your team, with ongoing refinement until the system earns your trust.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="max-w-2xl mb-20">
          <span className="section-eyebrow">Process</span>
          <h2 className="section-heading mt-3 mb-5">How It Works</h2>
          <p className="section-subtext">
            From first conversation to production deployment, a clear path with no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-[2.2rem] left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20" />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col md:items-start px-0 md:px-8 lg:px-12 pb-12 md:pb-0 first:pl-0 last:pr-0">

              {/* Step number bubble */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative z-10 flex items-center justify-center w-[4.5rem] h-[4.5rem] rounded-full border border-gold/30 bg-navy-800 shadow-lg shadow-navy-950/60">
                  <span className="font-serif text-2xl font-bold text-gold/80">{step.number}</span>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed max-w-xs">
                {step.description}
              </p>

              {/* Mobile connector */}
              {i < steps.length - 1 && (
                <div className="md:hidden absolute left-9 top-[4.5rem] w-px h-full bg-gradient-to-b from-gold/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
