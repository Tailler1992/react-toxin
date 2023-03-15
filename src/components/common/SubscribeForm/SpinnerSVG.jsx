import React from 'react';

const SpinnerSvg = () => {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            margin: "auto",
            background: "none",
            display: "block",
            shapeRendering: "auto"
          }}
          width="24px"
          height="24px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
      >
        <circle
            cx={50}
            cy={50}
            fill="none"
            stroke="#bc9cff"
            strokeWidth={10}
            r={36}
            strokeDasharray="169.64600329384882 58.548667764616276"
        >
          <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
          />
        </circle>
      </svg>
  );
};

export default SpinnerSvg;