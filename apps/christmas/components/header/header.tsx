"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { animate } from "motion";
import * as Styled from "./header.styles";
import { getHeaderNavItems, isNavItemActive } from "./header.utils";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const navItems = getHeaderNavItems();
  const hatRef = useRef<HTMLImageElement>(null);
  const letterRef = useRef<HTMLSpanElement>(null);
  const isFlyingRef = useRef<boolean>(false);

  const playHatArcAnimation = useCallback(async () => {
    const hatEl = hatRef.current;
    const letterEl = letterRef.current;
    if (!hatEl || !letterEl || isFlyingRef.current) return;

    isFlyingRef.current = true;

    try {
      // 1. Fly the Santa hat along a curved arc and scale it onto the letter "a"
      await animate(
        hatEl,
        {
          opacity: [0, 1, 1],
          scale: [1.85, 1.25, 1],
          x: [-95, -35, 0],
          y: [-18, -46, 0],
          rotate: [-38, 14, 0],
        },
        {
          duration: 0.65,
          ease: [0.74, 0.18, 0.93, 0.69],
        }
      ).finished;

      // 2. Impact recoil on the letter "a" + hat when the hat lands
      await animate(
        letterEl,
        {
          y: [0, 4, -2, 0],
          scale: [1, 0.86, 1.08, 1],
        },
        {
          duration: 0.38,
          ease: [0.22, 1, 0.36, 1],
        }
      ).finished;
    } finally {
      isFlyingRef.current = false;
    }
  }, []);

  useEffect(() => {
    playHatArcAnimation();
  }, [pathname, playHatArcAnimation]);

  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderContainer>
        <Styled.BrandButton
          onClick={() => router.push("/")}
          onMouseEnter={playHatArcAnimation}
        >
          <Styled.BrandTextGroup>
            <Styled.BrandTitle>
              Villa Navideñ
              <Styled.HatLetterWrapper ref={letterRef}>
                a
                <Styled.SantaHatImage
                  ref={hatRef}
                  src="/santa-hat.png"
                  alt="Gorro navideño"
                />
              </Styled.HatLetterWrapper>
            </Styled.BrandTitle>
          </Styled.BrandTextGroup>
        </Styled.BrandButton>

        <Styled.NavList aria-label="Navegación principal">
          {navItems.map((item) => {
            const active = isNavItemActive(pathname, item.href);
            return (
              <Styled.NavLinkButton
                key={item.id}
                $active={active}
                onClick={() => {
                  if (item.href.startsWith("/")) {
                    router.push(item.href);
                  }
                }}
              >
                {item.label}
              </Styled.NavLinkButton>
            );
          })}
        </Styled.NavList>
      </Styled.HeaderContainer>
    </Styled.HeaderWrapper>
  );
}

export default Header;
