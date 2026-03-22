'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from './shared/Container';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Industries', href: '#industries' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-b border-gold/10'
          : 'bg-transparent'
      }`}
    >
      <Container className="py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <span className="text-2xl font-serif font-bold text-white">SoundMind</span>
          <span className="text-2xl font-serif font-bold text-gold">AI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-cream hover:text-gold transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onContactClick}
            className="text-cream hover:text-gold transition-colors duration-300 font-medium"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:text-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-navy-900/95 backdrop-blur-md border-t border-gold/10">
          <Container className="py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-cream hover:text-gold transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                onContactClick();
                setIsOpen(false);
              }}
              className="block w-full text-left text-cream hover:text-gold transition-colors duration-300 font-medium py-2"
            >
              Contact
            </button>
          </Container>
        </div>
      )}
    </nav>
  );
};
