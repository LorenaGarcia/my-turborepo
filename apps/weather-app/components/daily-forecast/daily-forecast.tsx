import React from "react";
import { DailyForecastProps } from "./daily-forecast.types";
import { getWeatherIcon, formatDay } from "./daily-forecast.utils";


const DailyForecast = ({ daily, isLoading }: DailyForecastProps) => {
  const skeletonItems = Array(7).fill(null);

  return (
    <div className="w-full">
      <h3 className="text-lg md:text-xl font-medium text-white mb-2 md:mb-4 pl-2">
        Daily forecast
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-4 pb-2 md:pb-4 px-2 overflow-x-auto [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
        {isLoading
          ? skeletonItems.map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="flex flex-col items-center justify-between bg-[#1D1C35]/30 animate-pulse rounded-[16px] md:rounded-[24px] p-2 md:p-3 h-[100px] md:h-[130px] border border-white/5 flex-1"
              >
                <div className="w-8 h-3 bg-white/10 rounded-full mb-2" />
                <div className="w-8 h-8 bg-white/10 rounded-full mb-2" />
                <div className="w-10 h-3 bg-white/10 rounded-full" />
              </div>
            ))
          : daily?.time.slice(0, 7).map((time, index) => (
              <div
                key={time}
                className="flex flex-col items-center justify-between bg-[#1D1C35]/50 backdrop-blur-md rounded-[16px] md:rounded-[24px] p-2 md:p-3 border border-white/5 hover:bg-white/10 transition-colors flex-1"
              >
                <span className="text-zinc-200 text-[10px] md:text-sm mb-1 md:mb-2">
                  {formatDay(time)}
                </span>
                <div className="mb-2 md:mb-3 flex items-center justify-center h-6 w-6 md:h-8 md:w-8">
                  {getWeatherIcon(daily.weather_code[index], "w-full h-full")}
                </div>
                <div className="flex flex-col md:flex-row gap-0.5 md:gap-2 items-center md:items-baseline">
                  <span className="text-sm md:text-base font-bold text-white">
                    {Math.round(daily.temperature_2m_max[index])}°
                  </span>
                  <span className="text-[10px] md:text-xs text-zinc-400 font-medium">
                    {Math.round(daily.temperature_2m_min[index])}°
                  </span>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default DailyForecast;
