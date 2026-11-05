"use client";

import styled, { keyframes } from "styled-components";

const snowFallAnimation = keyframes`
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  15% {
    opacity: 0.9;
  }
  50% {
    transform: translate3d(18px, 48vh, 0);
  }
  85% {
    opacity: 0.85;
  }
  100% {
    transform: translate3d(-12px, 95vh, 0);
    opacity: 0;
  }
`;

export const SnowfallLayer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 2;
`;

export const SnowflakeDot = styled.span<{
  $left: number;
  $size: number;
  $duration: number;
  $delay: number;
  $opacity: number;
}>`
  position: absolute;
  top: -12px;
  left: ${(props) => props.$left}%;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    #ffffff 0%,
    rgba(255, 255, 255, 0.75) 70%,
    transparent 100%
  );
  opacity: ${(props) => props.$opacity};
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
  animation: ${snowFallAnimation} ${(props) => props.$duration}s linear infinite;
  animation-delay: ${(props) => props.$delay}s;
`;

