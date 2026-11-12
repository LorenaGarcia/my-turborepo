"use client";

import { motion } from "motion/react";
import styled, { keyframes } from "styled-components";

const twinkle = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.65;
    transform: scale(0.9);
  }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #0b2016;
`;

export const HeroSection = styled.main`
  position: relative;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 16px 24px;
  background-image:
    linear-gradient(
      180deg,
      rgba(20, 24, 34, 0.28) 0%,
      rgba(20, 24, 34, 0.18) 45%,
      rgba(255, 255, 255, 0.25) 82%,
      rgba(255, 255, 255, 0.92) 100%
    ),
    url("/bg-villa.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 28px 40px 32px;
  }
`;

export const LightsGroup = styled.div`
  display: none;

  @media (min-width: 640px) {
    display: flex;
    align-items: center;
    gap: 14px;
  }
`;

export const LightBulbDot = styled.span<{
  $color: string;
  $glow: string;
  $delay?: number;
}>`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  box-shadow:
    0 0 10px ${(props) => props.$glow},
    0 0 18px ${(props) => props.$glow};
  animation: ${twinkle} 2.6s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay ?? 0}s;
`;

export const GreenVillageBadge = styled.div`
  margin: 0 auto;
  background: linear-gradient(180deg, #257a3e 0%, #19592c 100%);
  border: 2px solid #d99b26;
  border-radius: 9999px;
  padding: 6px 16px;
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.8px;
  color: #fef3c7;
  text-transform: uppercase;
  box-shadow:
    0 6px 18px rgba(0, 0, 0, 0.35),
    inset 0 1px 1px rgba(255, 255, 255, 0.25);
  text-align: center;

  @media (min-width: 768px) {
    padding: 6px 22px;
    font-size: 0.68rem;
    letter-spacing: 0.9px;
  }
`;

export const HeroCenterContent = styled.div`
  position: relative;
  z-index: 4;
  flex: 1;
  width: 100%;
  max-width: 880px;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    margin: 40px auto;
  }
`;

export const SeasonPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(
    90deg,
    rgba(180, 65, 28, 0.88) 0%,
    rgba(194, 88, 32, 0.88) 100%
  );
  border: 1px solid rgba(253, 186, 116, 0.55);
  border-radius: 9999px;
  padding: 6px 18px;
  font-size: 0.76rem;
  font-weight: 700;
  color: #fff7ed;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);
  margin-bottom: 14px;
`;

export const SparkleIconSpan = styled.span`
  color: #fde047;
  display: inline-flex;
  align-items: center;
`;

export const HeroTitle = styled(motion.h1)`
  font-size: clamp(2rem, 6vw, 4.1rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.8px;
  color: #ffffff;
  text-shadow:
    0 4px 18px rgba(0, 0, 0, 0.55),
    0 2px 4px rgba(0, 0, 0, 0.45);
  margin-bottom: 12px;
`;

export const HeroTitleAccent = styled.span`
  color: #ffd0c2;
`;

export const HeroSubtitle = styled.p`
  max-width: 610px;
  font-size: clamp(0.92rem, 1.6vw, 1.12rem);
  font-weight: 600;
  line-height: 1.5;
  color: #f9fafb;
  text-shadow:
    0 2px 10px rgba(0, 0, 0, 0.7),
    0 1px 3px rgba(0, 0, 0, 0.6);
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 34px;
  }
`;

export const CtaButtonsRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 24px;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 32px;
  }
`;

export const SnowyButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 270px;
  min-height: 64px;
  padding: 20px 24px 14px;
  border-radius: 18px;
  border: 2px solid #7f1d1d;
  background: linear-gradient(180deg, #dc2626 0%, #b91c1c 58%, #7f1d1d 100%);
  color: #fff8f0;
  font-family: "Playfair Display", Georgia, serif;
  font-style: italic;
  font-size: 1.12rem;
  font-weight: 700;
  letter-spacing: 0.3px;
  white-space: nowrap;
  cursor: pointer;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.45),
    0 4px 0 #5c1111,
    inset 0 2px 3px rgba(255, 255, 255, 0.35);
  opacity: 0;
  transition:
    box-shadow 0.2s ease,
    filter 0.2s ease;

  @media (min-width: 640px) {
    width: auto;
    min-width: 260px;
    min-height: 68px;
    padding: 22px 30px 15px;
    font-size: 1.2rem;
  }

  &:hover {
    transform: translateY(-3px);
    filter: brightness(1.06);
    box-shadow:
      0 14px 26px rgba(0, 0, 0, 0.5),
      0 4px 0 #5c1111,
      inset 0 2px 4px rgba(255, 255, 255, 0.45);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const SnowCapSvg = styled.svg`
  position: absolute;
  top: -11px;
  left: -4px;
  width: calc(100% + 8px);
  height: 28px;
  pointer-events: none;
  filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.22));
`;

export const SnowyButtonText = styled.span`
  position: relative;
  z-index: 2;
  text-shadow: 0 2px 4px rgba(69, 10, 10, 0.8);
`;

export const HeroBottomRow = styled.div`
  position: relative;
  z-index: 4;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (min-width: 640px) {
    justify-content: flex-start;
  }
`;
