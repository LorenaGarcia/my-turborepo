export type ItemCategory = "tierra" | "alma";
export type AltarTier = "cielo" | "tierra" | "inframundo";

export interface OfrendaCrop {
  sheet: "sheet1" | "sheet2" | "sheet3";
  x: number;
  y: number;
  w: number;
  h: number;
  bgThreshold?: number;
}

export interface OfrendaItem {
  id: string;
  name: string;
  category: ItemCategory;
  defaultTier: AltarTier;
  crop: OfrendaCrop;
  iconFallback?: string;
  isCandle?: boolean;
  height?: number;
  width?: number;
  heigth?: number;
  weigth?: number;
}

export const OFRENDA_ITEMS: OfrendaItem[] = [
  // ============================================
  // PANEL IZQUIERDO: LUZ Y MÍSTICA (TIERRA)
  // ============================================
  {
    id: "veladora",
    name: "Veladora",
    category: "tierra",
    defaultTier: "cielo",
    isCandle: true,
    height: 56,
    width: 48,
    crop: { sheet: "sheet3", x: 6, y: 2, w: 34, h: 28, bgThreshold: 235 },
  },
  {
    id: "copal",
    name: "Copal",
    category: "tierra",
    defaultTier: "inframundo",
    height: 56,
    width: 56,
    crop: { sheet: "sheet1", x: 41, y: 36.5, w: 18, h: 12.5, bgThreshold: 235 },
  },
  {
    id: "florero",
    name: "Flor de Cempasúchil",
    category: "tierra",
    defaultTier: "tierra",
    height: 60,
    width: 58,
    crop: { sheet: "sheet1", x: 67, y: 14, w: 28, h: 18.5, bgThreshold: 235 },
  },
  {
    id: "cruz",
    name: "Cruz",
    category: "tierra",
    defaultTier: "cielo",
    height: 70,
    width: 80,
    crop: {
      sheet: "sheet1",
      x: 33.5,
      y: 14.5,
      w: 29.5,
      h: 20,
      bgThreshold: 235,
    },
  },
  {
    id: "retrato_sagrado",
    name: "Retrato Sagrado",
    category: "tierra",
    defaultTier: "cielo",
    height: 56,
    width: 50,
    crop: {
      sheet: "sheet1",
      x: 21.5,
      y: 77.5,
      w: 29.5,
      h: 18,
      bgThreshold: 235,
    },
  },
  {
    id: "arco_flores",
    name: "Arco de Cempasúchil",
    category: "tierra",
    defaultTier: "cielo",
    height: 200,
    width: 250,
    crop: { sheet: "sheet1", x: 4.5, y: 64, w: 92, h: 33, bgThreshold: 235 },
  },
  {
    id: "dulces",
    name: "Dulces",
    category: "tierra",
    defaultTier: "tierra",
    height: 80,
    width: 0,
    crop: { sheet: "sheet1", x: 4.5, y: 52, w: 32.5, h: 15, bgThreshold: 235 },
  },
  {
    id: "flor",
    name: "Flor de Cempasúchil",
    category: "tierra",
    defaultTier: "inframundo",
    height: 40,
    width: 40,
    crop: { sheet: "sheet1", x: 36.5, y: 50, w: 24.5, h: 14, bgThreshold: 235 },
  },

  // ============================================
  // PANEL DERECHO: EL BANQUETE (ALMA)
  // ============================================
  {
    id: "pan_de_muerto1",
    name: "Pan de Muerto",
    category: "alma",
    defaultTier: "tierra",
    height: 66,
    width: 100,
    crop: {
      sheet: "sheet2",
      x: 2.8,
      y: 25.2,
      w: 29.5,
      h: 9.8,
      bgThreshold: 235,
    },
  },
  {
    id: "pan",
    name: "Pan de dulce",
    category: "alma",
    defaultTier: "tierra",
    height: 60,
    width: 75,
    crop: { sheet: "sheet3", x: 5.5, y: 30.5, w: 63, h: 22, bgThreshold: 235 },
  },
  {
    id: "calaverita",
    name: "Calaverita de chocolate",
    category: "alma",
    defaultTier: "tierra",
    height: 60,
    width: 70,
    crop: { sheet: "sheet2", x: 67, y: 27.5, w: 32, h: 18, bgThreshold: 235 },
  },
   {
    id: "calaverita_de_azucar",
    name: "Calaverita de azucar",
    category: "alma",
    defaultTier: "tierra",
    height: 60,
    width: 70,
    crop: { sheet: "sheet2", x: 67, y: 27.5, w: 32, h: 18, bgThreshold: 235 },
  },
  {
    id: "chocolate",
    name: "Chocolate",
    category: "alma",
    defaultTier: "tierra",
    height: 54,
    width: 52,
    crop: {
      sheet: "sheet1",
      x: 74.5,
      y: 2,
      w: 24.5,
      h: 12.5,
      bgThreshold: 235,
    },
  },
  {
    id: "cafe",
    name: "Café de olla",
    category: "alma",
    defaultTier: "tierra",
    height: 54,
    width: 52,
    crop: { sheet: "sheet2", x: 73.5, y: 44.5, w: 25, h: 15, bgThreshold: 235 },
  },
  {
    id: "tamales_plato",
    name: "Plato de Tamales",
    category: "alma",
    defaultTier: "tierra",
    height: 56,
    width: 75,
    crop: { sheet: "sheet1", x: 0, y: 27, w: 40, h: 11, bgThreshold: 235 },
  },
  {
    id: "arroz_con_mole",
    name: "Mole con Pollo y Arroz",
    category: "alma",
    defaultTier: "tierra",
    height: 56,
    width: 75,
    crop: {
      sheet: "sheet2",
      x: 1,
      y: 58.5,
      w: 37.5,
      h: 13.5,
      bgThreshold: 235,
    },
  },
  {
    id: "Tacos",
    name: "Tacos",
    category: "alma",
    defaultTier: "inframundo",
    height: 65,
    width: 80,
    crop: { sheet: "sheet2", x: 1.5, y: 72.5, w: 37, h: 18, bgThreshold: 235 },
  },
  {
    id: "tequila_caballito",
    name: "Tequila y Caballito",
    category: "alma",
    defaultTier: "inframundo",
    height: 52,
    width: 44,
    crop: { sheet: "sheet1", x: 2, y: 0.5, w: 24, h: 22, bgThreshold: 235 },
  },
  {
    id: "vaso_agua",
    name: "Vaso con Agua",
    category: "alma",
    defaultTier: "inframundo",
    height: 50,
    width: 42,
    crop: {
      sheet: "sheet1",
      x: 27,
      y: 1.5,
      w: 16.5,
      h: 12.5,
      bgThreshold: 235,
    },
  },
];
