'use client';

import React from 'react';

interface HeroProps { onContactClick: () => void; }

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#091524',
    }}>

      {/* Subtle grid texture */}
      <div className="grid-texture" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.6,
      }} />

      {/* Top-center ambient glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 480, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(181,144,74,0.07) 0%, transparent 65%)',
      }} />

      {/* Vignette edges */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 50%, rgba(4,13,25,0.6) 100%)',
      }} />

      {/* Content */}
      <div className="wrap" style={{
        position: 'relative', zIndex: 10,
        paddingTop: 160, paddingBottom: 96,
        textAlign: 'center',
      }}>

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 32 }}>
          <div style={{ height: 1, width: 36, backgroundColor: 'rgba(181,144,74,0.4)' }} />
          <span className="eyebrow">Decision Intelligence</span>
          <div style={{ height: 1, width: 36, backgroundColor: 'rgba(181,144,74,0.4)' }} />
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(38px, 5.5vw, 66px)',
          fontWeight: 600,
          lineHeight: 1.07,
          letterSpacing: '-0.02em',
          color: '#ffffff',
          marginBottom: 28,
          maxWidth: 860,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          AI That<br />
          <span style={{
            background: 'linear-gradient(135deg, #C9A35C 0%, #B5904A 50%, #9A7A44 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Works the Way You Think
          </span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 17,
          fontWeight: 400,
          color: '#94A3B8',
          lineHeight: 1.75,
          maxWidth: 560,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 48,
        }}>
          Built for analysts, advisors, and dealmakers who need rigorous answers fast — without the complexity, the overhead, or the wait.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={onContactClick} className="btn-primary" style={{ padding: '13px 32px', fontSize: 14 }}>
            Book a Strategy Call
          </button>
          <a href="#services" className="btn-secondary" style={{ padding: '13px 32px', fontSize: 14 }}>
            See Capabilities
          </a>
          <a href="#sample-report" className="btn-secondary" style={{ padding: '13px 32px', fontSize: 14 }}>
            Download a Sample Report
          </a>
        </div>

        {/* Stats row */}
        <div style={{
          marginTop: 80,
          paddingTop: 40,
          borderTop: '1px solid #1C3050',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
          backgroundColor: '#1C3050',
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: 6,
          overflow: 'hidden',
        }}>
          {[
            { n: '10×',     label: 'Faster due diligence' },
            { n: '98%',     label: 'Document accuracy rate' },
            { n: '< 2 wks', label: 'Time to first deployment' },
          ].map(({ n, label }) => (
            <div key={label} style={{
              backgroundColor: '#091524',
              padding: '24px 16px',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 26,
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: 6,
                letterSpacing: '-0.02em',
              }}>{n}</div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: '#64748B',
                letterSpacing: '0.01em',
              }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Stats sourcing context */}
        <p style={{
          marginTop: 8,
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          color: '#64748B',
          letterSpacing: '0.01em',
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          Based on internal benchmarks across pilot engagements. Results vary by workflow and data complexity.
        </p>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
        pointerEvents: 'none',
        background: 'linear-gradient(to top, #091524, transparent)',
      }} />
    </section>
  );
};
