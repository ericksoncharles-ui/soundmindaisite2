import React from 'react';

const industries = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="10" width="3" height="8" rx="1" stroke="#B5904A" strokeWidth="1.25" />
        <rect x="7" y="6" width="3" height="12" rx="1" stroke="#B5904A" strokeWidth="1.25" />
        <rect x="12" y="2" width="3" height="16" rx="1" stroke="#B5904A" strokeWidth="1.25" />
        <path d="M17 5L15 3L13 5" stroke="#B5904A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Financial Services',
    outcomes: ['Risk model acceleration', 'Regulatory reporting', 'Market intelligence'],
    description: 'AI systems that match the speed and rigor financial institutions require — built for live data environments and compliance-first workflows.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="7.5" stroke="#B5904A" strokeWidth="1.25" />
        <path d="M10 6v4l2.5 2.5" stroke="#B5904A" strokeWidth="1.25" strokeLinecap="round" />
        <path d="M6 2.5C7.4 1.6 9.1 1 10 1" stroke="#B5904A" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
    title: 'Private Equity & Investment',
    outcomes: ['Due diligence compression', 'Deal sourcing signals', 'Portfolio monitoring'],
    description: 'Compress weeks of diligence into days. Surface deal-critical insights across complex data rooms without adding headcount.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 17L7 10L11 13L15 6L17 9" stroke="#B5904A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="5" r="1.5" stroke="#B5904A" strokeWidth="1.25" />
      </svg>
    ),
    title: 'Consulting & Advisory',
    outcomes: ['Research synthesis', 'Deliverable acceleration', 'Competitive analysis'],
    description: 'Deliver deeper analysis in less time. AI that augments your senior talent rather than replacing the judgment that clients pay for.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3v14M3 10h14" stroke="#B5904A" strokeWidth="1.25" strokeLinecap="round" />
        <rect x="2" y="2" width="16" height="16" rx="3" stroke="#B5904A" strokeWidth="1.25" />
      </svg>
    ),
    title: 'Healthcare & Life Sciences',
    outcomes: ['Clinical evidence review', 'Regulatory submission support', 'Safety signal detection'],
    description: 'High-precision document analysis and decision support for environments where accuracy is measured against patient and business risk.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 8V5C3 3.9 3.9 3 5 3h6M17 8v3M14 11h3M14 14h3" stroke="#B5904A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="8" width="14" height="9" rx="1" stroke="#B5904A" strokeWidth="1.25" />
      </svg>
    ),
    title: 'Growing Businesses & Advisors',
    outcomes: ['Vendor & supplier diligence', 'Market research automation', 'Proposal & report generation'],
    description: 'You don\'t need an enterprise budget to benefit from AI. We work with boutique firms, independent advisors, and fast-growing teams who want enterprise-grade analysis without the enterprise overhead.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 2h14c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1zm2 4h10M5 8h10M5 12h10M5 16h10" stroke="#B5904A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Legal & Compliance Teams',
    outcomes: ['Contract analysis & review', 'Regulatory compliance monitoring', 'Risk identification & reporting'],
    description: 'Accelerate document review and compliance workflows. Identify contract risks, flag regulatory changes, and maintain audit trails with precision—essential for in-house and external legal teams.',
  },
];

export const Industries: React.FC = () => {
  return (
    <section id="industries" style={{ backgroundColor: '#0E1D30', paddingTop: 104, paddingBottom: 104 }}>
      <div className="wrap">

        <div style={{ marginBottom: 56 }}>
          <span className="eyebrow">Industries</span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 3.5vw, 42px)',
            fontWeight: 600,
            lineHeight: 1.12,
            letterSpacing: '-0.015em',
            color: '#ffffff',
            marginTop: 12,
          }}>
            Who We Serve
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 1,
          backgroundColor: '#1C3050',
          borderRadius: 8,
          overflow: 'hidden',
        }}>
          {industries.map((ind) => (
            <IndustryCard key={ind.title} industry={ind} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Industry {
  icon: React.ReactNode;
  title: string;
  outcomes: string[];
  description: string;
}

function IndustryCard({ industry }: { industry: Industry }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? '#132236' : '#0E1D30',
        padding: '36px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        transition: 'background-color 0.25s ease',
      }}
    >
      {/* Icon */}
      <div style={{
        width: 40,
        height: 40,
        borderRadius: 6,
        border: '1px solid #1C3050',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: 'rgba(181,144,74,0.04)',
        transition: 'border-color 0.25s ease',
        borderColor: hovered ? 'rgba(181,144,74,0.25)' : '#1C3050',
      }}>
        {industry.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 20,
        fontWeight: 600,
        color: '#ffffff',
        lineHeight: 1.25,
        marginBottom: 12,
      }}>
        {industry.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 14,
        color: '#64748B',
        lineHeight: 1.7,
        marginBottom: 24,
        flex: 1,
      }}>
        {industry.description}
      </p>

      {/* Outcome tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {industry.outcomes.map(o => (
          <span key={o} style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            fontWeight: 500,
            color: hovered ? 'rgba(181,144,74,0.7)' : '#64748B',
            border: `1px solid ${hovered ? 'rgba(181,144,74,0.2)' : '#1C3050'}`,
            borderRadius: 100,
            padding: '3px 10px',
            letterSpacing: '0.01em',
            transition: 'color 0.25s ease, border-color 0.25s ease',
          }}>
            {o}
          </span>
        ))}
      </div>
    </div>
  );
}
