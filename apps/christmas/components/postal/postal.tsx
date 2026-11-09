"use client";

import React, { useCallback, useState } from "react";
import Header from "../header";
import Footer from "../footer";
import Snowfall from "../snowfall";
import PhotoModal from "../photo-modal";
import PostalHeader from "../postal-header";
import PostalPreview, {
  getInitialPostalStickers,
  type PlacedPostalSticker,
  type PostalFilterId,
} from "../postal-preview";
import PostalStudio, {
  type PostalFrameElementsState,
  type PostalFrameId,
  type PostalStickerItem,
  type PostalStudioTab,
  type PostalTextState,
} from "../postal-studio";
import * as Styled from "./postal.styles";
import {
  addStickerToPostalList,
  DEFAULT_FRAME_ELEMENTS,
  DEFAULT_POSTAL_PHOTO,
  DEFAULT_POSTAL_TEXT,
  generatePostalDataUrl,
  moveStickerInPostalList,
  removeLastStickerByIdFromPostalList,
  removeStickerFromPostalList,
  triggerPostalDownload,
} from "./postal.utils";

export function Postal() {
  const [activeTab, setActiveTab] = useState<PostalStudioTab>("marcos");
  const [selectedFrameId, setSelectedFrameId] =
    useState<PostalFrameId>("marco-rojo-verde");
  const [frameElements, setFrameElements] = useState<PostalFrameElementsState>(
    DEFAULT_FRAME_ELEMENTS
  );
  const [textConfig, setTextConfig] =
    useState<PostalTextState>(DEFAULT_POSTAL_TEXT);
  const [selectedFilterId, setSelectedFilterId] =
    useState<PostalFilterId>("normal");
  const [photoSrc, setPhotoSrc] = useState<string>(DEFAULT_POSTAL_PHOTO);
  const [photoZoom, setPhotoZoom] = useState<number>(1);
  const [photoPan, setPhotoPan] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [placedStickers, setPlacedStickers] = useState<PlacedPostalSticker[]>(
    () => getInitialPostalStickers()
  );

  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);
  const [capturedPostalUrl, setCapturedPostalUrl] = useState<string | null>(
    null
  );

  const handleToggleFrameElement = (key: keyof PostalFrameElementsState) => {
    setFrameElements((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleUploadPhoto = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setPhotoSrc(reader.result);
        setPhotoZoom(1);
        setPhotoPan({ x: 0, y: 0 });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetAll = () => {
    setSelectedFrameId("marco-rojo-verde");
    setFrameElements(DEFAULT_FRAME_ELEMENTS);
    setTextConfig(DEFAULT_POSTAL_TEXT);
    setSelectedFilterId("normal");
    setPhotoSrc(DEFAULT_POSTAL_PHOTO);
    setPhotoZoom(1);
    setPhotoPan({ x: 0, y: 0 });
    setPlacedStickers(getInitialPostalStickers());
  };

  const handleAddSticker = (sticker: PostalStickerItem) => {
    setPlacedStickers((prev) => addStickerToPostalList(prev, sticker));
  };

  const handleMoveSticker = (
    instanceId: string,
    xPercent: number,
    yPercent: number
  ) => {
    setPlacedStickers((prev) =>
      moveStickerInPostalList(prev, instanceId, xPercent, yPercent)
    );
  };

  const handleRemoveSticker = (instanceId: string) => {
    setPlacedStickers((prev) => removeStickerFromPostalList(prev, instanceId));
  };

  const handleRemoveStickerById = (stickerId: string) => {
    setPlacedStickers((prev) =>
      removeLastStickerByIdFromPostalList(prev, stickerId)
    );
  };

  const handleDownloadPostal = async () => {
    setIsPhotoModalOpen(true);
    const dataUrl = await generatePostalDataUrl({
      photoSrc,
      selectedFrameId,
      frameElements,
      textConfig,
      filterId: selectedFilterId,
      photoZoom,
      photoPan,
      placedStickers,
    });
    setCapturedPostalUrl(dataUrl);
  };

  const handleSharePostal = async () => {
    const dataUrl = await generatePostalDataUrl({
      photoSrc,
      selectedFrameId,
      frameElements,
      textConfig,
      filterId: selectedFilterId,
      photoZoom,
      photoPan,
      placedStickers,
    });
    if (!dataUrl) return;

    if (navigator.share) {
      try {
        const res = await fetch(dataUrl);
        const blob = await res.blob();
        const file = new File([blob], "mi-postal-villa-navidena.png", {
          type: "image/png",
        });
        await navigator.share({
          title: "Mi Porta Retrato de la Villa Navideña",
          text: textConfig.enabled ? textConfig.text : "¡Feliz Navidad!",
          files: [file],
        });
        return;
      } catch {
        // Fallback to modal download
      }
    }

    setCapturedPostalUrl(dataUrl);
    setIsPhotoModalOpen(true);
  };

  const handleCloseModal = useCallback(() => {
    setIsPhotoModalOpen(false);
  }, []);

  return (
    <Styled.PageWrapper>
      <Header />

      <Styled.MainWorkspace>
        <Snowfall count={32} />

        <Styled.WorkspaceContainer>
          <PostalHeader
            onUploadPhoto={handleUploadPhoto}
            onReset={handleResetAll}
            onShare={handleSharePostal}
            onDownload={handleDownloadPostal}
          />

          <Styled.TwoColumnGrid>
            <PostalPreview
              photoSrc={photoSrc}
              selectedFrameId={selectedFrameId}
              frameElements={frameElements}
              textConfig={textConfig}
              selectedFilterId={selectedFilterId}
              photoZoom={photoZoom}
              photoPan={photoPan}
              placedStickers={placedStickers}
              onZoomIn={() =>
                setPhotoZoom((z) => Math.min(2.2, +(z + 0.15).toFixed(2)))
              }
              onZoomOut={() =>
                setPhotoZoom((z) => Math.max(0.8, +(z - 0.15).toFixed(2)))
              }
              onResetZoom={() => {
                setPhotoZoom(1);
                setPhotoPan({ x: 0, y: 0 });
              }}
              onChangePan={setPhotoPan}
              onSelectFilter={setSelectedFilterId}
              onMoveSticker={handleMoveSticker}
              onRemoveSticker={handleRemoveSticker}
              onToggleFrameElement={handleToggleFrameElement}
            />

            <PostalStudio
              activeTab={activeTab}
              selectedFrameId={selectedFrameId}
              frameElements={frameElements}
              placedStickerIds={placedStickers.map((s) => s.stickerId)}
              textConfig={textConfig}
              onSelectTab={setActiveTab}
              onSelectFrame={setSelectedFrameId}
              onToggleFrameElement={handleToggleFrameElement}
              onAddSticker={handleAddSticker}
              onRemoveStickerById={handleRemoveStickerById}
              onChangeTextConfig={setTextConfig}
            />
          </Styled.TwoColumnGrid>
        </Styled.WorkspaceContainer>
      </Styled.MainWorkspace>

      <PhotoModal
        isOpen={isPhotoModalOpen}
        photoDataUrl={capturedPostalUrl}
        onDownload={(url) =>
          triggerPostalDownload(url, "mi-postal-villa-navidena.png")
        }
        onClose={handleCloseModal}
      />

      <Footer />
    </Styled.PageWrapper>
  );
}

export default Postal;
