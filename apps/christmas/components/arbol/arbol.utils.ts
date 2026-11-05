import { getOrnamentById, getOrnamentSvgPath } from "../ornament-trunk";
import { getTreeStringLights, type PlacedOrnament } from "../tree";
import { type LightsMode } from "../arbol-header";

export interface VillancicoInfo {
  title: string;
  playLabel: string;
  pauseLabel: string;
}

export const addOrnamentToTreeList = (
  currentList: PlacedOrnament[],
  ornamentId: string,
  xPercent: number,
  yPercent: number
): PlacedOrnament[] => {
  const item = getOrnamentById(ornamentId);
  if (!item) return currentList;

  const newEntry: PlacedOrnament = {
    instanceId: `${ornamentId}-${Date.now()}-${Math.round(Math.random() * 1000)}`,
    ornamentId,
    xPercent: item.isTopper ? 50 : xPercent,
    yPercent: item.isTopper ? 7 : yPercent,
  };

  if (item.isTopper) {
    const withoutOldTopper = currentList.filter((placed) => {
      const existing = getOrnamentById(placed.ornamentId);
      return !existing?.isTopper;
    });
    return [...withoutOldTopper, newEntry];
  }

  return [...currentList, newEntry];
};

export const moveOrnamentInTreeList = (
  currentList: PlacedOrnament[],
  instanceId: string,
  xPercent: number,
  yPercent: number
): PlacedOrnament[] => {
  return currentList.map((item) =>
    item.instanceId === instanceId ? { ...item, xPercent, yPercent } : item
  );
};

export const removeOrnamentFromTreeList = (
  currentList: PlacedOrnament[],
  instanceId: string
): PlacedOrnament[] => {
  return currentList.filter((item) => item.instanceId !== instanceId);
};

export const generateDecoratedTreePhotoDataUrl = async (
  placedOrnaments: PlacedOrnament[],
  lightsMode: LightsMode,
  snowActive: boolean = false
): Promise<string | null> => {
  const width = 800;
  const height = 1000;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  // Radial warm background
  const grad = ctx.createRadialGradient(
    width / 2,
    height * 0.48,
    50,
    width / 2,
    height * 0.48,
    width * 0.7
  );
  grad.addColorStop(0, "#ffffff");
  grad.addColorStop(0.55, "#ffffff");
  grad.addColorStop(0.85, "#fce7d6");
  grad.addColorStop(1, "#f7d6be");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Draw pine tree image
  const treeImg = new Image();
  treeImg.crossOrigin = "anonymous";
  await new Promise<void>((resolve) => {
    treeImg.onload = () => resolve();
    treeImg.onerror = () => resolve();
    treeImg.src = snowActive ? "/pine-tree-snow.png" : "/pine-tree.png";
  });

  if (treeImg.naturalWidth > 0) {
    const targetW = width * 0.84;
    const targetH = height * 0.88;
    const scale = Math.min(
      targetW / treeImg.naturalWidth,
      targetH / treeImg.naturalHeight
    );
    const drawW = treeImg.naturalWidth * scale;
    const drawH = treeImg.naturalHeight * scale;
    ctx.drawImage(
      treeImg,
      (width - drawW) / 2,
      (height - drawH) / 2,
      drawW,
      drawH
    );
  }

  // Draw string lights if active
  if (lightsMode !== "apagadas") {
    const lights = getTreeStringLights();
    for (const light of lights) {
      const lx = (light.x / 100) * width;
      const ly = (light.y / 100) * height;
      ctx.save();
      ctx.beginPath();
      ctx.arc(lx, ly, 7, 0, Math.PI * 2);
      ctx.fillStyle = light.color;
      ctx.shadowColor = light.color;
      ctx.shadowBlur = 16;
      ctx.fill();
      ctx.restore();
    }
  }

  // Draw placed ornaments from their SVG files
  for (const placed of placedOrnaments) {
    const item = getOrnamentById(placed.ornamentId);
    if (!item) continue;
    const ox = (placed.xPercent / 100) * width;
    const oy = (placed.yPercent / 100) * height;
    const drawSize = item.isTopper ? 80 : 62;

    const ornImg = new Image();
    ornImg.crossOrigin = "anonymous";
    await new Promise<void>((resolve) => {
      ornImg.onload = () => resolve();
      ornImg.onerror = () => resolve();
      ornImg.src = getOrnamentSvgPath(item.variant);
    });

    if (ornImg.naturalWidth > 0) {
      ctx.save();
      ctx.shadowColor = "rgba(0,0,0,0.32)";
      ctx.shadowBlur = 8;
      ctx.drawImage(
        ornImg,
        ox - drawSize / 2,
        oy - drawSize / 2,
        drawSize,
        drawSize
      );
      ctx.restore();
    }
  }

  return canvas.toDataURL("image/png");
};

export const triggerPhotoDownload = (
  dataUrl: string,
  filename = "mi-arbol-villa-navidena.png"
): void => {
  const link = document.createElement("a");
  link.download = filename;
  link.href = dataUrl;
  link.click();
};

export const downloadDecoratedTreePhoto = async (
  placedOrnaments: PlacedOrnament[],
  lightsMode: LightsMode,
  snowActive: boolean = false
): Promise<void> => {
  const dataUrl = await generateDecoratedTreePhotoDataUrl(
    placedOrnaments,
    lightsMode,
    snowActive
  );
  if (dataUrl) {
    triggerPhotoDownload(dataUrl);
  }
};
