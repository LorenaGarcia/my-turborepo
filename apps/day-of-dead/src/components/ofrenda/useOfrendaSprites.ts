"use client";

import { useState, useEffect } from "react";
import { OFRENDA_ITEMS } from "./ofrenda-data";

interface LoadedSprites {
  altarImage: string | null;
  itemImages: Record<string, string>;
  isLoading: boolean;
}

let cachedAltar: string | null = null;

function removeOuterWhiteBackground(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  threshold = 225
) {
  const imgData = ctx.getImageData(0, 0, width, height);
  const data = imgData.data;
  const visited = new Uint8Array(width * height);
  const queue: number[] = [];

  const isBg = (x: number, y: number) => {
    const idx = (y * width + x) * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    return r >= threshold && g >= threshold && b >= threshold;
  };

  for (let x = 0; x < width; x++) {
    if (isBg(x, 0)) queue.push(x, 0);
    if (isBg(x, height - 1)) queue.push(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    if (isBg(0, y)) queue.push(0, y);
    if (isBg(width - 1, y)) queue.push(width - 1, y);
  }

  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];
    const pIdx = cy * width + cx;
    if (visited[pIdx]) continue;
    visited[pIdx] = 1;

    const dIdx = pIdx * 4;
    data[dIdx + 3] = 0;

    const n = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1],
    ];
    for (const [nx, ny] of n) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const npIdx = ny * width + nx;
        if (!visited[npIdx] && isBg(nx, ny)) {
          queue.push(nx, ny);
        }
      }
    }
  }

  ctx.putImageData(imgData, 0, 0);
}

function processAltarImage(img: HTMLImageElement): string {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return img.src;

  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  ctx.drawImage(img, 0, 0);
  removeOuterWhiteBackground(ctx, canvas.width, canvas.height, 225);

  return canvas.toDataURL("image/png");
}

export function useOfrendaSprites(): LoadedSprites {
  const [altarImage, setAltarImage] = useState<string | null>(cachedAltar);
  const [itemImages, setItemImages] = useState<Record<string, string>>(() => {
    const map: Record<string, string> = {};
    for (const item of OFRENDA_ITEMS) {
      map[item.id] = `/ofrenda/elementos/${item.id}.png`;
    }
    return map;
  });
  const [isLoading, setIsLoading] = useState<boolean>(!cachedAltar);

  useEffect(() => {
    let isMounted = true;

    async function loadAltar() {
      if (cachedAltar) {
        setIsLoading(false);
        return;
      }

      try {
        const altarImg = new Image();
        altarImg.crossOrigin = "anonymous";
        await new Promise<void>((resolve) => {
          altarImg.onload = () => resolve();
          altarImg.onerror = () => resolve();
          altarImg.src = "/ofrenda/altar.jpg";
        });

        if (isMounted && altarImg.naturalWidth > 0) {
          const processed = processAltarImage(altarImg);
          cachedAltar = processed;
          setAltarImage(processed);
        }
      } catch (err) {
        console.error("Failed to load altar:", err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }


    const newItems: Record<string, string> = {};
    for (const item of OFRENDA_ITEMS) {
      newItems[item.id] = `/ofrenda/elementos/${item.id}.png`;
    }
    setItemImages(newItems);

    loadAltar();

    return () => {
      isMounted = false;
    };
  }, []);

  return { altarImage, itemImages, isLoading };
}
