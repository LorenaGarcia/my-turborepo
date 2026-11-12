"use client";

import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #1f3a24;
  background-image:
    linear-gradient(
      90deg,
      rgba(15, 32, 20, 0.55) 0%,
      rgba(20, 42, 26, 0.35) 50%,
      rgba(15, 32, 20, 0.55) 100%
    ),
    url("/header-bg.jpg");
  background-size: 360px auto;
  background-position: center center;
  background-repeat: repeat;
  border-bottom: 2px solid #d4941c;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const HeaderContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 14px 32px;
    gap: 24px;
  }
`;

export const BrandButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  padding: 0;
`;

export const BrandIconBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(145deg, #d62828 0%, #b71c1c 100%);
  border: 1px solid rgba(253, 224, 71, 0.45);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  flex-shrink: 0;
`;

export const BrandTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`;

export const BrandTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 800;
  color: #fff8f0;
  letter-spacing: -0.2px;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.65);
  display: inline-flex;
  align-items: baseline;
`;

export const HatLetterWrapper = styled.span`
  position: relative;
  display: inline-block;
  margin-right: 10px;
  transform-origin: bottom center;
`;

export const SantaHatImage = styled.img`
  position: absolute;
  top: -8px;
  left: -3px;
  width: 24px;
  height: auto;
  opacity: 0;
  pointer-events: none;
  transform-origin: center center;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.45));
`;

export const BrandSubtitle = styled.span`
  font-size: 0.65rem;
  font-weight: 800;
  color: #fcd34d;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.65);
`;

export const NavList = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 28px;
  }
`;

export const NavLinkButton = styled.button<{ $active?: boolean }>`
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.88rem;
  font-weight: ${(props) => (props.$active ? 700 : 600)};
  color: ${(props) => (props.$active ? "#fde047" : "#f3f4f6")};
  padding: 6px 0;
  position: relative;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.65);
  transition: color 0.2s ease;

  &:hover {
    color: #fde047;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 2px;
    border-radius: 2px;
    background-color: ${(props) => (props.$active ? "#f59e0b" : "transparent")};
    box-shadow: ${(props) =>
      props.$active ? "0 0 8px rgba(245, 158, 11, 0.7)" : "none"};
    transition: background-color 0.2s ease;
  }
`;
