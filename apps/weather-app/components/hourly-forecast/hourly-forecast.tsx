import React from "react";
import Sunny from "../../public/images/sunny";
import PartlyCloudy from "../../public/images/partly-cloudy";
import Overcast from "../../public/images/overcast";
import Fog from "../../public/images/fog";
import Drizzle from "../../public/images/drizzle";
import Rain from "../../public/images/rain";
import Snow from "../../public/images/snow";
import Thunderstorms from "../../public/images/thunderstorms";

interface HourlyForecastProps {
  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
  };
  hourlyUnits: {
    temperature_2m: string;
  };
}

const getWeatherIcon = (code: number) => {
  const iconProps = { className: "w-8 h-8" };
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

const formatTime = (time: string) => {
  const date = new Date(time);
  let hours = date.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; 
  return `${hours} ${ampm}`;
};

const HourlyForecast = ({ hourly, hourlyUnits }: HourlyForecastProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedDay, setSelectedDay] = React.useState(
    new Date().toLocaleDateString("en-US", { weekday: "long" })
  );

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
    <div className="bg-[#1D1C35]/50 backdrop-blur-md rounded-[32px] p-6 text-white w-full max-w-md relative">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-medium">Hourly forecast</h3>
        <div className="relative">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white/10 px-4 py-1.5 rounded-xl flex items-center gap-2 cursor-pointer hover:bg-white/20 transition-colors"
          >
            <span className="text-sm font-medium">{selectedDay}</span>
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

          {isOpen && (
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

      <div className="flex flex-col gap-3 overflow-y-auto max-h-[450px] pr-2 custom-scrollbar">
        {hourly.time.slice(0, 12).map((time: string, index: number) => (
          <div
            key={time}
            className="flex justify-between items-center bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-4 border border-white/5"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center">
                {getWeatherIcon(hourly.weather_code[index])}
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

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
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

export default HourlyForecast;
