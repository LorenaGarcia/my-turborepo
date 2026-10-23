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
  "#FFC107",
  "#2196F3",
  "#E91E63",
  "#FF5722",
  "#4CAF50",
  "#00BCD4",
  "#D81B60",
  "#9C27B0", 
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

        </NavContainer>
      </HeaderContainer>
    </TopBarWrapper>
  );
}

export default Header;

