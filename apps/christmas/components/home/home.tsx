"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { animate, stagger } from "motion";
import Header from "../header";
import Footer from "../footer";
import Snowfall from "../snowfall";
import Countdown from "../countdown";
import * as Styled from "./home.styles";
import { getHeroCtaActions } from "./home.utils";

export function Home() {
  const router = useRouter();
  const ctaActions = getHeroCtaActions();
  const ctaRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ctaRowRef.current) return;
    const buttons = ctaRowRef.current.querySelectorAll("button");
    if (!buttons.length) return;

    animate(
      buttons,
      { opacity: [0, 1], y: [50, 0] },
      {
        duration: 0.65,
        delay: stagger(0.18, { startDelay: 0.55, from: "first" }),
        ease: [0, 0.71, 0.2, 1.01],
      }
    );
  }, []);

  return (
    <Styled.PageWrapper>
      <Header />

      <Styled.HeroSection>
        <Snowfall count={45} />
        <Styled.HeroCenterContent>
          <Styled.HeroTitle
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Bienvenidos a la{" "}
            <Styled.HeroTitleAccent>Villa Navideña</Styled.HeroTitleAccent>
          </Styled.HeroTitle>

          <Styled.CtaButtonsRow ref={ctaRowRef}>
            {ctaActions.map((action) => (
              <Styled.SnowyButton
                key={action.id}
                type="button"
                onClick={() => {
                  if (action.href.startsWith("/")) {
                    router.push(action.href);
                  }
                }}
              >
                <Styled.SnowCapSvg
                  viewBox="0 0 260 36"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6,22 C6,10 22,4 45,6 C68,2 98,2 128,6 C158,2 192,3 216,6 C238,4 254,10 254,22 C254,28 244,31 232,27 C218,22 204,31 188,28 C170,24 154,32 132,27 C110,23 94,32 74,27 C54,22 38,31 24,27 C12,24 6,27 6,22 Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M10,23 C24,28 38,20 56,25 C76,30 96,21 118,26 C140,30 162,22 184,27 C204,31 224,22 248,25"
                    stroke="#e2e8f0"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </Styled.SnowCapSvg>
                <Styled.SnowyButtonText>{action.label}</Styled.SnowyButtonText>
              </Styled.SnowyButton>
            ))}
          </Styled.CtaButtonsRow>
        </Styled.HeroCenterContent>

        <Styled.HeroBottomRow>
          <Countdown />
        </Styled.HeroBottomRow>
      </Styled.HeroSection>

      <Footer />
    </Styled.PageWrapper>
  );
}

export default Home;
