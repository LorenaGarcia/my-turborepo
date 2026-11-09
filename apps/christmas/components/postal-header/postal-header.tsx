"use client";

import React, { useRef } from "react";
import { Camera, Download, RotateCcw, Share2, Star } from "lucide-react";
import * as Styled from "./postal-header.styles";
import { getPostalHeaderCopy } from "./postal-header.utils";

export interface PostalHeaderProps {
  onUploadPhoto: (file: File) => void;
  onReset: () => void;
  onShare: () => void;
  onDownload: () => void;
}

export function PostalHeader({
  onUploadPhoto,
  onReset,
  onShare,
  onDownload,
}: PostalHeaderProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const copy = getPostalHeaderCopy();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onUploadPhoto(file);
      event.target.value = "";
    }
  };

  return (
    <Styled.BannerCard>
      <Styled.LeftInfoColumn>
        <Styled.BannerTitle>{copy.titleMain} </Styled.BannerTitle>
        <Styled.BannerTitleAccent>{copy.titleAccent}</Styled.BannerTitleAccent>
      </Styled.LeftInfoColumn>

      <Styled.ActionsColumn>
        <Styled.HiddenFileInput
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />

        <Styled.TopButtonsRow>
          <Styled.SecondaryActionBtn
            type="button"
            onClick={() => fileInputRef.current?.click()}
          >
            <Camera size={15} strokeWidth={2.2} color="#4ade80" />
            <span>{copy.uploadLabel}</span>
          </Styled.SecondaryActionBtn>

          <Styled.SecondaryActionBtn type="button" onClick={onReset}>
            <RotateCcw size={15} strokeWidth={2.2} />
            <span>{copy.resetLabel}</span>
          </Styled.SecondaryActionBtn>

          <Styled.SecondaryActionBtn type="button" onClick={onShare}>
            <Share2 size={15} strokeWidth={2.2} />
            <span>{copy.shareLabel}</span>
          </Styled.SecondaryActionBtn>
        </Styled.TopButtonsRow>

        <Styled.PrimaryDownloadBtn type="button" onClick={onDownload}>
          <Download size={16} strokeWidth={2.4} />
          <span>{copy.downloadLabel}</span>
        </Styled.PrimaryDownloadBtn>
      </Styled.ActionsColumn>
    </Styled.BannerCard>
  );
}

export default PostalHeader;
