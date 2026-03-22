'use client';

import React, { useState } from 'react';

interface CTASectionProps { onContactClick: () => void; }

export const CTASection: React.FC<CTASectionProps> = ({ onContactClick }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };
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

        {/* Email capture section */}
        <div id="sample-report" style={{ marginTop: 64, paddingTop: 40, borderTop: '1px solid rgba(28, 48, 80, 0.6)' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: '#94A3B8',
            marginBottom: 16,
          }}>
            Or get a sample report sent to your inbox:
          </p>

          {submitted ? (
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              color: '#B5904A',
              fontWeight: 500,
            }}>
              Thanks! Check your inbox shortly.
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center', maxWidth: 400, marginLeft: 'auto', marginRight: 'auto', flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  padding: '10px 16px',
                  border: '1px solid #1C3050',
                  borderRadius: 4,
                  backgroundColor: 'rgba(14, 29, 48, 0.5)',
                  color: '#ffffff',
                  minWidth: 200,
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#B5904A')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#1C3050')}
              />
              <button
                type="submit"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  padding: '10px 20px',
                  backgroundColor: 'transparent',
                  color: '#B5904A',
                  border: '1px solid #B5904A',
                  borderRadius: 4,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(181,144,74,0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Send Me the Report
              </button>
            </form>
          )}

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            color: '#64748B',
            marginTop: 12,
            letterSpacing: '0.01em',
          }}>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};
