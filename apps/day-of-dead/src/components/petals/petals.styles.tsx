"use client";

import styled, { keyframes } from "styled-components";

const fallAndSway = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -30px, 0) rotate(0deg) rotateY(0deg);
  }
  12% {
    opacity: 0.9;
  }
  30% {
    transform: translate3d(40px, 30vh, 0) rotate(120deg) rotateY(180deg);
  }
  55% {
    transform: translate3d(-35px, 60vh, 0) rotate(240deg) rotateY(360deg);
  }
  80% {
    transform: translate3d(30px, 85vh, 0) rotate(330deg) rotateY(540deg);
  }
  92% {
    opacity: 0.85;
  }
  100% {
    opacity: 0;
    transform: translate3d(-15px, 108vh, 0) rotate(420deg) rotateY(720deg);
  }
`;

export const PetalsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 3;
  overflow: hidden;
`;

export const PetalItem = styled.div<{
  $left: number;
  $duration: number;
  $delay: number;
  $size: number;
  $blur: number;
  $color: string;
}>`
  position: absolute;
  top: -30px;
  left: ${(props) => props.$left}%;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size * 1.5}px;
  background: ${(props) => props.$color};
  border-radius: 60% 10% 70% 40%;
  box-shadow: inset -2px -2px 6px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(255, 122, 0, 0.4);
  filter: blur(${(props) => props.$blur}px);
  animation: ${fallAndSway} ${(props) => props.$duration}s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay}s;
  transform-origin: center center;
  will-change: transform, opacity;
`;
