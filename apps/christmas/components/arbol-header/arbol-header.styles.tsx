"use client";

import styled from "styled-components";

export const BannerCard = styled.section`
  width: 100%;
  background: linear-gradient(135deg, #173323 0%, #102419 60%, #0d1f15 100%);
  border: 1.5px solid rgba(212, 148, 28, 0.45);
  border-radius: 20px;
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: center;
  padding: 15px;
  gap: 10px;

  @media (min-width: 1024px) {
    align-items: center;
  }
`;

export const LeftInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  max-width: 580px;
`;

export const BadgesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

export const WorkshopPill = styled.span`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(180deg, #b91c1c 0%, #991b1b 100%);
  border: 1px solid rgba(248, 113, 113, 0.45);
  border-radius: 9999px;
  padding: 4px 12px;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.7px;
  color: #ffffff;
  text-transform: uppercase;
`;

export const VillageTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.78rem;
  font-weight: 700;
  color: #facc15;
`;

export const BannerTitle = styled.h1`
  font-size: clamp(1.55rem, 3.2vw, 2.25rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.4px;
  color: #ffffff;
  margin: 0;
`;

export const BannerDescription = styled.p`
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.55;
  color: #d1fae5;
  opacity: 0.9;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const OptionsColumn = styled.div`
  gap: 10px;
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: center;
`;

export const OptionsTopRow = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const LightsOptionButton = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: ${(props) =>
    props.$active
      ? "linear-gradient(180deg, #1e5631 0%, #164225 100%)"
      : "rgba(15, 35, 24, 0.75)"};
  border: 1px solid
    ${(props) =>
      props.$active ? "rgba(74, 222, 128, 0.5)" : "rgba(255, 255, 255, 0.18)"};
  border-radius: 9999px;
  padding: 8px 16px;
  font-family: inherit;
  font-size: 0.76rem;
  font-weight: 700;
  color: #fef08a;
  cursor: pointer;
  transition: all 0.18s ease;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }
`;

export const SnowOptionButton = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: ${(props) =>
    props.$active ? "rgba(20, 50, 35, 0.9)" : "rgba(15, 35, 24, 0.65)"};
  border: 1px solid
    ${(props) =>
      props.$active ? "rgba(56, 189, 248, 0.4)" : "rgba(255, 255, 255, 0.16)"};
  border-radius: 9999px;
  padding: 8px 16px;
  font-family: inherit;
  font-size: 0.76rem;
  font-weight: 700;
  color: #e0f2fe;
  cursor: pointer;
  transition: all 0.18s ease;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }
`;

export const SnowIconSpan = styled.span`
  color: #38bdf8;
  display: inline-flex;
  align-items: center;
`;

export const ResetButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(76, 17, 24, 0.85);
  border: 1px solid rgba(248, 113, 113, 0.38);
  border-radius: 9999px;
  padding: 8px 16px;
  font-family: inherit;
  font-size: 0.76rem;
  font-weight: 700;
  color: #fecaca;
  cursor: pointer;
  transition: all 0.18s ease;

  &:hover {
    background: rgba(127, 29, 29, 0.95);
    transform: translateY(-1px);
  }
`;

export const SavePhotoButton = styled.button`
  align-items: center;
  background: linear-gradient(180deg, #b91c1c 0%, #991b1b 100%);
  border-radius: 9999px;
  border: 1px solid rgba(248, 113, 113, 0.5);
  box-shadow: 0 4px 12px rgba(185, 28, 28, 0.35);
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 0.78rem;
  font-weight: 700;
  gap: 8px;
  padding: 9px 18px;
  transition: all 0.18s ease;

  &:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }
`;
