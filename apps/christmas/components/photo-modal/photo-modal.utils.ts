export type PhotoModalPhase = "closed" | "camera" | "open" | "closing";

export interface PhotoModalCopy {
  capturingLabel: string;
  title: string;
  subtitle: string;
  downloadAgainLabel: string;
  closeLabel: string;
  filename: string;
}

export const PHOTO_MODAL_TIMINGS = {
  cameraPhaseMs: 900,
  autoDownloadDelayMs: 1150,
  closingPhaseMs: 320,
} as const;

export const getPhotoModalCopy = (): PhotoModalCopy => ({
  capturingLabel: "Capturando tu árbol...",
  title: "¡Tu Postal Navideña está lista!",
  subtitle:
    "Tu diseño fue capturado y la descarga ha comenzado automáticamente.",
  downloadAgainLabel: "Descargar de nuevo",
  closeLabel: "Seguir decorando",
  filename: "mi-arbol-villa-navidena.png",
});

