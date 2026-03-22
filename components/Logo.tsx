import React from 'react';

interface LogoProps {
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ size = 56 }) => {
  return (
    <svg
      width={size}
      height="auto"
      viewBox="0 0 680 520"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main sail */}
      <path
        d="M340 60 C338 120, 290 220, 240 310 C280 295, 350 280, 390 290 Z"
        fill="none"
        stroke="#3d3d3d"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner sail lines */}
      <path
        d="M340 60 C336 130, 310 230, 290 300"
        fill="none"
        stroke="#3d3d3d"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M340 60 C342 130, 360 230, 375 288"
        fill="none"
        stroke="#3d3d3d"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Jib sail */}
      <path
        d="M340 110 C360 160, 390 230, 400 290 C375 285, 355 270, 340 260 Z"
        fill="none"
        stroke="#3d3d3d"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Hull top curve */}
      <path
        d="M210 310 C240 295, 300 285, 340 285 C380 285, 420 295, 450 310"
        fill="none"
        stroke="#3d3d3d"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Hull bottom curve */}
      <path
        d="M215 322 C245 308, 305 298, 340 298 C375 298, 418 308, 448 322"
        fill="none"
        stroke="#3d3d3d"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Wave 1 (dark) */}
      <path
        d="M165 348 C200 336, 240 358, 280 346 C320 334, 360 356, 400 344 C430 335, 460 340, 500 348"
        fill="none"
        stroke="#3d3d3d"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Wave 2 (blue) */}
      <path
        d="M155 368 C195 354, 238 376, 282 362 C326 348, 368 372, 410 358 C440 348, 474 354, 510 364"
        fill="none"
        stroke="#4a90d9"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Wave 3 (blue) */}
      <path
        d="M170 386 C205 374, 245 392, 285 380 C325 368, 365 388, 405 376 C435 368, 465 372, 498 380"
        fill="none"
        stroke="#4a90d9"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
