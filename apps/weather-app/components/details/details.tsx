import React from "react";
import { DetailCard } from "./components/detail-card/detail-card";

interface DetailsProps {
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  units: {
    temp: string;
    wind: string;
    precipitation: string;
  };
}

function Details({
  feelsLike,
  humidity,
  windSpeed,
  precipitation,
  units,
}: DetailsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      <DetailCard
        label="Feels Like"
        value={Math.round(feelsLike)}
        unit={units.temp}
      />
      <DetailCard label="Humidity" value={humidity} unit="%" />
      <DetailCard
        label="Wind"
        value={Math.round(windSpeed)}
        unit={units.wind}
      />
      <DetailCard
        label="Precipitation"
        value={precipitation}
        unit={units.precipitation}
      />
    </div>
  );
}

export { Details };
