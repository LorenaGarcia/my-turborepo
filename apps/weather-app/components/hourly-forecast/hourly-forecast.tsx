import React from "react";
import { DAYS } from "./hourly-forecast.constants";
import { Placeholder } from "./components/placeholder/placeholder";
import { getWeatherIcon } from "../daily-forecast/daily-forecast.utils";
import { formatTime } from "./hourly-forecast.utils";
import { HourlyForecastProps } from "./hourly-forecast.types";


function HourlyForecast({ hourly, isLoading }: HourlyForecastProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedDay, setSelectedDay] = React.useState(
    new Date().toLocaleDateString("en-US", { weekday: "long" })
  );
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const filteredData = React.useMemo(() => {
    if (!hourly) return [];

    return hourly.time
      .map((time, index) => ({
        time,
        temp: hourly.temperature_2m[index],
        code: hourly.weather_code[index],
      }))
      .filter((item) => {
        const dayName = new Date(item.time).toLocaleDateString("en-US", {
          weekday: "long",
        });
        return dayName === selectedDay;
      });
  }, [hourly, selectedDay]);

  return (
    <div className="bg-[#1D1C35]/50 backdrop-blur-md rounded-[32px] p-6 text-white w-full max-w-md relative min-h-[500px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium">Hourly forecast</h2>
        <div className="relative" ref={dropdownRef}>
          <button
            id="day-selector-button"
            onClick={() => !isLoading && setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-controls="day-selector-menu"
            disabled={isLoading}
            className={`bg-white/10 px-4 py-1.5 rounded-xl flex items-center gap-2 transition-colors ${
              isLoading
                ? "cursor-default opacity-50"
                : "cursor-pointer hover:bg-white/20"
            }`}
          >
            <span className="text-sm font-medium">
              {isLoading ? "-" : selectedDay}
            </span>
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
          </button>

          {isOpen && !isLoading && (
            <div
              id="day-selector-menu"
              role="listbox"
              aria-labelledby="day-selector-button"
              className="absolute top-full right-0 mt-2 w-48 bg-[#252440] border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl backdrop-blur-xl"
            >
              {DAYS.map((day) => (
                <button
                  key={day}
                  role="option"
                  aria-selected={selectedDay === day}
                  onClick={() => {
                    setSelectedDay(day);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm cursor-pointer transition-colors hover:bg-white/10 ${
                    selectedDay === day
                      ? "bg-white/5 text-white"
                      : "text-zinc-400"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 overflow-y-auto max-h-[450px] pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
        {isLoading ? (
          <Placeholder />
        ) : (
          filteredData.map((item) => (
            <div
              key={item.time}
              className="flex justify-between items-center bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-4 border border-white/5"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  {getWeatherIcon(item.code, "w-full h-full")}
                </div>
                <span className="text-lg font-medium text-zinc-100">
                  {formatTime(item.time)}
                </span>
              </div>
              <span className="text-lg font-bold">
                {Math.round(item.temp)}°
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
;

export { HourlyForecast };
