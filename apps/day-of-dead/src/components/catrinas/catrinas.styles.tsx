"use client";

import styled, { keyframes } from "styled-components";

const pulseGlow = keyframes`
  0%, 100% {
    opacity: 0.18;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.05);
  }
`;

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #0c0512;
  background-image: linear-gradient(
      180deg,
      rgba(12, 5, 18, 0.6) 0%,
      rgba(12, 5, 18, 0.82) 50%,
      rgba(12, 5, 18, 0.98) 100%
    ),
    url("/bg-altar.jpg");
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  color: #fff9e6;
  position: relative;
  overflow-x: hidden;
`;

export const ContentWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 75px 12px 30px;
  text-align: center;
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 1400px;
  overflow-x: hidden;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 90px 20px 40px;
  }

  @media (min-width: 1024px) {
    padding: 110px 24px 60px;
  }
`;

export const TitleBacklight = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(650px, 90vw);
  max-width: 100%;
  height: 320px;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 122, 0, 0.28) 0%,
    rgba(233, 30, 99, 0.18) 45%,
    transparent 70%
  );
  filter: blur(50px);
  pointer-events: none;
  animation: ${pulseGlow} 4s ease-in-out infinite;
  z-index: 0;
`;

export const TradicionPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(26, 10, 36, 0.75);
  border: 1px solid rgba(255, 122, 0, 0.35);
  border-radius: 9999px;
  padding: 6px 18px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 1.8px;
  color: #f0e6fa;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 1;
  margin-bottom: 8px;
`;

export const FlowerIcon = styled.span`
  color: #ff9d00;
  font-size: 0.85rem;
`;

export const MainTitle = styled.h1`
  font-family: "Cinzel Decorative", "Cinzel", serif;
  font-size: clamp(1.8rem, 5vw, 4.2rem);
  font-weight: 900;
  letter-spacing: 2px;
  margin: 2px 0 6px;
  line-height: 1.1;
  background: linear-gradient(180deg, #ffffff 0%, #ffd6a5 30%, #ff7a00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 4px 20px rgba(255, 122, 0, 0.4));
  z-index: 1;
`;

export const SubtitleDividerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 12px;
  z-index: 1;

  @media (min-width: 900px) {
    gap: 14px;
    margin-bottom: 24px;
  }
`;

export const DividerLine = styled.div`
  width: 50px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 157, 0, 0.5),
    transparent
  );
`;

export const SubtitleText = styled.span`
  color: #c5b4d6;
  font-size: clamp(0.72rem, 2vw, 0.82rem);
  font-weight: 500;
  letter-spacing: 1px;
`;

/* STAGE CONTAINER (LAYOUT WITH SIDEBAR, CENTER CHARACTER, & SCROLL INDICATOR) */
export const StageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  position: relative;
  margin-top: 6px;
  gap: 12px;

  @media (min-width: 900px) {
    max-width: 1100px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    gap: 0;
  }
`;

export const SidebarWrapper = styled.aside`
  background: rgba(22, 10, 32, 0.88);
  border: 1px solid rgba(255, 140, 25, 0.25);
  border-radius: 16px;
  padding: 8px 10px;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  backdrop-filter: blur(14px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
  z-index: 10;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  overscroll-behavior-x: contain;

  /* Custom scrollbar on mobile */
  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 140, 25, 0.35);
    border-radius: 4px;
  }

  @media (min-width: 900px) {
    width: 230px;
    max-width: 230px;
    flex-direction: column;
    align-items: stretch;
    padding: 20px 16px;
    border-radius: 20px;
    gap: 10px;
    overflow-x: visible;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #ffb366;
  text-transform: uppercase;
  flex-shrink: 0;
  padding-right: 8px;
  border-right: 1px solid rgba(255, 255, 255, 0.15);

  @media (min-width: 900px) {
    padding-right: 0;
    border-right: none;
    margin-bottom: 6px;
    padding-left: 6px;
    font-size: 0.72rem;
    color: #a090b0;
  }
`;

export const OutfitOptionButton = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 9999px;
  border: 1px solid
    ${(props) =>
      props.$active ? "rgba(255, 140, 25, 0.85)" : "rgba(255, 255, 255, 0.08)"};
  background: ${(props) =>
    props.$active
      ? "linear-gradient(135deg, rgba(255, 111, 0, 0.95) 0%, rgba(233, 30, 99, 0.9) 100%)"
      : "rgba(255, 255, 255, 0.04)"};
  color: ${(props) => (props.$active ? "#ffffff" : "#d3c5e0")};
  font-size: 0.78rem;
  font-weight: ${(props) => (props.$active ? "800" : "600")};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: ${(props) =>
    props.$active ? "0 4px 15px rgba(255, 111, 0, 0.45)" : "none"};
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  &:hover {
    background: ${(props) =>
      props.$active
        ? "linear-gradient(135deg, rgba(255, 111, 0, 1) 0%, rgba(233, 30, 99, 0.95) 100%)"
        : "rgba(255, 255, 255, 0.08)"};
    color: #ffffff;
    transform: translateY(-1px);
  }

  @media (min-width: 900px) {
    display: flex;
    border-radius: 12px;
    padding: 10px 14px;
    font-size: 0.85rem;
    gap: 12px;
    white-space: normal;
    text-align: left;

    &:hover {
      transform: translateX(4px);
    }
  }
`;

export const OptionIcon = styled.span`
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* CENTER CANVAS WORKSPACE */
export const CharacterStage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  touch-action: pan-y;
  user-select: none;
`;

export const NavArrowButton = styled.button<{ $direction: "left" | "right" }>`
  position: absolute;
  top: 48%;
  transform: translateY(-50%);
  ${(props) => (props.$direction === "left" ? "left: 4px;" : "right: 4px;")}
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(26, 10, 36, 0.78);
  border: 1.5px solid rgba(255, 140, 25, 0.55);
  color: #ffb366;
  font-size: 1.7rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.5), 0 0 12px rgba(255, 122, 0, 0.25);
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  z-index: 15;
  transition: all 0.2s ease;

  &:active {
    transform: translateY(-50%) scale(0.92);
    background: rgba(255, 111, 0, 0.4);
    border-color: #ff9d00;
  }

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
    box-shadow: none;
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  z-index: 10;
  padding: 4px 8px;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const Dot = styled.button<{ $active?: boolean }>`
  border: none;
  padding: 0;
  width: ${(props) => (props.$active ? "22px" : "8px")};
  height: 8px;
  border-radius: 9999px;
  background: ${(props) =>
    props.$active
      ? "linear-gradient(90deg, #ff7a00, #e91e63)"
      : "rgba(255, 255, 255, 0.22)"};
  box-shadow: ${(props) =>
    props.$active ? "0 0 10px rgba(255, 122, 0, 0.7)" : "none"};
  cursor: pointer;
  transition: all 0.25s ease;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
`;

/* SCROLL INDICATOR BAR (RIGHT) */
export const ScrollIndicatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 60px;
  z-index: 10;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ScrollLabel = styled.span`
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #a090b0;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`;

export const ScrollTrack = styled.div`
  width: 4px;
  height: 180px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`;

export const ScrollThumb = styled.div<{ $progress: number }>`
  width: 100%;
  height: 35%;
  background: linear-gradient(180deg, #ff7a00 0%, #e91e63 100%);
  border-radius: 4px;
  position: absolute;
  top: ${(props) => props.$progress * 65}%;
  transition: top 0.2s ease;
  box-shadow: 0 0 10px rgba(255, 122, 0, 0.6);
`;

export const ScrollPercentage = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  color: #ff7a00;
`;

export const BottomDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 30px;
  margin-bottom: 10px;
  z-index: 1;
`;

export const BottomDividerLine = styled.div`
  width: 80px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 157, 0, 0.5),
    transparent
  );
`;

export const BottomDividerIcon = styled.span`
  color: #ff9d00;
  font-size: 0.85rem;
  opacity: 0.8;
`;
