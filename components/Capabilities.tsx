import React from 'react';

const capabilities = [
  {
    n: '01',
    title: 'AI-Powered Due Diligence',
    description: 'Process thousands of documents in hours. Surface material risks and opportunities that human reviewers miss under time pressure.',
  },
  {
    n: '02',
    title: 'Decision Intelligence Systems',
    description: 'Structured AI reasoning across complex, multi-variable decisions — investment theses, market entries, and risk frameworks.',
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
    <section id="services" style={{ backgroundColor: '#091524', paddingTop: 104, paddingBottom: 104 }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 56 }}>
          <span className="eyebrow">What We Do</span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 3.5vw, 42px)',
            fontWeight: 600,
            lineHeight: 1.12,
            letterSpacing: '-0.015em',
            color: '#ffffff',
            maxWidth: 480,
          }}>
            Core Capabilities
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: '#64748B',
            lineHeight: 1.7,
            maxWidth: 520,
            marginTop: 4,
          }}>
            Every capability is built for precision, speed, and the reliability that high-stakes work demands.
          </p>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #1C3050', marginBottom: 0 }} />

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        }}>
          {capabilities.map((cap, i) => (
            <CapabilityItem key={cap.n} cap={cap} index={i} total={capabilities.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CapItem { n: string; title: string; description: string; }

function CapabilityItem({ cap, index, total }: { cap: CapItem; index: number; total: number }) {
  const [hovered, setHovered] = React.useState(false);
  const isRightCol = index % 2 === 1;
  const isBottomRow = index >= total - 2;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '36px 32px',
        borderBottom: '1px solid #1C3050',
        borderRight: isRightCol ? 'none' : '1px solid #1C3050',
        transition: 'background-color 0.2s ease',
        backgroundColor: hovered ? '#0A1928' : 'transparent',
        position: 'relative',
      }}
    >
      {/* Gold left accent on hover */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 2,
        height: hovered ? 48 : 0,
        backgroundColor: '#B5904A',
        transition: 'height 0.25s ease',
        borderRadius: 1,
      }} />

      {/* Number badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 28,
        height: 28,
        borderRadius: '50%',
        border: '1px solid #1C3050',
        fontFamily: "'Inter', sans-serif",
        fontSize: 11,
        fontWeight: 600,
        color: hovered ? '#B5904A' : '#64748B',
        marginBottom: 16,
        transition: 'color 0.2s ease, border-color 0.2s ease',
        borderColor: hovered ? 'rgba(181,144,74,0.3)' : '#1C3050',
      }}>
        {cap.n}
      </div>

      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 18,
        fontWeight: 600,
        color: '#ffffff',
        lineHeight: 1.3,
        marginBottom: 10,
      }}>
        {cap.title}
      </h3>

      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 14,
        color: '#64748B',
        lineHeight: 1.7,
      }}>
        {cap.description}
      </p>
    </div>
  );
}
