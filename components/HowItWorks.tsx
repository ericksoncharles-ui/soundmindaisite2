import React from 'react';

const steps = [
  {
    n: '1',
    title: 'Diagnose',
    description: 'We map your existing workflows, data sources, and decision bottlenecks. Identify where AI creates real leverage — and where it doesn\'t.',
  },
  {
    n: '2',
    title: 'Design',
    description: 'Custom architecture built around your infrastructure, your data, and your team\'s way of working. No rip-and-replace.',
  },
  {
    n: '3',
    title: 'Deploy',
    description: 'Iterative rollout with embedded support until the system earns the trust of the people using it — and proves it in production.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-primary py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="mb-16">
          <span className="label">Process</span>
          <h2 className="display mt-3" style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)' }}>
            How We Work
          </h2>
        </div>

        {/* Steps */}
        <div className="divider" />
        {steps.map((step, i) => (
          <div key={i}
            className="grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr_1.5fr] items-start gap-6 md:gap-12 py-10 border-b border-line group">

            {/* Number */}
            <div className="font-serif text-[2rem] md:text-[2.5rem] font-semibold text-navy-600
                            group-hover:text-gold/40 transition-colors duration-300 leading-none pt-1 select-none">
              {step.n}
            </div>

            {/* Title */}
            <div className="md:border-r border-line md:pr-12">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white leading-tight">
                {step.title}
              </h3>
            </div>

            {/* Description */}
            <p className="col-start-2 md:col-start-auto text-[0.9375rem] text-muted leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
