export interface WeatherData {
  latitude: number;
  longitude: number;
  locationName: string;
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    precipitation: number;
  };
  current_units: {
    temperature_2m: string;
    wind_speed_10m: string;
    apparent_temperature: string;
    relative_humidity_2m: string;
    precipitation: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
  };
  hourly_units: {
    temperature_2m: string;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
  daily_units: {
    temperature_2m_max: string;
    temperature_2m_min: string;
  };
}

export interface GeocodingResult {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  admin1?: string;
}

export async function searchLocations(query: string): Promise<GeocodingResult[]> {
  if (!query || query.length < 2) return [];
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=10&language=en&format=json`;
  const response = await fetch(url);
  if (!response.ok) return [];
  const data = await response.json();
  return data.results || [];
}

export async function getWeatherData(
  latitude: number,
  longitude: number,
  name: string,
  units?: {
    temp: "c" | "f";
    wind: "kmh" | "mph";
    precip: "mm" | "in";
  }
): Promise<WeatherData> {
  const locationName = name;

  const tempUnit = units?.temp === "f" ? "fahrenheit" : "celsius";
  const windUnit = units?.wind === "mph" ? "mph" : "kmh";
  const precipUnit = units?.precip === "in" ? "inch" : "mm";

  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,apparent_temperature,relative_humidity_2m,precipitation&hourly=temperature_2m,relative_humidity_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&temperature_unit=${tempUnit}&wind_speed_unit=${windUnit}&precipitation_unit=${precipUnit}`;
  
  const weatherResponse = await fetch(weatherUrl);
  if (!weatherResponse.ok) {
    throw new Error("Weather request failed");
  }

  const weatherData = await weatherResponse.json();
  
  return {
    ...weatherData,
    locationName,
  };
}
