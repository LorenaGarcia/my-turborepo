"use client";

import styled from "styled-components";

export const CountdownCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  background: rgba(255, 255, 255, 0.96);
  border: 1.5px solid #eab354;
  border-radius: 14px;
  padding: 12px 18px;
  box-shadow:
    0 12px 28px rgba(0, 0, 0, 0.22),
    0 2px 8px rgba(234, 179, 84, 0.25);
  backdrop-filter: blur(8px);

  @media (min-width: 640px) {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    width: auto;
    padding: 12px 22px;
  }
`;

export const CountdownMainGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CalendarIconWrapper = styled.div`
  color: #dc2626;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const CountdownTextStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.2;
`;

export const CountdownOverline = styled.span`
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.7px;
  color: #b91c1c;
  text-transform: uppercase;
`;

export const CountdownValueRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
`;

export const DaysNumber = styled.span`
  font-size: 1.3rem;
  font-weight: 800;
  color: #dc2626;
  line-height: 1;
`;

export const DaysDescription = styled.span`
  font-size: 0.78rem;
  font-weight: 700;
  color: #1e3a2f;
`;

export const VerticalDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e7eb;

  @media (min-width: 640px) {
    width: 1px;
    height: 30px;
  }
`;

export const PosadasGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #15803d;
`;

export const PosadasLabel = styled.span`
  font-size: 0.78rem;
  font-weight: 700;
  color: #1e3a2f;
`;
