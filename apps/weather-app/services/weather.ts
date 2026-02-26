export async function getWeatherData() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=20.0596&longitude=-99.2216&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
