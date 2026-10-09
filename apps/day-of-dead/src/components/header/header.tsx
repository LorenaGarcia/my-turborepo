"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  TopBarWrapper,
  ColorBanner,
  ColorSegment,
  HeaderContainer,
  BrandSection,
  SkullIconBadge,
  HeaderFlowerImage,
  BrandTitles,
  BrandName,
  NavContainer,
  NavButton,
} from "./header.styles";

const bannerColors = [
  "#FFC107", // Yellow
  "#2196F3", // Blue
  "#E91E63", // Pink
  "#FF5722", // Orange
  "#4CAF50", // Green
  "#00BCD4", // Cyan
  "#D81B60", // Magenta
  "#9C27B0", // Purple
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <TopBarWrapper>
      <ColorBanner>
        {bannerColors.map((col, idx) => (
          <ColorSegment key={idx} $color={col} />
        ))}
      </ColorBanner>

      <HeaderContainer>
        <BrandSection onClick={() => router.push("/")} style={{ cursor: "pointer" }}>
          <SkullIconBadge>
            <HeaderFlowerImage src="/cempasuchil-flower.png" alt="Flor de cempasúchil" />
          </SkullIconBadge>
          <BrandTitles>
            <BrandName>Día de Muertos</BrandName>
          </BrandTitles>
        </BrandSection>

        <NavContainer>
          <NavButton
            $active={pathname === "/" || pathname === ""}
            onClick={() => router.push("/")}
          >
            Inicio
          </NavButton>

          <NavButton
            $active={pathname === "/catrinas"}
            onClick={() => router.push("/catrinas")}
          >
            Viste tu Catrina
          </NavButton>

          <NavButton
            $active={pathname === "/ofrenda"}
            onClick={() => router.push("/ofrenda")}
          >
            Crea tu Ofrenda
          </NavButton>

          <NavButton
            $active={pathname === "/tradiciones"}
            onClick={() => router.push("/tradiciones")}
          >
            Tradiciones y Música
          </NavButton>
        </NavContainer>
      </HeaderContainer>
    </TopBarWrapper>
  );
}

export default Header;
