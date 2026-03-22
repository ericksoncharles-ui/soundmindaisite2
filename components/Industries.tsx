import React from 'react';

const industries = [
  {
    title: 'Financial Services',
    outcomes: ['Risk model acceleration', 'Regulatory reporting', 'Market intelligence'],
    description: 'AI systems that match the speed and rigor financial institutions require — built for live data environments and compliance-first workflows.',
  },
  {
    title: 'Private Equity & Investment',
    outcomes: ['Due diligence compression', 'Deal sourcing signals', 'Portfolio monitoring'],
    description: 'Compress weeks of diligence into days. Surface deal-critical insights across complex data rooms without adding headcount.',
  },
  {
    title: 'Consulting & Advisory',
    outcomes: ['Research synthesis', 'Client deliverable acceleration', 'Competitive analysis'],
    description: 'Deliver deeper analysis in less time. AI that augments your senior talent rather than replacing the judgment that clients pay for.',
  },
  {
    title: 'Healthcare & Life Sciences',
    outcomes: ['Clinical evidence review', 'Regulatory submission support', 'Safety signal detection'],
    description: 'High-precision document analysis and decision support for environments where accuracy is measured against patient and business risk.',
  },
];

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="bg-secondary py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="mb-14">
          <span className="label">Industries</span>
          <h2 className="display mt-3" style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)' }}>
            Who We Serve
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-line rounded-lg overflow-hidden">
          {industries.map((ind, i) => (
            <div key={i} className="bg-secondary p-10 group hover:bg-navy-800 transition-colors duration-300">

              {/* Title */}
              <h3 className="font-serif text-xl font-semibold text-white mb-4 leading-snug">
                {ind.title}
              </h3>

              {/* Description */}
              <p className="text-[0.875rem] text-muted leading-relaxed mb-7">
                {ind.description}
              </p>

              {/* Outcome tags */}
              <div className="flex flex-wrap gap-2">
                {ind.outcomes.map(o => (
                  <span key={o}
                    className="text-[0.75rem] font-medium px-3 py-1 rounded-full border border-line
                               text-muted group-hover:border-gold/20 group-hover:text-gold/70 transition-colors duration-300">
                    {o}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
