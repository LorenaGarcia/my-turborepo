import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    background: "#120326",
    backgroundAlt: "#1C0836",
    surface: "rgba(38, 14, 69, 0.75)",
    surfaceGlow: "rgba(255, 122, 0, 0.15)",
    cempasuchil: "#FF7A00",
    cempasuchilDark: "#D65C00",
    magenta: "#E6007E",
    magentaGlow: "rgba(230, 0, 126, 0.35)",
    purpleDark: "#1E0734",
    purpleMedium: "#3A0E5C",
    purpleVibrant: "#7B1FA2",
    cyanFiesta: "#00E5FF",
    gold: "#FFD700",
    whiteBone: "#FFF9E6",
    textPrimary: "#FFF9E6",
    textSecondary: "#D8C5E6",
    candleFlame: "#FFAB00",
    candleGlow: "rgba(255, 171, 0, 0.6)",
  },
  shadows: {
    sm: "0 2px 8px rgba(0, 0, 0, 0.3)",
    md: "0 4px 20px rgba(0, 0, 0, 0.5)",
    glowOrange: "0 0 25px rgba(255, 122, 0, 0.5)",
    glowPurple: "0 0 25px rgba(123, 31, 162, 0.5)",
    glowMagenta: "0 0 25px rgba(230, 0, 126, 0.5)",
  },
  fonts: {
    title: "'Cinzel Decorative', 'Cinzel', serif",
    body: "'Montserrat', sans-serif",
    handwriting: "'Great Vibes', cursive",
  },
  borderRadius: {
    sm: "8px",
    md: "16px",
    lg: "24px",
    full: "9999px",
  },
};
