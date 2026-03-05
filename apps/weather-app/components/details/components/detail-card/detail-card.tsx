import React from "react";

interface DetailCardProps {
  label: string;
  value: string | number;
  unit?: string;
}

function DetailCard({ label, value, unit }: DetailCardProps) {
    
  return (
    <div className="bg-[#1D1C35]/50 backdrop-blur-md rounded-[20px] p-4 lg:p-4 xl:p-6 text-white min-w-0 flex-1 border border-white/5 hover:bg-white/10 transition-colors">
      <p className="text-zinc-400 text-xs md:text-sm mb-2 md:mb-4">{label}</p>
      <div className="flex items-baseline gap-1">
        <span className="text-xl md:text-2xl lg:text-3xl font-bold">{value}</span>
        {unit && <span className="text-sm md:text-lg lg:text-xl text-zinc-200">{unit}</span>}
      </div>
    </div>
  );
}

export { DetailCard };
