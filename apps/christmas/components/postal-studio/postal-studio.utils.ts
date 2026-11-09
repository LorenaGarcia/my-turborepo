export type PostalStudioTab = "marcos" | "elementos" | "stickers" | "texto";

export type PostalFrameId =
  | "marco-rojo-verde"
  | "marco-verde-dorado"
  | "marco-rojo-ondulado"
  | "marco-baston-rojo"
  | "marco-caramelo-ondulado"
  | "marco-lunares-rayas";

export type PostalFontId = "great-vibes" | "mountains" | "playfair";

export interface PostalFrameOption {
  id: PostalFrameId;
  name: string;
  description: string;
  src: string;
  popular?: boolean;
}

export interface PostalFrameElementsState {
  showLights: boolean;
  showTrees: boolean;
  showGifts: boolean;
  showSnowDots: boolean;
}

export interface PostalTextState {
  enabled: boolean;
  text: string;
  fontId: PostalFontId;
  color: string;
  position: "top" | "bottom";
}

export interface ColorSwatchItem {
  id: string;
  name: string;
  hex: string;
}

export interface PostalFontOption {
  id: PostalFontId;
  label: string;
  fontFamily: string;
  canvasFont: string;
}

export interface PostalStickerItem {
  id: string;
  name: string;
  src: string;
}

export interface FrameElementToggleItem {
  key: keyof PostalFrameElementsState;
  name: string;
  previewIcon: string;
}

export const POSTAL_FRAMES: PostalFrameOption[] = [
  {
    id: "marco-rojo-verde",
    name: "Clásico Rojo & Verde",
    description: "Marco rojo navideño con contorno verde festivo",
    src: "/postal-frames/marco-rojo-verde.svg",
    popular: true,
  },
  {
    id: "marco-verde-dorado",
    name: "Pino & Estrellas Doradas",
    description: "Marco verde bosque con filo dorado y estrellas",
    src: "/postal-frames/marco-verde-dorado.svg",
  },
  {
    id: "marco-rojo-ondulado",
    name: "Sello Postal Carmesí",
    description: "Marco rojo intenso con recorte interior ondulado",
    src: "/postal-frames/marco-rojo-ondulado.svg",
  },
  {
    id: "marco-baston-rojo",
    name: "Bastón de Caramelo",
    description: "Borde diagonal de rayas rojas y blancas",
    src: "/postal-frames/marco-baston-rojo.svg",
  },
  {
    id: "marco-caramelo-ondulado",
    name: "Caramelo Tricolor Nube",
    description: "Rayas rojas, verdes y blancas con borde ondulado",
    src: "/postal-frames/marco-caramelo-ondulado.svg",
  },
  {
    id: "marco-lunares-rayas",
    name: "Lunares & Rayas Vintage",
    description: "Textura roja con lunares, listón verde y silueta clásica",
    src: "/postal-frames/marco-lunares-rayas.svg",
  },
];

export const FRAME_ELEMENT_TOGGLES: FrameElementToggleItem[] = [
  {
    key: "showLights",
    name: "Luces Navideñas",
    previewIcon: "/postal-elements/frame-lights.svg",
  },
  {
    key: "showSnowDots",
    name: "Copos de Nieve",
    previewIcon: "/ornaments/figura-copo.svg",
  },
];

export const POSTAL_FONTS: PostalFontOption[] = [
  {
    id: "great-vibes",
    label: "Caligrafía Navideña",
    fontFamily: "'Great Vibes', cursive, Georgia, serif",
    canvasFont: "400 54px 'Great Vibes', cursive, Georgia, serif",
  },
  {
    id: "mountains",
    label: "Cuento de Navidad",
    fontFamily: "'Mountains of Christmas', cursive, Georgia, serif",
    canvasFont: "700 48px 'Mountains of Christmas', cursive, Georgia, serif",
  },
  {
    id: "playfair",
    label: "Clásica Elegante",
    fontFamily: "'Playfair Display', Georgia, serif",
    canvasFont: "italic 700 42px 'Playfair Display', Georgia, serif",
  },
];

export const TEXT_COLOR_SWATCHES: ColorSwatchItem[] = [
  { id: "txt-blanco", name: "Blanco", hex: "#ffffff" },
  { id: "txt-dorado", name: "Dorado", hex: "#fde047" },
  { id: "txt-rojo", name: "Rojo", hex: "#dc2626" },
  { id: "txt-verde", name: "Verde", hex: "#15803d" },
];

export const POSTAL_STICKERS: PostalStickerItem[] = [
  {
    id: "elemento-montana-regalos",
    name: "Montaña de Regalos",
    src: "/postal-stickers/elemento-montana-regalos.svg",
  },
  {
    id: "elemento-taza-chocolate",
    name: "Taza de Chocolate",
    src: "/postal-stickers/elemento-taza-chocolate.svg",
  },
  {
    id: "elemento-arbol-luces",
    name: "Árbol con Luces",
    src: "/postal-stickers/elemento-arbol-luces.svg",
  },
  {
    id: "elemento-santa-regalos",
    name: "Santa con Regalos",
    src: "/postal-stickers/elemento-santa-regalos.svg",
  },
  {
    id: "elemento-santa-bordado",
    name: "Santa Bordado",
    src: "/postal-stickers/elemento-santa-bordado.svg",
  },
  {
    id: "elemento-cascanueces",
    name: "Cascanueces",
    src: "/postal-stickers/elemento-cascanueces.svg",
  },
  {
    id: "elemento-muneco-nieve",
    name: "Muñeco de Nieve",
    src: "/postal-stickers/elemento-muneco-nieve.svg",
  },
  {
    id: "elemento-pinguino-gorro",
    name: "Pingüino Navideño",
    src: "/postal-stickers/elemento-pinguino-gorro.svg",
  },
];

export const getPostalFrameById = (id: PostalFrameId): PostalFrameOption => {
  return POSTAL_FRAMES.find((f) => f.id === id) ?? POSTAL_FRAMES[0]!;
};

export const getPostalFontById = (fontId: PostalFontId): PostalFontOption => {
  return POSTAL_FONTS.find((f) => f.id === fontId) ?? POSTAL_FONTS[0]!;
};
