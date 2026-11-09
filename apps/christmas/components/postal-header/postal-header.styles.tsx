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
  padding: 10px;

  @media (min-width: 1024px) {
    padding: 25px;
    gap: 15px;
  }
`;

export const LeftInfoColumn = styled.div`
  display: flex;

  gap: 8px;
`;

export const WorkshopPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(20, 83, 45, 0.75);
  border: 1px solid rgba(74, 222, 128, 0.38);
  border-radius: 9999px;
  padding: 4px 12px;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.7px;
  color: #bbf7d0;
  text-transform: uppercase;
`;

export const PillDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background-color: #4ade80;
`;

export const BannerTitle = styled.h1`
  font-size: clamp(1.6rem, 3.3vw, 2.35rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.4px;
  color: #f8f6f1ff;
  margin: 0;
  font-family: var(--font-serif), Georgia, serif;
`;

export const BannerTitleAccent = styled.span`
  display: block;
  font-style: italic;
  color: #e34b4bff;

  font-size: clamp(1.6rem, 3.3vw, 2.35rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.4px;
  margin: 0;
  font-family: var(--font-serif), Georgia, serif;
`;

export const BannerDescription = styled.p`
  font-size: 0.84rem;
  font-weight: 500;
  line-height: 1.55;
  color: #d1fae5;
  opacity: 0.92;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ActionsColumn = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 640px) {
    width: auto;
  }

  @media (min-width: 1024px) {
    justify-content: space-between;
    flex-direction: row;
    align-items: stretch;
  }
`;

export const TopButtonsRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`;

export const SecondaryActionBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  background: rgba(15, 38, 25, 0.88);
  border: 1px solid rgba(250, 204, 21, 0.35);
  border-radius: 12px;
  padding: 9px 15px;
  font-family: inherit;
  font-size: 0.78rem;
  font-weight: 700;
  color: #fef08a;
  cursor: pointer;
  transition: all 0.18s ease;

  &:hover {
    background: rgba(24, 62, 41, 0.95);
    border-color: rgba(250, 204, 21, 0.65);
    transform: translateY(-1px);
  }
`;

export const PrimaryDownloadBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(180deg, #dc2626 0%, #991b1b 100%);
  border: 1.5px solid rgba(252, 165, 165, 0.6);
  border-radius: 12px;
  padding: 10px 22px;
  font-family: inherit;
  font-size: 0.84rem;
  font-weight: 800;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(185, 28, 28, 0.45);
  transition: all 0.18s ease;

  &:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;
