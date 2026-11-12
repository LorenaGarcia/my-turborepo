"use client";

import styled from "styled-components";

export const StudioColumn = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1024px) {
    width: 440px;
    flex-shrink: 0;
  }
`;

export const StudioCard = styled.div`
  width: 100%;
  background: linear-gradient(165deg, #173323 0%, #102419 65%, #0c1c13 100%);
  border: 1.5px solid rgba(212, 148, 28, 0.45);
  border-radius: 20px;
  padding: 18px 16px;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 640px) {
    padding: 22px 20px;
  }
`;

export const StudioHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const StudioTitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const BrushIconCircle = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: rgba(22, 101, 52, 0.55);
  border: 1px solid rgba(74, 222, 128, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4ade80;
  flex-shrink: 0;
`;

export const StudioTitleText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const StudioTitle = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: 800;
  color: #fef3c7;
`;

export const StudioSubtitle = styled.p`
  margin: 0;
  font-size: 0.74rem;
  color: #a7f3d0;
  opacity: 0.85;
`;

export const StepPill = styled.span`
  padding: 5px 11px;
  border-radius: 9999px;
  background: rgba(234, 179, 8, 0.16);
  border: 1px solid rgba(250, 204, 21, 0.4);
  font-size: 0.68rem;
  font-weight: 700;
  color: #fde047;
  white-space: nowrap;
`;

export const TabsBar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  border-bottom: 1px solid rgba(250, 204, 21, 0.2);
  padding-bottom: 8px;
`;

export const TabButton = styled.button<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 6px;
  border-radius: 10px;
  border: none;
  background: ${({ $active }) =>
    $active ? "rgba(234, 179, 8, 0.18)" : "transparent"};
  color: ${({ $active }) => ($active ? "#fef08a" : "#9ca3af")};
  font-family: inherit;
  font-size: 0.74rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s ease;
  border-bottom: 2px solid
    ${({ $active }) => ($active ? "#facc15" : "transparent")};

  &:hover {
    color: #fef3c7;
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const SectionMetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #d1d5db;
`;

export const SectionCountAccent = styled.span`
  color: #4ade80;
  text-transform: none;
  font-weight: 700;
`;

export const FramesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-height: 360px;
  overflow-y: auto;
  padding-right: 2px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FrameOptionCard = styled.button<{ $selected: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 14px;
  cursor: pointer;
  background: ${({ $selected }) =>
    $selected
      ? "linear-gradient(135deg, rgba(185, 28, 28, 0.32) 0%, rgba(20, 56, 36, 0.94) 100%)"
      : "rgba(11, 28, 19, 0.75)"};
  border: 1.5px solid
    ${({ $selected }) =>
      $selected ? "#fca5a5" : "rgba(250, 204, 21, 0.22)"};
  box-shadow: ${({ $selected }) =>
    $selected ? "0 0 0 2px rgba(248, 113, 113, 0.25)" : "none"};
  transition:
    border-color 0.18s ease,
    background 0.18s ease,
    box-shadow 0.18s ease;

  &:hover {
    border-color: rgba(250, 204, 21, 0.65);
  }
`;

export const FrameThumbBox = styled.div`
  width: 100%;
  aspect-ratio: 791 / 1024;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid rgba(250, 204, 21, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const FrameThumbImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
`;

export const FrameInfoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
  flex: 1;
`;

export const FrameTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`;

export const FrameName = styled.span`
  font-size: 0.76rem;
  font-weight: 800;
  color: #fef3c7;
  line-height: 1.2;
`;

export const PopularBadge = styled.span`
  padding: 2px 7px;
  border-radius: 9999px;
  background: #dc2626;
  color: #ffffff;
  font-size: 0.58rem;
  font-weight: 800;
  flex-shrink: 0;
`;

export const FrameDesc = styled.span`
  font-size: 0.67rem;
  color: #cbd5e1;
  line-height: 1.3;
`;

export const ElementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-height: 320px;
  overflow-y: auto;
  padding-right: 2px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ElementImageCard = styled.button<{ $active?: boolean }>`
  position: relative;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 14px;
  cursor: pointer;
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(135deg, rgba(22, 101, 52, 0.6) 0%, rgba(15, 45, 28, 0.92) 100%)"
      : "rgba(255, 255, 255, 0.06)"};
  border: 1.5px solid
    ${({ $active }) =>
      $active ? "#4ade80" : "rgba(250, 204, 21, 0.24)"};
  transition:
    border-color 0.16s ease,
    background 0.16s ease;

  &:hover {
    background: rgba(250, 204, 21, 0.18);
    border-color: #facc15;
  }
`;

export const ElementGraphicImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 56px;
  max-height: 56px;
  object-fit: contain;
  pointer-events: none;
`;

export const TextConfigForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ToggleSwitchRow = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 14px;
  border-radius: 12px;
  background: rgba(11, 28, 19, 0.8);
  border: 1.5px solid rgba(74, 222, 128, 0.35);
  color: #fef3c7;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.72rem;
  font-weight: 700;
  color: #fde047;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid rgba(250, 204, 21, 0.35);
  background: rgba(11, 28, 19, 0.85);
  color: #ffffff;
  font-family: inherit;
  font-size: 0.84rem;
  outline: none;

  &:focus {
    border-color: #facc15;
    box-shadow: 0 0 0 2px rgba(250, 204, 21, 0.2);
  }
`;

export const FontOptionsCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const FontOptionBtn = styled.button<{
  $selected: boolean;
  $fontFamily: string;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 14px;
  border-radius: 11px;
  background: ${({ $selected }) =>
    $selected ? "rgba(234, 179, 8, 0.22)" : "rgba(11, 28, 19, 0.75)"};
  border: 1.5px solid
    ${({ $selected }) =>
      $selected ? "#facc15" : "rgba(255, 255, 255, 0.14)"};
  color: #ffffff;
  cursor: pointer;
  transition: all 0.16s ease;

  span:first-child {
    font-size: 0.72rem;
    font-weight: 700;
    color: #d1fae5;
  }

  span:last-child {
    font-family: ${({ $fontFamily }) => $fontFamily};
    font-size: 1.25rem;
    color: #fef08a;
  }
`;

export const InlinePillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SmallPillBtn = styled.button<{ $active: boolean }>`
  padding: 6px 12px;
  border-radius: 9999px;
  border: 1px solid
    ${({ $active }) =>
      $active ? "#facc15" : "rgba(255, 255, 255, 0.2)"};
  background: ${({ $active }) =>
    $active ? "rgba(234, 179, 8, 0.25)" : "rgba(11, 28, 19, 0.75)"};
  color: #fef3c7;
  font-family: inherit;
  font-size: 0.72rem;
  font-weight: 700;
  cursor: pointer;
`;

export const PromoBannerCard = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 16px;
  background: linear-gradient(135deg, #163a24 0%, #0f291a 100%);
  border: 1px solid rgba(74, 222, 128, 0.35);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.3);
`;

export const PromoIconCircle = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 9999px;
  background: rgba(234, 179, 8, 0.18);
  border: 1px solid rgba(250, 204, 21, 0.45);
  color: #facc15;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const PromoTextCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const PromoTitle = styled.h4`
  margin: 0;
  font-size: 0.78rem;
  font-weight: 800;
  color: #fef3c7;
`;

export const PromoDescription = styled.p`
  margin: 0;
  font-size: 0.7rem;
  line-height: 1.45;
  color: #d1fae5;
  opacity: 0.9;
`;
