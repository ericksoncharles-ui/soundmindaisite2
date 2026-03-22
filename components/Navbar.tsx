'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps { onContactClick: () => void; }

const LINKS = [
  { label: 'Services',     href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Industries',   href: '#industries' },
  { label: 'Why Us',       href: '#why-us' },
];

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [open, setOpen]   = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header style={{
      position: 'fixed', inset: '0 0 auto 0', zIndex: 50,
      transition: 'background 0.3s, border-color 0.3s',
      background: solid ? 'rgba(9,21,36,0.95)' : 'transparent',
      backdropFilter: solid ? 'blur(12px)' : 'none',
      borderBottom: solid ? '1px solid #1C3050' : '1px solid transparent',
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 20,
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '-0.01em',
          }}>
            SoundMind<span style={{ color: '#B5904A' }}>AI</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: 36,
        }} className="desktop-nav">
          {LINKS.map(l => (
            <a key={l.label} href={l.href} style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: '#64748B',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'color 0.2s',
            }}
            onMouseOver={e => (e.currentTarget.style.color = '#fff')}
            onMouseOut={e => (e.currentTarget.style.color = '#64748B')}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="desktop-cta">
          <button onClick={onContactClick} className="btn-primary" style={{ padding: '9px 22px', fontSize: 13 }}>
            Book a Call
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="mobile-toggle"
          style={{ background: 'none', border: 'none', color: '#64748B', cursor: 'pointer', padding: 8, flexShrink: 0, display: 'none' }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#091524', borderTop: '1px solid #1C3050' }}>
          <div className="wrap" style={{ paddingTop: 20, paddingBottom: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {LINKS.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
                fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 500,
                color: '#94A3B8', textDecoration: 'none',
              }}>{l.label}</a>
            ))}
            <button onClick={() => { onContactClick(); setOpen(false); }} className="btn-primary" style={{ marginTop: 4 }}>
              Book a Call
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (min-width: 768px) {
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
