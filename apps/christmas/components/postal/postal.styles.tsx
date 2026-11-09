"use client";

import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #0b2016;
  background-image: radial-gradient(
    circle at 20% 20%,
    rgba(31, 58, 36, 0.65) 0%,
    rgba(11, 32, 22, 0.95) 70%
  );
`;

export const MainWorkspace = styled.main`
  position: relative;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 16px 28px;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 28px 32px 36px;
  }
`;

export const WorkspaceContainer = styled.div`
  position: relative;
  z-index: 4;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const TwoColumnGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
    gap: 24px;
  }
`;

