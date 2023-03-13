import React from 'react';

const FullStarSVG = () => {
  return (
      <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.45 13.97L5.82 21L12 17.27Z"
            fill="url(#paint0_linear_207_6)"
        />
        <defs>
          <linearGradient
              id="paint0_linear_207_6"
              x1={12}
              y1={2}
              x2={12}
              y2={21}
              gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BC9CFF"/>
            <stop offset={1} stopColor="#8BA4F9"/>
          </linearGradient>
        </defs>
      </svg>
  );
};

export default FullStarSVG;