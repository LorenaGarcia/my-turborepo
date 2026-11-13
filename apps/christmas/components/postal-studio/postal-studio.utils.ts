export type PostalStudioTab = "marcos" | "elementos" | "texto";

export type PostalFrameId =
  | "marco-rojo-verde"
  | "marco-verde-dorado"
  | "marco-rojo-ondulado"
  | "marco-baston-rojo"
  | "marco-caramelo-ondulado"
  | "marco-lunares-rayas"
  | "marco-guirnalda-pino"
  | "marco-estrellas-festivo"
  | "marco-galletas-jengibre"
  | "marco-copos-ondulado"
  | "marco-tejido-copos-dorados"
  | "marco-muerdago-dorado"
  | "marco-regalos-estrellas"
  | "marco-bosque-pinos";

export type PostalFontId = "great-vibes" | "mountains" | "playfair";

export interface PostalFrameOption {
  id: PostalFrameId;
  name: string;
  src: string;
  popular?: boolean;
}

export interface PostalFrameElementsState {
  showLights: boolean;
  showGifts: boolean;
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
  width: number;
  height: number;
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
    src: "/postal-frames/marco-rojo-verde.svg",
    popular: true,
  },
  {
    id: "marco-verde-dorado",
    name: "Pino & Estrellas Doradas",
    src: "/postal-frames/marco-verde-dorado.svg",
  },
  {
    id: "marco-rojo-ondulado",
    name: "Sello Postal Carmesí",
    src: "/postal-frames/marco-rojo-ondulado.svg",
  },
  {
    id: "marco-baston-rojo",
    name: "Bastón de Caramelo",
    src: "/postal-frames/marco-baston-rojo.svg",
  },
  {
    id: "marco-caramelo-ondulado",
    name: "Caramelo Tricolor Nube",
    src: "/postal-frames/marco-caramelo-ondulado.svg",
  },
  {
    id: "marco-lunares-rayas",
    name: "Lunares & Rayas Vintage",
    src: "/postal-frames/marco-lunares-rayas.svg",
  },
  {
    id: "marco-guirnalda-pino",
    name: "Guirnalda de Pino & Moños",
    src: "/postal-frames/marco-guirnalda-pino.svg",
  },
  {
    id: "marco-estrellas-festivo",
    name: "Estrellas & Cuadros Festivos",
    src: "/postal-frames/marco-estrellas-festivo.svg",
  },
  {
    id: "marco-galletas-jengibre",
    name: "Villa de Galletas & Nieve",
    src: "/postal-frames/marco-galletas-jengibre.svg",
  },
  {
    id: "marco-copos-ondulado",
    name: "Copos & Onda Carmesí",
    src: "/postal-frames/marco-copos-ondulado.svg",
  },
  {
    id: "marco-tejido-copos-dorados",
    name: "Tejido & Copos Dorados",
    src: "/postal-frames/marco-tejido-copos-dorados.svg",
  },
  {
    id: "marco-muerdago-dorado",
    name: "Muérdago & Marco Dorado",
    src: "/postal-frames/marco-muerdago-dorado.svg",
  },
  {
    id: "marco-regalos-estrellas",
    name: "Regalos & Destellos",
    src: "/postal-frames/marco-regalos-estrellas.svg",
  },
  {
    id: "marco-bosque-pinos",
    name: "Bosque de Pinos",
    src: "/postal-frames/marco-bosque-pinos.svg",
  },
];

export const FRAME_ELEMENT_TOGGLES: FrameElementToggleItem[] = [
  {
    key: "showLights",
    name: "Luces Navideñas",
    previewIcon: "/postal-elements/frame-lights.svg",
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

export const POSTAL_ELEMENTS: PostalStickerItem[] = [
  {
    id: "elemento-montana-regalos",
    name: "Montaña de Regalos",
    src: "/postal-stickers/elemento-montana-regalos.svg",
    width: 200,
    height: 200,
  },
  {
    id: "elemento-arbol-luces",
    name: "Árbol con Luces",
    src: "/postal-stickers/elemento-arbol-luces.svg",
    width: 200,
    height: 300,
  },
  {
    id: "elemento-santa-regalos",
    name: "Santa con Regalos",
    src: "/postal-stickers/elemento-santa-regalos.svg",
    width: 180,
    height: 200,
  },
  {
    id: "elemento-muneco-nieve",
    name: "Muñeco de Nieve",
    src: "/postal-stickers/elemento-muneco-nieve.svg",
    width: 200,
    height: 200,
  },
  {
    id: "elemento-pinguino-gorro",
    name: "Pingüino Navideño",
    src: "/postal-stickers/elemento-pinguino-gorro.svg",
    width: 200,
    height: 200,
  },
  {
    id: "elemento-cascanueces",
    name: "Cascanueces",
    src: "/postal-stickers/elemento-cascanueces.svg",
    width: 200,
    height: 250,
  },
  {
    id: "elemento-nacimiento",
    name: "Nacimiento Navideño",
    src: "/postal-stickers/elemento-nacimiento.svg",
    width: 185,
    height: 200,
  },
  {
    id: "elemento-trineo-arbol",
    name: "Trineo con Árbol",
    src: "/postal-stickers/elemento-trineo-arbol.svg",
    width: 180,
    height: 200,
  },
  {
    id: "elemento-reyes-magos",
    name: "Los Reyes Magos",
    src: "/postal-stickers/elemento-reyes-magos.svg",
    width: 220,
    height: 175,
  },
  {
    id: "elemento-hohoho-gorro",
    name: "Ho Ho Ho Gorro",
    src: "/postal-stickers/elemento-hohoho-gorro.svg",
    width: 180,
    height: 200,
  },
  {
    id: "elemento-perrita-nochebuenas",
    name: "Perrita en Nochebuenas",
    src: "/postal-elements/elemento-perrita-nochebuenas.svg",
    width: 150,
    height: 120,
  },
  {
    id: "elemento-perrito-luces",
    name: "Perrito con Luces",
    src: "/postal-elements/elemento-perrito-luces.svg",
    width: 150,
    height: 130,
  },
  {
    id: "elemento-goku-santa",
    name: "Goku Santa Claus",
    src: "/postal-elements/elemento-goku-santa.svg",
    width: 135,
    height: 200,
  },
  {
    id: "elemento-spiderman-luces",
    name: "Spiderman con Luces",
    src: "/postal-elements/elemento-spiderman-luces.svg",
    width: 150,
    height: 200,
  },
  {
    id: "elemento-snoopy-navidad",
    name: "Snoopy Navideño",
    src: "/postal-elements/elemento-snoopy-navidad.svg",
    width: 110,
    height: 160,
  },
  {
    id: "elemento-hello-kitty-navidad",
    name: "Hello Kitty Santa",
    src: "/postal-elements/elemento-hello-kitty-navidad.svg",
    width: 140,
    height: 180,
  },
  {
    id: "elemento-goku-gorro",
    name: "Goku Gorro Navideño",
    src: "/postal-elements/elemento-goku-gorro.svg",
    width: 120,
    height: 120,
  },
  {
    id: "elemento-goku-arbol",
    name: "Goku Pino de Navidad",
    src: "/postal-elements/elemento-goku-arbol.svg",
    width: 145,
    height: 180,
  },
  {
    id: "elemento-pooh-luces",
    name: "Winnie Pooh con Luces",
    src: "/postal-elements/elemento-pooh-luces.svg",
    width: 135,
    height: 180,
  },
  {
    id: "elemento-buzz-luces",
    name: "Buzz Lightyear Navideño",
    src: "/postal-elements/elemento-buzz-luces.svg",
    width: 150,
    height: 180,
  },
  {
    id: "elemento-jengibre-lentes",
    name: "Galleta Jengibre con Luces",
    src: "/postal-elements/elemento-jengibre-lentes.svg",
    width: 160,
    height: 190,
  },
  {
    id: "elemento-stitch-navidad",
    name: "Stitch Navideño",
    src: "/postal-elements/elemento-stitch-navidad.svg",
    width: 135,
    height: 180,
  },
  {
    id: "elemento-taza-chocolate",
    name: "Taza de Chocolate",
    src: "/postal-stickers/elemento-taza-chocolate.svg",
    width: 100,
    height: 100,
  },
  {
    id: "elemento-santa-bordado",
    name: "Santa Bordado",
    src: "/postal-stickers/elemento-santa-bordado.svg",
    width: 100,
    height: 100,
  },
  {
    id: "elemento-pinata-tamales",
    name: "Piñata y Tamales",
    src: "/postal-stickers/elemento-pinata-tamales.svg",
    width: 100,
    height: 100,
  },
  {
    id: "elemento-nochebuena",
    name: "Flor de Nochebuena",
    src: "/postal-elements/elemento-nochebuena.svg",
    width: 100,
    height: 100,
  },
  {
    id: "elemento-pinata-estrella",
    name: "Piñata Estrella",
    src: "/postal-elements/elemento-pinata-estrella.svg",
    width: 120,
    height: 160,
  },
  {
    id: "elemento-torre-jengibre",
    name: "Torre de Jengibre",
    src: "/postal-elements/elemento-torre-jengibre.svg",
    width: 110,
    height: 290,
  },
  {
    id: "elemento-arbol-regalos",
    name: "Árbol con Regalos",
    src: "/postal-elements/elemento-arbol-regalos.svg",
    width: 150,
    height: 200,
  },
  {
    id: "elemento-arbol-liston",
    name: "Árbol con Listón",
    src: "/postal-elements/elemento-arbol-liston.svg",
    width: 150,
    height: 200,
  },
  {
    id: "elemento-santa-2027-verde",
    name: "Santa 2027 Verde",
    src: "/postal-elements/elemento-santa-2027-verde.svg",
    width: 150,
    height: 200,
  },
  {
    id: "elemento-santa-saco-verde",
    name: "Santa con Saco Verde",
    src: "/postal-elements/elemento-santa-saco-verde.svg",
    width: 140,
    height: 180,
  },
  {
    id: "elemento-reno-bufanda",
    name: "Reno con Bufanda",
    src: "/postal-elements/elemento-reno-bufanda.svg",
    width: 140,
    height: 200,
  },
  {
    id: "elemento-jengibre-bufanda",
    name: "Galleta Jengibre Bufanda",
    src: "/postal-elements/elemento-jengibre-bufanda.svg",
    width: 80,
    height: 100,
  },
  {
    id: "elemento-canasta-galletas",
    name: "Canasta de Galletas",
    src: "/postal-elements/elemento-canasta-galletas.svg",
    width: 75,
    height: 100,
  },
  {
    id: "elemento-grinch-arbol",
    name: "El Grinch con Árbol",
    src: "/postal-elements/elemento-grinch-arbol.svg",
    width: 250,
    height: 200,
  },
];

export const getPostalFrameById = (id: PostalFrameId): PostalFrameOption => {
  return POSTAL_FRAMES.find((f) => f.id === id) ?? POSTAL_FRAMES[0]!;
};

export const getPostalFontById = (fontId: PostalFontId): PostalFontOption => {
  return POSTAL_FONTS.find((f) => f.id === fontId) ?? POSTAL_FONTS[0]!;
};
