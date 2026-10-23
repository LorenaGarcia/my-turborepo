import { AltarTier } from "./ofrenda-data";

interface PlacedInstance {
  instanceId: string;
  itemId: string;
  tier: AltarTier;
  xPercent: number;
  yPercent: number;
  zIndex?: number;
}



export type {PlacedInstance, AltarTier}