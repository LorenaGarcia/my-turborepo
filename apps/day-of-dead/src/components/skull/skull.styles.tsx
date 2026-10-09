"use client";

import styled, { keyframes } from "styled-components";

const floatAnim = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
`;

const auraPulse = keyframes`
  0%, 100% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.85;
    transform: translate(-50%, -50%) scale(1.06);
  }
`;

const outfitFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
`;

export const SkullWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 440px;
  margin: 20px auto 30px;
  animation: ${floatAnim} 5s ease-in-out infinite;
`;

export const GlowSpotlight = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 480px;
  height: 580px;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    ellipse at center,
    rgba(233, 30, 99, 0.28) 0%,
    rgba(255, 111, 0, 0.18) 40%,
    rgba(18, 5, 28, 0) 75%
  );
  filter: blur(40px);
  pointer-events: none;
  z-index: 0;
  animation: ${auraPulse} 6s ease-in-out infinite;
`;

export const SkeletonSvg = styled.svg`
  width: 100%;
  height: auto;
  max-height: 520px;
  filter: drop-shadow(0 12px 30px rgba(0, 0, 0, 0.65));
  z-index: 1;
`;

export const OutfitImageOverlay = styled.img`
  position: absolute;
  top: -44%;
  left: 50%;
  transform: translateX(-50%);
  width: 116%;
  max-width: 500px;
  height: auto;
  z-index: 5;
  pointer-events: none;
  filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.5));
  animation: ${outfitFadeIn} 0.35s ease-out;
`;


