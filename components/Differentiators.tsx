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
    <section id="why-us" style={{ backgroundColor: '#0E1D30', paddingTop: 104, paddingBottom: 104 }}>
      <div className="wrap">

        {/* Header — two-column */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          marginBottom: 72,
          alignItems: 'end',
        }} className="diff-header">
          <div>
            <span className="eyebrow">Why SoundMind AI</span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: '-0.015em',
              color: '#ffffff',
              marginTop: 12,
            }}>
              Different by design.
            </h2>
          </div>
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: '#94A3B8',
              lineHeight: 1.75,
            }}>
              Most firms have tried AI. Most pilots don&apos;t survive contact with real workflows,
              real data, and real deadlines. That gap between promising and production-ready is
              exactly where we work.
            </p>
          </div>
        </div>

        {/* Items grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          borderTop: '1px solid #1C3050',
          borderLeft: '1px solid #1C3050',
        }} className="diff-grid">
          {items.map((item, i) => (
            <DiffItem key={item.title} item={item} index={i} />
          ))}
        </div>

        <style>{`
          @media (max-width: 767px) {
            .diff-header { grid-template-columns: 1fr !important; gap: 24px !important; }
            .diff-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
};

interface DiffItemProps { item: { title: string; description: string }; index: number; }

function DiffItem({ item }: DiffItemProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '40px 36px',
        borderRight: '1px solid #1C3050',
        borderBottom: '1px solid #1C3050',
        position: 'relative',
        transition: 'background-color 0.2s ease',
        backgroundColor: hovered ? '#0a1928' : 'transparent',
      }}
    >
      {/* Gold left-border accent */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 40,
        bottom: 40,
        width: 2,
        backgroundColor: '#B5904A',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.25s ease',
        borderRadius: 1,
      }} />

      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 20,
        fontWeight: 600,
        color: '#ffffff',
        lineHeight: 1.25,
        marginBottom: 12,
      }}>
        {item.title}
      </h3>

      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 14,
        color: '#64748B',
        lineHeight: 1.75,
      }}>
        {item.description}
      </p>
    </div>
  );
}
