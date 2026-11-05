export interface PlacedOrnament {
  instanceId: string;
  ornamentId: string;
  xPercent: number;
  yPercent: number;
}

export interface TreeStringLight {
  id: string;
  x: number;
  y: number;
  color: string;
  glow: string;
  delay: number;
}

export interface GarlandCurve {
  id: string;
  d: string;
}


export const getTreeGarlandCurves = (): GarlandCurve[] => [
  { id: "garland-1", d: "M 32 26 Q 45 31 58 25" },
  { id: "garland-2", d: "M 26 40 Q 46 47 64 38" },
  { id: "garland-3", d: "M 22 55 Q 46 64 70 52" },
  { id: "garland-4", d: "M 18 71 Q 48 80 76 68" },
];

export const getTreeStringLights = (): TreeStringLight[] => [
  {
    id: "l1",
    x: 33,
    y: 26,
    color: "#ef4444",
    glow: "rgba(239,68,68,0.85)",
    delay: 0.1,
  },
  {
    id: "l2",
    x: 41,
    y: 28,
    color: "#facc15",
    glow: "rgba(250,204,21,0.85)",
    delay: 0.5,
  },
  {
    id: "l3",
    x: 49,
    y: 27,
    color: "#22c55e",
    glow: "rgba(34,197,94,0.85)",
    delay: 0.9,
  },
  {
    id: "l4",
    x: 28,
    y: 41,
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.85)",
    delay: 0.3,
  },
  {
    id: "l5",
    x: 37,
    y: 43,
    color: "#facc15",
    glow: "rgba(250,204,21,0.85)",
    delay: 0.7,
  },
  {
    id: "l6",
    x: 48,
    y: 43,
    color: "#f43f5e",
    glow: "rgba(244,63,94,0.85)",
    delay: 1.1,
  },
  {
    id: "l7",
    x: 59,
    y: 40,
    color: "#22c55e",
    glow: "rgba(34,197,94,0.85)",
    delay: 0.4,
  },
  {
    id: "l8",
    x: 24,
    y: 55,
    color: "#facc15",
    glow: "rgba(250,204,21,0.85)",
    delay: 0.2,
  },
  {
    id: "l9",
    x: 36,
    y: 58,
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.85)",
    delay: 0.8,
  },
  {
    id: "l10",
    x: 49,
    y: 59,
    color: "#facc15",
    glow: "rgba(250,204,21,0.85)",
    delay: 1.2,
  },
  {
    id: "l11",
    x: 62,
    y: 55,
    color: "#ef4444",
    glow: "rgba(239,68,68,0.85)",
    delay: 0.6,
  },
  {
    id: "l12",
    x: 21,
    y: 71,
    color: "#facc15",
    glow: "rgba(250,204,21,0.85)",
    delay: 0.3,
  },
  {
    id: "l13",
    x: 34,
    y: 74,
    color: "#22c55e",
    glow: "rgba(34,197,94,0.85)",
    delay: 0.9,
  },
  {
    id: "l14",
    x: 47,
    y: 75,
    color: "#ec4899",
    glow: "rgba(236,72,153,0.85)",
    delay: 0.5,
  },
  {
    id: "l15",
    x: 60,
    y: 73,
    color: "#22c55e",
    glow: "rgba(34,197,94,0.85)",
    delay: 1.0,
  },
];

export const clampPercentage = (value: number, min = 8, max = 92): number => {
  return Math.max(min, Math.min(max, Math.round(value * 10) / 10));
};

export const getRelativeCoordinates = (
  clientX: number,
  clientY: number,
  rect: DOMRect
): { xPercent: number; yPercent: number } => {
  const rawX = ((clientX - rect.left) / rect.width) * 100;
  const rawY = ((clientY - rect.top) / rect.height) * 100;
  return {
    xPercent: clampPercentage(rawX, 8, 92),
    yPercent: clampPercentage(rawY, 5, 90),
  };
};

