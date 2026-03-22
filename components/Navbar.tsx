'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

const NAV_LINKS = [
  { label: 'Services',     href: '#services' },
  { label: 'Why Us',       href: '#why-us' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Industries',   href: '#industries' },
];

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-b border-navy-700/50 shadow-lg shadow-navy-950/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a href="#" className="flex items-center gap-0.5 group">
            <span className="font-serif text-xl font-bold text-white tracking-tight">SoundMind</span>
            <span className="font-serif text-xl font-bold text-gold tracking-tight">AI</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onContactClick}
              className="ml-2 px-5 py-2 text-sm font-semibold rounded-md border border-gold/50 text-gold hover:bg-gold hover:text-navy-900 transition-all duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-muted hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-900/98 backdrop-blur-md border-t border-navy-700/40">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-muted hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { onContactClick(); setIsOpen(false); }}
              className="mt-1 w-full py-3 text-sm font-semibold rounded-md bg-gold text-navy-900 hover:bg-gold-light transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
