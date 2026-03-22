import React from 'react';

interface LogoProps {
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ size = 56 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main sail - clean geometric triangle */}
      <path
        d="M 50 15 L 85 75 L 50 75 Z"
        fill="#ffffff"
      />

      {/* Mast */}
      <line x1="50" y1="15" x2="50" y2="75" stroke="#ffffff" strokeWidth="2.5" />

      {/* Hull/Boat body - subtle curved bottom */}
      <path
        d="M 35 75 L 65 75"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Water wave lines - suggest motion and flow */}
      <path
        d="M 20 82 Q 25 80 30 82 T 40 82"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M 60 82 Q 65 80 70 82 T 80 82"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />

      {/* Small accent - AI node suggestion (subtle) */}
      <circle cx="60" cy="40" r="2" fill="#ffffff" opacity="0.8" />
    </svg>
  );
};
