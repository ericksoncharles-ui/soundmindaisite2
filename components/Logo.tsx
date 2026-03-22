import React from 'react';

interface LogoProps {
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ size = 64 }) => {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 480 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Heartbeat/Wave line - left side */}
      <path
        d="M 20 165 L 55 165 Q 70 165 78 150 Q 85 135 100 165 L 125 165 Q 140 165 148 152 Q 155 140 165 165 L 195 165"
        stroke="#ffffff"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Sailboat shape - right side */}
      {/* Main sail - curved triangle */}
      <path
        d="M 260 60 Q 310 100 310 180 L 260 260"
        stroke="#ffffff"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Mast/left edge of sail */}
      <path
        d="M 260 60 L 260 260"
        stroke="#ffffff"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />

      {/* Hull/bottom line */}
      <path
        d="M 195 265 L 310 265"
        stroke="#ffffff"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />

      {/* Molecular/Neural nodes inside sail */}
      {/* Center node */}
      <circle cx="285" cy="130" r="9" fill="#ffffff" />
      {/* Upper left node */}
      <circle cx="265" cy="110" r="7" fill="#ffffff" />
      {/* Right node */}
      <circle cx="305" cy="155" r="8" fill="#ffffff" />

      {/* Connection lines between nodes */}
      <line x1="285" y1="130" x2="265" y2="110" stroke="#ffffff" strokeWidth="2.5" opacity="0.8" />
      <line x1="285" y1="130" x2="305" y2="155" stroke="#ffffff" strokeWidth="2.5" opacity="0.8" />
      <line x1="265" y1="110" x2="305" y2="155" stroke="#ffffff" strokeWidth="2.5" opacity="0.8" />
    </svg>
  );
};
