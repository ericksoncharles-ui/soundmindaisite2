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
  const [open, setOpen]       = useState(false);
  const [solid, setSolid]     = useState(false);

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 32);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      solid ? 'bg-navy-900/96 backdrop-blur-md border-b border-line' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <a href="#" className="shrink-0">
            <span className="font-serif text-[1.35rem] font-semibold text-white tracking-tight">
              SoundMind<span className="text-gold">AI</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {LINKS.map(l => (
              <a key={l.label} href={l.href}
                className="text-[0.8125rem] font-medium text-muted hover:text-white transition-colors duration-200 tracking-wide">
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <button onClick={onContactClick}
              className="text-[0.8125rem] font-semibold px-5 py-2 rounded bg-gold text-ink
                         hover:bg-gold-light transition-colors duration-200">
              Book a Call
            </button>
          </div>

          {/* Mobile */}
          <button className="md:hidden p-2 text-muted hover:text-white"
            onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-navy-900 border-t border-line">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-5">
            {LINKS.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="block text-sm font-medium text-slate hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <button onClick={() => { onContactClick(); setOpen(false); }}
              className="w-full mt-2 py-2.5 rounded bg-gold text-ink text-sm font-semibold">
              Book a Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
