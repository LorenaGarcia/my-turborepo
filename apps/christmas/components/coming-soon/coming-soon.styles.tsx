import styled, { keyframes } from "styled-components";

const ornamentSwing = keyframes`
  0%, 100% {
    transform: rotate(-3.5deg) translateY(0px);
  }
  50% {
    transform: rotate(3.5deg) translateY(-6px);
  }
`;

const cardEntrance = keyframes`
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.97);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const PageWrapper = styled.div`
  min-height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #0b2216;
  color: #ffffff;
  overflow-x: hidden;
`;

export const MainSection = styled.main`
  position: relative;
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem 2.25rem;
  background:
    radial-gradient(
      circle at 50% 35%,
      rgba(234, 179, 8, 0.16) 0%,
      rgba(22, 68, 42, 0.65) 48%,
      #0b2216 100%
    );
  overflow: hidden;

  @media (min-width: 640px) {
    padding: 2.5rem 1.5rem 3rem;
  }
`;

export const ContentCard = styled.section`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 26rem;
  padding: 1.75rem 1.25rem 1.85rem;
  border-radius: 1.5rem;
  background: linear-gradient(
    180deg,
    rgba(20, 56, 36, 0.94) 0%,
    rgba(13, 39, 25, 0.97) 100%
  );
  border: 2px solid rgba(234, 179, 8, 0.7);
  box-shadow:
    0 24px 54px rgba(0, 0, 0, 0.5),
    0 0 0 5px rgba(234, 179, 8, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${cardEntrance} 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both;

  @media (min-width: 640px) {
    max-width: 34rem;
    padding: 2.25rem 2.25rem 2.35rem;
    border-radius: 1.85rem;
  }
`;

export const BadgePill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.9rem;
  border-radius: 9999px;
  background: linear-gradient(180deg, #dc2626 0%, #991b1b 100%);
  border: 1.5px solid #facc15;
  color: #fef08a;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 0.75rem;
  }
`;

export const IllustrationWrapper = styled.div`
  position: relative;
  width: 11.5rem;
  height: 14.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 4%;
  animation: ${ornamentSwing} 4.2s ease-in-out infinite;
  filter: drop-shadow(0 14px 24px rgba(0, 0, 0, 0.45));

  @media (min-width: 640px) {
    width: 14rem;
    height: 17.5rem;
    margin-bottom: 1.25rem;
  }
`;

export const SantaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  user-select: none;
`;

export const Title = styled.h1`
  margin: 0 0 0.6rem;
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 800;
  color: #ffffff;
  font-family: var(--font-serif), Georgia, serif;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.45);

  @media (min-width: 640px) {
    font-size: 2rem;
  }
`;

export const ShortMessage = styled.p`
  margin: 0 0 1.5rem;
  font-size: 0.9rem;
  line-height: 1.55;
  color: #e2e8f0;
  max-width: 26rem;

  @media (min-width: 640px) {
    font-size: 1rem;
    margin-bottom: 1.75rem;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.65rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    gap: 0.85rem;
  }
`;

export const PrimaryButton = styled.button`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.78rem 1.25rem;
  border-radius: 9999px;
  border: 2px solid #facc15;
  background: linear-gradient(180deg, #dc2626 0%, #991b1b 100%);
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 18px rgba(153, 27, 27, 0.4);
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 22px rgba(153, 27, 27, 0.55);
  }
`;

export const SecondaryButton = styled.button`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.78rem 1.25rem;
  border-radius: 9999px;
  border: 1.5px solid rgba(250, 204, 21, 0.65);
  background: rgba(255, 255, 255, 0.08);
  color: #fef08a;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.18s ease, transform 0.18s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
`;

