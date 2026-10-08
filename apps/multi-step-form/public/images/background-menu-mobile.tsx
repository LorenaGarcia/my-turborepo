import * as React from "react";

const BackgroundMenuMobile = ({ className }: { className?: string }) => (
  <svg
    width="375"
    height="172"
    viewBox="0 0 375 172"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
  >
    <rect width="375" height="172" fill="#483EFF" />
    <mask
      id="mask0_mobile"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="375"
      height="172"
    >
      <rect width="375" height="172" fill="white" />
    </mask>
    <g mask="url(#mask0_mobile)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-43.1406 179.742C-38.6506 200.793 42.1485 242.067 79.9922 201.298C117.836 160.528 80.0818 132.894 45.4549 116.883C10.8281 100.871 -10.9754 100.72 -34.8028 116.326C-58.6301 131.932 -47.6306 158.691 -43.1406 179.742Z"
        fill="#6259FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M331.603 219.824C366.425 219.049 409.111 161.94 374.808 134.46C340.504 106.98 322.096 142.138 290.727 146.402C259.358 150.665 231.792 149.337 231.259 167.311C230.726 185.285 296.781 220.6 331.603 219.824Z"
        fill="#F9818E"
      />
      <path
        d="M265.418 147.245L272.7 141.401"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M294.757 154.673L286.205 147.292"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M279.791 162.721L274.673 172.969"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M-23.8643 147.378C-8.9192 153.682 9.04332 144.331 16.2575 126.494C23.4717 108.657 17.1884 89.0886 2.24339 82.7848C-12.7016 76.481 -30.6641 85.8322 -37.8783 103.669C-45.0925 121.506 -38.8093 141.074 -23.8643 147.378Z"
        fill="#FFAF7E"
      />
    </g>
  </svg>
);

export default BackgroundMenuMobile;
