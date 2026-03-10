interface DailyForecastProps {
  daily?: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
  isLoading?: boolean;
}

export type { DailyForecastProps };
