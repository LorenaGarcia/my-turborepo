"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flame,
  RotateCcw,
  Sparkles,
  BookOpen,
  Droplets,
  Sun,
  GripVertical,
  Plus,
  ChevronDown,
  ChevronUp,
  Heart,
} from "lucide-react";

import { useOfrendaSprites } from "./useOfrendaSprites";
import { OFRENDA_ITEMS, OfrendaItem, AltarTier } from "./ofrenda-data";

import Header from "../header/header";
import Footer from "../footer/footer";
import Petals from "../petals/petals";

import {getItemHeight, getItemWidth, getTierFromYPercent, getClampedX, isArcoItem} from "./ofrenda.utils";
import { SYMBOL_RIBBONS, ARCO_LEFT_X, ARCO_SHELF_Y, TIER_SHELF_Y  } from "./ofrenda.constants";
import { PlacedInstance } from "./ofrenda.types";

import * as Styled from "./ofrenda.styles";



export function OfrendaView() {
  const { altarImage, itemImages } = useOfrendaSprites();

  const [placedItems, setPlacedItems] = useState<PlacedInstance[]>([]);
  const [velasEncendidas, setVelasEncendidas] = useState<boolean>(false);
  const [hoveredTier, setHoveredTier] = useState<AltarTier | null>(null);
  const [draggedItem, setDraggedItem] = useState<OfrendaItem | null>(null);
  const [selectedItemForPlacement, setSelectedItemForPlacement] =
    useState<OfrendaItem | null>(null);
  const [draggingInstanceId, setDraggingInstanceId] = useState<string | null>(
    null
  );
  const [dropPreviewCoords, setDropPreviewCoords] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isMobileGridOpen, setIsMobileGridOpen] = useState<boolean>(true);
  const [mobileCategoryFilter, setMobileCategoryFilter] = useState<
    "todos" | "tierra" | "alma"
  >("todos");

  const placedCandlesCount = placedItems.filter((p) => {
    const itemDef = OFRENDA_ITEMS.find((i) => i.id === p.itemId);
    return Boolean(itemDef?.isCandle || p.itemId === "veladora");
  }).length;
  const hasCandles = placedCandlesCount > 0;

  const prevCandlesCountRef = useRef<number>(0);
  const [shouldBounceCandleBtn, setShouldBounceCandleBtn] =
    useState<boolean>(false);

  useEffect(() => {
    if (prevCandlesCountRef.current === 0 && placedCandlesCount > 0) {
      setShouldBounceCandleBtn(true);
      const timer = setTimeout(() => {
        setShouldBounceCandleBtn(false);
      }, 1000);
      prevCandlesCountRef.current = placedCandlesCount;
      return () => clearTimeout(timer);
    }
    prevCandlesCountRef.current = placedCandlesCount;
  }, [placedCandlesCount]);

  useEffect(() => {
    if (!hasCandles && velasEncendidas) {
      setVelasEncendidas(false);
    }
  }, [hasCandles, velasEncendidas]);

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

  const getViewportCoords = (event: any, info?: any) => {
    if (event) {
      if (
        typeof event.clientX === "number" &&
        (event.clientX !== 0 || event.clientY !== 0)
      ) {
        return { x: event.clientX, y: event.clientY };
      }
      if (event.touches?.[0]) {
        return { x: event.touches[0].clientX, y: event.touches[0].clientY };
      }
      if (event.changedTouches?.[0]) {
        return {
          x: event.changedTouches[0].clientX,
          y: event.changedTouches[0].clientY,
        };
      }
    }
    if (info?.point) {
      return {
        x:
          info.point.x -
          (typeof window !== "undefined" ? window.scrollX || 0 : 0),
        y:
          info.point.y -
          (typeof window !== "undefined" ? window.scrollY || 0 : 0),
      };
    }
    return null;
  };

  const addItemToAltarAt = (
    itemId: string,
    rawXPercent: number,
    rawYPercent: number,
    explicitTier?: AltarTier
  ) => {
    const isArco = isArcoItem(itemId);
    const tier = isArco
      ? "cielo"
      : explicitTier || getTierFromYPercent(rawYPercent);
    const shelfY = isArco ? ARCO_SHELF_Y : TIER_SHELF_Y[tier];
    const clampedX = isArco ? ARCO_LEFT_X : getClampedX(tier, rawXPercent);

    const newInstance: PlacedInstance = {
      instanceId: `inst-${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 6)}`,
      itemId,
      tier,
      xPercent: Math.round(clampedX * 10) / 10,
      yPercent: shelfY,
      zIndex: isArco ? 1 : tier === "cielo" ? 2 : tier === "tierra" ? 3 : 4,
    };

    setPlacedItems((prev) => [...prev, newInstance]);
    setSelectedItemForPlacement(null);
  };

  const addDefaultItem = (item: OfrendaItem) => {
    const isArco = isArcoItem(item.id);
    if (isArco) {
      addItemToAltarAt(item.id, ARCO_LEFT_X, ARCO_SHELF_Y, "cielo");
      showFeedbackToast(item.name, "cielo");
      return;
    }

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

  const removeItem = (instanceId: string) => {
    setPlacedItems((prev) => prev.filter((p) => p.instanceId !== instanceId));
  };

  const handleItemPointerDown = (e: React.PointerEvent, instanceId: string) => {
    if ((e.target as HTMLElement)?.closest("button")) {
      return;
    }
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

      const currentItem = placedItems.find(
        (it) => it.instanceId === instanceId
      );
      const isArco = isArcoItem(currentItem?.itemId);

      const tier = isArco ? "cielo" : getTierFromYPercent(rawY);
      const shelfY = isArco ? ARCO_SHELF_Y : TIER_SHELF_Y[tier];
      const clampedX = isArco ? ARCO_LEFT_X : getClampedX(tier, rawX);

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
        const currentItem = placedItems.find(
          (p) => p.instanceId === instanceId
        );
        const isArco = isArcoItem(currentItem?.itemId);
        const finalTier = isArco ? "cielo" : getTierFromYPercent(rawY);
        const finalShelfY = isArco ? ARCO_SHELF_Y : TIER_SHELF_Y[finalTier];
        const finalClampedX = isArco
          ? ARCO_LEFT_X
          : getClampedX(finalTier, rawX);

        setPlacedItems((prev) =>
          prev.map((it) =>
            it.instanceId === instanceId
              ? {
                  ...it,
                  xPercent: Math.round(finalClampedX * 10) / 10,
                  yPercent: finalShelfY,
                  tier: finalTier,
                  zIndex: isArco
                    ? 1
                    : finalTier === "cielo"
                    ? 2
                    : finalTier === "tierra"
                    ? 3
                    : 4,
                }
              : it
          )
        );

        const itemDef = currentItem
          ? OFRENDA_ITEMS.find((i) => i.id === currentItem.itemId)
          : null;
        if (itemDef) {
          showFeedbackToast(itemDef.name, finalTier);
        }
      }
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

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

  const clearAltar = () => {
    setPlacedItems([]);
  };

  const leftItems = OFRENDA_ITEMS.filter((i) => i.category === "tierra");
  const rightItems = OFRENDA_ITEMS.filter((i) => i.category === "alma");

  const displayedMobileItems =
    mobileCategoryFilter === "todos"
      ? OFRENDA_ITEMS
      : mobileCategoryFilter === "tierra"
      ? leftItems
      : rightItems;

  const getItemCount = (itemId: string) => {
    return placedItems.filter((p) => p.itemId === itemId).length;
  };

  const renderItemCard = (item: OfrendaItem, isMobile = false) => {
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
        draggable={!isMobile}
        drag={!isMobile}
        dragSnapToOrigin={!isMobile}
        dragElastic={0.15}
        whileHover={isMobile ? undefined : { scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        whileDrag={
          !isMobile
            ? { scale: 1.15, zIndex: 25, cursor: "grabbing" }
            : undefined
        }
        onClick={() => {
          setSelectedItemForPlacement((prev) =>
            prev?.id === item.id ? null : item
          );
          if (isMobile) {
            setIsMobileGridOpen(false);
          }
        }}
        onDragStart={
          !isMobile
            ? (e) => {
                const dt = (e as unknown as React.DragEvent).dataTransfer;
                if (dt) {
                  dt.setData("text/plain", item.id);
                  dt.effectAllowed = "copy";
                }
                handleDragStart(item);
              }
            : undefined
        }
        onDrag={!isMobile ? handleDrag : undefined}
        onDragEnd={
          !isMobile ? (e, info) => handleDragEnd(e, info, item) : undefined
        }
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
            <Styled.ItemIconFallback>
              {item.iconFallback || "✨"}
            </Styled.ItemIconFallback>
          )}
        </Styled.ItemThumbnailWrap>

        <Styled.ItemName>{item.name}</Styled.ItemName>

        <Styled.ItemActionsRow>
          <Styled.DragHint title="Toca o arrastra para seleccionar">
            <GripVertical size={12} />
            <span>
              {isSelected ? "Seleccionado" : isMobile ? "Tocar" : "Arrastrar"}
            </span>
          </Styled.DragHint>

          <Styled.AddButton
            title={`Colocar en ${item.defaultTier.toUpperCase()}`}
            onClick={(e) => {
              e.stopPropagation();
              addDefaultItem(item);
              if (isMobile) {
                setIsMobileGridOpen(false);
              }
            }}
          >
            <Plus size={14} />
          </Styled.AddButton>
        </Styled.ItemActionsRow>
      </Styled.ItemCard>
    );
  };

  return (
    <Styled.MainContainer>
      <Petals />
      <Header />

      <Styled.ContentWrapper>
        <Styled.TitleBacklight />

        <Styled.SymbolsRibbon>
          {SYMBOL_RIBBONS.map((badge, idx) => (
            <Styled.RibbonBadge
              key={idx}
              $color={badge.color}
              title={badge.label}
            >
              {badge.icon}
            </Styled.RibbonBadge>
          ))}
        </Styled.SymbolsRibbon>

        <Styled.MainTitle>Crea tu Ofrenda</Styled.MainTitle>
        <Styled.ToolbarContainer>
          <Styled.CounterBadge>
            <Sparkles size={16} color="#FF9D00" />
            <span>Elementos consagrados:</span>
            <strong>{placedItems.length}</strong>
            <span style={{ opacity: 0.6 }}>/ 9</span>
          </Styled.CounterBadge>

          <Styled.ToolbarButton
            $variant={velasEncendidas ? "active" : "secondary"}
            onClick={() => {
              if (hasCandles) {
                setVelasEncendidas((prev) => !prev);
              }
            }}
            disabled={!hasCandles}
            title={
              !hasCandles
                ? "Coloca al menos una veladora en el altar para encenderla"
                : velasEncendidas
                ? "Apagar las velas"
                : "Enciende las veladoras con flama brillante"
            }
            animate={
              shouldBounceCandleBtn
                ? {
                    y: [0, -12, 2, -6, 0],
                    rotate: [0, -7, 7, -4, 4, 0],
                    scale: [1, 1.15, 0.95, 1.08, 1],
                    boxShadow: [
                      "0 0 0px rgba(255, 160, 0, 0)",
                      "0 0 20px rgba(255, 160, 0, 0.7)",
                      "0 0 25px rgba(255, 87, 34, 0.8)",
                      "0 0 10px rgba(255, 160, 0, 0.4)",
                      "0 0 0px rgba(255, 160, 0, 0)",
                    ],
                    transition: {
                      duration: 0.85,
                      ease: "easeInOut",
                    },
                  }
                : {
                    y: 0,
                    rotate: 0,
                    scale: 1,
                  }
            }
          >
            <Flame
              size={15}
              color={
                !hasCandles
                  ? "rgba(255, 255, 255, 0.35)"
                  : velasEncendidas
                  ? "#FFB300"
                  : "#D8C7E6"
              }
              style={{
                filter:
                  hasCandles && velasEncendidas
                    ? "drop-shadow(0 0 6px #FFA000)"
                    : "none",
              }}
            />
            <span>
              {velasEncendidas ? "Velas Encendidas" : "Encender Velas"}
            </span>
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
              Has seleccionado <strong>{selectedItemForPlacement.name}</strong>.
              Haz clic en cualquier nivel del altar para colocarlo, o selecciona
              otro.
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

        <Styled.WorkspaceLayout>
          <Styled.MobileItemsPanel>
            <Styled.MobilePanelToggleBtn
              type="button"
              onClick={() => setIsMobileGridOpen((prev) => !prev)}
              $isOpen={isMobileGridOpen}
              aria-expanded={isMobileGridOpen}
            >
              <Styled.MobilePanelTitleGroup>
                <Styled.MobilePanelIcon>🏵️</Styled.MobilePanelIcon>
                <div>
                  <Styled.MobilePanelTitle>
                    <span>Elementos de Ofrenda</span>
                    <Styled.MobileItemCountBadge>
                      {OFRENDA_ITEMS.length}
                    </Styled.MobileItemCountBadge>
                  </Styled.MobilePanelTitle>
                  <Styled.MobilePanelSubtitle>
                    {isMobileGridOpen
                      ? "Toca un elemento para seleccionarlo y colocarlo"
                      : selectedItemForPlacement
                      ? `Colocando: ${selectedItemForPlacement.name} (Toca el altar)`
                      : "Toca para desplegar elementos"}
                  </Styled.MobilePanelSubtitle>
                </div>
              </Styled.MobilePanelTitleGroup>

              <Styled.MobileToggleIndicator $isOpen={isMobileGridOpen}>
                <span>{isMobileGridOpen ? "Ocultar" : "Desplegar"}</span>
                {isMobileGridOpen ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </Styled.MobileToggleIndicator>
            </Styled.MobilePanelToggleBtn>

            <AnimatePresence>
              {isMobileGridOpen && (
                <Styled.MobileGridContent
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <Styled.MobileFilterTabs>
                    <Styled.MobileFilterChip
                      type="button"
                      $active={mobileCategoryFilter === "todos"}
                      onClick={() => setMobileCategoryFilter("todos")}
                    >
                      <span>✨</span>
                      <span>Todos ({OFRENDA_ITEMS.length})</span>
                    </Styled.MobileFilterChip>
                    <Styled.MobileFilterChip
                      type="button"
                      $active={mobileCategoryFilter === "tierra"}
                      onClick={() => setMobileCategoryFilter("tierra")}
                    >
                      <span style={{ color: "#FF9D00" }}>●</span>
                      <span>Luz y Mística ({leftItems.length})</span>
                    </Styled.MobileFilterChip>
                    <Styled.MobileFilterChip
                      type="button"
                      $active={mobileCategoryFilter === "alma"}
                      onClick={() => setMobileCategoryFilter("alma")}
                    >
                      <span style={{ color: "#E91E63" }}>●</span>
                      <span>El Banquete ({rightItems.length})</span>
                    </Styled.MobileFilterChip>
                  </Styled.MobileFilterTabs>

                  <Styled.ItemsGrid>
                    {displayedMobileItems.map((item) =>
                      renderItemCard(item, true)
                    )}
                  </Styled.ItemsGrid>
                </Styled.MobileGridContent>
              )}
            </AnimatePresence>
          </Styled.MobileItemsPanel>

          <Styled.SidePanel $isDraggingActive={Boolean(draggedItem)}>
            <Styled.PanelHeader>
              <Styled.PanelTitleWrap>
                <Styled.PanelDot $color="#FF9D00" />
                <Styled.PanelTitle>Luz y Mística</Styled.PanelTitle>
              </Styled.PanelTitleWrap>
              <Styled.CategoryTag>TIERRA</Styled.CategoryTag>
            </Styled.PanelHeader>

            <Styled.ItemsGrid>
              {leftItems.map((item) => renderItemCard(item, false))}
            </Styled.ItemsGrid>
          </Styled.SidePanel>

          <Styled.AltarStageWrapper>
            <Styled.AltarContainer
              ref={altarContainerRef}
              onClick={(e) => {
                if (selectedItemForPlacement && altarContainerRef.current) {
                  const rect =
                    altarContainerRef.current.getBoundingClientRect();
                  const rawX = ((e.clientX - rect.left) / rect.width) * 100;
                  const rawY = ((e.clientY - rect.top) / rect.height) * 100;
                  const isArco = isArcoItem(selectedItemForPlacement.id);
                  const tier = isArco ? "cielo" : getTierFromYPercent(rawY);
                  const shelfY = isArco ? ARCO_SHELF_Y : TIER_SHELF_Y[tier];
                  const clampedX = isArco
                    ? ARCO_LEFT_X
                    : getClampedX(tier, rawX);
                  addItemToAltarAt(
                    selectedItemForPlacement.id,
                    clampedX,
                    shelfY,
                    tier
                  );
                  showFeedbackToast(selectedItemForPlacement.name, tier);
                  setSelectedItemForPlacement(null);
                }
              }}
              onDragOver={(e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = "copy";
                if (altarContainerRef.current) {
                  const rect =
                    altarContainerRef.current.getBoundingClientRect();
                  const rawX = ((e.clientX - rect.left) / rect.width) * 100;
                  const rawY = ((e.clientY - rect.top) / rect.height) * 100;
                  const isArco = isArcoItem(draggedItem?.id);
                  const tier = isArco ? "cielo" : getTierFromYPercent(rawY);
                  const shelfY = isArco ? ARCO_SHELF_Y : TIER_SHELF_Y[tier];
                  const clampedX = isArco
                    ? ARCO_LEFT_X
                    : getClampedX(tier, rawX);
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
                const itemId =
                  e.dataTransfer.getData("text/plain") || draggedItem?.id;
                if (!itemId || !altarContainerRef.current) return;

                const rect = altarContainerRef.current.getBoundingClientRect();
                const rawX = ((e.clientX - rect.left) / rect.width) * 100;
                const rawY = ((e.clientY - rect.top) / rect.height) * 100;
                const isArco = isArcoItem(itemId);
                const tier = isArco ? "cielo" : getTierFromYPercent(rawY);
                const shelfY = isArco ? ARCO_SHELF_Y : TIER_SHELF_Y[tier];
                const clampedX = isArco ? ARCO_LEFT_X : getClampedX(tier, rawX);

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
              {altarImage ? (
                <Styled.AltarBackingImage
                  src={altarImage}
                  alt="Altar de Tres Niveles Tradicional"
                />
              ) : (
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

                  <polygon
                    points="210,65 390,65 460,110 140,110"
                    fill="url(#woodStep)"
                    stroke="#221105"
                    strokeWidth="3"
                  />
                  <rect
                    x="180"
                    y="110"
                    width="240"
                    height="85"
                    fill="url(#woodFace)"
                    stroke="#221105"
                    strokeWidth="3"
                  />

                  <polygon
                    points="140,195 460,195 520,250 80,250"
                    fill="url(#woodStep)"
                    stroke="#221105"
                    strokeWidth="3"
                  />
                  <rect
                    x="130"
                    y="250"
                    width="340"
                    height="95"
                    fill="url(#woodFace)"
                    stroke="#221105"
                    strokeWidth="3"
                  />

                  {/* TIER 3 - BOTTOM */}
                  <polygon
                    points="80,345 520,345 570,410 30,410"
                    fill="url(#woodStep)"
                    stroke="#221105"
                    strokeWidth="3"
                  />
                  <rect
                    x="65"
                    y="410"
                    width="470"
                    height="100"
                    fill="url(#woodFace)"
                    stroke="#221105"
                    strokeWidth="3"
                  />

                  <path
                    d="M 180 115 Q 240 160 300 115 Q 360 160 420 115 L 420 185 Q 360 195 300 185 Q 240 195 180 185 Z"
                    fill="#FF7A00"
                    stroke="#221105"
                    strokeWidth="2"
                  />
                  <path
                    d="M 130 255 Q 215 315 300 255 Q 385 315 470 255 L 470 330 Q 385 340 300 330 Q 215 340 130 330 Z"
                    fill="#9C27B0"
                    stroke="#221105"
                    strokeWidth="2"
                  />
                  <path
                    d="M 65 415 Q 182 485 300 415 Q 417 485 535 415 L 535 495 Q 417 505 300 495 Q 182 505 65 495 Z"
                    fill="#00BCD4"
                    stroke="#221105"
                    strokeWidth="2"
                  />
                </svg>
              )}

              <Styled.TierGuideZone
                $tier="cielo"
                $isOver={hoveredTier === "cielo"}
                $isAnyDragging={Boolean(
                  draggedItem || selectedItemForPlacement || draggingInstanceId
                )}
              >
                <Styled.TierLabelBadge $tier="cielo">
                  NIVEL I · CIELO
                </Styled.TierLabelBadge>
              </Styled.TierGuideZone>

              <Styled.TierGuideZone
                $tier="tierra"
                $isOver={hoveredTier === "tierra"}
                $isAnyDragging={Boolean(
                  draggedItem || selectedItemForPlacement || draggingInstanceId
                )}
              >
                <Styled.TierLabelBadge $tier="tierra">
                  NIVEL II · TIERRA
                </Styled.TierLabelBadge>
              </Styled.TierGuideZone>

              <Styled.TierGuideZone
                $tier="inframundo"
                $isOver={hoveredTier === "inframundo"}
                $isAnyDragging={Boolean(
                  draggedItem || selectedItemForPlacement || draggingInstanceId
                )}
              >
                <Styled.TierLabelBadge $tier="inframundo">
                  NIVEL III · INFRAMUNDO
                </Styled.TierLabelBadge>
              </Styled.TierGuideZone>

              {dropPreviewCoords && draggedItem && (
                <Styled.DropPreviewGhost
                  $x={dropPreviewCoords.x}
                  $y={dropPreviewCoords.y}
                  $isArco={isArcoItem(draggedItem.id)}
                >
                  <Styled.DropTargetRing />
                  {itemImages[draggedItem.id] ? (
                    <img
                      src={itemImages[draggedItem.id]}
                      alt={draggedItem.name}
                      style={
                        isArcoItem(draggedItem.id)
                          ? {
                              width: "100%",
                              maxWidth: "100%",
                              height: "auto",
                              opacity: 0.85,
                              filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.5))",
                              pointerEvents: "none",
                            }
                          : {
                              height: getItemHeight(
                                draggedItem,
                                hoveredTier || "tierra"
                              ),
                              maxWidth:
                                getItemWidth(
                                  draggedItem,
                                  hoveredTier || "tierra"
                                ) || 120,
                              opacity: 0.85,
                              filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.5))",
                              pointerEvents: "none",
                            }
                      }
                    />
                  ) : (
                    <span style={{ fontSize: "2.3rem", opacity: 0.85 }}>
                      {draggedItem.iconFallback || "✨"}
                    </span>
                  )}
                </Styled.DropPreviewGhost>
              )}

              <AnimatePresence>
                {placedItems.map((placed) => {
                  const itemDef = OFRENDA_ITEMS.find(
                    (i) => i.id === placed.itemId
                  );
                  if (!itemDef) return null;
                  const isDraggingThis =
                    draggingInstanceId === placed.instanceId;
                  const imgSrc =
                    itemImages[placed.itemId] ||
                    `/ofrenda/elementos/${placed.itemId}.png`;
                  const isArco = isArcoItem(placed.itemId);

                  return (
                    <Styled.PlacedItemDraggable
                      key={placed.instanceId}
                      $xPercent={placed.xPercent}
                      $yPercent={placed.yPercent}
                      $zIndex={placed.zIndex}
                      $isDraggingThis={isDraggingThis}
                      $isArco={isArco}
                      onPointerDown={(e) =>
                        handleItemPointerDown(e, placed.instanceId)
                      }
                      onDoubleClick={(e) => {
                        e.stopPropagation();
                        removeItem(placed.instanceId);
                      }}
                      title={`${itemDef.name} • Arrastra para organizar • Doble clic para retirar`}
                      initial={
                        isArco ? { opacity: 0 } : { scale: 0, opacity: 0 }
                      }
                      animate={
                        isArco
                          ? { opacity: 1 }
                          : { scale: isDraggingThis ? 1.08 : 1, opacity: 1 }
                      }
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 25,
                      }}
                    >
                      <Styled.ItemRemoveBtn
                        type="button"
                        onPointerDown={(e) => {
                          e.stopPropagation();
                        }}
                        onMouseDown={(e) => {
                          e.stopPropagation();
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          removeItem(placed.instanceId);
                        }}
                        title={`Retirar ${itemDef.name}`}
                      >
                        ✕
                      </Styled.ItemRemoveBtn>

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
                          $height={getItemHeight(itemDef, placed.tier)}
                          $width={getItemWidth(itemDef, placed.tier)}
                          $isArco={isArco}
                        />
                      ) : (
                        <Styled.PlacedItemFallback
                          $size={
                            placed.tier === "cielo"
                              ? 2.1
                              : placed.tier === "tierra"
                              ? 2.4
                              : 2.6
                          }
                        >
                          {itemDef.iconFallback || "✨"}
                        </Styled.PlacedItemFallback>
                      )}

                      <Styled.ItemLabelTag>{itemDef.name}</Styled.ItemLabelTag>
                    </Styled.PlacedItemDraggable>
                  );
                })}
              </AnimatePresence>
            </Styled.AltarContainer>

            <Styled.TipBanner>
              <span>
                <strong>Organiza libremente:</strong> Arrastra cualquier
                elemento a la posición que desees (en cualquier nivel,
                izquierda, derecha o frente). Usa el botón ✕ o haz doble clic
                para retirarlo.
              </span>
            </Styled.TipBanner>
          </Styled.AltarStageWrapper>

          <Styled.SidePanel $isDraggingActive={Boolean(draggedItem)}>
            <Styled.PanelHeader>
              <Styled.PanelTitleWrap>
                <Styled.PanelDot $color="#E91E63" />
                <Styled.PanelTitle>El Banquete</Styled.PanelTitle>
              </Styled.PanelTitleWrap>
              <Styled.CategoryTag>ALMA</Styled.CategoryTag>
            </Styled.PanelHeader>

            <Styled.ItemsGrid>
              {rightItems.map((item) => renderItemCard(item, false))}
            </Styled.ItemsGrid>
          </Styled.SidePanel>
        </Styled.WorkspaceLayout>

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
                En la cosmovisión tradicional, el nivel superior encarna el
                cielo y la memoria divina; el escalón central representa la vida
                terrenal y los banquetes compartidos; y el inferior conecta con
                la tierra y el Mictlán.
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

        <Styled.QuoteFooter>
          <Styled.QuoteText>
            <span>🏵</span>
            <span>
              “A nuestros ancestros: mientras su memoria florezca en
              cempasúchil, jamás partirán del todo.”
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
