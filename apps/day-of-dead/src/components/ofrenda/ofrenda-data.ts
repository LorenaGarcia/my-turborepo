export type ItemCategory = "tierra" | "alma";
export type AltarTier = "cielo" | "tierra" | "inframundo";

export interface OfrendaCrop {
  sheet: "sheet1" | "sheet2" | "sheet3";
  // percentages 0-100
  x: number;
  y: number;
  w: number;
  h: number;
  // background tolerance for transparency (0-255)
  bgThreshold?: number;
}

export interface OfrendaItem {
  id: string;
  name: string;
  category: ItemCategory;
  defaultTier: AltarTier;
  crop: OfrendaCrop;
  iconFallback: string;
  isCandle?: boolean;
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
    crop: { sheet: "sheet3", x: 6, y: 2, w: 34, h: 28, bgThreshold: 235 },
    iconFallback: "🕯️",
  },
  {
    id: "sahumerio_copal",
    name: "Copal y Sahumador",
    category: "tierra",
    defaultTier: "inframundo",
    crop: { sheet: "sheet1", x: 41, y: 36.5, w: 18, h: 12.5, bgThreshold: 235 },
    iconFallback: "🏺",
  },
  {
    id: "florero_cempasuchil",
    name: "Flor de Cempasúchil",
    category: "tierra",
    defaultTier: "tierra",
    crop: { sheet: "sheet1", x: 67, y: 14, w: 28, h: 18.5, bgThreshold: 235 },
    iconFallback: "🌼",
  },
  {
    id: "cruz_madera",
    name: "Cruz Sagrada",
    category: "tierra",
    defaultTier: "cielo",
    crop: { sheet: "sheet1", x: 33.5, y: 14.5, w: 29.5, h: 20, bgThreshold: 235 },
    iconFallback: "✝️",
  },
  {
    id: "cruz_flores_vivas",
    name: "Cruz de Flores Vivas",
    category: "tierra",
    defaultTier: "cielo",
    crop: { sheet: "sheet2", x: 37, y: 66.5, w: 29, h: 21, bgThreshold: 235 },
    iconFallback: "🌸",
  },
  {
    id: "retrato_sagrado",
    name: "Retrato Sagrado",
    category: "tierra",
    defaultTier: "cielo",
    crop: { sheet: "sheet1", x: 21.5, y: 77.5, w: 29.5, h: 18, bgThreshold: 235 },
    iconFallback: "🖼️",
  },
  {
    id: "papel_picado_rojo",
    name: "Papel Picado Catrina",
    category: "tierra",
    defaultTier: "tierra",
    crop: { sheet: "sheet1", x: 63.5, y: 33.5, w: 34, h: 16, bgThreshold: 235 },
    iconFallback: "🚩",
  },
  {
    id: "papel_picado_magenta",
    name: "Papel Picado Rosa",
    category: "tierra",
    defaultTier: "tierra",
    crop: { sheet: "sheet1", x: 62, y: 51, w: 35, h: 15.5, bgThreshold: 235 },
    iconFallback: "🎊",
  },
  {
    id: "papel_picado_naranja",
    name: "Banderín Día de Muertos",
    category: "tierra",
    defaultTier: "inframundo",
    crop: { sheet: "sheet1", x: 52.5, y: 82.5, w: 33.5, h: 16, bgThreshold: 235 },
    iconFallback: "🎏",
  },
  {
    id: "arco_flores",
    name: "Arco de Cempasúchil",
    category: "tierra",
    defaultTier: "cielo",
    crop: { sheet: "sheet1", x: 4.5, y: 64, w: 92, h: 33, bgThreshold: 235 },
    iconFallback: "🌈",
  },
  {
    id: "calavera_cempasuchil",
    name: "Calavera Florida",
    category: "tierra",
    defaultTier: "tierra",
    crop: { sheet: "sheet1", x: 4.5, y: 52, w: 32.5, h: 15, bgThreshold: 235 },
    iconFallback: "💀",
  },
  {
    id: "ramillete_cempasuchil",
    name: "Flores de Cempasúchil",
    category: "tierra",
    defaultTier: "inframundo",
    crop: { sheet: "sheet1", x: 36.5, y: 50, w: 24.5, h: 14, bgThreshold: 235 },
    iconFallback: "💐",
  },

  // ============================================
  // PANEL DERECHO: EL BANQUETE (ALMA)
  // ============================================
  {
    id: "pan_de_muerto1",
    name: "Pan de Muerto",
    category: "alma",
    defaultTier: "tierra",
    crop: { sheet: "sheet2", x: 2.8, y: 25.2, w: 29.5, h: 9.8, bgThreshold: 235 },
    iconFallback: "🍞",
  },
  {
    id: "pan_de_muerto_dorado",
    name: "Pan Tradicional Dorado",
    category: "alma",
    defaultTier: "tierra",
    crop: { sheet: "sheet3", x: 5.5, y: 30.5, w: 63, h: 22, bgThreshold: 235 },
    iconFallback: "🥖",
  },
  {
    id: "calavera_azucar_frente",
    name: "Calavera de Azúcar",
    category: "alma",
    defaultTier: "tierra",
    crop: { sheet: "sheet2", x: 34, y: 26, w: 34, h: 19.5, bgThreshold: 235 },
    iconFallback: "🍬",
  },
  {
    id: "calavera_azucar_amarilla",
    name: "Calaverita Floral",
    category: "alma",
    defaultTier: "tierra",
    crop: { sheet: "sheet2", x: 33.5, y: 45.5, w: 41, h: 22.5, bgThreshold: 235 },
    iconFallback: "🎨",
  },
  {
    id: "calavera_azucar_derecha",
    name: "Calaverita de Azúcar Rosa",
    category: "alma",
    defaultTier: "tierra",
    crop: { sheet: "sheet2", x: 67, y: 27.5, w: 32, h: 18, bgThreshold: 235 },
    iconFallback: "🌸",
  },
  {
    id: "jarro_chocolate",
    name: "Jarro de Chocolate",
    category: "alma",
    defaultTier: "tierra",
    crop: { sheet: "sheet1", x: 74.5, y: 2, w: 24.5, h: 12.5, bgThreshold: 235 },
    iconFallback: "☕",
  },
  {
    id: "jarro_morado_flores",
    name: "Jarro Floral de Barro",
    category: "alma",
    defaultTier: "tierra",
    crop: { sheet: "sheet3", x: 47, y: 2, w: 51, h: 31, bgThreshold: 235 },
    iconFallback: "🏺",
  },
  {
    id: "cantarito_cafe",
    name: "Café de Olla",
    category: "alma",
    defaultTier: "tierra",
    crop: { sheet: "sheet2", x: 73.5, y: 44.5, w: 25, h: 15, bgThreshold: 235 },
    iconFallback: "☕",
  },
  {
    id: "tamales_plato",
    name: "Plato de Tamales",
    category: "alma",
    defaultTier: "tierra",
    crop: { sheet: "sheet1", x: 0, y: 27, w: 40, h: 11, bgThreshold: 235 },
    iconFallback: "🫔",
  },
  {
    id: "mole_pollo_arroz",
    name: "Mole con Pollo y Arroz",
    category: "alma",
    defaultTier: "tierra",
    crop: { sheet: "sheet2", x: 1, y: 58.5, w: 37.5, h: 13.5, bgThreshold: 235 },
    iconFallback: "🍛",
  },
  {
    id: "pozole_tradicional",
    name: "Pozole Rojo Tradicional",
    category: "alma",
    defaultTier: "inframundo",
    crop: { sheet: "sheet2", x: 1.5, y: 72.5, w: 37, h: 18, bgThreshold: 235 },
    iconFallback: "🍲",
  },
  {
    id: "churros_canela",
    name: "Churros con Azúcar",
    category: "alma",
    defaultTier: "tierra",
    crop: { sheet: "sheet2", x: 73.5, y: 60.5, w: 22.5, h: 23.5, bgThreshold: 235 },
    iconFallback: "🥨",
  },
  {
    id: "sopes_garnachas",
    name: "Sopes Tradicionales",
    category: "alma",
    defaultTier: "inframundo",
    crop: { sheet: "sheet2", x: 53.5, y: 83.5, w: 45, h: 15.5, bgThreshold: 235 },
    iconFallback: "🌮",
  },
  {
    id: "tequila_caballito",
    name: "Tequila y Caballito",
    category: "alma",
    defaultTier: "inframundo",
    crop: { sheet: "sheet1", x: 2, y: 0.5, w: 24, h: 22, bgThreshold: 235 },
    iconFallback: "🥃",
  },
  {
    id: "vaso_agua",
    name: "Vaso con Agua",
    category: "alma",
    defaultTier: "inframundo",
    crop: { sheet: "sheet1", x: 27, y: 1.5, w: 16.5, h: 12.5, bgThreshold: 235 },
    iconFallback: "🥛",
  },
];
