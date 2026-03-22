import React from 'react';
import { Container } from './shared/Container';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer className="bg-navy-900 border-t border-navy-700 mt-20 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div>
            <div className="flex items-center space-x-1 mb-4">
              <span className="text-xl font-serif font-bold text-white">SoundMind</span>
              <span className="text-xl font-serif font-bold text-gold">AI</span>
            </div>
            <p className="text-cream text-sm">
              AI built for decisions that matter.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-cream hover:text-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-cream hover:text-gold transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#industries" className="text-cream hover:text-gold transition-colors">
                  Industries
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#why-us" className="text-cream hover:text-gold transition-colors">
                  About
                </a>
              </li>
              <li>
                <button
                  onClick={onContactClick}
                  className="text-cream hover:text-gold transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-cream hover:text-gold transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-cream hover:text-gold transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-700 pt-8">
          <p className="text-center text-cream text-sm">
            &copy; 2024 SoundMind AI. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
