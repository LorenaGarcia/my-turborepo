"use client";

import React from "react";
import { Lightbulb } from "lucide-react";
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

        <Styled.OrnamentsGrid>
          {ornaments.map((item) => (
            <Styled.OrnamentTile
              key={item.id}
              type="button"
              draggable
              $selected={selectedOrnamentId === item.id}
              onClick={() => onSelectOrnament(item)}
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
