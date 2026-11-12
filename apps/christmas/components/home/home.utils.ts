export interface HeroCtaAction {
  id: string;
  label: string;
  href: string;
}

export interface FestiveBulb {
  id: string;
  color: string;
  glow: string;
}

export const getHeroCtaActions = (): HeroCtaAction[] => [
  {
    id: "adorna-arbol",
    label: "Adorna tu Árbol",
    href: "/arbol",
  },
  {
    id: "crea-porta-retrato",
    label: "Crea tu Postal",
    href: "/postal",
  },
];

export const getLeftFestiveBulbs = (): FestiveBulb[] => [
  { id: "left-red", color: "#ef4444", glow: "rgba(239, 68, 68, 0.85)" },
  { id: "left-green", color: "#22c55e", glow: "rgba(34, 197, 94, 0.85)" },
  { id: "left-white", color: "#ffffff", glow: "rgba(255, 255, 255, 0.9)" },
];

export const getRightFestiveBulbs = (): FestiveBulb[] => [
  { id: "right-white", color: "#ffffff", glow: "rgba(255, 255, 255, 0.9)" },
  { id: "right-red", color: "#ef4444", glow: "rgba(239, 68, 68, 0.85)" },
  { id: "right-green", color: "#22c55e", glow: "rgba(34, 197, 94, 0.85)" },
];
