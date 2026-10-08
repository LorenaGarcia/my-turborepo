"use client";

import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #08030C;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 20px 20px 24px;
  text-align: center;
  position: relative;
  z-index: 10;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const BrandText = styled.p`
  font-family: 'Cinzel', serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #FFB300;
  letter-spacing: 1px;
`;

export const QuoteText = styled.p`
  font-size: 0.9rem;
  color: #A090B0;
  max-width: 600px;
  line-height: 1.5;
`;

export const CopyRight = styled.p`
  font-size: 0.75rem;
  color: #6E5B80;
  margin-top: 16px;
`;
