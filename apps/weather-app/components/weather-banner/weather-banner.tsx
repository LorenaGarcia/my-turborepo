"use client";

import SkyBackgroundDesktop from "@/public/images/sky-background-desktop";
import SkyBackgroundMobile from "@/public/images/sky-background-mobile";
import Sunny from "@/public/images/sunny";

interface WeatherBannerProps {
  city: string;
  temperature: number;
  tempUnit: string;
}

export default function WeatherBanner({
  city,
  temperature,
  tempUnit,
}: WeatherBannerProps) {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="relative w-full overflow-hidden rounded-[24px] md:rounded-[32px] min-h-[240px] lg:min-h-[220px] xl:min-h-[286px] flex flex-col justify-center transition-all duration-300">
      <div className="absolute inset-0 z-0">
        <SkyBackgroundMobile className="w-full h-full scale-[1.02] lg:hidden block" />
        <SkyBackgroundDesktop className="w-full h-full scale-[1.02] hidden lg:block" />
      </div>

      <div className="relative z-10 flex h-full flex-col lg:flex-row lg:items-center lg:justify-between px-6 py-6 lg:px-10">
        <div className="flex flex-col items-center lg:items-start text-white text-center lg:text-left max-w-full lg:max-w-[60%]">
          <h2 className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold leading-tight break-words w-full tracking-tight">
            {city}
          </h2>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] opacity-80 mt-1 md:mt-2 font-medium tracking-widest">
            {date}
          </p>
        </div>
 
        <div className="mt-4 lg:mt-0 flex flex-row items-center justify-center lg:justify-end gap-4 md:gap-6 lg:gap-8 text-white">
          <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 xl:w-28 flex items-center justify-center flex-shrink-0">
            <Sunny className="w-full h-full" />
          </div>
          <span className="text-[40px] md:text-[52px] lg:text-[72px] xl:text-[96px] font-bold leading-none flex-shrink-0">
            {Math.round(temperature)}
            {tempUnit}
          </span>
        </div>
      </div>
    </div>
  );
}

