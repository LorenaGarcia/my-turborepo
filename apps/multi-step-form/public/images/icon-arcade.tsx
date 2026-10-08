import * as React from "react";

const IconArcade = ({ className }: { className?: string }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="20" fill="#FFAF7E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.9555 12.4916C23.2024 13.9311 22.3765 15.3391 20.9995 15.826V18.0051H19.0003V15.826C17.6234 15.3391 16.7974 13.9311 17.0444 12.4916C17.2913 11.0522 18.5394 10 19.9999 10C21.4604 10 22.7085 11.0522 22.9555 12.4916ZM19.0003 18.0051V24.0025H20.9995V18.0051H24.9978C25.5499 18.0051 25.9974 18.4526 25.9974 19.0046V29.0004C25.9974 29.5525 25.5499 30 24.9978 30H15.002C14.45 30 14.0024 29.5525 14.0024 29.0004V19.0046C14.0024 18.4526 14.45 18.0051 15.002 18.0051H19.0003ZM19.0003 27.0013H17.0012V25.0021H19.0003V27.0013Z"
      fill="white"
    />
  </svg>
);

export default IconArcade;
