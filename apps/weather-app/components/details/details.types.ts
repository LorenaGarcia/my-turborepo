interface DetailsProps {
  feelsLike?: number;
  humidity?: number;
  windSpeed?: number;
  precipitation?: number;
  units?: {
    temp: string;
    wind: string;
    precipitation: string;
  };
  isLoading?: boolean;
}

export type { DetailsProps };