export type OrnamentCategory = "esferas" | "figuras" | "mexicanos" | "puntas";

export type OrnamentVariant =
  | "esfera-carmesi"
  | "esfera-dorada"
  | "esfera-talavera"
  | "esfera-santa"
  | "esfera-esmeralda"
  | "esfera-copo"
  | "figura-campana"
  | "figura-baston"
  | "figura-copo"
  | "figura-bota"
  | "figura-galleta"
  | "figura-regalo"
  | "mexicano-pinata"
  | "mexicano-nochebuena"
  | "mexicano-farol"
  | "mexicano-estrella"
  | "mexicano-jarrito"
  | "mexicano-corazon"
  | "punta-estrella-roja"
  | "punta-estrella-dorada"
  | "punta-estrella-belen";

export interface OrnamentItem {
  id: string;
  name: string;
  category: OrnamentCategory;
  variant: OrnamentVariant;
  isTopper?: boolean;
}

export interface CategoryTabItem {
  id: OrnamentCategory;
  label: string;
}

export const ALL_ORNAMENTS: OrnamentItem[] = [
  // Esferas
  {
    id: "esfera-carmesi",
    name: "Esfera Carmesí",
    category: "esferas",
    variant: "esfera-carmesi",
  },
  {
    id: "esfera-dorada",
    name: "Esfera Dorada",
    category: "esferas",
    variant: "esfera-dorada",
  },
  {
    id: "esfera-santa",
    name: "Esfera Santa",
    category: "esferas",
    variant: "esfera-santa",
  },
  {
    id: "esfera-esmeralda",
    name: "Esfera Esmeralda",
    category: "esferas",
    variant: "esfera-esmeralda",
  },
  {
    id: "esfera-copo",
    name: "Esfera Copo",
    category: "esferas",
    variant: "esfera-copo",
  },

  // Figuras
  {
    id: "figura-campana",
    name: "Campana Dorada",
    category: "figuras",
    variant: "figura-campana",
  },
  {
    id: "figura-baston",
    name: "Bastón Dulce",
    category: "figuras",
    variant: "figura-baston",
  },
  {
    id: "figura-copo",
    name: "Copo Cristal",
    category: "figuras",
    variant: "figura-copo",
  },
  {
    id: "figura-bota",
    name: "Bota Navideña",
    category: "figuras",
    variant: "figura-bota",
  },
  {
    id: "figura-galleta",
    name: "Jengibre",
    category: "figuras",
    variant: "figura-galleta",
  },

  // Mexicanos
  {
    id: "mexicano-pinata",
    name: "Piñata 7 Picos",
    category: "mexicanos",
    variant: "mexicano-pinata",
  },
  {
    id: "mexicano-nochebuena",
    name: "Nochebuena",
    category: "mexicanos",
    variant: "mexicano-nochebuena",
  },
  // Puntas
  {
    id: "punta-estrella-roja",
    name: "Estrella Roja",
    category: "puntas",
    variant: "punta-estrella-roja",
    isTopper: true,
  },
  {
    id: "punta-estrella-dorada",
    name: "Estrella Dorada",
    category: "puntas",
    variant: "punta-estrella-dorada",
    isTopper: true,
  },
  {
    id: "punta-estrella-belen",
    name: "Lucero de Belén",
    category: "puntas",
    variant: "punta-estrella-belen",
    isTopper: true,
  },
];

export const getOrnamentCategories = (): CategoryTabItem[] => [
  { id: "esferas", label: "Esferas" },
  { id: "figuras", label: "Figuras" },
  { id: "mexicanos", label: "Mexicanos" },
  { id: "puntas", label: "Puntas" },
];

export const getOrnamentsByCategory = (
  category: OrnamentCategory
): OrnamentItem[] => {
  return ALL_ORNAMENTS.filter((item) => item.category === category);
};

export const getOrnamentById = (id: string): OrnamentItem | undefined => {
  return ALL_ORNAMENTS.find((item) => item.id === id);
};

export const getOrnamentSvgPath = (variant: OrnamentVariant): string => {
  return `/ornaments/${variant}.svg`;
};

export const getDecorationSteps = (): string[] => [
  "1. Selecciona un adorno de la caja.",
  "2. Haz clic en el adorno y luego en las ramas del árbol, o arrástralo directamente.",
  "3. Puedes moverlos libremente una vez colocados.",
];

