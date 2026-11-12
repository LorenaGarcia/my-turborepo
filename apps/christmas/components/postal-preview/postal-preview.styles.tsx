"use client";

import styled from "styled-components";

export const PreviewCardColumn = styled.section`
  flex: 1;
  width: 100%;
  background: linear-gradient(165deg, #173323 0%, #102419 65%, #0c1c13 100%);
  border: 1.5px solid rgba(212, 148, 28, 0.45);
  border-radius: 20px;
  padding: 16px 14px 18px;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (min-width: 640px) {
    padding: 20px 24px 22px;
  }
`;

export const TopStatusRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 0.7rem;
  font-weight: 700;
`;

export const LiveIndicator = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #d1fae5;
`;

export const LiveGreenDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 9999px;
  background-color: #4ade80;
  box-shadow: 0 0 8px #4ade80;
`;

export const FrameUppercaseTag = styled.span`
  color: #4ade80;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const ClearElementsBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 9999px;
  border: 1px solid rgba(248, 113, 113, 0.45);
  background: rgba(127, 29, 29, 0.55);
  color: #fecaca;
  font-family: inherit;
  font-size: 0.68rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.16s ease;

  &:hover {
    background: rgba(220, 38, 38, 0.85);
    color: #ffffff;
    border-color: #fca5a5;
  }
`;

export const PostcardOuterFrame = styled.div`
  position: relative;
  width: 100%;
  max-width: 430px;
  aspect-ratio: 791 / 1024;
  background-color: transparent;
  border-radius: 8px;
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.55);
  overflow: hidden;
  user-select: none;
`;

export const PhotoWindow = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  background: transparent;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const UserPhotoImg = styled.img<{
  $zoom: number;
  $panX: number;
  $panY: number;
  $filter: string;
}>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  transform: translate(${({ $panX }) => $panX}px, ${({ $panY }) => $panY}px)
    scale(${({ $zoom }) => $zoom});
  filter: ${({ $filter }) => $filter};
  transition: filter 0.2s ease;
`;

export const TopLightsOverlayImg = styled.img`
  position: absolute;
  top: 2.4%;
  left: 3.1%;
  width: 93.8%;
  height: auto;
  z-index: 6;
  pointer-events: none;
`;

export const FullFrameOverlayImg = styled.img<{ $zIndex?: number }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: ${({ $zIndex }) => $zIndex ?? 5};
  pointer-events: none;
`;

export const OptionalFestiveText = styled.div<{
  $fontFamily: string;
  $color: string;
  $position: "top" | "bottom";
}>`
  position: absolute;
  left: 14%;
  right: 14%;
  ${({ $position }) =>
    $position === "top" ? "top: 12%;" : "bottom: 24.5%;"}
  z-index: 12;
  text-align: center;
  font-family: ${({ $fontFamily }) => $fontFamily};
  color: ${({ $color }) => $color};
  font-size: clamp(1.65rem, 4.2vw, 2.35rem);
  line-height: 1.15;
  text-shadow:
    0 3px 10px rgba(0, 0, 0, 0.72),
    0 1px 3px rgba(0, 0, 0, 0.85);
  pointer-events: none;
  word-break: break-word;
`;

export const PlacedStickerWrapper = styled.div<{
  $x: number;
  $y: number;
  $width: number;
  $height: number;
  $dragging: boolean;
}>`
  position: absolute;
  left: ${({ $x }) => $x}%;
  top: ${({ $y }) => $y}%;
  transform: translate(-50%, -50%)
    scale(${({ $dragging }) => ($dragging ? 1.12 : 1)});
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  z-index: 15;
  transition: transform 0.12s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.08);
    z-index: 18;
  }
`;

export const PlacedStickerBtn = styled.button`
  width: 100%;
  height: 100%;
  padding: 0;
  border: 1.5px dashed transparent;
  border-radius: 10px;
  background: transparent;
  cursor: grab;
  touch-action: none;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.45));
  transition: border-color 0.15s ease, background-color 0.15s ease;

  ${PlacedStickerWrapper}:hover & {
    border-color: rgba(250, 204, 21, 0.75);
    background: rgba(0, 0, 0, 0.18);
  }

  &:active {
    cursor: grabbing;
  }
`;

export const PlacedStickerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
`;

export const FrameElementHitZone = styled.div<{
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
  $width: string;
  $height: string;
  $zIndex?: number;
}>`
  position: absolute;
  ${({ $top }) => ($top ? `top: ${$top};` : "")}
  ${({ $bottom }) => ($bottom ? `bottom: ${$bottom};` : "")}
  ${({ $left }) => ($left ? `left: ${$left};` : "")}
  ${({ $right }) => ($right ? `right: ${$right};` : "")}
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  z-index: ${({ $zIndex }) => $zIndex ?? 10};
  cursor: pointer;
`;

export const BottomControlsRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-top: 4px;
`;

export const ZoomControlsGroup = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-right: 4px;
`;

export const ZoomLabel = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  color: #a7f3d0;
  margin-right: 2px;
`;

export const IconRoundBtn = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid rgba(250, 204, 21, 0.3);
  background: rgba(11, 28, 19, 0.85);
  color: #fef08a;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.16s ease;

  &:hover {
    background: rgba(234, 179, 8, 0.22);
    border-color: #facc15;
  }
`;

export const FilterPillBtn = styled.button<{ $active: boolean }>`
  padding: 5px 11px;
  border-radius: 8px;
  border: 1px solid
    ${({ $active }) =>
      $active ? "#fca5a5" : "rgba(250, 204, 21, 0.25)"};
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(180deg, #ef4444 0%, #b91c1c 100%)"
      : "rgba(11, 28, 19, 0.8)"};
  color: ${({ $active }) => ($active ? "#ffffff" : "#d1d5db")};
  font-family: inherit;
  font-size: 0.7rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.16s ease;

  &:hover {
    color: #ffffff;
    border-color: rgba(250, 204, 21, 0.6);
  }
`;
