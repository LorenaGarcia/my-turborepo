"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  TopBarWrapper,
  HeaderContainer,
  BrandSection,
  SkullIconBadge,
  HeaderFlowerImage,
  BrandTitles,
  BrandName,
  NavContainer,
  NavButton,
} from "./header.styles";


export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <TopBarWrapper>
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

