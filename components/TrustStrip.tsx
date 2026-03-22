import React from 'react';

const CLIENTS = [
  'Private Equity',
  'Investment Banking',
  'Asset Management',
  'Management Consulting',
  'Life Sciences',
  'Legal & Compliance',
];

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-secondary border-y border-line py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <span className="label shrink-0">Serving</span>
          {CLIENTS.map((c, i) => (
            <React.Fragment key={c}>
              <span className="text-[0.8125rem] font-medium text-muted tracking-wide">{c}</span>
              {i < CLIENTS.length - 1 && (
                <span className="hidden sm:block text-line select-none">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
