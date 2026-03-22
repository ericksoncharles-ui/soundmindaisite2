import React from 'react';

interface LogoProps {
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ size = 56 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main sail outline - left curve */}
      <path
        d="M 100 30 Q 85 60 82 110 Q 80 140 85 160"
        stroke="#3a3a3a"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Main sail outline - right curve */}
      <path
        d="M 100 30 Q 125 65 135 120 Q 138 145 132 160"
        stroke="#3a3a3a"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Inner sail line - left */}
      <path
        d="M 100 40 Q 90 70 88 120 Q 87 145 90 165"
        stroke="#3a3a3a"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Inner sail line - right */}
      <path
        d="M 100 40 Q 120 75 128 125 Q 130 150 125 165"
        stroke="#3a3a3a"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Mast - vertical center line */}
      <line
        x1="100"
        y1="30"
        x2="100"
        y2="170"
        stroke="#3a3a3a"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Hull - curved left side */}
      <path
        d="M 85 165 Q 80 175 85 180"
        stroke="#3a3a3a"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Hull - curved right side */}
      <path
        d="M 132 165 Q 138 175 132 180"
        stroke="#3a3a3a"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Water waves - blue accent wave 1 */}
      <path
        d="M 60 190 Q 80 185 100 190 Q 120 195 140 190"
        stroke="#4a90e2"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Water waves - blue accent wave 2 */}
      <path
        d="M 55 205 Q 80 198 105 205 Q 130 212 150 205"
        stroke="#4a90e2"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};
