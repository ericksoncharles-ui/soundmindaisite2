import React from 'react';

const industries = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'Financial Services',
    description: 'Accelerate trading analysis, risk modelling, and regulatory reporting without adding headcount.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Private Equity & Investment',
    description: 'Compress due diligence timelines and surface deal-critical insights across complex data rooms.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Consulting & Advisory',
    description: 'Deliver deeper market analysis and client insights in a fraction of the research time.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Healthcare & Life Sciences',
    description: 'Analyse clinical evidence, regulatory filings, and trial data to support critical medical decisions.',
  },
];

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 md:py-32 bg-section-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="max-w-2xl mb-16">
          <span className="section-eyebrow">Industries</span>
          <h2 className="section-heading mt-3 mb-5">Who We Serve</h2>
          <p className="section-subtext">
            Purpose-built for sectors where the precision of a decision determines outcomes at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="group flex gap-6 rounded-lg border border-navy-700/50 bg-navy-900/60 p-8
                         transition-all duration-300 hover:border-gold/25 hover:bg-navy-900/80
                         hover:-translate-y-0.5 hover:shadow-xl hover:shadow-navy-950/50"
            >
              {/* Icon */}
              <div className="flex-shrink-0 text-gold/70 group-hover:text-gold transition-colors duration-300 mt-0.5">
                {ind.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-serif text-xl font-bold text-white mb-2 leading-snug">
                  {ind.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {ind.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
