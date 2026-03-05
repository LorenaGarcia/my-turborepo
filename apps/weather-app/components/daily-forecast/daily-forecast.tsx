import React from "react";
import Sunny from "../../public/images/sunny";
import PartlyCloudy from "../../public/images/partly-cloudy";
import Overcast from "../../public/images/overcast";
import Fog from "../../public/images/fog";
import Drizzle from "../../public/images/drizzle";
import Rain from "../../public/images/rain";
import Snow from "../../public/images/snow";
import Thunderstorms from "../../public/images/thunderstorms";

interface DailyForecastProps {
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
}

const getWeatherIcon = (code: number) => {
  const iconProps = { className: "w-10 h-10" };
  if (code === 0) return <Sunny {...iconProps} />;
  if (code >= 1 && code <= 2) return <PartlyCloudy {...iconProps} />;
  if (code === 3) return <Overcast {...iconProps} />;
  if (code === 45 || code === 48) return <Fog {...iconProps} />;
  if (code >= 51 && code <= 55) return <Drizzle {...iconProps} />;
  if (code >= 61 && code <= 65) return <Rain {...iconProps} />;
  if (code >= 71 && code <= 75) return <Snow {...iconProps} />;
  if (code >= 80 && code <= 82) return <Rain {...iconProps} />;
  if (code >= 95) return <Thunderstorms {...iconProps} />;
  return <Sunny {...iconProps} />; // Default
};

const formatDay = (dateStr: string) => {
  const date = new Date(dateStr);
  // Get local date to avoid timezone issues with formatting
  const [year, month, day] = dateStr.split("-").map(Number);
  const localDate = new Date(year, month - 1, day);
  return localDate.toLocaleDateString("en-US", { weekday: "short" });
};

const DailyForecast = ({ daily }: DailyForecastProps) => {
  return (
    <div className="w-full">
      <h3 className="text-lg md:text-xl font-medium text-white mb-2 md:mb-4 pl-2">Daily forecast</h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-4 pb-2 md:pb-4 custom-scrollbar px-2">
        {daily.time.slice(0, 7).map((time, index) => (
          <div
            key={time}
            className="flex flex-col items-center justify-between bg-[#1D1C35]/50 backdrop-blur-md rounded-[16px] md:rounded-[24px] p-2 md:p-3 border border-white/5 hover:bg-white/10 transition-colors flex-1"
          >
            <span className="text-zinc-200 text-[10px] md:text-sm mb-1 md:mb-2">{formatDay(time)}</span>
            <div className="mb-2 md:mb-3 flex items-center justify-center h-6 w-6 md:h-8 md:w-8">
              {getWeatherIcon(daily.weather_code[index])}
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
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
};

export default DailyForecast;
