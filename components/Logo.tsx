import React from 'react';

interface LogoProps {
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#6B3F5F" />
        </linearGradient>
      </defs>

      {/* Heartbeat/Wave line */}
      <path
        d="M 10 75 Q 20 75 25 65 Q 30 55 35 75 L 45 75 Q 50 75 52 70 Q 54 65 56 75 L 65 75"
        stroke="url(#logoGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Right side geometric shape */}
      <path
        d="M 100 30 Q 130 50 130 90 Q 130 110 100 130"
        stroke="url(#logoGradient)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bottom right line */}
      <path
        d="M 70 115 L 150 115"
        stroke="url(#logoGradient)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Center nodes/dots for AI concept */}
      <circle cx="110" cy="55" r="3.5" fill="#D4AF37" />
      <circle cx="120" cy="70" r="3.5" fill="#D4AF37" />
      <circle cx="105" cy="75" r="3.5" fill="#D4AF37" />

      {/* Connecting lines between nodes */}
      <line x1="110" y1="55" x2="120" y2="70" stroke="#D4AF37" strokeWidth="2" opacity="0.6" />
      <line x1="110" y1="55" x2="105" y2="75" stroke="#D4AF37" strokeWidth="2" opacity="0.6" />
      <line x1="120" y1="70" x2="105" y2="75" stroke="#D4AF37" strokeWidth="2" opacity="0.6" />
    </svg>
  );
};
