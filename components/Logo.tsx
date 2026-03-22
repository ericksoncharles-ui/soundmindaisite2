import React from 'react';

interface LogoProps {
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ size = 64 }) => {
  return (
    <svg
      width={size}
      height={size * 0.65}
      viewBox="0 0 520 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Heartbeat/Wave line - left side */}
      <path
        d="M 30 170 L 70 170 Q 90 170 100 150 Q 110 130 125 170 L 150 170 Q 170 170 180 150 Q 190 130 200 170 L 240 170"
        stroke="#ffffff"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Sail/Triangle shape - right side */}
      {/* Top vertical edge */}
      <path
        d="M 300 70 L 420 180 L 340 290"
        stroke="#ffffff"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Bottom horizontal edge */}
      <path
        d="M 220 290 L 420 290"
        stroke="#ffffff"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />

      {/* Molecular/Neural nodes - center */}
      {/* Center top node */}
      <circle cx="330" cy="140" r="12" fill="#ffffff" />
      {/* Left node */}
      <circle cx="290" cy="180" r="10" fill="#ffffff" />
      {/* Right node */}
      <circle cx="380" cy="170" r="11" fill="#ffffff" />

      {/* Connection lines between nodes */}
      <line x1="330" y1="140" x2="290" y2="180" stroke="#ffffff" strokeWidth="3" opacity="0.8" />
      <line x1="330" y1="140" x2="380" y2="170" stroke="#ffffff" strokeWidth="3" opacity="0.8" />
      <line x1="290" y1="180" x2="380" y2="170" stroke="#ffffff" strokeWidth="3" opacity="0.8" />
    </svg>
  );
};
