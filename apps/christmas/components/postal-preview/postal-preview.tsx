"use client";

import React, { useRef, useState } from "react";
import { RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import {
  getPostalFontById,
  getPostalFrameById,
  type PostalFrameElementsState,
  type PostalFrameId,
  type PostalTextState,
} from "../postal-studio";
import * as Styled from "./postal-preview.styles";
import {
  getPostalFilterCss,
  POSTAL_FILTERS,
  type PlacedPostalSticker,
  type PostalFilterId,
} from "./postal-preview.utils";

export interface PostalPreviewProps {
  photoSrc: string;
  selectedFrameId: PostalFrameId;
  frameElements: PostalFrameElementsState;
  textConfig: PostalTextState;
  selectedFilterId: PostalFilterId;
  photoZoom: number;
  photoPan: { x: number; y: number };
  placedStickers: PlacedPostalSticker[];
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
  onChangePan: (pan: { x: number; y: number }) => void;
  onSelectFilter: (filterId: PostalFilterId) => void;
  onMoveSticker: (
    instanceId: string,
    xPercent: number,
    yPercent: number
  ) => void;
  onRemoveSticker: (instanceId: string) => void;
  onToggleFrameElement: (key: keyof PostalFrameElementsState) => void;
}

export function PostalPreview({
  photoSrc,
  selectedFrameId,
  frameElements,
  textConfig,
  selectedFilterId,
  photoZoom,
  photoPan,
  placedStickers,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  onChangePan,
  onSelectFilter,
  onMoveSticker,
  onRemoveSticker,
  onToggleFrameElement,
}: PostalPreviewProps) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const lastTapRef = useRef<{ id: string; time: number }>({ id: "", time: 0 });
  const [draggingStickerId, setDraggingStickerId] = useState<string | null>(
    null
  );
  const [panStart, setPanStart] = useState<{
    clientX: number;
    clientY: number;
    originX: number;
    originY: number;
  } | null>(null);

  const filterCss = getPostalFilterCss(selectedFilterId);
  const frameMeta = getPostalFrameById(selectedFrameId);
  const fontMeta = getPostalFontById(textConfig.fontId);

  const handleStickerPointerDown = (
    event: React.PointerEvent<HTMLButtonElement>,
    instanceId: string
  ) => {
    event.stopPropagation();

    const now = Date.now();
    if (
      lastTapRef.current.id === instanceId &&
      now - lastTapRef.current.time < 320
    ) {
      lastTapRef.current = { id: "", time: 0 };
      setDraggingStickerId(null);
      onRemoveSticker(instanceId);
      return;
    }

    lastTapRef.current = { id: instanceId, time: now };
    event.currentTarget.setPointerCapture(event.pointerId);
    setDraggingStickerId(instanceId);
  };

  const handleStickerPointerMove = (
    event: React.PointerEvent<HTMLButtonElement>,
    instanceId: string
  ) => {
    if (draggingStickerId !== instanceId || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const rawX = ((event.clientX - rect.left) / rect.width) * 100;
    const rawY = ((event.clientY - rect.top) / rect.height) * 100;
    const clampedX = Math.max(8, Math.min(92, rawX));
    const clampedY = Math.max(8, Math.min(92, rawY));
    onMoveSticker(instanceId, clampedX, clampedY);
  };

  const handleStickerPointerUp = (
    event: React.PointerEvent<HTMLButtonElement>,
    instanceId: string
  ) => {
    if (draggingStickerId === instanceId) {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
      setDraggingStickerId(null);
    }
  };

  const handlePhotoPointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (draggingStickerId) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    setPanStart({
      clientX: event.clientX,
      clientY: event.clientY,
      originX: photoPan.x,
      originY: photoPan.y,
    });
  };

  const handlePhotoPointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (!panStart) return;
    const dx = event.clientX - panStart.clientX;
    const dy = event.clientY - panStart.clientY;
    onChangePan({
      x: Math.max(-140, Math.min(140, panStart.originX + dx)),
      y: Math.max(-140, Math.min(140, panStart.originY + dy)),
    });
  };

  const handlePhotoPointerUp = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (panStart) {
      event.currentTarget.releasePointerCapture(event.pointerId);
      setPanStart(null);
    }
  };

  return (
    <Styled.PreviewCardColumn>

      <Styled.PostcardOuterFrame ref={frameRef}>
        <Styled.PhotoWindow
          onPointerDown={handlePhotoPointerDown}
          onPointerMove={handlePhotoPointerMove}
          onPointerUp={handlePhotoPointerUp}
          title="Arrastra para encuadrar tu foto"
        >
          <Styled.UserPhotoImg
            src={photoSrc}
            alt="Foto familiar navideña"
            $zoom={photoZoom}
            $panX={photoPan.x}
            $panY={photoPan.y}
            $filter={filterCss}
          />
        </Styled.PhotoWindow>

        {/* Pure SVG Frame Overlay (with transparent center cutout) */}
        <Styled.FullFrameOverlayImg
          src={frameMeta.src}
          alt={frameMeta.name}
          $zIndex={3}
        />

        {frameElements.showLights && (
          <>
            <Styled.TopLightsOverlayImg
              src="/postal-elements/frame-lights.svg"
              alt="Luces navideñas"
            />
            <Styled.FrameElementHitZone
              $top="2%"
              $left="3%"
              $width="94%"
              $height="10%"
              $zIndex={9}
              onDoubleClick={() => onToggleFrameElement("showLights")}
              title="Doble clic para quitar luces navideñas"
            />
          </>
        )}

        {frameElements.showGifts && (
          <>
            <Styled.FrameElementHitZone
              $bottom="2%"
              $left="12%"
              $width="76%"
              $height="20%"
              $zIndex={10}
              onDoubleClick={() => onToggleFrameElement("showGifts")}
              title="Doble clic para quitar regalos navideños"
            />
          </>
        )}

        {textConfig.enabled && textConfig.text.trim().length > 0 && (
          <Styled.OptionalFestiveText
            $fontFamily={fontMeta.fontFamily}
            $color={textConfig.color}
            $position={textConfig.position}
          >
            {textConfig.text}
          </Styled.OptionalFestiveText>
        )}

        {placedStickers.map((sticker) => (
          <Styled.PlacedStickerWrapper
            key={sticker.instanceId}
            $x={sticker.xPercent}
            $y={sticker.yPercent}
            $width={sticker.width}
            $height={sticker.height}
            $dragging={draggingStickerId === sticker.instanceId}
          >
            <Styled.PlacedStickerBtn
              type="button"
              onPointerDown={(e) =>
                handleStickerPointerDown(e, sticker.instanceId)
              }
              onPointerMove={(e) =>
                handleStickerPointerMove(e, sticker.instanceId)
              }
              onPointerUp={(e) => handleStickerPointerUp(e, sticker.instanceId)}
              onDoubleClick={(e) => {
                e.stopPropagation();
                onRemoveSticker(sticker.instanceId);
              }}
              title={`${sticker.name} (Arrastra para mover • Doble clic para eliminar)`}
            >
              <Styled.PlacedStickerImg src={sticker.src} alt={sticker.name} />
            </Styled.PlacedStickerBtn>
          </Styled.PlacedStickerWrapper>
        ))}
      </Styled.PostcardOuterFrame>

      <Styled.BottomControlsRow>
        <Styled.ZoomControlsGroup>
          <Styled.ZoomLabel>Zoom:</Styled.ZoomLabel>
          <Styled.IconRoundBtn
            type="button"
            onClick={onZoomOut}
            aria-label="Alejar foto"
          >
            <ZoomOut size={14} />
          </Styled.IconRoundBtn>
          <Styled.IconRoundBtn
            type="button"
            onClick={onZoomIn}
            aria-label="Acercar foto"
          >
            <ZoomIn size={14} />
          </Styled.IconRoundBtn>
          <Styled.IconRoundBtn
            type="button"
            onClick={onResetZoom}
            aria-label="Restablecer encuadre"
          >
            <RotateCcw size={13} />
          </Styled.IconRoundBtn>
        </Styled.ZoomControlsGroup>

        {POSTAL_FILTERS.map((filter) => (
          <Styled.FilterPillBtn
            key={filter.id}
            type="button"
            $active={selectedFilterId === filter.id}
            onClick={() => onSelectFilter(filter.id)}
          >
            {filter.label}
          </Styled.FilterPillBtn>
        ))}
      </Styled.BottomControlsRow>
    </Styled.PreviewCardColumn>
  );
}

export default PostalPreview;
