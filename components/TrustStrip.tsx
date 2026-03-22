import React from 'react';

const SECTORS = [
  'Private Equity',
  'Investment Banking',
  'Asset Management',
  'Management Consulting',
  'Life Sciences',
  'Legal & Compliance',
];

export const TrustStrip: React.FC = () => {
  return (
    <section style={{
      backgroundColor: '#0E1D30',
      borderTop: '1px solid #1C3050',
      borderBottom: '1px solid #1C3050',
      paddingTop: 20,
      paddingBottom: 20,
    }}>
      <div className="wrap">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px 0',
        }}>
          <span className="eyebrow" style={{ marginRight: 20, flexShrink: 0 }}>Built for</span>
          {SECTORS.map((s, i) => (
            <React.Fragment key={s}>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color: '#64748B',
                letterSpacing: '0.01em',
                whiteSpace: 'nowrap',
              }}>{s}</span>
              {i < SECTORS.length - 1 && (
                <span style={{
                  display: 'inline-block',
                  width: 1,
                  height: 12,
                  backgroundColor: '#1C3050',
                  margin: '0 16px',
                  verticalAlign: 'middle',
                  flexShrink: 0,
                }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
