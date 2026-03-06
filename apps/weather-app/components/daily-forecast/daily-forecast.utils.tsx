import React from "react";
import Sunny from "../../public/images/sunny";
import PartlyCloudy from "../../public/images/partly-cloudy";
import Overcast from "../../public/images/overcast";
import Fog from "../../public/images/fog";
import Drizzle from "../../public/images/drizzle";
import Rain from "../../public/images/rain";
import Snow from "../../public/images/snow";
import Thunderstorms from "../../public/images/thunderstorms";

function getWeatherIcon(code: number, size = "w-10 h-10") {
  const iconProps = { className: size };

  switch (true) {
    case code === 0:
      return <Sunny {...iconProps} />;
    case code >= 1 && code <= 2:
      return <PartlyCloudy {...iconProps} />;
    case code === 3:
      return <Overcast {...iconProps} />;
    case code === 45 || code === 48:
      return <Fog {...iconProps} />;
    case code >= 51 && code <= 55:
      return <Drizzle {...iconProps} />;
    case (code >= 61 && code <= 65) || (code >= 80 && code <= 82):
      return <Rain {...iconProps} />;
    case code >= 71 && code <= 75:
      return <Snow {...iconProps} />;
    case code >= 95:
      return <Thunderstorms {...iconProps} />;
    default:
      return <Sunny {...iconProps} />;
  }
}

function formatDay(dateStr: string) {
  const [year, month, day] = dateStr.split("-").map(Number);
  const localDate = new Date(year, month - 1, day);
  return localDate.toLocaleDateString("en-US", { weekday: "short" });
}

export { getWeatherIcon, formatDay };
