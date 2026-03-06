import React from "react";
import { getWeatherIcon } from "../daily-forecast/daily-forecast.utils";

interface HourlyForecastProps {
  hourly?: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
  };
  hourlyUnits?: {
    temperature_2m: string;
  };
  isLoading?: boolean;
}

const formatTime = (time: string) => {
  const date = new Date(time);
  let hours = date.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; 
  return `${hours} ${ampm}`;
};

const HourlyForecast = ({ hourly, hourlyUnits, isLoading }: HourlyForecastProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedDay, setSelectedDay] = React.useState(
    new Date().toLocaleDateString("en-US", { weekday: "long" })
  );

  const skeletonItems = Array(8).fill(null);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="bg-[#1D1C35]/50 backdrop-blur-md rounded-[32px] p-6 text-white w-full max-w-md relative min-h-[500px]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-medium">Hourly forecast</h3>
        <div className="relative">
          <div
            onClick={() => !isLoading && setIsOpen(!isOpen)}
            className={`bg-white/10 px-4 py-1.5 rounded-xl flex items-center gap-2 transition-colors ${isLoading ? "cursor-default opacity-50" : "cursor-pointer hover:bg-white/20"}`}
          >
            <span className="text-sm font-medium">{isLoading ? "-" : selectedDay}</span>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {isOpen && !isLoading && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-[#252440] border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl backdrop-blur-xl">
              {days.map((day) => (
                <div
                  key={day}
                  onClick={() => {
                    setSelectedDay(day);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-3 text-sm cursor-pointer transition-colors hover:bg-white/10 ${
                    selectedDay === day ? "bg-white/5 text-white" : "text-zinc-400"
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 overflow-y-auto max-h-[450px] pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
        {isLoading
          ? skeletonItems.map((_, index) => (
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
            ))
          : hourly?.time.slice(0, 12).map((time: string, index: number) => (
              <div
                key={time}
                className="flex justify-between items-center bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-4 border border-white/5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    {getWeatherIcon(hourly.weather_code[index], "w-full h-full")}
                  </div>
                  <span className="text-lg font-medium text-zinc-100">
                    {formatTime(time)}
                  </span>
                </div>
                <span className="text-lg font-bold">
                  {Math.round(hourly.temperature_2m[index])}°
                </span>
              </div>
            ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
