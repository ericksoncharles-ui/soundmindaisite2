import React from 'react';

interface FooterProps { onContactClick: () => void; }

const COLS = [
  {
    heading: 'Product',
    links: [
      { label: 'Services',      href: '#services' },
      { label: 'How It Works',  href: '#how-it-works' },
      { label: 'Industries',    href: '#industries' },
    ],
  },
  {
    heading: 'Company',
    links: [{ label: 'Why Us', href: '#why-us' }],
    action: 'Contact',
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms',          href: '#' },
    ],
  },
];

const linkStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: 13,
  color: '#64748B',
  textDecoration: 'none',
  lineHeight: 1.5,
  transition: 'color 0.15s ease',
  display: 'block',
};

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer style={{ backgroundColor: '#040D19', borderTop: '1px solid #1C3050' }}>
      <div className="wrap" style={{ paddingTop: 64, paddingBottom: 48 }}>

        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 40,
          marginBottom: 56,
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 18,
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: 12,
            }}>
              SoundMind<span style={{ color: '#B5904A' }}>AI</span>
            </div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: '#64748B',
              lineHeight: 1.7,
              maxWidth: 240,
            }}>
              Decision intelligence for teams where the stakes demand more than generic AI.
            </p>
          </div>

          {/* Nav cols */}
          {COLS.map(col => (
            <div key={col.heading}>
              <p className="eyebrow" style={{ marginBottom: 16 }}>{col.heading}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(l => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      style={linkStyle}
                      onMouseOver={e => (e.currentTarget.style.color = '#ffffff')}
                      onMouseOut={e => (e.currentTarget.style.color = '#64748B')}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                {col.action && (
                  <li>
                    <button
                      onClick={onContactClick}
                      style={{ ...linkStyle, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                      onMouseOver={e => (e.currentTarget.style.color = '#ffffff')}
                      onMouseOut={e => (e.currentTarget.style.color = '#64748B')}
                    >
                      {col.action}
                    </button>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div style={{
          borderTop: '1px solid #1C3050',
          paddingTop: 24,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            color: '#64748B',
          }}>
            © {new Date().getFullYear()} SoundMind AI. All rights reserved.
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            color: '#1C3050',
          }}>
            AI for decisions that matter.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
