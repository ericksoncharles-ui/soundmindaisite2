import React from 'react';

const differentiators = [
  {
    title: 'Built for Real-World Execution',
    description:
      'We build systems that perform in production—under pressure, with messy data, in live workflows. Not demos.',
  },
  {
    title: 'Precision Over Hype',
    description:
      'Every model choice is driven by accuracy requirements, not novelty. We reject solutions that fail under scrutiny.',
  },
  {
    title: 'Focused on High-Stakes Decisions',
    description:
      'Our entire methodology is built around decisions where being wrong has real consequences. That changes everything.',
  },
  {
    title: 'Strategy and Implementation',
    description:
      'We don\'t sell software and walk away. We partner through deployment, adoption, and continuous improvement.',
  },
];

export const Differentiators: React.FC = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-section-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="max-w-2xl mb-16">
          <span className="section-eyebrow">Why SoundMind AI</span>
          <h2 className="section-heading mt-3 mb-5">Different by Design</h2>
          <p className="section-subtext">
            The difference between a promising pilot and sustained impact is execution.
            That&apos;s where we live.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {differentiators.map((item, i) => (
            <div key={i} className="flex flex-col">
              <div className="gold-rule" />
              <h3 className="font-serif text-xl font-bold text-white mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
