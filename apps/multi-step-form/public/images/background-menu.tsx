import * as React from "react";

const BackgroundMenu = ({ className }: { className?: string }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="16 16 274 568"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="xMidYMax slice"
  >
    <mask
      id="mask0_24153_1161"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="16"
      y="16"
      width="274"
      height="100%"
    >
      <rect x="16" y="16" width="274" height="5000" rx="10" fill="white" />
    </mask>
    <g mask="url(#mask0_24153_1161)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-18.6921 559.101C19.2469 648.538 184.767 701.017 227.961 628.52C271.155 556.023 161.862 542.867 123.226 467.951C84.5909 393.035 54.5692 346.277 -1.25561 363.344C-57.0804 380.412 -56.6312 469.664 -18.6921 559.101Z"
        fill="#6259FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M249.095 617.153C309.774 588.875 341.934 473.627 290.97 445.625C240.005 417.622 233.573 493.204 182.911 521.612C132.249 550.02 100.771 571.819 113.867 609.853C126.963 647.887 188.416 645.431 249.095 617.153Z"
        fill="#F9818E"
      />
      <path
        d="M181.305 485.097L191.912 474.291"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M225.461 490.581L212.955 480.078"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M203.56 504.991L196.652 519.789"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M16.3047 562.891C53.3078 562.891 83.3047 532.894 83.3047 495.891C83.3047 458.888 53.3078 428.891 16.3047 428.891C-20.6984 428.891 -50.6953 458.888 -50.6953 495.891C-50.6953 532.894 -20.6984 562.891 16.3047 562.891Z"
        fill="#FFAF7E"
      />
    </g>
  </svg>
);

export default BackgroundMenu;
