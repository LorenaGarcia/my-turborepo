"use client";

import React from "react";
import { Calendar, PartyPopper } from "lucide-react";
import * as Styled from "./countdown.styles";
import { getCountdownSummary } from "./countdown.utils";

export function Countdown() {
  const summary = getCountdownSummary();

  return (
    <Styled.CountdownCard>
      <Styled.CountdownMainGroup>
        <Styled.CalendarIconWrapper>
          <Calendar size={18} strokeWidth={2.2} />
        </Styled.CalendarIconWrapper>

        <Styled.CountdownTextStack>
          <Styled.CountdownOverline>
            {summary.titleLabel}
          </Styled.CountdownOverline>
          <Styled.CountdownValueRow>
            <Styled.DaysNumber>{summary.daysRemaining}</Styled.DaysNumber>
            <Styled.DaysDescription>
              {summary.targetText}
            </Styled.DaysDescription>
          </Styled.CountdownValueRow>
        </Styled.CountdownTextStack>
      </Styled.CountdownMainGroup>

      <Styled.VerticalDivider />

      <Styled.PosadasGroup>
        <PartyPopper size={17} strokeWidth={2.2} />
        <Styled.PosadasLabel>{summary.posadasText}</Styled.PosadasLabel>
      </Styled.PosadasGroup>
    </Styled.CountdownCard>
  );
}

export default Countdown;

