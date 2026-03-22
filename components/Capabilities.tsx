import React from 'react';

const capabilities = [
  {
    n: '01',
    title: 'AI-Powered Due Diligence',
    description: 'Process thousands of documents in hours. Surface material risks and opportunities that human reviewers routinely miss under time pressure.',
  },
  {
    n: '02',
    title: 'Decision Intelligence Systems',
    description: 'Structured AI reasoning across complex, multi-variable decisions — investment theses, market entries, risk frameworks.',
  },
  {
    n: '03',
    title: 'Workflow Automation',
    description: 'Eliminate analyst hours spent on data gathering, synthesis, and formatting. Redeploy your best people to work that requires judgment.',
  },
  {
    n: '04',
    title: 'Document & Compliance Analysis',
    description: 'Precision extraction, classification, and flagging across contracts, regulatory filings, and compliance documentation at scale.',
  },
  {
    n: '05',
    title: 'Portfolio & Investment Insights',
    description: 'Continuous monitoring and structured reporting across portfolio companies, market signals, and competitive dynamics.',
  },
  {
    n: '06',
    title: 'Custom Intelligence Platforms',
    description: 'Proprietary models and tooling built around your firm\'s data, domain language, and specific decision workflows.',
  },
];

export const Capabilities: React.FC = () => {
  return (
    <section id="services" className="bg-primary py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-0">
          <div>
            <span className="label">What We Do</span>
            <h2 className="display mt-3" style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)' }}>
              Core Capabilities
            </h2>
          </div>
          <p className="body-lg md:text-right max-w-sm" style={{ fontSize: '0.9375rem' }}>
            Every capability is built for precision, speed,<br className="hidden lg:block" />
            and the reliability that high-stakes work demands.
          </p>
        </div>

        {/* Divider */}
        <div className="divider mt-10 mb-0" />

        {/* Grid — list style */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y divide-line md:divide-y-0">
          {capabilities.map((cap, i) => (
            <div key={i}
              className={`group flex gap-8 py-10 px-0 md:px-8 transition-colors duration-200
                ${i % 2 === 0 ? 'md:border-r border-line' : ''}
                ${i >= 2 ? 'md:border-t border-line' : ''}`}
            >
              {/* Number */}
              <span className="shrink-0 font-serif text-[2.5rem] font-semibold leading-none
                               text-navy-600 group-hover:text-gold/30 transition-colors duration-300 select-none mt-1">
                {cap.n}
              </span>

              {/* Content */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-white mb-2.5 leading-snug">
                  {cap.title}
                </h3>
                <p className="text-[0.875rem] text-muted leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
