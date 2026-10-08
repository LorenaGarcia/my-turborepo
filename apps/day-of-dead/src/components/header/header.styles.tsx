"use client";

import styled from "styled-components";

export const TopBarWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const ColorBanner = styled.div`
  display: flex;
  height: 6px;
  width: 100%;
`;

export const ColorSegment = styled.div<{ $color: string }>`
  flex: 1;
  background-color: ${(props) => props.$color};
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 40px;
  background: rgba(12, 5, 18, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 992px) {
    padding: 16px 20px;
    flex-wrap: wrap;
    gap: 16px;
  }
`;

export const BrandSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SkullIconBadge = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #FFB300;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #120326;
  font-size: 1.3rem;
  box-shadow: 0 0 12px rgba(255, 179, 0, 0.4);
`;

export const BrandTitles = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BrandName = styled.span`
  font-family: 'Cinzel', serif;
  font-weight: 800;
  font-size: 1.15rem;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    font-size: 0.95rem;
  }
`;

export const BrandSubtitle = styled.span`
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #9C88B0;
  text-transform: uppercase;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  background: rgba(22, 10, 32, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 9999px;
  padding: 5px 6px;

  @media (max-width: 992px) {
    order: 3;
    width: 100%;
    justify-content: center;
    overflow-x: auto;
  }
`;

export const NavButton = styled.button<{ $active?: boolean }>`
  background: ${(props) =>
    props.$active
      ? "linear-gradient(135deg, #FF6F00 0%, #FF9100 100%)"
      : "transparent"};
  color: ${(props) => (props.$active ? "#FFFFFF" : "#C5B4D6")};
  font-family: 'Montserrat', sans-serif;
  font-weight: ${(props) => (props.$active ? "700" : "500")};
  font-size: 0.85rem;
  padding: 8px 20px;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.25s ease;
  box-shadow: ${(props) =>
    props.$active ? "0 2px 10px rgba(255, 111, 0, 0.4)" : "none"};

  &:hover {
    color: #FFFFFF;
    background: ${(props) =>
      props.$active
        ? "linear-gradient(135deg, #FF6F00 0%, #FF9100 100%)"
        : "rgba(255, 255, 255, 0.08)"};
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const MusicButton = styled.button`
  background: rgba(32, 14, 48, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #E2D4F0;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    border-color: #FF7A00;
    color: #FFFFFF;
    box-shadow: 0 0 12px rgba(255, 122, 0, 0.3);
  }
`;

export const StatusDot = styled.span`
  width: 7px;
  height: 7px;
  background-color: #FFB300;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 6px #FFB300;
`;

export const AvatarButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #F88379;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #120326;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.08);
  }
`;
