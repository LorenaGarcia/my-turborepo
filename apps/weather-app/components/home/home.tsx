"use client";
import React, { useState, useEffect } from "react";

import Flower from "@/public/images/flower";
import { UnitsDropdown } from "../units-dropdown/units-dropdown";
import { useQuery } from "@tanstack/react-query";
import { getWeatherData, WeatherData } from "@/services/weather";
import WeatherBanner from "../weather-banner/weather-banner";
import HourlyForecast from "../hourly-forecast/hourly-forecast";
import Search from "../search/search";
import { Details } from "../details/details";
import DailyForecast from "../daily-forecast/daily-forecast";
import { DEFAULT_LOCATION } from "./home.constants";

function Home() {
  const [location, setLocation] = useState<{
    lat: number;
    lon: number;
    name: string;
  } | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          setLocation({
            lat: latitude,
            lon: longitude,
            name: "Current Location",
          });
        },
        (error) => {
          console.error("Error getting location:", error);

          setLocation(DEFAULT_LOCATION);
        }
      );
    } else {
      setLocation(DEFAULT_LOCATION);
    }
  }, []);

  const { data, isLoading, error } = useQuery<WeatherData>({
    queryKey: ["weather", location?.lat.toString(), location?.lon.toString()],
    queryFn: () => getWeatherData(location!.lat, location!.lon, location!.name),
    enabled: !!location,
  });

  const handleSelectLocation = (lat: number, lon: number, name: string) => {
    setLocation({ lat, lon, name });
  };

  return (
    <div className="px-4 py-4 md:p-8 max-w-[1400px] mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6 md:mb-10 lg:mb-8">
        <div className="flex items-center gap-2">
          <Flower />
          <p className="text-[20px] md:text-[22px] font-bold text-white">Weather Now</p>
        </div>
        <UnitsDropdown />
      </div>
      
      <h1 className="text-[32px] md:text-[42px] lg:text-[46px] xl:text-[52px] font-bold font-bricolage text-center mb-6 md:mb-8 text-white leading-tight max-w-4xl mx-auto">
        How’s the sky looking today?
      </h1>
      
      <Search onSelectLocation={handleSelectLocation} />
      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_390px] gap-4 xl:gap-12">
        <div className="flex flex-col gap-4 md:gap-6 order-1 lg:order-none">
          {error ? (
            <div className="text-center p-12 bg-red-500/10 rounded-[32px] border border-red-500/20">
              <p className="text-red-400">Something went wrong. Please try again.</p>
            </div>
          ) : (
            <>
              <WeatherBanner
                city={data?.locationName}
                temperature={data?.current.temperature_2m}
                tempUnit={data?.current_units.temperature_2m}
                isLoading={isLoading}
              />
              <Details
                feelsLike={data?.current.apparent_temperature}
                humidity={data?.current.relative_humidity_2m}
                windSpeed={data?.current.wind_speed_10m}
                precipitation={data?.current.precipitation}
                units={data ? {
                  temp: data.current_units.apparent_temperature,
                  wind: data.current_units.wind_speed_10m,
                  precipitation: data.current_units.precipitation,
                } : undefined}
                isLoading={isLoading}
              />
              <div className="hidden md:block">
                <DailyForecast daily={data?.daily} isLoading={isLoading} />
              </div>
            </>
          )}
        </div>
        
        <div className="flex flex-col gap-4 order-3 lg:order-none lg:sticky lg:top-8 h-fit">
          <div className="md:hidden">
            <DailyForecast daily={data?.daily} isLoading={isLoading} />
          </div>
          <HourlyForecast
            hourly={data?.hourly}
            hourlyUnits={data?.hourly_units}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

export { Home };
