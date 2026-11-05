import styled, { css, keyframes } from "styled-components";
import { type PhotoModalPhase } from "./photo-modal.utils";

const backdropFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const backdropFadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const cameraPopAndWiggle = keyframes`
  0% {
    transform: scale(0) rotate(-25deg);
    opacity: 0;
  }
  28% {
    transform: scale(1.22) rotate(12deg);
    opacity: 1;
  }
  44% {
    transform: scale(0.92) rotate(-14deg);
  }
  60% {
    transform: scale(1.08) rotate(10deg);
  }
  75% {
    transform: scale(0.96) rotate(-6deg);
  }
  88% {
    transform: scale(1.14) rotate(0deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
`;

const shutterFlashKeyframes = keyframes`
  0%, 62% {
    opacity: 0;
  }
  74% {
    opacity: 0.85;
  }
  100% {
    opacity: 0;
  }
`;

const modalSpringExpand = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.28) translateY(24px);
  }
  65% {
    opacity: 1;
    transform: scale(1.04) translateY(-4px);
  }
  85% {
    transform: scale(0.985) translateY(1px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const modalSpringCollapse = keyframes`
  0% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  30% {
    transform: scale(1.03) translateY(-4px);
  }
  100% {
    opacity: 0;
    transform: scale(0.22) translateY(20px);
  }
`;

const contentStaggerUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(14px) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const emblemFloat = keyframes`
  0%, 100% {
    transform: translate(-50%, -50%) translateY(0px) rotate(0deg);
  }
  50% {
    transform: translate(-50%, -50%) translateY(-4px) rotate(-3deg);
  }
`;

export const OverlayBackdrop = styled.div<{ $phase: PhotoModalPhase }>`
  position: fixed;
  inset: 0;
  z-index: 1200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  background: radial-gradient(
    circle at center,
    rgba(15, 41, 27, 0.78) 0%,
    rgba(6, 20, 12, 0.9) 100%
  );
  backdrop-filter: blur(8px);
  animation: ${({ $phase }) =>
    $phase === "closing"
      ? css`${backdropFadeOut} 0.3s ease forwards`
      : css`${backdropFadeIn} 0.25s ease forwards`};
`;

export const ShutterFlashOverlay = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1205;
  background: radial-gradient(
    circle at center,
    #ffffff 0%,
    rgba(254, 240, 138, 0.85) 55%,
    rgba(255, 255, 255, 0) 100%
  );
  animation: ${shutterFlashKeyframes} 0.9s ease-out forwards;
`;

export const CameraStageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;
  z-index: 1210;
`;

export const CameraFigureImg = styled.img<{ $docked?: boolean }>`
  display: block;
  object-fit: contain;
  user-select: none;
  z-index: 1220;
  ${({ $docked }) =>
    $docked
      ? css`
          position: absolute;
          top: 0;
          left: 50%;
          width: 4.5rem;
          height: 4.5rem;
          animation: ${emblemFloat} 3s ease-in-out infinite;
        `
      : css`
          position: relative;
          width: 7.25rem;
          height: 7.25rem;
          animation: ${cameraPopAndWiggle} 0.88s
            cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        `}

  @media (min-width: 640px) {
    ${({ $docked }) =>
      $docked
        ? css`
            width: 5.25rem;
            height: 5.25rem;
          `
        : css`
            width: 8.25rem;
            height: 8.25rem;
          `}
  }
`;

export const CapturingPill = styled.div`
  padding: 0.45rem 1.1rem;
  border-radius: 9999px;
  background: rgba(15, 41, 27, 0.92);
  border: 1.5px solid rgba(250, 204, 21, 0.7);
  color: #fef08a;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
`;

export const ModalCard = styled.div<{ $phase: PhotoModalPhase }>`
  position: relative;
  width: 100%;
  max-width: 24rem;
  margin-top: 2rem;
  padding: 2.85rem 1.15rem 1.25rem;
  border-radius: 1.6rem;
  background: linear-gradient(180deg, #fffdf9 0%, #fef7ec 100%);
  border: 3px solid #eab308;
  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.55),
    0 0 0 6px rgba(234, 179, 8, 0.2),
    inset 0 2px 0 #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transform-origin: center center;
  animation: ${({ $phase }) =>
    $phase === "closing"
      ? css`${modalSpringCollapse} 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards`
      : css`${modalSpringExpand} 0.56s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`};

  @media (min-width: 640px) {
    max-width: 27.5rem;
    padding: 3.1rem 1.65rem 1.5rem;
    border-radius: 1.85rem;
  }
`;

export const CloseIconButton = styled.button`
  position: absolute;
  top: 0.85rem;
  right: 0.85rem;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 9999px;
  border: 1.5px solid rgba(180, 83, 9, 0.25);
  background: #fffbeb;
  color: #78350f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.18s ease;

  &:hover {
    background: #fef3c7;
    transform: scale(1.08) rotate(6deg);
  }
`;

export const ModalHeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0.85rem;
  animation: ${contentStaggerUp} 0.42s ease 0.1s both;
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 800;
  color: #7f1d1d;
  font-family: var(--font-serif), Georgia, serif;

  @media (min-width: 640px) {
    font-size: 1.4rem;
  }
`;

export const ModalSubtitle = styled.p`
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.4;
  color: #57534e;
  max-width: 21rem;

  @media (min-width: 640px) {
    font-size: 0.84rem;
  }
`;

export const PhotoPreviewFrame = styled.div`
  position: relative;
  width: 100%;
  max-width: 15.5rem;
  aspect-ratio: 4 / 5;
  border-radius: 1rem;
  padding: 0.45rem;
  background: #ffffff;
  border: 2px solid rgba(234, 179, 8, 0.65);
  box-shadow:
    0 12px 26px rgba(120, 53, 15, 0.16),
    inset 0 0 0 1px rgba(254, 243, 199, 0.8);
  overflow: hidden;
  margin-bottom: 0.85rem;
  animation: ${contentStaggerUp} 0.46s cubic-bezier(0.34, 1.56, 0.64, 1) 0.16s
    both;

  @media (min-width: 640px) {
    max-width: 17.5rem;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0.7rem;
  display: block;
`;

export const StatusBadge = styled.div<{ $completed: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 0.95rem;
  background: ${({ $completed }) => ($completed ? "#dcfce7" : "#fef9c3")};
  color: ${({ $completed }) => ($completed ? "#166534" : "#854d0e")};
  border: 1px solid
    ${({ $completed }) => ($completed ? "#86efac" : "#fde047")};
  animation: ${contentStaggerUp} 0.46s ease 0.22s both;
`;

export const ActionsRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.55rem;
  animation: ${contentStaggerUp} 0.46s ease 0.26s both;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const PrimaryActionButton = styled.button`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.68rem 1rem;
  border-radius: 9999px;
  border: 1.5px solid #facc15;
  background: linear-gradient(180deg, #dc2626 0%, #991b1b 100%);
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 6px 14px rgba(153, 27, 27, 0.3);
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-1px) scale(1.02);
    box-shadow: 0 8px 18px rgba(153, 27, 27, 0.4);
  }
`;

export const SecondaryActionButton = styled.button`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.68rem 1rem;
  border-radius: 9999px;
  border: 1.5px solid rgba(20, 83, 45, 0.28);
  background: #f0fdf4;
  color: #14532d;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.18s ease, transform 0.18s ease;

  &:hover {
    background: #dcfce7;
    transform: translateY(-1px);
  }
`;
