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

export type { HourlyForecastProps };
