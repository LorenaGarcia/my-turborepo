export type PostalFilterId = "normal" | "calido" | "vintage" | "nieve";

export interface PostalFilterOption {
  id: PostalFilterId;
  label: string;
  cssFilter: string;
}

export interface PlacedPostalSticker {
  instanceId: string;
  stickerId: string;
  src: string;
  name: string;
  xPercent: number;
  yPercent: number;
}

export const POSTAL_FILTERS: PostalFilterOption[] = [
  {
    id: "normal",
    label: "Normal",
    cssFilter: "none",
  },
  {
    id: "calido",
    label: "Cálido Fogata",
    cssFilter: "sepia(0.28) saturate(1.38) contrast(1.05) brightness(1.03)",
  },
  {
    id: "vintage",
    label: "B&N Vintage",
    cssFilter: "grayscale(0.92) contrast(1.12) sepia(0.14)",
  },
  {
    id: "nieve",
    label: "Nieve Azul",
    cssFilter: "saturate(0.92) hue-rotate(12deg) brightness(1.06) contrast(1.04)",
  },
];

export const getPostalFilterCss = (filterId: PostalFilterId): string => {
  return (
    POSTAL_FILTERS.find((f) => f.id === filterId)?.cssFilter ?? "none"
  );
};

export const getInitialPostalStickers = (): PlacedPostalSticker[] => [];
