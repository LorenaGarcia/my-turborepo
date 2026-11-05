"use client";

import styled, { keyframes } from "styled-components";

const glowPulse = keyframes`
  0%, 100% {
    opacity: 0.95;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.55;
    transform: translate(-50%, -50%) scale(0.85);
  }
`;

export const CanvasCard = styled.section<{ $hasSelection?: boolean }>`
  position: relative;
  flex: 1;
  width: 100%;
  min-height: 460px;
  border-radius: 20px;
  border: 2px solid #d4941c;
  background: radial-gradient(
    circle at 50% 48%,
    #ffffff 0%,
    #ffffff 48%,
    #fce7d6 78%,
    #f7d6be 100%
  );
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.38),
    inset 0 0 40px rgba(212, 148, 28, 0.14);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  overflow: hidden;
  user-select: none;
  cursor: ${(props) => (props.$hasSelection ? "crosshair" : "default")};

  @media (min-width: 768px) {
    min-height: 640px;
    padding: 20px 24px 64px;
  }
`;

export const TreeInteractiveStage = styled.div`
  position: relative;
  width: 100%;
  max-width: 520px;
  aspect-ratio: 4 / 5;
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
`;

export const PineTreeImg = styled.img`
  width: 88%;
  height: 92%;
  object-fit: contain;
  pointer-events: none;
  user-select: none;
  filter: drop-shadow(0 10px 20px rgba(20, 42, 26, 0.18));
`;

export const GarlandSvgOverlay = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
`;

export const StringLightBulb = styled.span<{
  $x: number;
  $y: number;
  $color: string;
  $glow: string;
  $delay: number;
  $mode?: "titilantes" | "fijas" | "apagadas";
}>`
  position: absolute;
  left: ${(props) => props.$x}%;
  top: ${(props) => props.$y}%;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$mode === "apagadas" ? "rgba(156, 163, 175, 0.45)" : props.$color};
  box-shadow: ${(props) =>
    props.$mode === "apagadas"
      ? "none"
      : `0 0 8px 3px ${props.$glow}, 0 0 16px 5px ${props.$glow}`};
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 3;
  animation: ${(props) =>
      props.$mode === "titilantes" || !props.$mode ? glowPulse : "none"}
    2.4s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay}s;
`;

export const PlacedOrnamentButton = styled.button<{
  $x: number;
  $y: number;
  $isTopper?: boolean;
  $isDragging?: boolean;
}>`
  position: absolute;
  left: ${(props) => props.$x}%;
  top: ${(props) => props.$y}%;
  transform: translate(-50%, -50%)
    scale(${(props) => (props.$isDragging ? 1.12 : 1)});
  background: transparent;
  border: none;
  padding: 0;
  cursor: ${(props) => (props.$isDragging ? "grabbing" : "grab")};
  z-index: ${(props) => (props.$isTopper ? 6 : 5)};
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.32));
  transition: transform 0.12s ease;
  touch-action: none;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

export const CanvasBottomBar = styled.div`
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  z-index: 8;
  pointer-events: none;

  @media (min-width: 640px) {
    flex-direction: row;
    left: 20px;
    right: 20px;
    bottom: 16px;
  }
`;

export const HintPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(212, 148, 28, 0.35);
  border-radius: 9999px;
  padding: 7px 14px;
  font-size: 0.72rem;
  font-weight: 700;
  color: #374151;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(6px);
  text-align: center;
`;

export const HintIconSpan = styled.span`
  color: #dc2626;
  display: inline-flex;
  align-items: center;
`;

export const TraditionPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(21, 128, 61, 0.3);
  border-radius: 9999px;
  padding: 7px 14px;
  font-size: 0.72rem;
  font-weight: 800;
  color: #15803d;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;
