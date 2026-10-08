"use client";

import React, { useState } from "react";
import {
  TopBarWrapper,
  ColorBanner,
  ColorSegment,
  HeaderContainer,
  BrandSection,
  SkullIconBadge,
  BrandTitles,
  BrandName,
  BrandSubtitle,
  NavContainer,
  NavButton,
  RightSection,
  MusicButton,
  StatusDot,
  AvatarButton,
} from "./header.styles";
import { User, Radio } from "lucide-react";

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
  const [activeTab, setActiveTab] = useState("Inicio");

  return (
    <TopBarWrapper>
      <ColorBanner>
        {bannerColors.map((col, idx) => (
          <ColorSegment key={idx} $color={col} />
        ))}
      </ColorBanner>

      <HeaderContainer>
        <BrandSection>
          <SkullIconBadge>💀</SkullIconBadge>
          <BrandTitles>
            <BrandName>Día de Muertos <span>💀</span></BrandName>
          </BrandTitles>
        </BrandSection>

        <NavContainer>
          <NavButton
            $active={activeTab === "Inicio"}
            onClick={() => setActiveTab("Inicio")}
          >
            Inicio
          </NavButton>

          <NavButton
            $active={activeTab === "Viste tu Catrina"}
            onClick={() => setActiveTab("Viste tu Catrina")}
          >
            Viste tu Catrina
          </NavButton>

          <NavButton
            $active={activeTab === "Crea tu Ofrenda"}
            onClick={() => setActiveTab("Crea tu Ofrenda")}
          >
            Crea tu Ofrenda
          </NavButton>

          <NavButton
            $active={activeTab === "Tradiciones y Música"}
            onClick={() => setActiveTab("Tradiciones y Música")}
          >
            Tradiciones y Música
          </NavButton>
        </NavContainer>
      </HeaderContainer>
    </TopBarWrapper>
  );
}

export default Header;
