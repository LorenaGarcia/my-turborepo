import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundAlt: string;
      surface: string;
      surfaceGlow: string;
      cempasuchil: string;
      cempasuchilDark: string;
      magenta: string;
      magentaGlow: string;
      purpleDark: string;
      purpleMedium: string;
      purpleVibrant: string;
      cyanFiesta: string;
      gold: string;
      whiteBone: string;
      textPrimary: string;
      textSecondary: string;
      candleFlame: string;
      candleGlow: string;
    };
    shadows: {
      sm: string;
      md: string;
      glowOrange: string;
      glowPurple: string;
      glowMagenta: string;
    };
    fonts: {
      title: string;
      body: string;
      handwriting: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      full: string;
    };
  }
}
