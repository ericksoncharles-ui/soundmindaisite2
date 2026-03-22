import React from 'react';

const items = [
  {
    title: 'Precision over hype',
    description: 'Every model choice is driven by accuracy requirements, not novelty. We test against your real data before anything touches production.',
  },
  {
    title: 'Built for real-world conditions',
    description: 'Our systems run under pressure — with messy data, shifting requirements, and teams that have seen too many demos that never shipped.',
  },
  {
    title: 'High-stakes focus',
    description: 'We only work on decisions where being wrong has real consequences. That constraint shapes everything — architecture, testing, deployment.',
  },
  {
    title: 'Strategy through to execution',
    description: 'We don\'t hand off a prototype. We stay through deployment, adoption, and the first time the system faces something it wasn\'t built for.',
  },
];

export const Differentiators: React.FC = () => {
  return (
    <section id="why-us" className="bg-secondary py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <span className="label">Why SoundMind AI</span>
            <h2 className="display mt-3" style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)' }}>
              Different by design.
              <br />
              <span className="text-muted" style={{ fontSize: '0.65em', fontStyle: 'italic' }}>
                Not by marketing.
              </span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="body-lg" style={{ fontSize: '0.9375rem' }}>
              The gap between a promising AI pilot and an AI system that actually changes how your
              firm makes decisions is execution. That&apos;s where most firms fail.
              That&apos;s where we specialize.
            </p>
          </div>
        </div>

        {/* Items */}
        <div className="divider" />
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y divide-line md:divide-y-0">
          {items.map((item, i) => (
            <div key={i}
              className={`py-10 md:px-8 ${i % 2 === 0 ? 'md:border-r border-line md:pl-0' : ''} ${i >= 2 ? 'md:border-t border-line' : ''}`}>
              <h3 className="font-serif text-xl font-semibold text-white mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-[0.875rem] text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
