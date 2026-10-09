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
  background-color: #0C0512;
  background-image: 
    linear-gradient(180deg, rgba(12, 5, 18, 0.6) 0%, rgba(12, 5, 18, 0.82) 50%, rgba(12, 5, 18, 0.98) 100%),
    url('/bg-altar.jpg');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
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
  padding: 110px 24px 60px;
  text-align: center;
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const TitleBacklight = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 320px;
  background: radial-gradient(ellipse at center, rgba(255, 122, 0, 0.28) 0%, rgba(233, 30, 99, 0.18) 45%, transparent 70%);
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
  color: #F0E6FA;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 1;
  margin-bottom: 8px;
`;

export const FlowerIcon = styled.span`
  color: #FF9D00;
  font-size: 0.85rem;
`;

export const MainTitle = styled.h1`
  font-family: 'Cinzel Decorative', 'Cinzel', serif;
  font-size: clamp(2.5rem, 5.5vw, 4.2rem);
  font-weight: 900;
  letter-spacing: 3px;
  margin: 4px 0 8px;
  line-height: 1.1;
  background: linear-gradient(180deg, #FFFFFF 0%, #FFD6A5 30%, #FF7A00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 4px 20px rgba(255, 122, 0, 0.4));
  z-index: 1;
`;

export const SubtitleDividerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 24px;
  z-index: 1;
`;

export const DividerLine = styled.div`
  width: 50px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 157, 0, 0.5), transparent);
`;

export const SubtitleText = styled.span`
  color: #C5B4D6;
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 1.2px;
`;

/* STAGE CONTAINER (LAYOUT WITH SIDEBAR, CENTER CHARACTER, & SCROLL INDICATOR) */
export const StageLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  position: relative;
  margin-top: 10px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 30px;
  }
`;

/* SIDEBAR VESTIMENTAS */
export const SidebarWrapper = styled.aside`
  background: rgba(22, 10, 32, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 20px 16px;
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  z-index: 10;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 480px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #A090B0;
  text-transform: uppercase;
  margin-bottom: 6px;
  padding-left: 6px;
`;

export const OutfitOptionButton = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid ${(props) => (props.$active ? "rgba(255, 122, 0, 0.7)" : "transparent")};
  background: ${(props) =>
    props.$active
      ? "linear-gradient(135deg, rgba(255, 111, 0, 0.9) 0%, rgba(233, 30, 99, 0.85) 100%)"
      : "rgba(255, 255, 255, 0.03)"};
  color: ${(props) => (props.$active ? "#FFFFFF" : "#D3C5E0")};
  font-size: 0.85rem;
  font-weight: ${(props) => (props.$active ? "700" : "500")};
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
  text-align: left;
  box-shadow: ${(props) => (props.$active ? "0 4px 15px rgba(255, 111, 0, 0.35)" : "none")};

  &:hover {
    background: ${(props) =>
      props.$active
        ? "linear-gradient(135deg, rgba(255, 111, 0, 1) 0%, rgba(233, 30, 99, 0.95) 100%)"
        : "rgba(255, 255, 255, 0.08)"};
    color: #FFFFFF;
    transform: translateX(4px);
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
  color: #A090B0;
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
  background: linear-gradient(180deg, #FF7A00 0%, #E91E63 100%);
  border-radius: 4px;
  position: absolute;
  top: ${(props) => props.$progress * 65}%;
  transition: top 0.2s ease;
  box-shadow: 0 0 10px rgba(255, 122, 0, 0.6);
`;

export const ScrollPercentage = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  color: #FF7A00;
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
  background: linear-gradient(90deg, transparent, rgba(255, 157, 0, 0.5), transparent);
`;

export const BottomDividerIcon = styled.span`
  color: #FF9D00;
  font-size: 0.85rem;
  opacity: 0.8;
`;
