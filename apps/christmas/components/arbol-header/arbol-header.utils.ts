export type LightsMode = "titilantes" | "fijas" | "apagadas";

export const getNextLightsMode = (current: LightsMode): LightsMode => {
  if (current === "titilantes") return "fijas";
  if (current === "fijas") return "apagadas";
  return "titilantes";
};

export const getLightsModeLabel = (mode: LightsMode): string => {
  if (mode === "titilantes") return "Luces: titilantes";
  if (mode === "fijas") return "Luces: Fijas";
  return "Luces: Apagadas";
};

export const getSnowStatusLabel = (active: boolean): string => {
  return active ? "Nieve: Activa" : "Nieve: Inactiva";
};



