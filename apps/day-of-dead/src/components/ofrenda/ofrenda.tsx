"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../header/header";
import Footer from "../footer/footer";
import Petals from "../petals/petals";
import { OFRENDA_ITEMS, OfrendaItem, AltarTier } from "./ofrenda-data";
import { useOfrendaSprites } from "./useOfrendaSprites";
import * as Styled from "./ofrenda.styles";
import {
  Flame,
  RotateCcw,
  Sparkles,
  BookOpen,
  Droplets,
  Sun,
  GripVertical,
  Plus,
  Trash2,
  Check,
  ChevronRight,
  Heart,
  Volume2,
} from "lucide-react";

export interface PlacedInstance {
  instanceId: string;
  itemId: string;
  tier: AltarTier;
  xPercent: number; // 0 to 100% of altar width
  yPercent: number; // exact shelf level (18.5, 38.5, or 58.5)
  zIndex?: number;  // stacking order
}

export const TIER_SHELF_Y: Record<AltarTier, number> = {
  cielo: 5.0,      // Escalón I (Cielo): plataforma superior de madera elevada
  tierra: 32,     // Escalón II (Tierra): plataforma intermedia de madera
  inframundo: 58.5, // Escalón III (Inframundo): plataforma inferior de madera
};

export const getTierFromYPercent = (yPercent: number): AltarTier => {
  if (yPercent < 28) return "cielo";
  if (yPercent < 48) return "tierra";
  return "inframundo";
};

export const getClampedX = (tier: AltarTier, xPercent: number): number => {
  if (tier === "cielo") return Math.max(24, Math.min(76, xPercent));
  if (tier === "tierra") return Math.max(16, Math.min(84, xPercent));
  return Math.max(10, Math.min(90, xPercent));
};

export const getItemHeight = (itemId: string, tier: AltarTier): number => {
  if (itemId === "arco_cempasuchil") {
    if (tier === "cielo") return 78;
    if (tier === "tierra") return 92;
    return 106;
  }
  if (itemId === "pan_de_muerto1" || itemId === "pan_de_muerto_azucar") {
    if (tier === "cielo") return 54;
    if (tier === "tierra") return 66;
    return 76;
  }
  if (tier === "cielo") return 48;
  if (tier === "tierra") return 56;
  return 62;
};

const SYMBOL_RIBBONS = [
  { icon: "🌼", color: "#FFA000", label: "Cempasúchil" },
  { icon: "💀", color: "#E91E63", label: "Calavera" },
  { icon: "☀️", color: "#00BCD4", label: "Luz Divina" },
  { icon: "🔥", color: "#FF5722", label: "Fuego Sagrado" },
  { icon: "💖", color: "#D81B60", label: "Amor Eterno" },
  { icon: "🌿", color: "#4CAF50", label: "Mictlán" },
  { icon: "🐾", color: "#FF9800", label: "Xoloitzcuintle" },
];

export function OfrendaView() {
  const { altarImage, itemImages, isLoading } = useOfrendaSprites();

  // State for placed items on the altar - perfectly aligned on each wooden step (escalón)
  const [placedItems, setPlacedItems] = useState<PlacedInstance[]>([]);
  const [velasEncendidas, setVelasEncendidas] = useState<boolean>(false);
  const [hoveredTier, setHoveredTier] = useState<AltarTier | null>(null);
  const [draggedItem, setDraggedItem] = useState<OfrendaItem | null>(null);
  const [selectedItemForPlacement, setSelectedItemForPlacement] = useState<OfrendaItem | null>(null);
  const [draggingInstanceId, setDraggingInstanceId] = useState<string | null>(null);
  const [dropPreviewCoords, setDropPreviewCoords] = useState<{ x: number; y: number } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // References to altar elements
  const altarContainerRef = useRef<HTMLDivElement>(null);

  const showFeedbackToast = (itemName: string, tier: AltarTier) => {
    const tierNames = {
      cielo: "Nivel I (Cielo)",
      tierra: "Nivel II (Tierra)",
      inframundo: "Nivel III (Inframundo)",
    };
    setToastMessage(`✓ ¡${itemName} colocado en ${tierNames[tier]}!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  // Convert any event or info coordinates to true viewport coordinates
  const getViewportCoords = (event: any, info?: any) => {
    if (event) {
      if (typeof event.clientX === "number" && (event.clientX !== 0 || event.clientY !== 0)) {
        return { x: event.clientX, y: event.clientY };
      }
      if (event.touches?.[0]) {
        return { x: event.touches[0].clientX, y: event.touches[0].clientY };
      }
      if (event.changedTouches?.[0]) {
        return { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
      }
    }
    if (info?.point) {
      return {
        x: info.point.x - (typeof window !== "undefined" ? window.scrollX || 0 : 0),
        y: info.point.y - (typeof window !== "undefined" ? window.scrollY || 0 : 0),
      };
    }
    return null;
  };

  // Add an item at a specific shelf location on the altar
  const addItemToAltarAt = (
    itemId: string,
    rawXPercent: number,
    rawYPercent: number,
    explicitTier?: AltarTier
  ) => {
    const tier = explicitTier || getTierFromYPercent(rawYPercent);
    const shelfY = TIER_SHELF_Y[tier];
    const clampedX = getClampedX(tier, rawXPercent);

    const newInstance: PlacedInstance = {
      instanceId: `inst-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      itemId,
      tier,
      xPercent: Math.round(clampedX * 10) / 10,
      yPercent: shelfY,
      zIndex: tier === "cielo" ? 1 : tier === "tierra" ? 2 : 3,
    };

    setPlacedItems((prev) => [...prev, newInstance]);
    setSelectedItemForPlacement(null);
  };

  // Place item with smart default coordinates on its designated tier shelf
  const addDefaultItem = (item: OfrendaItem) => {
    const tier = item.defaultTier;
    const shelfY = TIER_SHELF_Y[tier];
    const existingOnTier = placedItems.filter((p) => p.tier === tier);
    const usedXs = existingOnTier.map((p) => p.xPercent);

    const tierCandidates: Record<AltarTier, number[]> = {
      cielo: [50, 38, 62, 28, 72],
      tierra: [50, 34, 66, 22, 78, 42, 58],
      inframundo: [50, 32, 68, 18, 82, 40, 60, 24, 76],
    };

    const candidates = tierCandidates[tier];
    const bestX =
      candidates.find((c) => usedXs.every((u) => Math.abs(u - c) > 8)) ??
      (tier === "cielo"
        ? Math.round(30 + Math.random() * 40)
        : tier === "tierra"
        ? Math.round(22 + Math.random() * 56)
        : Math.round(16 + Math.random() * 68));

    addItemToAltarAt(item.id, bestX, shelfY, tier);
    showFeedbackToast(item.name, tier);
  };

  // Remove item from altar
  const removeItem = (instanceId: string) => {
    setPlacedItems((prev) => prev.filter((p) => p.instanceId !== instanceId));
  };

  // Pointer drag handler for moving items already placed on the altar along shelves
  const handleItemPointerDown = (
    e: React.PointerEvent,
    instanceId: string
  ) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    e.preventDefault();
    e.stopPropagation();

    setDraggingInstanceId(instanceId);

    const startX = e.clientX;
    const startY = e.clientY;
    let moved = false;

    const onPointerMove = (moveEvent: PointerEvent) => {
      if (!altarContainerRef.current) return;
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        moved = true;
      }

      const rect = altarContainerRef.current.getBoundingClientRect();
      const rawX = ((moveEvent.clientX - rect.left) / rect.width) * 100;
      const rawY = ((moveEvent.clientY - rect.top) / rect.height) * 100;

      const tier = getTierFromYPercent(rawY);
      const shelfY = TIER_SHELF_Y[tier];
      const clampedX = getClampedX(tier, rawX);

      setHoveredTier(tier);

      setPlacedItems((prev) =>
        prev.map((it) =>
          it.instanceId === instanceId
            ? {
                ...it,
                xPercent: Math.round(clampedX * 10) / 10,
                yPercent: shelfY,
                tier,
              }
            : it
        )
      );
    };

    const onPointerUp = (upEvent: PointerEvent) => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      setDraggingInstanceId(null);
      setHoveredTier(null);

      if (moved && altarContainerRef.current) {
        const rect = altarContainerRef.current.getBoundingClientRect();
        const rawX = ((upEvent.clientX - rect.left) / rect.width) * 100;
        const rawY = ((upEvent.clientY - rect.top) / rect.height) * 100;
        const finalTier = getTierFromYPercent(rawY);
        const finalShelfY = TIER_SHELF_Y[finalTier];
        const finalClampedX = getClampedX(finalTier, rawX);

        setPlacedItems((prev) =>
          prev.map((it) =>
            it.instanceId === instanceId
              ? {
                  ...it,
                  xPercent: Math.round(finalClampedX * 10) / 10,
                  yPercent: finalShelfY,
                  tier: finalTier,
                  zIndex: finalTier === "cielo" ? 1 : finalTier === "tierra" ? 2 : 3,
                }
              : it
          )
        );

        const currentItem = placedItems.find((p) => p.instanceId === instanceId);
        const itemDef = currentItem ? OFRENDA_ITEMS.find((i) => i.id === currentItem.itemId) : null;
        if (itemDef) {
          showFeedbackToast(itemDef.name, finalTier);
        }
      }
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  // Drag handlers for side panel items
  const handleDragStart = (item: OfrendaItem) => {
    setDraggedItem(item);
  };

  const handleDrag = (event: any, info: any) => {
    const coords = getViewportCoords(event, info);
    if (coords && altarContainerRef.current) {
      const rect = altarContainerRef.current.getBoundingClientRect();
      if (
        coords.x >= rect.left &&
        coords.x <= rect.right &&
        coords.y >= rect.top &&
        coords.y <= rect.bottom
      ) {
        const rawX = ((coords.x - rect.left) / rect.width) * 100;
        const rawY = ((coords.y - rect.top) / rect.height) * 100;
        const tier = getTierFromYPercent(rawY);
        const shelfY = TIER_SHELF_Y[tier];
        const clampedX = getClampedX(tier, rawX);
        setDropPreviewCoords({ x: Math.round(clampedX), y: shelfY });
        setHoveredTier(tier);
      } else {
        setDropPreviewCoords(null);
        setHoveredTier(null);
      }
    }
  };

  const handleDragEnd = (event: any, info: any, item: OfrendaItem) => {
    const coords = getViewportCoords(event, info);
    if (coords && altarContainerRef.current) {
      const rect = altarContainerRef.current.getBoundingClientRect();
      const margin = 25;
      if (
        coords.x >= rect.left - margin &&
        coords.x <= rect.right + margin &&
        coords.y >= rect.top - margin &&
        coords.y <= rect.bottom + margin
      ) {
        const rawX = ((coords.x - rect.left) / rect.width) * 100;
        const rawY = ((coords.y - rect.top) / rect.height) * 100;
        const tier = getTierFromYPercent(rawY);
        const shelfY = TIER_SHELF_Y[tier];
        const clampedX = getClampedX(tier, rawX);
        addItemToAltarAt(item.id, clampedX, shelfY, tier);
        showFeedbackToast(item.name, tier);
      }
    }

    setDraggedItem(null);
    setDropPreviewCoords(null);
    setHoveredTier(null);
  };

  // Clear entire altar
  const clearAltar = () => {
    setPlacedItems([]);
  };

  // Separate catalog items by category
  const leftItems = OFRENDA_ITEMS.filter((i) => i.category === "tierra");
  const rightItems = OFRENDA_ITEMS.filter((i) => i.category === "alma");

  // Count placements per item
  const getItemCount = (itemId: string) => {
    return placedItems.filter((p) => p.itemId === itemId).length;
  };

  return (
    <Styled.MainContainer>
      <Petals />
      <Header />

      <Styled.ContentWrapper>
        <Styled.TitleBacklight />

        {/* Top Sacred Symbols Ribbon */}
        <Styled.SymbolsRibbon>
          {SYMBOL_RIBBONS.map((badge, idx) => (
            <Styled.RibbonBadge key={idx} $color={badge.color} title={badge.label}>
              {badge.icon}
            </Styled.RibbonBadge>
          ))}
        </Styled.SymbolsRibbon>

        {/* Main Section Titles */}
        <Styled.MainTitle>Crea tu Ofrenda</Styled.MainTitle>

        {/* Action Toolbar */}
        <Styled.ToolbarContainer>
          <Styled.CounterBadge>
            <Sparkles size={16} color="#FF9D00" />
            <span>Elementos consagrados:</span>
            <strong>{placedItems.length}</strong>
            <span style={{ opacity: 0.6 }}>/ 9</span>
          </Styled.CounterBadge>

          <Styled.ToolbarButton
            $variant={velasEncendidas ? "active" : "secondary"}
            onClick={() => setVelasEncendidas((prev) => !prev)}
            title="Enciende las veladoras con flama brillante"
          >
            <Flame
              size={15}
              color={velasEncendidas ? "#FFB300" : "#D8C7E6"}
              style={{ filter: velasEncendidas ? "drop-shadow(0 0 6px #FFA000)" : "none" }}
            />
            <span>{velasEncendidas ? "Velas Encendidas" : "Encender Velas"}</span>
          </Styled.ToolbarButton>

          <Styled.ToolbarButton
            $variant="secondary"
            onClick={clearAltar}
            title="Retirar todos los elementos del altar"
          >
            <RotateCcw size={14} />
            <span>Limpiar Altar</span>
          </Styled.ToolbarButton>
        </Styled.ToolbarContainer>

        {/* Selection Banner if an item is clicked */}
        {selectedItemForPlacement && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: "rgba(255, 140, 25, 0.2)",
              border: "1px solid #FF8A00",
              borderRadius: "9999px",
              padding: "8px 22px",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "0.88rem",
              color: "#FFF2DF",
              zIndex: 15,
            }}
          >
            <span>👉</span>
            <span>
              Has seleccionado <strong>{selectedItemForPlacement.name}</strong>. Haz
              clic en cualquier nivel del altar para colocarlo, o selecciona otro.
            </span>
            <button
              onClick={() => setSelectedItemForPlacement(null)}
              style={{
                background: "transparent",
                border: "none",
                color: "#FFAB91",
                cursor: "pointer",
                fontWeight: 700,
                marginLeft: "8px",
              }}
            >
              Cancelar ✕
            </button>
          </motion.div>
        )}

        {/* Main 3-Column Layout: Left Grid | Altar Stage | Right Grid */}
        <Styled.WorkspaceLayout>
          {/* ======================================================== */}
          {/* PANEL IZQUIERDO: LUZ Y MÍSTICA (GRID DE ELEMENTOS)        */}
          {/* ======================================================== */}
          <Styled.SidePanel $isDraggingActive={Boolean(draggedItem)}>
            <Styled.PanelHeader>
              <Styled.PanelTitleWrap>
                <Styled.PanelDot $color="#FF9D00" />
                <Styled.PanelTitle>Luz y Mística</Styled.PanelTitle>
              </Styled.PanelTitleWrap>
              <Styled.CategoryTag>TIERRA</Styled.CategoryTag>
            </Styled.PanelHeader>

            <Styled.ItemsGrid>
              {leftItems.map((item) => {
                const count = getItemCount(item.id);
                const imgSrc = itemImages[item.id] || `/ofrenda/elementos/${item.id}.png`;
                const isSelected = selectedItemForPlacement?.id === item.id;
                const isItemDragging = draggedItem?.id === item.id;

                return (
                  <Styled.ItemCard
                    key={item.id}
                    $isPlaced={count > 0}
                    $isSelected={isSelected}
                    $isDragging={isItemDragging}
                    draggable={true}
                    drag
                    dragSnapToOrigin
                    dragElastic={0.15}
                    whileHover={{ scale: 1.03 }}
                    whileDrag={{ scale: 1.15, zIndex: 25, cursor: "grabbing" }}
                    onClick={() => {
                      setSelectedItemForPlacement((prev) =>
                        prev?.id === item.id ? null : item
                      );
                    }}
                    onDragStart={(e) => {
                      const dt = (e as unknown as React.DragEvent).dataTransfer;
                      if (dt) {
                        dt.setData("text/plain", item.id);
                        dt.effectAllowed = "copy";
                      }
                      handleDragStart(item);
                    }}
                    onDrag={handleDrag}
                    onDragEnd={(e, info) => handleDragEnd(e, info, item)}
                  >
                    {count > 0 && (
                      <Styled.PlacedCountBadge>{count}</Styled.PlacedCountBadge>
                    )}

                    <Styled.ItemThumbnailWrap>
                      {imgSrc ? (
                        <Styled.ItemImage
                          src={imgSrc}
                          alt={item.name}
                          loading="eager"
                          draggable={false}
                        />
                      ) : (
                        <Styled.ItemIconFallback>{item.iconFallback}</Styled.ItemIconFallback>
                      )}
                    </Styled.ItemThumbnailWrap>

                    <Styled.ItemName>{item.name}</Styled.ItemName>

                    <Styled.ItemActionsRow>
                      <Styled.DragHint title="Arrastra o toca para seleccionar">
                        <GripVertical size={12} />
                        <span>{isSelected ? "Seleccionado" : "Arrastrar"}</span>
                      </Styled.DragHint>

                      <Styled.AddButton
                        title={`Colocar en ${item.defaultTier.toUpperCase()}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          addDefaultItem(item);
                        }}
                      >
                        <Plus size={14} />
                      </Styled.AddButton>
                    </Styled.ItemActionsRow>
                  </Styled.ItemCard>
                );
              })}
            </Styled.ItemsGrid>
          </Styled.SidePanel>

          {/* ======================================================== */}
          {/* CENTRO: EL ALTAR DE TRES NIVELES (SEGÚN IMAGEN 2)        */}
          {/* ======================================================== */}
          <Styled.AltarStageWrapper>
            <Styled.AltarContainer
              ref={altarContainerRef}
              onClick={(e) => {
                if (selectedItemForPlacement && altarContainerRef.current) {
                  const rect = altarContainerRef.current.getBoundingClientRect();
                  const rawX = ((e.clientX - rect.left) / rect.width) * 100;
                  const rawY = ((e.clientY - rect.top) / rect.height) * 100;
                  const tier = getTierFromYPercent(rawY);
                  const shelfY = TIER_SHELF_Y[tier];
                  const clampedX = getClampedX(tier, rawX);
                  addItemToAltarAt(selectedItemForPlacement.id, clampedX, shelfY, tier);
                  showFeedbackToast(selectedItemForPlacement.name, tier);
                  setSelectedItemForPlacement(null);
                }
              }}
              onDragOver={(e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = "copy";
                if (altarContainerRef.current) {
                  const rect = altarContainerRef.current.getBoundingClientRect();
                  const rawX = ((e.clientX - rect.left) / rect.width) * 100;
                  const rawY = ((e.clientY - rect.top) / rect.height) * 100;
                  const tier = getTierFromYPercent(rawY);
                  const shelfY = TIER_SHELF_Y[tier];
                  const clampedX = getClampedX(tier, rawX);
                  setDropPreviewCoords({ x: Math.round(clampedX), y: shelfY });
                  setHoveredTier(tier);
                }
              }}
              onDragLeave={(e) => {
                if (e.currentTarget === e.target) {
                  setDropPreviewCoords(null);
                  setHoveredTier(null);
                }
              }}
              onDrop={(e) => {
                e.preventDefault();
                const itemId = e.dataTransfer.getData("text/plain") || draggedItem?.id;
                if (!itemId || !altarContainerRef.current) return;

                const rect = altarContainerRef.current.getBoundingClientRect();
                const rawX = ((e.clientX - rect.left) / rect.width) * 100;
                const rawY = ((e.clientY - rect.top) / rect.height) * 100;
                const tier = getTierFromYPercent(rawY);
                const shelfY = TIER_SHELF_Y[tier];
                const clampedX = getClampedX(tier, rawX);

                addItemToAltarAt(itemId, clampedX, shelfY, tier);
                const itemDef = OFRENDA_ITEMS.find((i) => i.id === itemId);
                if (itemDef) showFeedbackToast(itemDef.name, tier);

                setDropPreviewCoords(null);
                setHoveredTier(null);
                setDraggedItem(null);
              }}
              style={{
                cursor: selectedItemForPlacement ? "copy" : "default",
              }}
            >
              {/* Altar Illustration Backdrop (Image 2 style) */}
              {altarImage ? (
                <Styled.AltarBackingImage
                  src={altarImage}
                  alt="Altar de Tres Niveles Tradicional"
                />
              ) : (
                /* High-fidelity Vector fallback matching Image 2 exactly */
                <svg
                  viewBox="0 0 600 520"
                  style={{ width: "100%", height: "auto", display: "block" }}
                >
                  <defs>
                    <linearGradient id="woodStep" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C9A37A" />
                      <stop offset="100%" stopColor="#B38B64" />
                    </linearGradient>
                    <linearGradient id="woodFace" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#9C734D" />
                      <stop offset="100%" stopColor="#7B5634" />
                    </linearGradient>
                  </defs>

                  {/* TIER 1 - TOP */}
                  <polygon points="210,65 390,65 460,110 140,110" fill="url(#woodStep)" stroke="#221105" strokeWidth="3" />
                  <rect x="180" y="110" width="240" height="85" fill="url(#woodFace)" stroke="#221105" strokeWidth="3" />

                  {/* TIER 2 - MIDDLE */}
                  <polygon points="140,195 460,195 520,250 80,250" fill="url(#woodStep)" stroke="#221105" strokeWidth="3" />
                  <rect x="130" y="250" width="340" height="95" fill="url(#woodFace)" stroke="#221105" strokeWidth="3" />

                  {/* TIER 3 - BOTTOM */}
                  <polygon points="80,345 520,345 570,410 30,410" fill="url(#woodStep)" stroke="#221105" strokeWidth="3" />
                  <rect x="65" y="410" width="470" height="100" fill="url(#woodFace)" stroke="#221105" strokeWidth="3" />

                  {/* Papel Picado Garland Tier 1 - Orange */}
                  <path d="M 180 115 Q 240 160 300 115 Q 360 160 420 115 L 420 185 Q 360 195 300 185 Q 240 195 180 185 Z" fill="#FF7A00" stroke="#221105" strokeWidth="2" />

                  {/* Papel Picado Garland Tier 2 - Purple & Pink */}
                  <path d="M 130 255 Q 215 315 300 255 Q 385 315 470 255 L 470 330 Q 385 340 300 330 Q 215 340 130 330 Z" fill="#9C27B0" stroke="#221105" strokeWidth="2" />

                  {/* Papel Picado Garland Tier 3 - Blue, Yellow, Green */}
                  <path d="M 65 415 Q 182 485 300 415 Q 417 485 535 415 L 535 495 Q 417 505 300 495 Q 182 505 65 495 Z" fill="#00BCD4" stroke="#221105" strokeWidth="2" />
                </svg>
              )}

              {/* -------------------------------------------------------- */}
              {/* TIER GUIDE OVERLAYS (Visual cues & sacred badges)       */}
              {/* -------------------------------------------------------- */}
              <Styled.TierGuideZone
                $tier="cielo"
                $isOver={hoveredTier === "cielo"}
                $isAnyDragging={Boolean(draggedItem || selectedItemForPlacement || draggingInstanceId)}
              >
                <Styled.TierLabelBadge $tier="cielo">
                  NIVEL I · CIELO
                </Styled.TierLabelBadge>
              </Styled.TierGuideZone>

              <Styled.TierGuideZone
                $tier="tierra"
                $isOver={hoveredTier === "tierra"}
                $isAnyDragging={Boolean(draggedItem || selectedItemForPlacement || draggingInstanceId)}
              >
                <Styled.TierLabelBadge $tier="tierra">
                  NIVEL II · TIERRA
                </Styled.TierLabelBadge>
              </Styled.TierGuideZone>

              <Styled.TierGuideZone
                $tier="inframundo"
                $isOver={hoveredTier === "inframundo"}
                $isAnyDragging={Boolean(draggedItem || selectedItemForPlacement || draggingInstanceId)}
              >
                <Styled.TierLabelBadge $tier="inframundo">
                  NIVEL III · INFRAMUNDO
                </Styled.TierLabelBadge>
              </Styled.TierGuideZone>

              {/* Drop Target Ghost Preview when dragging from panel */}
              {dropPreviewCoords && draggedItem && (
                <Styled.DropPreviewGhost $x={dropPreviewCoords.x} $y={dropPreviewCoords.y}>
                  <Styled.DropTargetRing />
                  {itemImages[draggedItem.id] ? (
                    <img
                      src={itemImages[draggedItem.id]}
                      alt={draggedItem.name}
                      style={{
                        height: 60,
                        opacity: 0.85,
                        filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.5))",
                        pointerEvents: "none",
                      }}
                    />
                  ) : (
                    <span style={{ fontSize: "2.3rem", opacity: 0.85 }}>
                      {draggedItem.iconFallback}
                    </span>
                  )}
                </Styled.DropPreviewGhost>
              )}

              {/* -------------------------------------------------------- */}
              {/* PLACED ITEMS ON THE ALTAR (Freeform 2D & Reorderable)    */}
              {/* -------------------------------------------------------- */}
              <AnimatePresence>
                {placedItems.map((placed) => {
                  const itemDef = OFRENDA_ITEMS.find((i) => i.id === placed.itemId);
                  if (!itemDef) return null;
                  const isDraggingThis = draggingInstanceId === placed.instanceId;
                  const imgSrc = itemImages[placed.itemId] || `/ofrenda/elementos/${placed.itemId}.png`;

                  return (
                    <Styled.PlacedItemDraggable
                      key={placed.instanceId}
                      $xPercent={placed.xPercent}
                      $yPercent={placed.yPercent}
                      $zIndex={placed.zIndex}
                      $isDraggingThis={isDraggingThis}
                      onPointerDown={(e) => handleItemPointerDown(e, placed.instanceId)}
                      onDoubleClick={(e) => {
                        e.stopPropagation();
                        removeItem(placed.instanceId);
                      }}
                      title={`${itemDef.name} • Arrastra para organizar • Doble clic para retirar`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: isDraggingThis ? 1.08 : 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    >
                      {/* Small discreet remove button (does not affect image dimensions) */}
                      <Styled.ItemRemoveBtn
                        onClick={(e) => {
                          e.stopPropagation();
                          removeItem(placed.instanceId);
                        }}
                        title={`Retirar ${itemDef.name}`}
                      >
                        ✕
                      </Styled.ItemRemoveBtn>

                      {/* Candle Flame effect if candle and lit */}
                      {itemDef.isCandle && velasEncendidas && (
                        <>
                          <Styled.CandleFlameEffect />
                          <Styled.CandleAura />
                        </>
                      )}

                      {imgSrc ? (
                        <Styled.PlacedItemImg
                          src={imgSrc}
                          alt={itemDef.name}
                          $height={getItemHeight(itemDef.id, placed.tier)}
                        />
                      ) : (
                        <Styled.PlacedItemFallback
                          $size={placed.tier === "cielo" ? 2.1 : placed.tier === "tierra" ? 2.4 : 2.6}
                        >
                          {itemDef.iconFallback}
                        </Styled.PlacedItemFallback>
                      )}

                      <Styled.ItemLabelTag>{itemDef.name}</Styled.ItemLabelTag>
                    </Styled.PlacedItemDraggable>
                  );
                })}
              </AnimatePresence>
            </Styled.AltarContainer>

            {/* Hint Banner below Altar */}
            <Styled.TipBanner>
              <span>
                <strong>Organiza libremente:</strong> Arrastra cualquier elemento a la posición que desees (en cualquier nivel, izquierda, derecha o frente). Usa el botón ✕ o haz doble clic para retirarlo.
              </span>
            </Styled.TipBanner>
          </Styled.AltarStageWrapper>

          {/* ======================================================== */}
          {/* PANEL DERECHO: EL BANQUETE (GRID DE ELEMENTOS)           */}
          {/* ======================================================== */}
          <Styled.SidePanel $isDraggingActive={Boolean(draggedItem)}>
            <Styled.PanelHeader>
              <Styled.PanelTitleWrap>
                <Styled.PanelDot $color="#E91E63" />
                <Styled.PanelTitle>El Banquete</Styled.PanelTitle>
              </Styled.PanelTitleWrap>
              <Styled.CategoryTag>ALMA</Styled.CategoryTag>
            </Styled.PanelHeader>

            <Styled.ItemsGrid>
              {rightItems.map((item) => {
                const count = getItemCount(item.id);
                const imgSrc = itemImages[item.id] || `/ofrenda/elementos/${item.id}.png`;
                const isSelected = selectedItemForPlacement?.id === item.id;
                const isItemDragging = draggedItem?.id === item.id;

                return (
                  <Styled.ItemCard
                    key={item.id}
                    $isPlaced={count > 0}
                    $isSelected={isSelected}
                    $isDragging={isItemDragging}
                    draggable={true}
                    drag
                    dragSnapToOrigin
                    dragElastic={0.15}
                    whileHover={{ scale: 1.03 }}
                    whileDrag={{ scale: 1.15, zIndex: 25, cursor: "grabbing" }}
                    onClick={() => {
                      setSelectedItemForPlacement((prev) =>
                        prev?.id === item.id ? null : item
                      );
                    }}
                    onDragStart={(e) => {
                      const dt = (e as unknown as React.DragEvent).dataTransfer;
                      if (dt) {
                        dt.setData("text/plain", item.id);
                        dt.effectAllowed = "copy";
                      }
                      handleDragStart(item);
                    }}
                    onDrag={handleDrag}
                    onDragEnd={(e, info) => handleDragEnd(e, info, item)}
                  >
                    {count > 0 && (
                      <Styled.PlacedCountBadge>{count}</Styled.PlacedCountBadge>
                    )}

                    <Styled.ItemThumbnailWrap>
                      {imgSrc ? (
                        <Styled.ItemImage
                          src={imgSrc}
                          alt={item.name}
                          loading="eager"
                          draggable={false}
                        />
                      ) : (
                        <Styled.ItemIconFallback>{item.iconFallback}</Styled.ItemIconFallback>
                      )}
                    </Styled.ItemThumbnailWrap>

                    <Styled.ItemName>{item.name}</Styled.ItemName>

                    <Styled.ItemActionsRow>
                      <Styled.DragHint title="Arrastra o toca para seleccionar">
                        <GripVertical size={12} />
                        <span>{isSelected ? "Seleccionado" : "Arrastrar"}</span>
                      </Styled.DragHint>

                      <Styled.AddButton
                        title={`Colocar en ${item.defaultTier.toUpperCase()}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          addDefaultItem(item);
                        }}
                      >
                        <Plus size={14} />
                      </Styled.AddButton>
                    </Styled.ItemActionsRow>
                  </Styled.ItemCard>
                );
              })}
            </Styled.ItemsGrid>
          </Styled.SidePanel>
        </Styled.WorkspaceLayout>

        {/* Real-time Toast Feedback */}
        <AnimatePresence>
          {toastMessage && (
            <Styled.ToastFeedback
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span>🏵️</span>
              <span>{toastMessage}</span>
            </Styled.ToastFeedback>
          )}
        </AnimatePresence>

        <Styled.SignificanceCard>
          <Styled.SignificanceContent>
            <Styled.SignificanceIconWrap>
              <BookOpen size={24} />
            </Styled.SignificanceIconWrap>
            <Styled.SignificanceText>
              <Styled.SignificanceTitle>
                El Significado de los Tres Niveles
              </Styled.SignificanceTitle>
              <Styled.SignificanceBody>
                En la cosmovisión tradicional, el nivel superior encarna el cielo y la
                memoria divina; el escalón central representa la vida terrenal y los
                banquetes compartidos; y el inferior conecta con la tierra y el
                Mictlán.
              </Styled.SignificanceBody>
            </Styled.SignificanceText>
          </Styled.SignificanceContent>

          <Styled.SignificanceBadges>
            <Styled.SacredBadge>
              <Droplets size={13} color="#00BCD4" />
              <span>Purificación</span>
            </Styled.SacredBadge>
            <Styled.SacredBadge>
              <Sun size={13} color="#FFA000" />
              <span>Luz eterna</span>
            </Styled.SacredBadge>
            <Styled.SacredBadge>
              <Heart size={13} color="#E91E63" />
              <span>Memoria viva</span>
            </Styled.SacredBadge>
          </Styled.SignificanceBadges>
        </Styled.SignificanceCard>

        {/* Sacred Quote Footer */}
        <Styled.QuoteFooter>
          <Styled.QuoteText>
            <span>🏵</span>
            <span>
              “A nuestros ancestros: mientras su memoria florezca en cempasúchil,
              jamás partirán del todo.”
            </span>
          </Styled.QuoteText>
          <Styled.HeritageText>
            Patrimonio Cultural Inmaterial · Ofrenda Digital México
          </Styled.HeritageText>
        </Styled.QuoteFooter>
      </Styled.ContentWrapper>

      <Footer />
    </Styled.MainContainer>
  );
}

export default OfrendaView;
