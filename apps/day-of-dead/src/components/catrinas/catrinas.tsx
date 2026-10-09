"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Petals from "../petals/petals";
import Skull, { OutfitType } from "../skull/skull";
import * as Styled from "./catrinas.styles";

interface OutfitOption {
  id: OutfitType;
  label: string;
  icon: string;
  imageSrc?: string;
}

const outfitOptions: OutfitOption[] = [
  { id: "base", label: "Calaverita Base", icon: "💀" },
  {
    id: "catrina_elegante",
    label: "Catrina Elegante",
    icon: "✨",
    imageSrc: "/vestido-catrina-negro.png",
  },
  { id: "corona_floral", label: "Corona Floral", icon: "🪷" },
  { id: "vestido_rojo", label: "Vestido Folklórico", icon: "💃" },
  { id: "sombrero_charro", label: "Sombrero Charro", icon: "👒" },
  { id: "traje_blanco", label: "Traje Tradicional", icon: "👔" },
  { id: "jorongo_poncho", label: "Jorongo", icon: "🥻" },
  { id: "vestido_blanco", label: "Vestido Blanco", icon: "👗" },
];

export function CatrinasView() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const isScrollingRef = useRef<boolean>(false);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (isScrollingRef.current) return;
    if (Math.abs(e.deltaY) < 10) return;

    isScrollingRef.current = true;

    if (e.deltaY > 0) {
      setSelectedIndex((prev) => Math.min(outfitOptions.length - 1, prev + 1));
    } else {
      setSelectedIndex((prev) => Math.max(0, prev - 1));
    }

    // Cooldown lock (350ms) to prevent rapid spinning on trackpads / continuous scroll
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 350);
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  const currentOutfit = outfitOptions[selectedIndex] || outfitOptions[0];
  const scrollProgress = Math.round(((selectedIndex + 1) / outfitOptions.length) * 100);

  return (
    <Styled.MainContainer>
      <Petals />
      <Header />

      <Styled.ContentWrapper>
        <Styled.TitleBacklight />
        <Styled.MainTitle>Viste a tu Catrina</Styled.MainTitle>

        <Styled.SubtitleDividerWrapper>
          <Styled.DividerLine />
          <Styled.SubtitleText>
            Desplaza el scroll vertical o selecciona una vestimenta
          </Styled.SubtitleText>
          <Styled.DividerLine />
        </Styled.SubtitleDividerWrapper>

        <Styled.StageLayout>
          <Styled.SidebarWrapper>
            <Styled.SidebarHeader>
              <span>✨</span>
              <span>VESTIMENTAS</span>
            </Styled.SidebarHeader>

            {outfitOptions.map((opt, idx) => {
              const isActive = idx === selectedIndex;
              return (
                <Styled.OutfitOptionButton
                  key={opt.id}
                  $active={isActive}
                  onClick={() => setSelectedIndex(idx)}
                >
                  <Styled.OptionIcon>{opt.icon}</Styled.OptionIcon>
                  <span>{opt.label}</span>
                </Styled.OutfitOptionButton>
              );
            })}
          </Styled.SidebarWrapper>

      
          <Styled.CharacterStage>
            <Skull
              activeOutfit={currentOutfit.id}
              outfitImageSrc={currentOutfit.imageSrc}
            />
          </Styled.CharacterStage>

       
          <Styled.ScrollIndicatorWrapper>
            <Styled.ScrollLabel>SCROLL</Styled.ScrollLabel>
            <Styled.ScrollTrack>
              <Styled.ScrollThumb $progress={selectedIndex / (outfitOptions.length - 1 || 1)} />
            </Styled.ScrollTrack>
            <Styled.ScrollPercentage>{scrollProgress}%</Styled.ScrollPercentage>
          </Styled.ScrollIndicatorWrapper>
        </Styled.StageLayout>

        <Styled.BottomDivider>
          <Styled.BottomDividerLine />
          <Styled.BottomDividerIcon>🏵</Styled.BottomDividerIcon>
          <Styled.BottomDividerLine />
        </Styled.BottomDivider>
      </Styled.ContentWrapper>

      <Footer />
    </Styled.MainContainer>
  );
}

export default CatrinasView;
