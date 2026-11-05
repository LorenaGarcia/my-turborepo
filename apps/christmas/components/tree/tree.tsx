"use client";

import React, { useRef, useState } from "react";
import { Hand } from "lucide-react";
import { getOrnamentById, OrnamentGraphic } from "../ornament-trunk";
import * as Styled from "./tree.styles";
import {
  getRelativeCoordinates,
  getTreeGarlandCurves,
  getTreeStringLights,
  type PlacedOrnament,
} from "./tree.utils";

interface TreeProps {
  placedOrnaments: PlacedOrnament[];
  selectedOrnamentId: string | null;
  lightsMode?: "titilantes" | "fijas" | "apagadas";
  snowActive?: boolean;
  onPlaceAtPosition: (
    xPercent: number,
    yPercent: number,
    ornamentId?: string
  ) => void;
  onMoveOrnament: (
    instanceId: string,
    xPercent: number,
    yPercent: number
  ) => void;
  onRemoveOrnament: (instanceId: string) => void;
}

export function Tree({
  placedOrnaments,
  selectedOrnamentId,
  lightsMode = "titilantes",
  snowActive = false,
  onPlaceAtPosition,
  onMoveOrnament,
  onRemoveOrnament,
}: TreeProps) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [draggingInstanceId, setDraggingInstanceId] = useState<string | null>(
    null
  );

  const garlandCurves = getTreeGarlandCurves();
  const stringLights = getTreeStringLights();

  const handleStageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!selectedOrnamentId || draggingInstanceId || !stageRef.current) return;
    if (event.target !== event.currentTarget) return;

    const rect = stageRef.current.getBoundingClientRect();
    const { xPercent, yPercent } = getRelativeCoordinates(
      event.clientX,
      event.clientY,
      rect
    );
    onPlaceAtPosition(xPercent, yPercent);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!stageRef.current) return;

    const droppedOrnamentId = event.dataTransfer.getData("text/plain");
    const rect = stageRef.current.getBoundingClientRect();
    const { xPercent, yPercent } = getRelativeCoordinates(
      event.clientX,
      event.clientY,
      rect
    );
    onPlaceAtPosition(
      xPercent,
      yPercent,
      droppedOrnamentId || selectedOrnamentId || undefined
    );
  };

  const handlePointerDownOrnament = (
    event: React.PointerEvent<HTMLButtonElement>,
    instanceId: string
  ) => {
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    setDraggingInstanceId(instanceId);
  };

  const handlePointerMoveOrnament = (
    event: React.PointerEvent<HTMLButtonElement>,
    instanceId: string
  ) => {
    if (draggingInstanceId !== instanceId || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const { xPercent, yPercent } = getRelativeCoordinates(
      event.clientX,
      event.clientY,
      rect
    );
    onMoveOrnament(instanceId, xPercent, yPercent);
  };

  const handlePointerUpOrnament = (
    event: React.PointerEvent<HTMLButtonElement>,
    instanceId: string
  ) => {
    if (draggingInstanceId === instanceId) {
      event.currentTarget.releasePointerCapture(event.pointerId);
      setDraggingInstanceId(null);
    }
  };

  return (
    <Styled.CanvasCard $hasSelection={Boolean(selectedOrnamentId)}>
      <Styled.TreeInteractiveStage
        ref={stageRef}
        onClick={handleStageClick}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <Styled.PineTreeImg
          src={snowActive ? "/pine-tree-snow.png" : "/pine-tree.png"}
          alt="Árbol de Navidad artesanal"
          draggable={false}
        />

        <Styled.GarlandSvgOverlay
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {garlandCurves.map((curve) => (
            <path
              key={curve.id}
              d={curve.d}
              fill="none"
              stroke="rgba(234, 179, 8, 0.55)"
              strokeWidth="0.45"
              strokeDasharray="1.2 1.2"
            />
          ))}
        </Styled.GarlandSvgOverlay>

        {stringLights.map((light) => (
          <Styled.StringLightBulb
            key={light.id}
            $x={light.x}
            $y={light.y}
            $color={light.color}
            $glow={light.glow}
            $delay={light.delay}
            $mode={lightsMode}
          />
        ))}

        {placedOrnaments.map((placed) => {
          const item = getOrnamentById(placed.ornamentId);
          if (!item) return null;

          return (
            <Styled.PlacedOrnamentButton
              key={placed.instanceId}
              type="button"
              $x={placed.xPercent}
              $y={placed.yPercent}
              $isTopper={item.isTopper}
              $isDragging={draggingInstanceId === placed.instanceId}
              onPointerDown={(e) =>
                handlePointerDownOrnament(e, placed.instanceId)
              }
              onPointerMove={(e) =>
                handlePointerMoveOrnament(e, placed.instanceId)
              }
              onPointerUp={(e) => handlePointerUpOrnament(e, placed.instanceId)}
              onDoubleClick={(e) => {
                e.stopPropagation();
                onRemoveOrnament(placed.instanceId);
              }}
              title={`${item.name} (Doble clic para quitar)`}
            >
              <OrnamentGraphic
                variant={item.variant}
                size={item.isTopper ? 58 : 44}
              />
            </Styled.PlacedOrnamentButton>
          );
        })}
      </Styled.TreeInteractiveStage>

      <Styled.CanvasBottomBar>
        <Styled.HintPill>
          <Styled.HintIconSpan>
            <Hand size={14} strokeWidth={2.2} />
          </Styled.HintIconSpan>
          <span>
            Haz clic o arrastra a cualquier rama • Doble clic para quitar
          </span>
        </Styled.HintPill>
      </Styled.CanvasBottomBar>
    </Styled.CanvasCard>
  );
}

export default Tree;
