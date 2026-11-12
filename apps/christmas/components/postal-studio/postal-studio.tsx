"use client";

import React, { useEffect, useRef } from "react";
import { Brush, Frame, Trees, Type } from "lucide-react";
import { animate, stagger } from "motion";
import * as Styled from "./postal-studio.styles";
import {
  FRAME_ELEMENT_TOGGLES,
  POSTAL_FONTS,
  POSTAL_FRAMES,
  POSTAL_ELEMENTS,
  TEXT_COLOR_SWATCHES,
  type PostalFrameElementsState,
  type PostalFrameId,
  type PostalStickerItem,
  type PostalStudioTab,
  type PostalTextState,
} from "./postal-studio.utils";

export interface PostalStudioProps {
  activeTab: PostalStudioTab;
  selectedFrameId: PostalFrameId;
  frameElements: PostalFrameElementsState;
  placedStickerIds: string[];
  textConfig: PostalTextState;
  onSelectTab: (tab: PostalStudioTab) => void;
  onSelectFrame: (frameId: PostalFrameId) => void;
  onToggleFrameElement: (key: keyof PostalFrameElementsState) => void;
  onAddSticker: (sticker: PostalStickerItem) => void;
  onRemoveStickerById: (stickerId: string) => void;
  onChangeTextConfig: (next: PostalTextState) => void;
}

export function PostalStudio({
  activeTab,
  selectedFrameId,
  frameElements,
  placedStickerIds,
  textConfig,
  onSelectTab,
  onSelectFrame,
  onToggleFrameElement,
  onAddSticker,
  onRemoveStickerById,
  onChangeTextConfig,
}: PostalStudioProps) {
  const framesGridRef = useRef<HTMLDivElement>(null);
  const elementsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeGrid =
      activeTab === "marcos"
        ? framesGridRef.current
        : activeTab === "elementos"
          ? elementsGridRef.current
          : null;
    if (!activeGrid) return;

    const cards = activeGrid.querySelectorAll("button");
    if (!cards.length) return;

    animate(
      cards,
      { opacity: [0, 1], scale: [0.6, 1] },
      {
        duration: 0.45,
        delay: stagger(activeTab === "marcos" ? 0.035 : 0.02, {
          from: "center",
        }),
        ease: [0, 0.71, 0.2, 1.01],
      }
    );
  }, [activeTab]);

  const triggerGridRipple = (
    container: HTMLDivElement | null,
    originIndex: number
  ) => {
    if (!container) return;
    const cards = container.querySelectorAll("button");
    if (!cards.length) return;

    animate(
      cards,
      { scale: [0.92, 1] },
      {
        duration: 0.35,
        delay: stagger(0.02, { from: originIndex }),
        ease: "easeOut",
      }
    );
  };

  return (
    <Styled.StudioColumn>
      <Styled.StudioCard>
        <Styled.StudioHeaderRow>
          <Styled.StudioTitleGroup>
            <Styled.BrushIconCircle>
              <Brush size={18} strokeWidth={2.3} />
            </Styled.BrushIconCircle>
            <Styled.StudioTitleText>
              <Styled.StudioTitle>Estudio Navideño</Styled.StudioTitle>
              <Styled.StudioSubtitle>
                Personaliza tu marco, elementos y texto
              </Styled.StudioSubtitle>
            </Styled.StudioTitleText>
          </Styled.StudioTitleGroup>
        </Styled.StudioHeaderRow>

        <Styled.TabsBar role="tablist">
          <Styled.TabButton
            type="button"
            $active={activeTab === "marcos"}
            onClick={() => onSelectTab("marcos")}
          >
            <Frame size={13} />
            <span>Marcos</span>
          </Styled.TabButton>

          <Styled.TabButton
            type="button"
            $active={activeTab === "elementos"}
            onClick={() => onSelectTab("elementos")}
          >
            <Trees size={13} />
            <span>Elementos</span>
          </Styled.TabButton>

          <Styled.TabButton
            type="button"
            $active={activeTab === "texto"}
            onClick={() => onSelectTab("texto")}
          >
            <Type size={13} />
            <span>Texto</span>
          </Styled.TabButton>
        </Styled.TabsBar>

        {activeTab === "marcos" && (
          <>
            <Styled.SectionMetaRow>
              <span>DISEÑOS DE MARCO NAVIDEÑO</span>
              <Styled.SectionCountAccent>
                {POSTAL_FRAMES.length} marcos disponibles
              </Styled.SectionCountAccent>
            </Styled.SectionMetaRow>

            <Styled.FramesGrid ref={framesGridRef}>
              {POSTAL_FRAMES.map((frame, index) => (
                <Styled.FrameOptionCard
                  key={frame.id}
                  type="button"
                  $selected={selectedFrameId === frame.id}
                  onClick={() => {
                    onSelectFrame(frame.id);
                    triggerGridRipple(framesGridRef.current, index);
                  }}
                  aria-label={frame.name}
                >
                  <Styled.FrameThumbBox>
                    <Styled.FrameThumbImg src={frame.src} alt={frame.name} />
                  </Styled.FrameThumbBox>
                </Styled.FrameOptionCard>
              ))}
            </Styled.FramesGrid>
          </>
        )}

        {activeTab === "elementos" && (
          <>
            <Styled.SectionMetaRow>
              <span>ELEMENTOS DEL PORTA RETRATO</span>
              <Styled.SectionCountAccent>
                Toca para activar o agregar
              </Styled.SectionCountAccent>
            </Styled.SectionMetaRow>

            <Styled.ElementsGrid ref={elementsGridRef}>
              {FRAME_ELEMENT_TOGGLES.map((item, index) => {
                const isActive = frameElements[item.key];
                return (
                  <Styled.ElementImageCard
                    key={item.key}
                    type="button"
                    $active={isActive}
                    onClick={() => {
                      onToggleFrameElement(item.key);
                      triggerGridRipple(elementsGridRef.current, index);
                    }}
                    aria-label={item.name}
                  >
                    <Styled.ElementGraphicImg
                      src={item.previewIcon}
                      alt={item.name}
                    />
                  </Styled.ElementImageCard>
                );
              })}

              {POSTAL_ELEMENTS.map((sticker, index) => {
                const isPlaced = placedStickerIds.includes(sticker.id);
                const gridIndex = FRAME_ELEMENT_TOGGLES.length + index;
                return (
                  <Styled.ElementImageCard
                    key={sticker.id}
                    type="button"
                    $active={isPlaced}
                    onClick={() => {
                      onAddSticker(sticker);
                      triggerGridRipple(elementsGridRef.current, gridIndex);
                    }}
                    onDoubleClick={(e) => {
                      e.stopPropagation();
                      onRemoveStickerById(sticker.id);
                    }}
                    aria-label={sticker.name}
                  >
                    <Styled.ElementGraphicImg
                      src={sticker.src}
                      alt={sticker.name}
                    />
                  </Styled.ElementImageCard>
                );
              })}
            </Styled.ElementsGrid>
          </>
        )}

        {activeTab === "texto" && (
          <Styled.TextConfigForm>
            <Styled.ToggleSwitchRow>
              <span>Mostrar texto navideño (opcional)</span>
              <input
                type="checkbox"
                checked={textConfig.enabled}
                onChange={(e) =>
                  onChangeTextConfig({
                    ...textConfig,
                    enabled: e.target.checked,
                  })
                }
              />
            </Styled.ToggleSwitchRow>

            <Styled.FieldGroup>
              <span>Texto de tu postal</span>
              <Styled.TextInput
                type="text"
                placeholder="Ej. ¡Feliz Navidad!"
                value={textConfig.text}
                onChange={(e) =>
                  onChangeTextConfig({
                    ...textConfig,
                    enabled: true,
                    text: e.target.value,
                  })
                }
                maxLength={42}
              />
            </Styled.FieldGroup>

            <Styled.FieldGroup>
              <span>Tipografía navideña</span>
              <Styled.FontOptionsCol>
                {POSTAL_FONTS.map((font) => (
                  <Styled.FontOptionBtn
                    key={font.id}
                    type="button"
                    $selected={textConfig.fontId === font.id}
                    $fontFamily={font.fontFamily}
                    onClick={() =>
                      onChangeTextConfig({
                        ...textConfig,
                        enabled: true,
                        fontId: font.id,
                      })
                    }
                  >
                    <span>{font.label}</span>
                    <span>Feliz Navidad</span>
                  </Styled.FontOptionBtn>
                ))}
              </Styled.FontOptionsCol>
            </Styled.FieldGroup>

            <Styled.FieldGroup>
              <span>Color y posición del texto</span>
              <Styled.InlinePillsRow>
                {TEXT_COLOR_SWATCHES.map((swatch) => (
                  <Styled.SmallPillBtn
                    key={swatch.id}
                    type="button"
                    $active={
                      textConfig.color.toLowerCase() ===
                      swatch.hex.toLowerCase()
                    }
                    onClick={() =>
                      onChangeTextConfig({
                        ...textConfig,
                        color: swatch.hex,
                      })
                    }
                  >
                    {swatch.name}
                  </Styled.SmallPillBtn>
                ))}

                <Styled.SmallPillBtn
                  type="button"
                  $active={textConfig.position === "top"}
                  onClick={() =>
                    onChangeTextConfig({ ...textConfig, position: "top" })
                  }
                >
                  Arriba
                </Styled.SmallPillBtn>

                <Styled.SmallPillBtn
                  type="button"
                  $active={textConfig.position === "bottom"}
                  onClick={() =>
                    onChangeTextConfig({ ...textConfig, position: "bottom" })
                  }
                >
                  Abajo
                </Styled.SmallPillBtn>
              </Styled.InlinePillsRow>
            </Styled.FieldGroup>
          </Styled.TextConfigForm>
        )}
      </Styled.StudioCard>
    </Styled.StudioColumn>
  );
}

export default PostalStudio;
