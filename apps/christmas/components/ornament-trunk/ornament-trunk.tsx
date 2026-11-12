"use client";

import React, { useEffect, useRef } from "react";
import { Lightbulb } from "lucide-react";
import { animate, stagger } from "motion";
import * as Styled from "./ornament-trunk.styles";
import {
  getDecorationSteps,
  getOrnamentCategories,
  getOrnamentsByCategory,
  getOrnamentSvgPath,
  type OrnamentCategory,
  type OrnamentItem,
  type OrnamentVariant,
} from "./ornament-trunk.utils";

export function OrnamentGraphic({
  variant,
  size = 48,
}: {
  variant: OrnamentVariant;
  size?: number;
}) {
  return (
    <Styled.OrnamentSvgImg
      src={getOrnamentSvgPath(variant)}
      alt={variant}
      $size={size}
      draggable={false}
    />
  );
}

interface OrnamentTrunkProps {
  activeCategory: OrnamentCategory;
  selectedOrnamentId: string | null;
  onSelectCategory: (category: OrnamentCategory) => void;
  onSelectOrnament: (ornament: OrnamentItem) => void;
  onDragStartOrnament: (
    event: React.DragEvent<HTMLButtonElement>,
    ornament: OrnamentItem
  ) => void;
}

export function OrnamentTrunk({
  activeCategory,
  selectedOrnamentId,
  onSelectCategory,
  onSelectOrnament,
  onDragStartOrnament,
}: OrnamentTrunkProps) {
  const categories = getOrnamentCategories();
  const ornaments = getOrnamentsByCategory(activeCategory);
  const steps = getDecorationSteps();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const tiles = gridRef.current.querySelectorAll("button");
    if (!tiles.length) return;

    animate(
      tiles,
      { opacity: [0, 1], scale: [0.6, 1] },
      {
        duration: 0.45,
        delay: stagger(0.04, { from: "center" }),
        ease: [0, 0.71, 0.2, 1.01],
      }
    );
  }, [activeCategory]);

  const handleTileClick = (ornament: OrnamentItem, index: number) => {
    onSelectOrnament(ornament);
    if (!gridRef.current) return;
    const tiles = gridRef.current.querySelectorAll("button");
    if (!tiles.length) return;

    animate(
      tiles,
      { scale: [0.92, 1] },
      {
        duration: 0.35,
        delay: stagger(0.03, { from: index }),
        ease: "easeOut",
      }
    );
  };

  return (
    <Styled.SidebarColumn>
      <Styled.TrunkCard>
        <Styled.TrunkHeaderRow>
          <Styled.TrunkTitleGroup>
            <Styled.TrunkTitle>BAÚL DE ADORNOS</Styled.TrunkTitle>
          </Styled.TrunkTitleGroup>
        </Styled.TrunkHeaderRow>

        <Styled.TabsTrack role="tablist" aria-label="Categorías de adornos">
          {categories.map((cat) => (
            <Styled.TabButton
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              $active={activeCategory === cat.id}
              onClick={() => onSelectCategory(cat.id)}
            >
              {cat.label}
            </Styled.TabButton>
          ))}
        </Styled.TabsTrack>

        <Styled.OrnamentsGrid ref={gridRef}>
          {ornaments.map((item, index) => (
            <Styled.OrnamentTile
              key={item.id}
              type="button"
              draggable
              $selected={selectedOrnamentId === item.id}
              onClick={() => handleTileClick(item, index)}
              onDragStart={(e) => onDragStartOrnament(e, item)}
              title={item.name}
            >
              <Styled.OrnamentIconWrapper>
                <OrnamentGraphic variant={item.variant} size={46} />
              </Styled.OrnamentIconWrapper>
              <Styled.OrnamentLabel>{item.name}</Styled.OrnamentLabel>
            </Styled.OrnamentTile>
          ))}
        </Styled.OrnamentsGrid>

        <Styled.InstructionsBox>
          <Styled.BulbIconWrapper>
            <Lightbulb size={18} strokeWidth={2.2} />
          </Styled.BulbIconWrapper>
          <Styled.InstructionsContent>
            <Styled.InstructionsTitle>¿Cómo decorar?</Styled.InstructionsTitle>
            {steps.map((step) => (
              <Styled.InstructionStep key={step}>{step}</Styled.InstructionStep>
            ))}
          </Styled.InstructionsContent>
        </Styled.InstructionsBox>
      </Styled.TrunkCard>
    </Styled.SidebarColumn>
  );
}

export default OrnamentTrunk;
