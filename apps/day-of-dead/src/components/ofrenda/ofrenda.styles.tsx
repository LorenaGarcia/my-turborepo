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

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #0a040f;
  background-image: radial-gradient(
      ellipse at 50% 15%,
      rgba(45, 14, 60, 0.65) 0%,
      rgba(10, 4, 15, 0.95) 70%
    ),
    linear-gradient(
      180deg,
      rgba(10, 4, 15, 0.7) 0%,
      rgba(10, 4, 15, 0.92) 50%,
      rgba(10, 4, 15, 1) 100%
    ),
    url("/bg-altar.jpg");
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  color: #fff9e6;
  position: relative;
  overflow-x: hidden;
`;

const ContentWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 80px 16px 40px;
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 1540px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 90px 20px 50px;
  }

  @media (min-width: 1024px) {
    padding: 100px 24px 60px;
  }
`;

const TitleBacklight = styled.div`
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 750px;
  height: 380px;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 122, 0, 0.3) 0%,
    rgba(233, 30, 99, 0.18) 50%,
    transparent 70%
  );
  filter: blur(60px);
  pointer-events: none;
  animation: ${pulseGlow} 5s ease-in-out infinite;
  z-index: 0;
`;

const SymbolsRibbon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 22px;
  z-index: 2;
  flex-wrap: wrap;
`;

const RibbonBadge = styled.div<{ $color: string }>`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: ${(props) => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  box-shadow: 0 4px 12px ${(props) => props.$color}40,
    inset 0 1px 1px rgba(255, 255, 255, 0.4);
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: default;

  &:hover {
    transform: translateY(-3px) scale(1.1);
  }
`;

const RitualPill = styled.div`
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
  color: #ffb366;
  text-transform: uppercase;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.35);
  z-index: 2;
  margin-bottom: 10px;
`;

const MainTitle = styled.h1`
  font-family: "Cinzel Decorative", "Cinzel", serif;
  font-size: clamp(2.4rem, 5vw, 4.4rem);
  font-weight: 900;
  letter-spacing: 2px;
  margin: 0 0 12px;
  line-height: 1.15;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #ffe2c2 35%,
    #ff8a14 80%,
    #e65100 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 4px 22px rgba(255, 122, 0, 0.45));
  z-index: 2;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: clamp(0.95rem, 1.5vw, 1.12rem);
  color: #dcc8e8;
  max-width: 720px;
  margin: 0 auto 28px;
  line-height: 1.6;
  text-align: center;
  z-index: 2;
  font-weight: 400;
`;

export const ToolbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: rgba(23, 10, 32, 0.85);
  border: 1px solid rgba(255, 140, 25, 0.3);
  border-radius: 9999px;
  padding: 8px 14px;
  backdrop-filter: blur(16px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45),
    inset 0 1px 1px rgba(255, 255, 255, 0.1);
  margin-bottom: 24px;
  z-index: 10;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    gap: 16px;
    padding: 8px 18px;
    margin-bottom: 32px;
  }
`;

export const CounterBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #f5e8ff;
  padding-right: 14px;
  border-right: 1px solid rgba(255, 255, 255, 0.15);

  strong {
    color: #ff9d00;
    font-size: 1.05rem;
    font-weight: 800;
  }
`;

export const ToolbarButton = styled(motion.button)<{
  $variant?: "secondary" | "primary" | "active";
}>`
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
  user-select: none;
  touch-action: manipulation;

  &:disabled {
    opacity: 0.38;
    cursor: not-allowed;
    filter: grayscale(0.6);
    box-shadow: none !important;
    transform: none !important;
    background: rgba(255, 255, 255, 0.04) !important;
    border-color: rgba(255, 255, 255, 0.08) !important;
    color: rgba(255, 255, 255, 0.4) !important;
  }

  ${(props) =>
    props.$variant === "primary"
      ? css`
          background: linear-gradient(135deg, #ff8a00 0%, #ff5722 100%);
          color: #fff9e6;
          box-shadow: 0 4px 18px rgba(255, 110, 0, 0.45);

          &:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 6px 24px rgba(255, 110, 0, 0.65);
            background: linear-gradient(135deg, #ffa000 0%, #f4511e 100%);
          }
        `
      : props.$variant === "active"
      ? css`
          background: rgba(255, 160, 0, 0.22);
          border-color: #ffa000;
          color: #ffd54f;
          box-shadow: 0 0 14px rgba(255, 160, 0, 0.35);
        `
      : css`
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.12);
          color: #e6d8f2;

          &:hover:not(:disabled) {
            background: rgba(255, 255, 255, 0.12);
            color: #ffffff;
            transform: translateY(-1px);
          }
        `}

  &:active:not(:disabled) {
    transform: scale(0.97);
  }
`;

const WorkspaceLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  align-items: center;
  z-index: 5;

  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: 300px 1fr 300px;
    gap: 16px;
    align-items: start;
  }

  @media (min-width: 1300px) {
    grid-template-columns: 340px 1fr 340px;
    gap: 24px;
  }
`;

/* DESKTOP SIDE PANEL: Hidden on mobile, visible on desktop >= 1100px */
const SidePanel = styled.aside<{ $isDraggingActive?: boolean }>`
  display: none;

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
    background: rgba(22, 10, 30, 0.72);
    border: 1px solid rgba(255, 138, 20, 0.22);
    border-radius: 20px;
    padding: 10px;
    backdrop-filter: blur(14px);
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.45);
    position: relative;
    z-index: 10;
    max-height: 860px;
    overflow-y: ${(props) => (props.$isDraggingActive ? "visible" : "auto")};
  }

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

/* MOBILE ITEMS PANEL: Visible only on mobile (< 1100px) */
export const MobileItemsPanel = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  background: rgba(22, 10, 30, 0.85);
  border: 1px solid rgba(255, 138, 20, 0.3);
  border-radius: 20px;
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.45);
  overflow: hidden;
  z-index: 10;
  transition: all 0.3s ease;

  @media (min-width: 1100px) {
    display: none;
  }
`;

export const MobilePanelToggleBtn = styled.button<{ $isOpen?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: transparent;
  border: none;
  color: #fff2e0;
  cursor: pointer;
  font-family: inherit;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.2s ease;

  &:active {
    background: rgba(255, 140, 25, 0.1);
  }
`;

export const MobilePanelTitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: left;
`;

export const MobilePanelIcon = styled.span`
  font-size: 1.35rem;
  line-height: 1;
`;

export const MobilePanelTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MobilePanelSubtitle = styled.p`
  font-size: 0.72rem;
  color: #c9b6dc;
  margin: 2px 0 0;
  font-weight: 500;
`;

export const MobileItemCountBadge = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 9999px;
  background: rgba(255, 138, 20, 0.25);
  border: 1px solid rgba(255, 138, 20, 0.45);
  color: #ffb366;
`;

export const MobileToggleIndicator = styled.div<{ $isOpen?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.76rem;
  font-weight: 700;
  color: ${(props) => (props.$isOpen ? "#ff9d00" : "#ffd180")};
  padding: 6px 12px;
  border-radius: 9999px;
  background: ${(props) =>
    props.$isOpen ? "rgba(255, 140, 25, 0.15)" : "rgba(255, 255, 255, 0.08)"};
  border: 1px solid
    ${(props) =>
      props.$isOpen ? "rgba(255, 140, 25, 0.4)" : "rgba(255, 255, 255, 0.12)"};
  transition: all 0.2s ease;
  flex-shrink: 0;
`;

export const MobileGridContent = styled(motion.div)`
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 10px 12px 14px;
  max-height: 58vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 138, 20, 0.35);
    border-radius: 4px;
  }
`;

export const MobileFilterTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 12px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MobileFilterChip = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 9999px;
  font-size: 0.72rem;
  font-weight: ${(props) => (props.$active ? "800" : "600")};
  white-space: nowrap;
  border: 1px solid
    ${(props) =>
      props.$active ? "rgba(255, 140, 25, 0.75)" : "rgba(255, 255, 255, 0.1)"};
  background: ${(props) =>
    props.$active
      ? "linear-gradient(135deg, rgba(255, 111, 0, 0.85) 0%, rgba(233, 30, 99, 0.8) 100%)"
      : "rgba(255, 255, 255, 0.05)"};
  color: ${(props) => (props.$active ? "#ffffff" : "#d3c5e0")};
  cursor: pointer;
  touch-action: manipulation;
  transition: all 0.2s ease;
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 5px;
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
  color: #fff2e0;
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
  color: #cdb9df;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const PanelDescription = styled.p`
  font-size: 0.8rem;
  color: #bba5cc;
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
    props.$isSelected ? "rgba(255, 138, 20, 0.25)" : "rgba(34, 15, 46, 0.65)"};
  border: 1px solid
    ${(props) =>
      props.$isSelected
        ? "#FF9D00"
        : props.$isPlaced
        ? "rgba(255, 160, 0, 0.5)"
        : "rgba(255, 255, 255, 0.08)"};
  border-radius: 14px;
  padding: 10px;
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
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8),
        0 0 25px rgba(255, 140, 25, 0.8);
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
  color: #fff2df;
  margin: 0 0 4px;
  line-height: 1.25;
`;

export const ItemSubtitle = styled.p`
  font-size: 0.68rem;
  color: #afa0be;
  margin: 0 0 8px;
  line-height: 1.25;
`;

export const PlacedCountBadge = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  background: #ff8a00;
  color: #0a040f;
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
  padding-top: 3px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

export const DragHint = styled.span`
  font-size: 0.65rem;
  color: #8c7b9e;
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
  color: #ffb366;
  font-size: 0.8rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ff8a00;
    color: #0a040f;
    transform: scale(1.15);
  }
`;

const AltarStageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  padding-top: clamp(40px, 8vw, 75px);
  margin-bottom: 12px;
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

export const TierGuideZone = styled.div<{
  $isOver?: boolean;
  $tier: string;
  $isAnyDragging?: boolean;
}>`
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
          border: 2.5px dashed #ffa000;
          box-shadow: 0 0 35px rgba(255, 160, 0, 0.65),
            inset 0 0 20px rgba(255, 160, 0, 0.35);
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
  background: linear-gradient(135deg, #ff8a00 0%, #e65100 100%);
  color: #fff9e6;
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
  color: #ffb366;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  pointer-events: none;
`;

export const ItemRemoveBtn = styled.button`
  position: absolute;
  top: -6px;
  right: -6px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(220, 38, 38, 0.95);
  color: #ffffff;
  border: 1.5px solid rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
  opacity: 0;
  padding: 0;
  line-height: 1;
  pointer-events: none;
  z-index: 100;
  transition: opacity 0.15s ease, transform 0.15s ease, background 0.15s ease;

  &::before {
    content: "";
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
  }

  &:hover {
    background: #ff1744;
    transform: scale(1.15);
  }
`;

export const PlacedItemDraggable = styled(motion.div)<{
  $scale?: number;
  $xPercent: number;
  $yPercent: number;
  $zIndex?: number;
  $isDraggingThis?: boolean;
  $isArco?: boolean;
}>`
  position: absolute;
  ${(props) =>
    props.$isArco
      ? css`
          left: 50% !important;
          top: -15%;
          width: 44%;
          max-width: 250px;
          transform: translateX(-50%) !important;

          @media (min-width: 768px) {
            top: -18%;
          }

          @media (min-width: 1024px) {
            top: -20%;
            width: 250px;
          }
        `
      : css`
          left: ${props.$xPercent}%;
          top: ${props.$yPercent}%;
          transform: translate(-50%, -100%);
        `}
  /* Reglas de orden de apilamiento: los niveles superiores (atrás) tienen menor z-index,
     los niveles inferiores (frente) mayor z-index, y el arrastre se eleva al frente */
  z-index: ${(props) =>
    props.$isDraggingThis
      ? 10
      : props.$zIndex ??
        (props.$isArco
          ? 1
          : props.$yPercent < 20
          ? 1
          : props.$yPercent < 45
          ? 2
          : 3)};
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
      transform: ${props.$isArco
        ? "translateX(-50%) scale(1.06)"
        : "translate(-50%, -100%) scale(1.08)"} !important;
    `}

  &:hover {
    filter: drop-shadow(0 8px 14px rgba(255, 160, 0, 0.5));
  }

  &:hover ${ItemRemoveBtn} {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const PlacedItemImg = styled.img<{
  $height?: number;
  $width?: number;
  $isArco?: boolean;
}>`
  ${(props) =>
    props.$isArco
      ? css`
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
          display: block;
        `
      : css`
          height: ${props.$height ? `${props.$height}px` : "auto"};
          max-width: ${props.$width ? `${props.$width}px` : "125px"};
        `}
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
  background: radial-gradient(
    ellipse at bottom,
    #fff 0%,
    #ffd54f 35%,
    #ff6d00 75%,
    transparent 100%
  );
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
  background: radial-gradient(
    circle,
    rgba(255, 160, 0, 0.35) 0%,
    rgba(255, 87, 34, 0.15) 50%,
    transparent 75%
  );
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
  color: #ffe082;
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

export const DropPreviewGhost = styled.div<{
  $x: number;
  $y: number;
  $isArco?: boolean;
}>`
  position: absolute;
  ${(props) =>
    props.$isArco
      ? css`
          left: 50% !important;
          top: -15%;
          width: 44%;
          max-width: 250px;
          transform: translateX(-50%) !important;

          @media (min-width: 768px) {
            top: -18%;
          }

          @media (min-width: 1024px) {
            top: -20%;
            width: 250px;
          }
        `
      : css`
          left: ${props.$x}%;
          top: ${props.$y}%;
          transform: translate(-50%, -100%);
        `}
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
  border: 2px dashed #ffa000;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 160, 0, 0.45) 0%,
    transparent 70%
  );
  animation: ${pulseGlow} 1.2s infinite ease-in-out;
`;

export const TipBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  font-size: 0.78rem;
  color: #c0acce;
  text-align: center;
  background: rgba(22, 10, 30, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 10px 16px;
  backdrop-filter: blur(8px);
  max-width: 600px;
  width: 100%;

  @media (min-width: 768px) {
    margin-top: 20px;
    font-size: 0.82rem;
    border-radius: 9999px;
    padding: 8px 20px;
  }
`;

// ============================================
// BOTTOM SIGNIFICADO CARD
// ============================================
export const SignificanceCard = styled.div`
  width: 100%;
  background: rgba(23, 10, 33, 0.8);
  border: 1px solid rgba(255, 140, 25, 0.28);
  border-radius: 18px;
  padding: 20px 18px;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.45);

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 24px 30px;
    margin-top: 48px;
    gap: 24px;
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
  color: #ffa000;
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
  color: #fff2df;
  margin: 0;
`;

export const SignificanceBody = styled.p`
  font-size: 0.85rem;
  color: #c0acce;
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
  color: #e2d3f0;
`;

export const QuoteFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.82rem;
  color: #8c7b9e;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    margin-top: 36px;
  }
`;

export const QuoteText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #dcc8e8;
  font-style: italic;
`;

export const HeritageText = styled.div`
  color: #a08fb0;
`;

const ModalOverlay = styled(motion.div)`
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

const ModalCard = styled(motion.div)`
  background: linear-gradient(180deg, #220f30 0%, #150820 100%);
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

const ModalGlow = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 200px;
  background: radial-gradient(
    circle,
    rgba(255, 140, 25, 0.4) 0%,
    transparent 70%
  );
  filter: blur(40px);
  pointer-events: none;
`;

const ModalTitle = styled.h2`
  font-family: "Cinzel Decorative", "Cinzel", serif;
  font-size: 2.2rem;
  color: #ffe6c2;
  margin: 12px 0 16px;
  filter: drop-shadow(0 2px 10px rgba(255, 122, 0, 0.5));
`;

const ModalMessage = styled.p`
  font-size: 0.95rem;
  color: #d8c7e6;
  line-height: 1.6;
  margin-bottom: 24px;
`;

const ModalCloseButton = styled.button`
  background: linear-gradient(135deg, #ff8a00 0%, #e65100 100%);
  color: #fff9e6;
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

export {
  AltarStageWrapper,
  ContentWrapper,
  MainContainer,
  MainTitle,
  ModalCard,
  ModalCloseButton,
  ModalGlow,
  ModalMessage,
  ModalOverlay,
  ModalTitle,
  RibbonBadge,
  RitualPill,
  SidePanel,
  SymbolsRibbon,
  TitleBacklight,
  WorkspaceLayout,
};
