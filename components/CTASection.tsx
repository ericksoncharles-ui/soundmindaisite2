'use client';

import React from 'react';

interface CTASectionProps { onContactClick: () => void; }

export const CTASection: React.FC<CTASectionProps> = ({ onContactClick }) => {
  return (
    <section style={{
      backgroundColor: '#040D19',
      paddingTop: 120,
      paddingBottom: 120,
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Top gradient line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        background: 'linear-gradient(90deg, transparent 0%, rgba(181,144,74,0.3) 50%, transparent 100%)',
      }} />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 700,
        height: 400,
        pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 80% at 50% 0%, rgba(181,144,74,0.06) 0%, transparent 70%)',
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>

        <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-block' }}>Ready to Begin</span>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 600,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          color: '#ffffff',
          marginTop: 16,
          marginBottom: 24,
          maxWidth: 720,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          AI Built for Decisions<br />That Can&apos;t Afford to Be Wrong
        </h2>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 17,
          color: '#94A3B8',
          lineHeight: 1.75,
          maxWidth: 480,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 48,
        }}>
          Let&apos;s talk about your highest-stakes workflows and what it would mean
          to get them right, every time.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', alignItems: 'center' }}>
          <button onClick={onContactClick} className="btn-primary" style={{ padding: '14px 36px', fontSize: 14 }}>
            Book a Strategy Call
          </button>
          <button onClick={onContactClick} className="btn-secondary" style={{ padding: '14px 36px', fontSize: 14 }}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};
