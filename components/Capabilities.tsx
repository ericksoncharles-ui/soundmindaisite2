import React from 'react';

const capabilities = [
  {
    title: 'AI-Powered Due Diligence',
    description: 'Process thousands of documents in hours. Surface material risks and opportunities human reviewers miss.',
  },
  {
    title: 'Decision Intelligence',
    description: 'Model complex scenarios with real-time data to inform investment, operational, and strategic decisions.',
  },
  {
    title: 'Workflow Automation',
    description: 'Eliminate high-value analyst time spent on repetitive data gathering, formatting, and synthesis.',
  },
  {
    title: 'Document & Compliance Analysis',
    description: 'Extract, classify, and flag issues across contracts, filings, and regulatory documents with precision.',
  },
  {
    title: 'Portfolio & Investment Insights',
    description: 'Continuous monitoring and structured reporting across portfolio companies and market signals.',
  },
  {
    title: 'Custom Intelligence Systems',
    description: 'Proprietary models and tooling built for your firm\'s specific data, language, and decision flows.',
  },
];

export const Capabilities: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="max-w-2xl mb-16">
          <span className="section-eyebrow">What We Do</span>
          <h2 className="section-heading mt-3 mb-5">Core Capabilities</h2>
          <p className="section-subtext">
            Every capability is designed for the precision, speed, and reliability
            that high-stakes decisions demand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="group relative rounded-lg border border-navy-700/50 bg-navy-800/60 p-7
                         transition-all duration-300 hover:border-gold/25 hover:-translate-y-0.5
                         hover:shadow-xl hover:shadow-navy-950/50 overflow-hidden"
            >
              {/* Top gold line on hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-gold/0 group-hover:bg-gold/50 transition-all duration-300 rounded-t-lg" />

              <h3 className="font-serif text-lg font-bold text-white mb-3 leading-snug">
                {cap.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
