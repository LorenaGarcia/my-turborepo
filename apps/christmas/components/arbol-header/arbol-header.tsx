"use client";

import React from "react";
import {
  Camera,
  Lightbulb,
  RotateCcw,
  Snowflake,
} from "lucide-react";
import * as Styled from "./arbol-header.styles";
import {
  getLightsModeLabel,
  getSnowStatusLabel,
  type LightsMode,
} from "./arbol-header.utils";

interface ArbolHeaderProps {
  ornamentsCount: number;
  lightsMode: LightsMode;
  snowActive: boolean;
  onToggleLights: () => void;
  onToggleSnow: () => void;
  onResetTree: () => void;
  onSavePhoto: () => void;
}

export function ArbolHeader({
  lightsMode,
  snowActive,
  onToggleLights,
  onToggleSnow,
  onResetTree,
  onSavePhoto,
}: ArbolHeaderProps) {
  return (
    <Styled.BannerCard>
      <Styled.BannerTitle>Adorna tu Árbol Navideño</Styled.BannerTitle>

      <Styled.OptionsColumn>
        <Styled.OptionsTopRow>
          <Styled.LightsOptionButton
            type="button"
            $active={lightsMode !== "apagadas"}
            onClick={onToggleLights}
          >
            <Lightbulb size={15} strokeWidth={2.2} />
            <span>{getLightsModeLabel(lightsMode)}</span>
          </Styled.LightsOptionButton>

          <Styled.SnowOptionButton
            type="button"
            $active={snowActive}
            onClick={onToggleSnow}
          >
            <Styled.SnowIconSpan>
              <Snowflake size={15} strokeWidth={2.2} />
            </Styled.SnowIconSpan>
            <span>{getSnowStatusLabel(snowActive)}</span>
          </Styled.SnowOptionButton>

          <Styled.ResetButton type="button" onClick={onResetTree}>
            <RotateCcw size={14} strokeWidth={2.2} />
            <span>Reiniciar</span>
          </Styled.ResetButton>

          <Styled.SavePhotoButton type="button" onClick={onSavePhoto}>
            <Camera size={15} strokeWidth={2.2} />
            <span>Guardar Foto</span>
          </Styled.SavePhotoButton>
        </Styled.OptionsTopRow>
      </Styled.OptionsColumn>
    </Styled.BannerCard>
  );
}

export default ArbolHeader;
