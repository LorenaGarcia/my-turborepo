import { AltarTier } from "./ofrenda-data";

const SYMBOL_RIBBONS = [
  { icon: "🌼", color: "#FFA000", label: "Cempasúchil" },
  { icon: "💀", color: "#E91E63", label: "Calavera" },
  { icon: "☀️", color: "#00BCD4", label: "Luz Divina" },
  { icon: "🔥", color: "#FF5722", label: "Fuego Sagrado" },
  { icon: "💖", color: "#D81B60", label: "Amor Eterno" },
  { icon: "🌿", color: "#4CAF50", label: "Mictlán" },
  { icon: "🐾", color: "#FF9800", label: "Xoloitzcuintle" },
];

const TIER_SCALE: Record<AltarTier, number> = {
  cielo: 0.85,
  tierra: 1.0,
  inframundo: 1.15,
};

const TIER_SHELF_Y: Record<AltarTier, number> = {
  cielo: 5.0,
  tierra: 32,
  inframundo: 58.5,
};

const ARCO_LEFT_X = 50;
const ARCO_TOP_Y = -20;
const ARCO_SHELF_Y = -20;

export { SYMBOL_RIBBONS, TIER_SCALE, ARCO_LEFT_X, ARCO_TOP_Y, ARCO_SHELF_Y, TIER_SHELF_Y };
