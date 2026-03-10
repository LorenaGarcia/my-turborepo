import React from "react";
import { DetailCard } from "./components/detail-card/detail-card";

import { DetailsProps } from "./details.types";

function Details({
  feelsLike,
  humidity,
  windSpeed,
  precipitation,
  units,
  isLoading,
}: DetailsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      <DetailCard
        label="Feels Like"
        value={feelsLike !== undefined ? Math.round(feelsLike) : undefined}
        unit={units?.temp}
        isLoading={isLoading}
      />
      <DetailCard
        label="Humidity"
        value={humidity}
        unit="%"
        isLoading={isLoading}
      />
      <DetailCard
        label="Wind"
        value={windSpeed !== undefined ? Math.round(windSpeed) : undefined}
        unit={units?.wind}
        isLoading={isLoading}
      />
      <DetailCard
        label="Precipitation"
        value={precipitation}
        unit={units?.precipitation}
        isLoading={isLoading}
      />
    </div>
  );
}

export { Details };
