"use client";

import React, { useCallback, useState } from "react";
import Header from "../header";
import Footer from "../footer";
import Snowfall from "../snowfall";
import ArbolHeader, {
  getNextLightsMode,
  type LightsMode,
} from "../arbol-header";
import OrnamentTrunk, {
  type OrnamentCategory,
  type OrnamentItem,
} from "../ornament-trunk";
import PhotoModal from "../photo-modal";
import Tree, {
  type PlacedOrnament,
} from "../tree";
import * as Styled from "./arbol.styles";
import {
  addOrnamentToTreeList,
  generateDecoratedTreePhotoDataUrl,
  moveOrnamentInTreeList,
  removeOrnamentFromTreeList,
  triggerPhotoDownload,
} from "./arbol.utils";

export function Arbol() {
  const [activeCategory, setActiveCategory] =
    useState<OrnamentCategory>("esferas");
  const [selectedOrnamentId, setSelectedOrnamentId] = useState<string | null>(
    "esfera-carmesi"
  );
  const [placedOrnaments, setPlacedOrnaments] = useState<PlacedOrnament[]>(() =>
  []
  );
  const [lightsMode, setLightsMode] = useState<LightsMode>("titilantes");
  const [snowActive, setSnowActive] = useState<boolean>(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);
  const [capturedPhotoUrl, setCapturedPhotoUrl] = useState<string | null>(null);

  const handleSelectOrnament = (ornament: OrnamentItem) => {
    setSelectedOrnamentId(ornament.id);
  };

  const handleDragStartOrnament = (
    event: React.DragEvent<HTMLButtonElement>,
    ornament: OrnamentItem
  ) => {
    setSelectedOrnamentId(ornament.id);
    event.dataTransfer.setData("text/plain", ornament.id);
    event.dataTransfer.effectAllowed = "copy";
  };

  const handlePlaceAtPosition = (
    xPercent: number,
    yPercent: number,
    ornamentId?: string
  ) => {
    const targetId = ornamentId || selectedOrnamentId;
    if (!targetId) return;

    setPlacedOrnaments((prev) =>
      addOrnamentToTreeList(prev, targetId, xPercent, yPercent)
    );
  };

  const handleMoveOrnament = (
    instanceId: string,
    xPercent: number,
    yPercent: number
  ) => {
    setPlacedOrnaments((prev) =>
      moveOrnamentInTreeList(prev, instanceId, xPercent, yPercent)
    );
  };

  const handleRemoveOrnament = (instanceId: string) => {
    setPlacedOrnaments((prev) => removeOrnamentFromTreeList(prev, instanceId));
  };

  const handleToggleLights = () => {
    setLightsMode((prev) => getNextLightsMode(prev));
  };

  const handleToggleSnow = () => {
    setSnowActive((prev) => !prev);
  };

  const handleResetTree = () => {
    setPlacedOrnaments([]);
  };

  const handleSavePhoto = async () => {
    setIsPhotoModalOpen(true);
    const dataUrl = await generateDecoratedTreePhotoDataUrl(
      placedOrnaments,
      lightsMode,
      snowActive
    );
    setCapturedPhotoUrl(dataUrl);
  };

  const handleClosePhotoModal = useCallback(() => {
    setIsPhotoModalOpen(false);
  }, []);

  return (
    <Styled.PageWrapper>
      <Header />

      <Styled.MainWorkspace>
        {snowActive && <Snowfall count={35} />}

        <Styled.WorkspaceContainer>
          <ArbolHeader
            ornamentsCount={placedOrnaments.length}
            lightsMode={lightsMode}
            snowActive={snowActive}
            onToggleLights={handleToggleLights}
            onToggleSnow={handleToggleSnow}
            onResetTree={handleResetTree}
            onSavePhoto={handleSavePhoto}
          />

          <Styled.TwoColumnGrid>
            <Tree
              placedOrnaments={placedOrnaments}
              selectedOrnamentId={selectedOrnamentId}
              lightsMode={lightsMode}
              snowActive={snowActive}
              onPlaceAtPosition={handlePlaceAtPosition}
              onMoveOrnament={handleMoveOrnament}
              onRemoveOrnament={handleRemoveOrnament}
            />

            <OrnamentTrunk
              activeCategory={activeCategory}
              selectedOrnamentId={selectedOrnamentId}
              onSelectCategory={setActiveCategory}
              onSelectOrnament={handleSelectOrnament}
              onDragStartOrnament={handleDragStartOrnament}
            />
          </Styled.TwoColumnGrid>
        </Styled.WorkspaceContainer>
      </Styled.MainWorkspace>

      <PhotoModal
        isOpen={isPhotoModalOpen}
        photoDataUrl={capturedPhotoUrl}
        onDownload={triggerPhotoDownload}
        onClose={handleClosePhotoModal}
      />

      <Footer />
    </Styled.PageWrapper>
  );
}

export default Arbol;
