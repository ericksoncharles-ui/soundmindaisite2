import React from 'react';

interface LogoProps {
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ size = 48 }) => {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 400 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#2D1B47" />
          <stop offset="40%" stopColor="#5C3D6F" />
          <stop offset="70%" stopColor="#C9A958" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
        <linearGradient id="sailGradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="60%" stopColor="#A0876B" />
          <stop offset="100%" stopColor="#5C3D6F" />
        </linearGradient>
      </defs>

      {/* Heartbeat/Wave line - left side */}
      <path
        d="M 20 120 L 40 120 Q 50 120 55 105 Q 60 90 65 120 L 80 120 Q 90 120 95 110 Q 100 100 105 120 L 130 120"
        stroke="url(#waveGradient)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Sail/Triangle shape - right side */}
      <path
        d="M 200 40 L 280 120 L 240 200"
        stroke="url(#sailGradient)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Bottom line of sail */}
      <path
        d="M 140 190 L 280 190"
        stroke="url(#sailGradient)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />

      {/* Molecular/Neural nodes */}
      {/* Center node */}
      <circle cx="220" cy="110" r="8" fill="#D4AF37" />
      {/* Top left node */}
      <circle cx="190" cy="80" r="6" fill="#C9A958" />
      {/* Right node */}
      <circle cx="260" cy="95" r="7" fill="#D4AF37" />
      {/* Bottom node */}
      <circle cx="230" cy="145" r="6" fill="#A0876B" />

      {/* Connection lines */}
      <line x1="220" y1="110" x2="190" y2="80" stroke="#D4AF37" strokeWidth="2" opacity="0.7" />
      <line x1="220" y1="110" x2="260" y2="95" stroke="#D4AF37" strokeWidth="2" opacity="0.7" />
      <line x1="220" y1="110" x2="230" y2="145" stroke="#C9A958" strokeWidth="2" opacity="0.7" />
    </svg>
  );
};
