"use client";

import styled from "styled-components";

export const FooterWrapper = styled.footer`
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
  border-top: 2px solid #d4941c;
  color: #e5e7eb;
  z-index: 10;
`;

export const FooterContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    padding: 24px 32px;
    gap: 20px;
  }
`;

export const FooterDivider = styled.hr`
  border: none;
  border-top: 1px solid rgba(253, 224, 71, 0.22);
  margin: 0;
`;

export const FooterBottomRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 12px;
  }
`;

export const CopyrightText = styled.p`
  font-size: 0.76rem;
  color: #e2e8f0;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.65);
  margin: 0;
`;
