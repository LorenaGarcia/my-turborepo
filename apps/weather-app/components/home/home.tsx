"use client";

import Flower from "@/public/images/flower";
import { UnitsDropdown } from "./units-dropdown";
import { useQuery } from "@tanstack/react-query";
import { getWeatherData } from "@/services/weather";

function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["weather"],
    queryFn: getWeatherData,
  });

  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Flower />
          <p className="text-[22px] font-bold">Weather Now</p>
        </div>
        <UnitsDropdown />
      </div>
      <p className="text-[22px] font-bold text-center mb-16">
        How’s the sky looking today?
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] lg:gap-32 gap-8 h-full">
        <div className="bg-white/5 rounded-3xl p-8 min-h-[300px] flex flex-col justify-center">
          {isLoading ? (
            <p className="text-center text-zinc-400">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-400">Something went wrong</p>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Berlin, Germany</h2>
              <p className="text-6xl font-bold mb-2">
                {data.current.temperature_2m}{data.current_units.temperature_2m}
              </p>
              <p className="text-zinc-400">Wind: {data.current.wind_speed_10m} {data.current_units.wind_speed_10m}</p>
            </div>
          )}
        </div>
        <div className="bg-white/10 rounded-3xl p-8 min-h-[300px]">
          <p className="text-zinc-400 font-bold mb-4">Hourly forecast</p>
          {isLoading ? (
             <p className="text-zinc-500">Loading...</p>
          ) : (
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[400px] pr-2 scrollbar-thin scrollbar-thumb-white/10">
               {data.hourly.time.slice(0, 12).map((time: string, index: number) => (
                 <div key={time} className="flex justify-between items-center py-2 border-b border-white/5">
                   <span className="text-zinc-300">
                     {new Date(time).getHours()}:00
                   </span>
                   <span className="font-bold">
                     {data.hourly.temperature_2m[index]} {data.hourly_units.temperature_2m}
                   </span>
                 </div>
               ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { Home };
