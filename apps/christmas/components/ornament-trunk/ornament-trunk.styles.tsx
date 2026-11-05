"use client";

import styled from "styled-components";

export const SidebarColumn = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media (min-width: 1024px) {
    width: 390px;
    flex-shrink: 0;
  }
`;

export const TrunkCard = styled.div`
  background-color: #9e1118;
  background-image:
    linear-gradient(
      180deg,
      rgba(122, 12, 18, 0.35) 0%,
      rgba(92, 8, 13, 0.45) 100%
    ),
    url("/trunk-bg.jpg");
  background-size: 320px auto;
  background-position: center;
  background-repeat: repeat;
  border: 2px solid #d4941c;
  border-radius: 18px;
  padding: 18px 16px;
  box-shadow:
    0 14px 32px rgba(0, 0, 0, 0.35),
    0 0 0 1px rgba(212, 148, 28, 0.2);
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 640px) {
    padding: 22px 20px;
  }
`;

export const TrunkHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: rgba(255, 253, 249, 0.94);
  border: 1px solid rgba(212, 148, 28, 0.4);
  border-radius: 12px;
  padding: 10px 14px;
  backdrop-filter: blur(6px);
`;

export const TrunkTitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #991b1b;
`;

export const TrunkTitle = styled.h2`
  font-size: 0.88rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: #7f1d1d;
  text-transform: uppercase;
  margin: 0;
`;

export const HandmadeTag = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #15803d;
`;

export const TabsTrack = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  background-color: rgba(255, 245, 245, 0.94);
  padding: 4px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.16);
`;

export const TabButton = styled.button<{ $active?: boolean }>`
  border: none;
  border-radius: 7px;
  padding: 7px 6px;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: ${(props) => (props.$active ? 700 : 600)};
  color: ${(props) => (props.$active ? "#b91c1c" : "#4b5563")};
  background-color: ${(props) => (props.$active ? "#ffffff" : "transparent")};
  box-shadow: ${(props) =>
    props.$active ? "0 2px 6px rgba(0, 0, 0, 0.08)" : "none"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #b91c1c;
  }
`;

export const OrnamentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (min-width: 420px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const OrnamentTile = styled.button<{ $selected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 8px 10px;
  border-radius: 14px;
  background-color: ${(props) =>
    props.$selected ? "#ffffff" : "rgba(255, 248, 248, 0.94)"};
  border: 2px solid
    ${(props) => (props.$selected ? "#facc15" : "rgba(255, 255, 255, 0.6)")};
  cursor: grab;
  transition:
    transform 0.18s ease,
    border-color 0.18s ease,
    box-shadow 0.18s ease;
  box-shadow: ${(props) =>
    props.$selected
      ? "0 6px 16px rgba(0, 0, 0, 0.28), 0 0 0 2px rgba(250, 204, 21, 0.45)"
      : "0 4px 10px rgba(0, 0, 0, 0.18)"};

  &:hover {
    transform: translateY(-2px);
    border-color: #facc15;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  }

  &:active {
    cursor: grabbing;
    transform: scale(0.97);
  }
`;

export const OrnamentIconWrapper = styled.div`
  width: 50px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const OrnamentSvgImg = styled.img<{ $size: number }>`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  object-fit: contain;
  pointer-events: none;
  user-select: none;
`;

export const OrnamentLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
  line-height: 1.2;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const InstructionsBox = styled.div`
  background-color: rgba(255, 249, 250, 0.95);
  border: 1px solid rgba(212, 148, 28, 0.35);
  border-radius: 12px;
  padding: 14px 16px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
`;

export const BulbIconWrapper = styled.div`
  color: #15803d;
  flex-shrink: 0;
  margin-top: 2px;
`;

export const InstructionsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InstructionsTitle = styled.h3`
  font-size: 0.76rem;
  font-weight: 800;
  color: #1f2937;
  margin: 0 0 2px;
`;

export const InstructionStep = styled.p`
  font-size: 0.72rem;
  font-weight: 500;
  color: #374151;
  line-height: 1.42;
  margin: 0;
`;

export const ArtisanBadgeCard = styled.div`
  background-color: #163022;
  background-image:
    linear-gradient(
      90deg,
      rgba(15, 32, 20, 0.7) 0%,
      rgba(20, 42, 26, 0.5) 50%,
      rgba(15, 32, 20, 0.7) 100%
    ),
    url("/header-bg.jpg");
  background-size: 320px auto;
  background-position: center;
  border: 1.5px solid #d4941c;
  border-radius: 16px;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
`;

export const ArtisanLeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ArtisanRedSeal = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(145deg, #dc2626 0%, #991b1b 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
`;

export const ArtisanTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ArtisanTitle = styled.span`
  font-size: 0.82rem;
  font-weight: 800;
  color: #fff8f0;
`;

export const ArtisanSubtitle = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  color: #fcd34d;
`;

export const ArtisanGoldCheck = styled.div`
  color: #facc15;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
