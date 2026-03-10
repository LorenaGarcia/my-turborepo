import React from "react";
import { SKELETON_ITEMS } from "../../hourly-forecast.constants";



function Placeholder() {


  return (
    <>
      {SKELETON_ITEMS.map((_, index) => (
        <div
          key={`hourly-skeleton-${index}`}
          className="flex justify-between items-center bg-white/5 animate-pulse rounded-2xl p-4 border border-white/5 h-[64px]"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/10 rounded-full" />
            <div className="w-16 h-4 bg-white/10 rounded-full" />
          </div>
          <div className="w-10 h-6 bg-white/10 rounded-full" />
        </div>
      ))}
    </>
  );
};

export { Placeholder };
