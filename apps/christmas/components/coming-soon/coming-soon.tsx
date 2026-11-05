"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Sparkles, TreePine } from "lucide-react";
import Header from "../header";
import Footer from "../footer";
import Snowfall from "../snowfall";
import * as Styled from "./coming-soon.styles";
import { getComingSoonCopy } from "./coming-soon.utils";

export function ComingSoon() {
  const router = useRouter();
  const copy = getComingSoonCopy();

  return (
    <Styled.PageWrapper>
      <Header />

      <Styled.MainSection>
        <Snowfall count={38} />

        <Styled.ContentCard>
          <Styled.BadgePill>
            <Sparkles size={13} strokeWidth={2.4} />
            <span>{copy.badge}</span>
          </Styled.BadgePill>

          <Styled.IllustrationWrapper>
            <Styled.SantaImage
              src="/santa-working.svg"
              alt="Santa Claus en su taza navideña"
              draggable={false}
            />
          </Styled.IllustrationWrapper>

          <Styled.Title>{copy.title}</Styled.Title>
          <Styled.ShortMessage>{copy.message}</Styled.ShortMessage>

          <Styled.ButtonsRow>
            <Styled.PrimaryButton
              type="button"
              onClick={() => router.push(copy.primaryCtaHref)}
            >
              <ArrowLeft size={16} strokeWidth={2.4} />
              <span>{copy.primaryCtaLabel}</span>
            </Styled.PrimaryButton>

            <Styled.SecondaryButton
              type="button"
              onClick={() => router.push(copy.secondaryCtaHref)}
            >
              <TreePine size={16} strokeWidth={2.3} />
              <span>{copy.secondaryCtaLabel}</span>
            </Styled.SecondaryButton>
          </Styled.ButtonsRow>
        </Styled.ContentCard>
      </Styled.MainSection>

      <Footer />
    </Styled.PageWrapper>
  );
}

export default ComingSoon;

