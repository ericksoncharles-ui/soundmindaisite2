import React from 'react';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-navy-700/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-0.5 mb-4">
              <span className="font-serif text-2xl font-bold text-white">SoundMind</span>
              <span className="font-serif text-2xl font-bold text-gold">AI</span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Decision intelligence for teams where the stakes demand more than generic AI.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Product</p>
            <ul className="space-y-3">
              {[
                { label: 'Services',     href: '#services' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Industries',   href: '#industries' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Company</p>
            <ul className="space-y-3">
              <li>
                <a href="#why-us" className="text-sm text-muted hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <button
                  onClick={onContactClick}
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="text-sm text-muted hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-navy-700/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {year} SoundMind AI. All rights reserved.
          </p>
          <p className="text-xs text-muted/50 italic">
            AI for decisions that matter.
          </p>
        </div>
      </div>
    </footer>
  );
};
