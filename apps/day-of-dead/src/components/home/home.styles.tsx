"use client";

import styled, { keyframes } from "styled-components";

const pulseGlow = keyframes`
  0%, 100% {
    opacity: 0.35;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
`;

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #0C0512;
  background-image: 
    linear-gradient(180deg, rgba(12, 5, 18, 0.75) 0%, rgba(12, 5, 18, 0.88) 50%, rgba(12, 5, 18, 0.96) 100%),
    url('/bg-altar.jpg');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  color: #FFF9E6;
  position: relative;
  overflow: hidden;
`;

export const HeroWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 140px 24px 80px;
  text-align: center;
  position: relative;
  z-index: 5;
`;

export const TitleBacklight = styled.div`
  position: absolute;
  top: 32%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  height: 250px;
  background: radial-gradient(ellipse at center, rgba(255, 140, 0, 0.28) 0%, rgba(233, 30, 99, 0.15) 45%, transparent 70%);
  filter: blur(40px);
  pointer-events: none;
  animation: ${pulseGlow} 4s ease-in-out infinite;
  z-index: 0;
`;

export const NochePill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(26, 10, 36, 0.75);
  border: 1px solid rgba(255, 122, 0, 0.35);
  border-radius: 9999px;
  padding: 6px 18px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #F0E6FA;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const OrangeDot = styled.span`
  width: 6px;
  height: 6px;
  background-color: #FF7A00;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 6px #FF7A00;
`;

export const PinkDot = styled.span`
  width: 6px;
  height: 6px;
  background-color: #E91E63;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 6px #E91E63;
`;

export const TraditionSubtitle = styled.h3`
  color: #FF9D00;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 3px;
  margin-top: 24px;
  margin-bottom: 8px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 1;
`;

export const MainTitle = styled.h1`
  font-family: 'Cinzel Decorative', 'Cinzel', serif;
  font-size: clamp(3rem, 7.5vw, 5.8rem);
  font-weight: 900;
  letter-spacing: 4px;
  margin: 8px 0;
  line-height: 1.1;
  background: linear-gradient(180deg, #f2670aff 0%, #d48541ff 40%, #E2AB59 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.6));
  z-index: 1;
`;

export const DescriptionText = styled.p`
  color: #D3C5E0;
  font-size: clamp(1rem, 2vw, 1.15rem);
  max-width: 600px;
  line-height: 1.6;
  margin-top: 12px;
  font-weight: 400;
  z-index: 1;
`;

export const InteractiveCardsGrid = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 70px;
  max-width: 1000px;
  width: 100%;
  justify-content: center;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InteractiveCard = styled.div`
  background: rgba(22, 10, 32, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 22px 26px;
  flex: 1;
  max-width: 480px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  backdrop-filter: blur(12px);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);

  &:hover {
    border-color: rgba(255, 122, 0, 0.5);
    transform: translateY(-5px);
    background: rgba(30, 14, 44, 0.85);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 122, 0, 0.2);
  }

  &:hover .card-arrow {
    transform: translateX(6px);
    color: #FF7A00;
  }
`;

export const CardLeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  text-align: left;
`;

export const CatrinaBadge = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #3A0C4A;
  border: 1px solid rgba(233, 30, 99, 0.4);
  color: #E91E63;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
`;

export const OfrendaBadge = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #4A2808;
  border: 1px solid rgba(255, 122, 0, 0.4);
  color: #FF7A00;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
`;

export const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BadgeTag = styled.span`
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: #9C88B0;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

export const CardTitle = styled.h4`
  font-size: 1.35rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 4px;
`;

export const CardDesc = styled.p`
  font-size: 0.82rem;
  color: #C5B4D6;
  line-height: 1.4;
`;

export const CardArrow = styled.div`
  color: #A090B0;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  transition: transform 0.25s ease, color 0.25s ease;
`;
