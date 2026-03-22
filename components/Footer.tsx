import React from 'react';

interface FooterProps { onContactClick: () => void; }

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer className="bg-ink border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-serif text-xl font-semibold text-white mb-3">
              SoundMind<span className="text-gold">AI</span>
            </div>
            <p className="text-[0.8125rem] text-muted leading-relaxed">
              Decision intelligence for teams where the stakes demand more than generic AI.
            </p>
          </div>

          {[
            {
              heading: 'Product',
              links: [
                { label: 'Services', href: '#services' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Industries', href: '#industries' },
              ],
            },
            {
              heading: 'Company',
              links: [
                { label: 'Why Us', href: '#why-us' },
              ],
              actions: [{ label: 'Contact', onClick: 'contact' as const }],
            },
            {
              heading: 'Legal',
              links: [
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms', href: '#' },
              ],
            },
          ].map((col) => (
            <div key={col.heading}>
              <p className="label mb-5">{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[0.8125rem] text-muted hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
                {col.actions?.map(a => (
                  <li key={a.label}>
                    <button onClick={onContactClick}
                      className="text-[0.8125rem] text-muted hover:text-white transition-colors">
                      {a.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.75rem] text-muted">
            © {new Date().getFullYear()} SoundMind AI. All rights reserved.
          </p>
          <p className="text-[0.75rem] text-navy-600">
            AI for decisions that matter.
          </p>
        </div>
      </div>
    </footer>
  );
};
