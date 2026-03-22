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
    <section id="how-it-works" style={{ backgroundColor: '#091524', paddingTop: 104, paddingBottom: 104 }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ marginBottom: 72 }}>
          <span className="eyebrow">Process</span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 3.5vw, 42px)',
            fontWeight: 600,
            lineHeight: 1.12,
            letterSpacing: '-0.015em',
            color: '#ffffff',
            marginTop: 12,
          }}>
            How We Work
          </h2>
        </div>

        {/* Desktop: 3-column with connector line */}
        <div style={{ position: 'relative' }}>

          {/* Connector line (desktop only) */}
          <div style={{
            position: 'absolute',
            top: 20,
            left: 'calc(16.66% + 16px)',
            right: 'calc(16.66% + 16px)',
            height: 1,
            backgroundColor: '#1C3050',
          }} className="hidden-mobile" />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0 48px',
          }} className="how-it-works-grid">
            {steps.map((step, i) => (
              <div key={step.n} style={{ position: 'relative' }}>
                {/* Step number circle */}
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  border: '1px solid rgba(181,144,74,0.35)',
                  backgroundColor: '#091524',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#B5904A',
                  marginBottom: 28,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {step.n}
                </div>

                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(22px, 2.5vw, 28px)',
                  fontWeight: 600,
                  color: '#ffffff',
                  lineHeight: 1.2,
                  marginBottom: 16,
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  color: '#64748B',
                  lineHeight: 1.75,
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: stacked with border-left accent */}
        <style>{`
          @media (max-width: 767px) {
            .how-it-works-grid {
              grid-template-columns: 1fr !important;
              gap: 0 !important;
            }
            .how-it-works-grid > div {
              display: flex !important;
              gap: 20px;
              padding-bottom: 40px;
              border-left: 1px solid #1C3050;
              padding-left: 24px;
              margin-left: 20px;
            }
            .how-it-works-grid > div:last-child {
              border-left-color: transparent;
            }
            .how-it-works-grid > div > div:first-child {
              position: absolute !important;
              left: -20px !important;
              margin-bottom: 0 !important;
              flex-shrink: 0;
            }
            .hidden-mobile { display: none !important; }
          }
        `}</style>
      </div>
    </section>
  );
};
