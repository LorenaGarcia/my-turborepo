"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle2, Download, Sparkles, X } from "lucide-react";
import * as Styled from "./photo-modal.styles";
import {
  getPhotoModalCopy,
  PHOTO_MODAL_TIMINGS,
  type PhotoModalPhase,
} from "./photo-modal.utils";

export interface PhotoModalProps {
  isOpen: boolean;
  photoDataUrl: string | null;
  onDownload: (dataUrl: string, filename: string) => void;
  onClose: () => void;
}

export function PhotoModal({
  isOpen,
  photoDataUrl,
  onDownload,
  onClose,
}: PhotoModalProps) {
  const [phase, setPhase] = useState<PhotoModalPhase>("closed");
  const [hasAutoDownloaded, setHasAutoDownloaded] = useState<boolean>(false);
  const copy = getPhotoModalCopy();

  useEffect(() => {
    if (!isOpen) {
      setPhase("closed");
      setHasAutoDownloaded(false);
      return;
    }

    setPhase("camera");
    setHasAutoDownloaded(false);

    const openTimer = window.setTimeout(() => {
      setPhase("open");
    }, PHOTO_MODAL_TIMINGS.cameraPhaseMs);

    return () => {
      window.clearTimeout(openTimer);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !photoDataUrl || hasAutoDownloaded) return;

    const downloadTimer = window.setTimeout(() => {
      onDownload(photoDataUrl, copy.filename);
      setHasAutoDownloaded(true);
    }, PHOTO_MODAL_TIMINGS.autoDownloadDelayMs);

    return () => {
      window.clearTimeout(downloadTimer);
    };
  }, [isOpen, photoDataUrl, hasAutoDownloaded, onDownload, copy.filename]);

  if (phase === "closed" && !isOpen) {
    return null;
  }

  const handleRequestClose = () => {
    if (phase === "closing") return;
    setPhase("closing");
    window.setTimeout(() => {
      setPhase("closed");
      onClose();
    }, PHOTO_MODAL_TIMINGS.closingPhaseMs);
  };

  const handleDownloadAgain = () => {
    if (!photoDataUrl) return;
    onDownload(photoDataUrl, copy.filename);
    setHasAutoDownloaded(true);
  };

  return (
    <Styled.OverlayBackdrop
      $phase={phase}
      onClick={(e) => {
        if (e.target === e.currentTarget && phase === "open") {
          handleRequestClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label={copy.title}
    >
      {phase === "camera" && <Styled.ShutterFlashOverlay />}

      {phase === "camera" ? (
        <Styled.CameraStageWrapper>
          <Styled.CameraFigureImg
            src="/camera.svg"
            alt="Cámara fotográfica"
            draggable={false}
          />
          <Styled.CapturingPill>{copy.capturingLabel}</Styled.CapturingPill>
        </Styled.CameraStageWrapper>
      ) : (
        <Styled.ModalCard $phase={phase}>
          <Styled.CameraFigureImg
            src="/camera.svg"
            alt="Cámara fotográfica"
            draggable={false}
            $docked
          />

          <Styled.CloseIconButton
            type="button"
            onClick={handleRequestClose}
            aria-label="Cerrar vista previa"
          >
            <X size={16} strokeWidth={2.5} />
          </Styled.CloseIconButton>

          <Styled.ModalHeaderBlock>
            <Styled.ModalTitle>{copy.title}</Styled.ModalTitle>
            <Styled.ModalSubtitle>{copy.subtitle}</Styled.ModalSubtitle>
          </Styled.ModalHeaderBlock>

          {photoDataUrl && (
            <Styled.PhotoPreviewFrame>
              <Styled.PreviewImage
                src={photoDataUrl}
                alt="Vista previa de tu árbol navideño decorado"
              />
            </Styled.PhotoPreviewFrame>
          )}

          <Styled.StatusBadge $completed={hasAutoDownloaded}>
            {hasAutoDownloaded ? (
              <>
                <CheckCircle2 size={15} strokeWidth={2.4} />
                <span>{copy.downloadedBadge}</span>
              </>
            ) : (
              <>
                <Sparkles size={15} strokeWidth={2.4} />
                <span>Preparando descarga...</span>
              </>
            )}
          </Styled.StatusBadge>

          <Styled.ActionsRow>
            <Styled.PrimaryActionButton
              type="button"
              onClick={handleDownloadAgain}
            >
              <Download size={16} strokeWidth={2.3} />
              <span>{copy.downloadAgainLabel}</span>
            </Styled.PrimaryActionButton>

            <Styled.SecondaryActionButton
              type="button"
              onClick={handleRequestClose}
            >
              <span>{copy.closeLabel}</span>
            </Styled.SecondaryActionButton>
          </Styled.ActionsRow>
        </Styled.ModalCard>
      )}
    </Styled.OverlayBackdrop>
  );
}

export default PhotoModal;
