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
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const sidebarRef = useRef<HTMLElement | null>(null);

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

  // Auto-scroll the active vestuario button strictly inside SidebarWrapper container
  useEffect(() => {
    const container = sidebarRef.current;
    const activeBtn = buttonRefs.current[selectedIndex];
    if (container && activeBtn) {
      const containerWidth = container.clientWidth;
      const btnLeft = activeBtn.offsetLeft;
      const btnWidth = activeBtn.offsetWidth;
      // Center the button inside the container only (never scrolling the viewport/window)
      const targetScrollLeft = btnLeft - (containerWidth - btnWidth) / 2;
      container.scrollTo({
        left: Math.max(0, targetScrollLeft),
        behavior: "smooth",
      });
    }
    // Safeguard: ensure the window itself never shifts horizontally
    if (typeof window !== "undefined" && window.scrollX !== 0) {
      window.scrollTo({ left: 0, top: window.scrollY });
    }
  }, [selectedIndex]);

  const handlePrev = () => {
    setSelectedIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => Math.min(outfitOptions.length - 1, prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now(),
      };
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartRef.current) return;
    const touchEnd = e.changedTouches[0];
    const deltaX = touchEnd.clientX - touchStartRef.current.x;
    const deltaY = touchEnd.clientY - touchStartRef.current.y;
    const deltaTime = Date.now() - touchStartRef.current.time;
    touchStartRef.current = null;

    if (deltaTime < 600) {
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (absY >= 30 && absY >= absX) {
        if (deltaY < 0) {
          // Swipe up -> next outfit
          setSelectedIndex((prev) => Math.min(outfitOptions.length - 1, prev + 1));
        } else {
          // Swipe down -> prev outfit
          setSelectedIndex((prev) => Math.max(0, prev - 1));
        }
      } else if (absX >= 30 && absX > absY) {
        if (deltaX < 0) {
          // Swipe left -> next outfit
          setSelectedIndex((prev) => Math.min(outfitOptions.length - 1, prev + 1));
        } else {
          // Swipe right -> prev outfit
          setSelectedIndex((prev) => Math.max(0, prev - 1));
        }
      }
    }
  };

  const currentOutfit = outfitOptions[selectedIndex] || outfitOptions[0];
  const scrollProgress = Math.round(
    ((selectedIndex + 1) / outfitOptions.length) * 100
  );

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
            Desliza o selecciona una vestimenta para vestir a tu Catrina
          </Styled.SubtitleText>
          <Styled.DividerLine />
        </Styled.SubtitleDividerWrapper>

        <Styled.StageLayout>
          <Styled.SidebarWrapper ref={sidebarRef}>
            <Styled.SidebarHeader>
              <span>✨</span>
              <span>VESTIMENTAS</span>
            </Styled.SidebarHeader>

            {outfitOptions.map((opt, idx) => {
              const isActive = idx === selectedIndex;
              return (
                <Styled.OutfitOptionButton
                  key={opt.id}
                  ref={(el) => {
                    buttonRefs.current[idx] = el;
                  }}
                  $active={isActive}
                  onClick={() => setSelectedIndex(idx)}
                >
                  <Styled.OptionIcon>{opt.icon}</Styled.OptionIcon>
                  <span>{opt.label}</span>
                </Styled.OutfitOptionButton>
              );
            })}
          </Styled.SidebarWrapper>

          <Styled.CharacterStage
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Styled.NavArrowButton
              $direction="left"
              onClick={handlePrev}
              disabled={selectedIndex === 0}
              aria-label="Vestuario anterior"
            >
              ‹
            </Styled.NavArrowButton>

            <Skull
              activeOutfit={currentOutfit.id}
              outfitImageSrc={currentOutfit.imageSrc}
            />

            <Styled.NavArrowButton
              $direction="right"
              onClick={handleNext}
              disabled={selectedIndex === outfitOptions.length - 1}
              aria-label="Siguiente vestuario"
            >
              ›
            </Styled.NavArrowButton>

            <Styled.DotsContainer>
              {outfitOptions.map((opt, idx) => (
                <Styled.Dot
                  key={opt.id}
                  $active={idx === selectedIndex}
                  onClick={() => setSelectedIndex(idx)}
                  aria-label={`Seleccionar ${opt.label}`}
                />
              ))}
            </Styled.DotsContainer>
          </Styled.CharacterStage>

          <Styled.ScrollIndicatorWrapper>
            <Styled.ScrollLabel>SCROLL</Styled.ScrollLabel>
            <Styled.ScrollTrack>
              <Styled.ScrollThumb
                $progress={selectedIndex / (outfitOptions.length - 1 || 1)}
              />
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
