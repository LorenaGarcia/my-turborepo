import { OFRENDA_ITEMS, OfrendaItem, AltarTier } from "./ofrenda-data";
import { TIER_SCALE } from "./ofrenda.constants";

export const isArcoItem = (itemId?: string | null): boolean => {
  if (!itemId) return false;
  return itemId === "arco_flores" || itemId.includes("arco");
};

const getItemHeight = (
  itemOrId: OfrendaItem | string,
  tier: AltarTier
): number => {
  const item =
    typeof itemOrId === "string"
      ? OFRENDA_ITEMS.find((i) => i.id === itemOrId)
      : itemOrId;

  const baseHeight = item?.height ?? item?.heigth ?? 56;
  if (isArcoItem(item?.id)) {
    return baseHeight;
  }
  return Math.round(baseHeight * TIER_SCALE[tier]);
};

const getItemWidth = (
  itemOrId: OfrendaItem | string,
  tier: AltarTier
): number | undefined => {
  const item =
    typeof itemOrId === "string"
      ? OFRENDA_ITEMS.find((i) => i.id === itemOrId)
      : itemOrId;

  const baseWidth = item?.width ?? item?.weigth;
  if (!baseWidth) return undefined;
  if (isArcoItem(item?.id)) {
    return baseWidth;
  }
  return Math.round(baseWidth * TIER_SCALE[tier]);
};

const getTierFromYPercent = (yPercent: number): AltarTier => {
  if (yPercent < 28) return "cielo";
  if (yPercent < 48) return "tierra";
  return "inframundo";
};

const getClampedX = (tier: AltarTier, xPercent: number): number => {
  if (tier === "cielo") return Math.max(24, Math.min(76, xPercent));
  if (tier === "tierra") return Math.max(16, Math.min(84, xPercent));
  return Math.max(10, Math.min(90, xPercent));
};


export { getItemHeight, getItemWidth, getTierFromYPercent, getClampedX };
