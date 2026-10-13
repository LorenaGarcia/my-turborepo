"use client";

import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";

const pulseGlow = keyframes`
  0%, 100% {
    opacity: 0.22;
    transform: scale(1);
  }
  50% {
    opacity: 0.38;
    transform: scale(1.08);
  }
`;

const candleFlicker = keyframes`
  0%, 100% {
    transform: scaleY(1) scaleX(1) rotate(-1deg);
    opacity: 0.95;
    filter: drop-shadow(0 0 8px #FFA000) drop-shadow(0 0 16px #FF6D00);
  }
  25% {
    transform: scaleY(1.15) scaleX(0.92) rotate(2deg);
    opacity: 1;
    filter: drop-shadow(0 0 12px #FFD54F) drop-shadow(0 0 24px #FF7043);
  }
  50% {
    transform: scaleY(0.92) scaleX(1.08) rotate(-2deg);
    opacity: 0.88;
    filter: drop-shadow(0 0 7px #FFA000) drop-shadow(0 0 14px #FF5722);
  }
  75% {
    transform: scaleY(1.2) scaleX(0.88) rotate(1.5deg);
    opacity: 1;
    filter: drop-shadow(0 0 14px #FFE082) drop-shadow(0 0 28px #FF6D00);
  }
`;

const floatGentle = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
`;

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #0A040F;
  background-image: 
    radial-gradient(ellipse at 50% 15%, rgba(45, 14, 60, 0.65) 0%, rgba(10, 4, 15, 0.95) 70%),
    linear-gradient(180deg, rgba(10, 4, 15, 0.7) 0%, rgba(10, 4, 15, 0.92) 50%, rgba(10, 4, 15, 1) 100%),
    url('/bg-altar.jpg');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  color: #FFF9E6;
  position: relative;
  overflow-x: hidden;
`;

export const ContentWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 100px 24px 60px;
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 1540px;
  margin: 0 auto;
`;

export const TitleBacklight = styled.div`
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 750px;
  height: 380px;
  background: radial-gradient(ellipse at center, rgba(255, 122, 0, 0.3) 0%, rgba(233, 30, 99, 0.18) 50%, transparent 70%);
  filter: blur(60px);
  pointer-events: none;
  animation: ${pulseGlow} 5s ease-in-out infinite;
  z-index: 0;
`;

// ============================================
// TOP SYMBOLS RIBBON
// ============================================
export const SymbolsRibbon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 22px;
  z-index: 2;
  flex-wrap: wrap;
`;

export const RibbonBadge = styled.div<{ $color: string }>`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: ${(props) => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  box-shadow: 0 4px 12px ${(props) => props.$color}40, inset 0 1px 1px rgba(255, 255, 255, 0.4);
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: default;

  &:hover {
    transform: translateY(-3px) scale(1.1);
  }
`;

// ============================================
// HEADER SECTION
// ============================================
export const RitualPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(35, 14, 48, 0.85);
  border: 1px solid rgba(255, 138, 20, 0.45);
  border-radius: 9999px;
  padding: 6px 18px;
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 2.2px;
  color: #FFB366;
  text-transform: uppercase;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.35);
  z-index: 2;
  margin-bottom: 10px;
`;

export const MainTitle = styled.h1`
  font-family: 'Cinzel Decorative', 'Cinzel', serif;
  font-size: clamp(2.4rem, 5vw, 4.4rem);
  font-weight: 900;
  letter-spacing: 2px;
  margin: 0 0 12px;
  line-height: 1.15;
  background: linear-gradient(180deg, #FFFFFF 0%, #FFE2C2 35%, #FF8A14 80%, #E65100 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 4px 22px rgba(255, 122, 0, 0.45));
  z-index: 2;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: clamp(0.95rem, 1.5vw, 1.12rem);
  color: #DCC8E8;
  max-width: 720px;
  margin: 0 auto 28px;
  line-height: 1.6;
  text-align: center;
  z-index: 2;
  font-weight: 400;
`;

// ============================================
// CONTROLS TOOLBAR
// ============================================
export const ToolbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: rgba(23, 10, 32, 0.8);
  border: 1px solid rgba(255, 140, 25, 0.3);
  border-radius: 9999px;
  padding: 8px 18px;
  backdrop-filter: blur(16px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.1);
  margin-bottom: 32px;
  z-index: 10;
  flex-wrap: wrap;
`;

export const CounterBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #F5E8FF;
  padding-right: 14px;
  border-right: 1px solid rgba(255, 255, 255, 0.15);

  strong {
    color: #FF9D00;
    font-size: 1.05rem;
    font-weight: 800;
  }
`;

export const ToolbarButton = styled.button<{ $variant?: "secondary" | "primary" | "active" }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 9999px;
  font-size: 0.86rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
  border: 1px solid transparent;

  ${(props) =>
    props.$variant === "primary"
      ? css`
          background: linear-gradient(135deg, #FF8A00 0%, #FF5722 100%);
          color: #FFF9E6;
          box-shadow: 0 4px 18px rgba(255, 110, 0, 0.45);

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 24px rgba(255, 110, 0, 0.65);
            background: linear-gradient(135deg, #FFA000 0%, #F4511E 100%);
          }
        `
      : props.$variant === "active"
      ? css`
          background: rgba(255, 160, 0, 0.22);
          border-color: #FFA000;
          color: #FFD54F;
          box-shadow: 0 0 14px rgba(255, 160, 0, 0.35);
        `
      : css`
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.12);
          color: #E6D8F2;

          &:hover {
            background: rgba(255, 255, 255, 0.12);
            color: #FFFFFF;
            transform: translateY(-1px);
          }
        `}

  &:active {
    transform: scale(0.97);
  }
`;

// ============================================
// MAIN THREE-COLUMN WORKSPACE
// ============================================
export const WorkspaceLayout = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr 340px;
  gap: 24px;
  width: 100%;
  align-items: start;
  z-index: 5;

  @media (max-width: 1300px) {
    grid-template-columns: 300px 1fr 300px;
    gap: 16px;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

// ============================================
// SIDE PANELS (LEFT & RIGHT GRIDS)
// ============================================
export const SidePanel = styled.aside<{ $isDraggingActive?: boolean }>`
  background: rgba(22, 10, 30, 0.72);
  border: 1px solid rgba(255, 138, 20, 0.22);
  border-radius: 20px;
  padding: 20px 16px;
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-height: 860px;
  overflow-y: ${(props) => (props.$isDraggingActive ? "visible" : "auto")};
  overflow-x: visible;
  position: relative;
  z-index: 10;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 138, 20, 0.35);
    border-radius: 4px;
  }
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 12px;
`;

export const PanelTitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PanelDot = styled.span<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.$color};
  box-shadow: 0 0 10px ${(props) => props.$color};
`;

export const PanelTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: #FFF2E0;
  margin: 0;
`;

export const CategoryTag = styled.span`
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.08);
  color: #CDB9DF;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const PanelDescription = styled.p`
  font-size: 0.8rem;
  color: #BBA5CC;
  line-height: 1.45;
  margin: 0;
`;

// Items Grid
export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 4px 2px;
  overflow: visible;
`;

export const ItemCard = styled(motion.div)<{
  $isPlaced?: boolean;
  $isDragging?: boolean;
  $isSelected?: boolean;
}>`
  background: ${(props) =>
    props.$isSelected
      ? "rgba(255, 138, 20, 0.25)"
      : "rgba(34, 15, 46, 0.65)"};
  border: 1px solid
    ${(props) =>
      props.$isSelected
        ? "#FF9D00"
        : props.$isPlaced
        ? "rgba(255, 160, 0, 0.5)"
        : "rgba(255, 255, 255, 0.08)"};
  border-radius: 14px;
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: grab;
  position: relative;
  user-select: none;
  touch-action: none;
  transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
  overflow: visible;

  ${(props) =>
    props.$isSelected &&
    css`
      box-shadow: 0 0 16px rgba(255, 157, 0, 0.45);
    `}

  &:hover {
    background: rgba(48, 22, 66, 0.85);
    border-color: rgba(255, 140, 25, 0.55);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4), 0 0 14px rgba(255, 140, 25, 0.25);
  }

  &:active {
    cursor: grabbing;
  }

  ${(props) =>
    props.$isDragging &&
    css`
      z-index: 25 !important;
      opacity: 0.95;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 25px rgba(255, 140, 25, 0.8);
      transform: scale(1.15) !important;
    `}
`;

export const ItemThumbnailWrap = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  position: relative;
`;

export const ItemImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
  transition: transform 0.25s ease;

  ${ItemCard}:hover & {
    transform: scale(1.08);
  }
`;

export const ItemIconFallback = styled.span`
  font-size: 2.4rem;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.6));
`;

export const ItemName = styled.h3`
  font-size: 0.82rem;
  font-weight: 700;
  color: #FFF2DF;
  margin: 0 0 4px;
  line-height: 1.25;
`;

export const ItemSubtitle = styled.p`
  font-size: 0.68rem;
  color: #AFA0BE;
  margin: 0 0 8px;
  line-height: 1.25;
`;

export const PlacedCountBadge = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  background: #FF8A00;
  color: #0A040F;
  font-size: 0.62rem;
  font-weight: 900;
  border-radius: 9999px;
  padding: 1px 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
`;


export const ItemActionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: auto;
  padding-top: 6px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

export const DragHint = styled.span`
  font-size: 0.65rem;
  color: #8C7B9E;
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const AddButton = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(255, 140, 25, 0.18);
  border: 1px solid rgba(255, 140, 25, 0.45);
  color: #FFB366;
  font-size: 0.8rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #FF8A00;
    color: #0A040F;
    transform: scale(1.15);
  }
`;

// ============================================
// CENTER ALTAR STAGE (IMAGE 2 DESIGN)
// ============================================
export const AltarStageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const AltarContainer = styled.div`
  width: 100%;
  max-width: 660px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.6));
`;

export const AltarBackingImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  user-select: none;
  pointer-events: none;
`;

export const TierGuideZone = styled.div<{ $isOver?: boolean; $tier: string; $isAnyDragging?: boolean }>`
  position: absolute;
  border-radius: 12px;
  transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
  padding: 6px 12px 12px;
  z-index: 10;
  pointer-events: none;
  overflow: visible;

  /* Positioning matching the 3 steps of Image 2 */
  ${(props) =>
    props.$tier === "cielo" &&
    css`
      top: 2.5%;
      left: 28%;
      width: 44%;
      height: 22%;
    `}

  ${(props) =>
    props.$tier === "tierra" &&
    css`
      top: 29%;
      left: 17%;
      width: 66%;
      height: 24%;
    `}

  ${(props) =>
    props.$tier === "inframundo" &&
    css`
      top: 55%;
      left: 6%;
      width: 88%;
      height: 28%;
    `}

  ${(props) =>
    props.$isOver
      ? css`
          background: rgba(255, 160, 0, 0.28);
          border: 2.5px dashed #FFA000;
          box-shadow: 0 0 35px rgba(255, 160, 0, 0.65), inset 0 0 20px rgba(255, 160, 0, 0.35);
        `
      : props.$isAnyDragging
      ? css`
          border: 1.5px dashed rgba(255, 160, 0, 0.45);
          background: rgba(255, 160, 0, 0.08);
          animation: ${pulseGlow} 2s infinite ease-in-out;
        `
      : css`
          border: 1px dashed rgba(255, 255, 255, 0.12);
          background: rgba(0, 0, 0, 0.03);
        `}
`;

export const TierOverlayZone = TierGuideZone;

export const ToastFeedback = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #FF8A00 0%, #E65100 100%);
  color: #FFF9E6;
  font-weight: 800;
  font-size: 0.92rem;
  padding: 10px 24px;
  border-radius: 9999px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 140, 25, 0.5);
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 50;
  pointer-events: none;
`;

export const TierLabelBadge = styled.div<{ $tier: string }>`
  position: absolute;
  top: -12px;
  left: 10px;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 9999px;
  background: rgba(20, 8, 28, 0.92);
  border: 1px solid rgba(255, 140, 25, 0.5);
  color: #FFB366;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  pointer-events: none;
`;

export const ItemRemoveBtn = styled.button`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: rgba(220, 38, 38, 0.9);
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  opacity: 0;
  padding: 0;
  line-height: 1;
  pointer-events: none;
  z-index: 100;
  transition: opacity 0.15s ease, transform 0.15s ease, background 0.15s ease;

  &:hover {
    background: #FF1744;
    transform: scale(1.18);
  }
`;

export const PlacedItemDraggable = styled(motion.div)<{
  $scale?: number;
  $xPercent: number;
  $yPercent: number;
  $zIndex?: number;
  $isDraggingThis?: boolean;
}>`
  position: absolute;
  left: ${(props) => `${props.$xPercent}%`};
  top: ${(props) => `${props.$yPercent}%`};
  transform: translate(-50%, -100%);
  /* Reglas de orden de apilamiento: los niveles superiores (atrás) tienen menor z-index,
     los niveles inferiores (frente) mayor z-index, y el arrastre se eleva al frente */
  z-index: ${(props) =>
    props.$isDraggingThis
      ? 10
      : props.$zIndex ?? (props.$yPercent < 20 ? 1 : props.$yPercent < 45 ? 2 : 3)};
  cursor: ${(props) => (props.$isDraggingThis ? "grabbing" : "grab")};
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  touch-action: none;
  pointer-events: auto;
  transition: ${(props) =>
    props.$isDraggingThis
      ? "none"
      : "filter 0.2s ease, transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), top 0.22s ease-out"};

  ${(props) =>
    props.$isDraggingThis &&
    css`
      filter: drop-shadow(0 14px 24px rgba(255, 160, 0, 0.75)) brightness(1.12);
      transform: translate(-50%, -100%) scale(1.08) !important;
    `}

  &:hover {
    filter: drop-shadow(0 8px 14px rgba(255, 160, 0, 0.5));
  }

  &:hover ${ItemRemoveBtn} {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const PlacedItemImg = styled.img<{ $height?: number }>`
  height: ${(props) => props.$height || 64}px;
  max-width: 125px;
  object-fit: contain;
  filter: drop-shadow(0 5px 8px rgba(0, 0, 0, 0.7));
  pointer-events: none;
  user-select: none;
`;

export const PlacedItemFallback = styled.span<{ $size?: number }>`
  font-size: ${(props) => props.$size || 2.4}rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.7));
  pointer-events: none;
  user-select: none;
`;

// Candle Flame Effect
export const CandleFlameEffect = styled.div`
  position: absolute;
  top: -14px;
  left: 30%;
  transform: translateX(-50%);
  width: 14px;
  height: 22px;
  background: radial-gradient(ellipse at bottom, #FFF 0%, #FFD54F 35%, #FF6D00 75%, transparent 100%);
  border-radius: 50% 50% 35% 35%;
  animation: ${candleFlicker} 1.2s ease-in-out infinite alternate;
  pointer-events: none;
  z-index: 20;
`;

export const CandleAura = styled.div`
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, rgba(255, 160, 0, 0.35) 0%, rgba(255, 87, 34, 0.15) 50%, transparent 75%);
  border-radius: 50%;
  filter: blur(8px);
  pointer-events: none;
  animation: ${pulseGlow} 2s ease-in-out infinite;
`;

export const ItemLabelTag = styled.div`
  position: absolute;
  bottom: -22px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(14, 6, 20, 0.95);
  border: 1px solid rgba(255, 160, 0, 0.55);
  color: #FFE082;
  font-size: 0.62rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 5px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
  z-index: 100;

  ${PlacedItemDraggable}:hover & {
    opacity: 1;
  }
`;

export const RemoveTooltip = ItemLabelTag;

export const DropPreviewGhost = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  left: ${(props) => `${props.$x}%`};
  top: ${(props) => `${props.$y}%`};
  transform: translate(-50%, -100%);
  pointer-events: none;
  z-index: 15;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.05s ease-out;
`;

export const DropTargetRing = styled.div`
  position: absolute;
  bottom: 0;
  width: 56px;
  height: 24px;
  border-radius: 50%;
  border: 2px dashed #FFA000;
  background: radial-gradient(ellipse at center, rgba(255, 160, 0, 0.45) 0%, transparent 70%);
  animation: ${pulseGlow} 1.2s infinite ease-in-out;
`;

export const TipBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
  font-size: 0.82rem;
  color: #C0ACCE;
  text-align: center;
  background: rgba(22, 10, 30, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 9999px;
  padding: 8px 20px;
  backdrop-filter: blur(8px);
`;

// ============================================
// BOTTOM SIGNIFICADO CARD
// ============================================
export const SignificanceCard = styled.div`
  width: 100%;
  background: rgba(23, 10, 33, 0.8);
  border: 1px solid rgba(255, 140, 25, 0.28);
  border-radius: 18px;
  padding: 24px 30px;
  margin-top: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.45);

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SignificanceContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

export const SignificanceIconWrap = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(255, 140, 25, 0.15);
  border: 1px solid rgba(255, 140, 25, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #FFA000;
  flex-shrink: 0;
`;

export const SignificanceText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SignificanceTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 800;
  color: #FFF2DF;
  margin: 0;
`;

export const SignificanceBody = styled.p`
  font-size: 0.85rem;
  color: #C0ACCE;
  line-height: 1.55;
  margin: 0;
`;

export const SignificanceBadges = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  flex-wrap: wrap;
`;

export const SacredBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 9999px;
  padding: 6px 14px;
  font-size: 0.78rem;
  font-weight: 700;
  color: #E2D3F0;
`;

// ============================================
// FOOTER QUOTE
// ============================================
export const QuoteFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 36px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.82rem;
  color: #8C7B9E;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

export const QuoteText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #DCC8E8;
  font-style: italic;
`;

export const HeritageText = styled.div`
  color: #A08FB0;
`;

// ============================================
// CONSECRATION MODAL
// ============================================
export const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(10, 4, 15, 0.85);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
`;

export const ModalCard = styled(motion.div)`
  background: linear-gradient(180deg, #220F30 0%, #150820 100%);
  border: 2px solid rgba(255, 140, 25, 0.5);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 140, 25, 0.35);
  border-radius: 24px;
  padding: 40px 32px;
  max-width: 580px;
  width: 100%;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

export const ModalGlow = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 200px;
  background: radial-gradient(circle, rgba(255, 140, 25, 0.4) 0%, transparent 70%);
  filter: blur(40px);
  pointer-events: none;
`;

export const ModalTitle = styled.h2`
  font-family: 'Cinzel Decorative', 'Cinzel', serif;
  font-size: 2.2rem;
  color: #FFE6C2;
  margin: 12px 0 16px;
  filter: drop-shadow(0 2px 10px rgba(255, 122, 0, 0.5));
`;

export const ModalMessage = styled.p`
  font-size: 0.95rem;
  color: #D8C7E6;
  line-height: 1.6;
  margin-bottom: 24px;
`;

export const ModalCloseButton = styled.button`
  background: linear-gradient(135deg, #FF8A00 0%, #E65100 100%);
  color: #FFF9E6;
  font-size: 0.95rem;
  font-weight: 800;
  padding: 12px 32px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(255, 110, 0, 0.5);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px) scale(1.03);
  }
`;
