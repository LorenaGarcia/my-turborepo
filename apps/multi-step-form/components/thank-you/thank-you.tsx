"use client";

import React from "react";

function ThankYou() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center md:px-20 md:py-24 animate-fade-in">
      <div className="mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <circle cx="40" cy="40" r="40" fill="#F97E8B" />
          <path
            d="M28 40L36 48L52 32"
            stroke="#FFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h1 className="mb-4 text-3xl font-bold text-[#02295A]">Thank you!</h1>

      <p className="max-w-[450px] text-[16px] leading-6 text-gray-400">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at{" "}
        <a
          href="mailto:support@loremgaming.com"
          className="text-[#483EFF] no-underline hover:underline font-medium"
        >
          support@loremgaming.com
        </a>
        .
      </p>
    </div>
  );
}

export { ThankYou };
