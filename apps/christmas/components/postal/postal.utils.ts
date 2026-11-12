import {
  getPostalFilterCss,
  type PlacedPostalSticker,
  type PostalFilterId,
} from "../postal-preview";
import {
  getPostalFontById,
  getPostalFrameById,
  type PostalFrameElementsState,
  type PostalFrameId,
  type PostalStickerItem,
  type PostalTextState,
} from "../postal-studio";

export const DEFAULT_POSTAL_PHOTO = "/postal-family-default.jpg";

export const DEFAULT_FRAME_ELEMENTS: PostalFrameElementsState = {
  showLights: true,
  showGifts: true,
};

export const DEFAULT_POSTAL_TEXT: PostalTextState = {
  enabled: false,
  text: "¡Feliz Navidad!",
  fontId: "great-vibes",
  color: "#ffffff",
  position: "top",
};

export const addStickerToPostalList = (
  currentList: PlacedPostalSticker[],
  sticker: PostalStickerItem
): PlacedPostalSticker[] => {
  const offset = (currentList.length % 5) * 6 - 12;
  const newSticker: PlacedPostalSticker = {
    instanceId: `${sticker.id}-${Date.now()}-${Math.round(Math.random() * 999)}`,
    stickerId: sticker.id,
    src: sticker.src,
    name: sticker.name,
    width: sticker.width,
    height: sticker.height,
    xPercent: Math.max(18, Math.min(82, 50 + offset)),
    yPercent: Math.max(22, Math.min(74, 48 + offset)),
  };
  return [...currentList, newSticker];
};

export const moveStickerInPostalList = (
  currentList: PlacedPostalSticker[],
  instanceId: string,
  xPercent: number,
  yPercent: number
): PlacedPostalSticker[] => {
  return currentList.map((item) =>
    item.instanceId === instanceId ? { ...item, xPercent, yPercent } : item
  );
};

export const removeStickerFromPostalList = (
  currentList: PlacedPostalSticker[],
  instanceId: string
): PlacedPostalSticker[] => {
  return currentList.filter((item) => item.instanceId !== instanceId);
};

export const removeLastStickerByIdFromPostalList = (
  currentList: PlacedPostalSticker[],
  stickerId: string
): PlacedPostalSticker[] => {
  for (let i = currentList.length - 1; i >= 0; i--) {
    if (currentList[i]?.stickerId === stickerId) {
      return [
        ...currentList.slice(0, i),
        ...currentList.slice(i + 1),
      ];
    }
  }
  return currentList;
};

const loadImage = (src: string): Promise<HTMLImageElement | null> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
};

export interface GeneratePostalCanvasOptions {
  photoSrc: string;
  selectedFrameId: PostalFrameId;
  frameElements: PostalFrameElementsState;
  textConfig: PostalTextState;
  filterId: PostalFilterId;
  photoZoom: number;
  photoPan: { x: number; y: number };
  placedStickers: PlacedPostalSticker[];
}

export const generatePostalDataUrl = async (
  options: GeneratePostalCanvasOptions
): Promise<string | null> => {
  const width = 791;
  const height = 1024;
  const borderW = 25;
  const innerX = borderW;
  const innerY = borderW;
  const innerW = width - borderW * 2;
  const innerH = height - borderW * 2;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const filterCss = getPostalFilterCss(options.filterId);
  const frameMeta = getPostalFrameById(options.selectedFrameId);

  // 1. User photo filling the full frame window (no white border)
  const photoX = 0;
  const photoY = 0;
  const photoW = width;
  const photoH = height;

  const userImg = await loadImage(options.photoSrc);
  if (userImg && userImg.naturalWidth > 0) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(photoX, photoY, photoW, photoH);
    ctx.clip();
    if (filterCss !== "none") {
      ctx.filter = filterCss;
    }
    const scale =
      Math.max(photoW / userImg.naturalWidth, photoH / userImg.naturalHeight) *
      options.photoZoom;
    const drawW = userImg.naturalWidth * scale;
    const drawH = userImg.naturalHeight * scale;
    const cx = photoX + photoW / 2 + options.photoPan.x * 1.6;
    const cy = photoY + photoH / 2 + options.photoPan.y * 1.6;
    ctx.drawImage(userImg, cx - drawW / 2, cy - drawH / 2, drawW, drawH);
    ctx.restore();
  }

  // 2. Selected Frame SVG Overlay (with transparent center cutout)
  const frameImg = await loadImage(frameMeta.src);
  if (frameImg) {
    ctx.drawImage(frameImg, 0, 0, width, height);
  }


  if (options.frameElements.showLights) {
    const lightsImg = await loadImage("/postal-elements/frame-lights.svg");
    if (lightsImg) {
      ctx.drawImage(lightsImg, innerX, innerY, innerW, 110);
    }
  }

 

  // 4. Optional single Christmas text
  if (options.textConfig.enabled && options.textConfig.text.trim().length > 0) {
    const fontMeta = getPostalFontById(options.textConfig.fontId);
    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = fontMeta.canvasFont;
    ctx.fillStyle = options.textConfig.color;
    ctx.shadowColor = "rgba(0, 0, 0, 0.78)";
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 3;
    const textY =
      options.textConfig.position === "top"
        ? innerY + innerH * 0.14
        : innerY + innerH * 0.72;
    ctx.fillText(options.textConfig.text, width / 2, textY);
    ctx.restore();
  }

  // 5. Placed Stickers & Elements
  const canvasScale = width / 430;
  for (const sticker of options.placedStickers) {
    const sImg = await loadImage(sticker.src);
    if (!sImg) continue;
    const sx = (sticker.xPercent / 100) * width;
    const sy = (sticker.yPercent / 100) * height;
    const sWidth = sticker.width * canvasScale;
    const sHeight = sticker.height * canvasScale;
    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,0.4)";
    ctx.shadowBlur = 10;
    ctx.drawImage(sImg, sx - sWidth / 2, sy - sHeight / 2, sWidth, sHeight);
    ctx.restore();
  }

  return canvas.toDataURL("image/png");
};

export const triggerPostalDownload = (
  dataUrl: string,
  filename = "mi-postal-villa-navidena.png"
): void => {
  const link = document.createElement("a");
  link.download = filename;
  link.href = dataUrl;
  link.click();
};
