"use client";

import React from "react";
import * as Styled from "./skull.styles";

export type OutfitType =
  | "base"
  | "catrina_elegante"
  | "corona_floral"
  | "vestido_rojo"
  | "sombrero_charro"
  | "traje_blanco"
  | "jorongo_poncho"
  | "vestido_blanco";

interface SkullProps {
  activeOutfit?: OutfitType;
  outfitImageSrc?: string;
}

export function Skull({ activeOutfit = "base", outfitImageSrc }: SkullProps) {
  const showCorona = activeOutfit === "corona_floral";
  const showSombrero = activeOutfit === "sombrero_charro" || activeOutfit === "jorongo_poncho";
  const showVestidoRojo = activeOutfit === "vestido_rojo";
  const showVestidoBlanco = activeOutfit === "vestido_blanco";
  const showTrajeBlanco = activeOutfit === "traje_blanco";
  const showJorongo = activeOutfit === "jorongo_poncho";
  const showImageOutfit =
    activeOutfit === "catrina_elegante" || Boolean(outfitImageSrc);

  return (
    <Styled.SkullWrapper>
      <Styled.GlowSpotlight />
      <Styled.SkeletonSvg
        viewBox="0 0 340 570"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* BASE SKELETON CHARACTER */}
        {/* SKULL HEAD */}
        <g id="skull-head">
          <path
            d="M 170 30 
               C 115 30 110 75 110 110 
               C 110 135 125 152 135 160 
               L 135 178 
               C 135 186 205 186 205 178 
               L 205 160 
               C 215 152 230 135 230 110 
               C 230 75 225 30 170 30 Z"
            fill="#EDE4F4"
            stroke="#10051B"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          <path
            d="M 112 122 C 122 132 135 136 135 152"
            stroke="#10051B"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 228 122 C 218 132 205 136 205 152"
            stroke="#10051B"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Eye Sockets */}
          <ellipse cx="142" cy="104" rx="20" ry="22" fill="#10051B" />
          <ellipse cx="198" cy="104" rx="20" ry="22" fill="#10051B" />
          <ellipse cx="145" cy="100" rx="6" ry="7" fill="#2D1942" />
          <ellipse cx="195" cy="100" rx="6" ry="7" fill="#2D1942" />

          {/* Nose Socket */}
          <path d="M 170 118 L 160 138 L 180 138 Z" fill="#10051B" stroke="#10051B" strokeWidth="2" />

          {/* Mouth / Teeth */}
          <path d="M 142 165 L 198 165" stroke="#10051B" strokeWidth="4" strokeLinecap="round" />
          <line x1="150" y1="156" x2="150" y2="174" stroke="#10051B" strokeWidth="3" />
          <line x1="160" y1="156" x2="160" y2="174" stroke="#10051B" strokeWidth="3" />
          <line x1="170" y1="156" x2="170" y2="174" stroke="#10051B" strokeWidth="3" />
          <line x1="180" y1="156" x2="180" y2="174" stroke="#10051B" strokeWidth="3" />
          <line x1="190" y1="156" x2="190" y2="174" stroke="#10051B" strokeWidth="3" />
        </g>

        {/* NECK & SHOULDERS */}
        <g id="neck-and-shoulders">
          <rect x="160" y="185" width="20" height="14" rx="4" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />
          <rect x="158" y="200" width="24" height="14" rx="4" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />
          <path d="M 158 214 Q 120 208 92 225" stroke="#10051B" strokeWidth="5.5" strokeLinecap="round" fill="none" />
          <path d="M 182 214 Q 220 208 248 225" stroke="#10051B" strokeWidth="5.5" strokeLinecap="round" fill="none" />
        </g>

        {/* RIBCAGE */}
        <g id="ribcage">
          <path d="M 164 216 L 176 216 L 174 290 L 166 290 Z" fill="#EDE4F4" stroke="#10051B" strokeWidth="4.5" />
          <path d="M 164 228 Q 118 222 110 242 Q 118 252 164 242" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />
          <path d="M 164 244 Q 112 238 104 260 Q 114 270 164 258" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />
          <path d="M 164 260 Q 114 256 106 276 Q 116 286 164 272" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />
          <path d="M 176 228 Q 222 222 230 242 Q 222 252 176 242" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />
          <path d="M 176 244 Q 228 238 236 260 Q 226 270 176 258" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />
          <path d="M 176 260 Q 226 256 234 276 Q 224 286 176 272" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />
        </g>

        {/* LUMBAR SPINE & PELVIS */}
        <g id="spine-pelvis">
          <rect x="157" y="294" width="26" height="12" rx="3" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />
          <rect x="156" y="308" width="28" height="12" rx="3" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />
          <rect x="155" y="322" width="30" height="12" rx="3" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />

          <path
            d="M 170 330 
               C 130 325 116 348 132 375 
               C 146 398 158 402 170 404 
               C 182 402 194 398 208 375 
               C 224 348 210 325 170 330 Z"
            fill="#EDE4F4"
            stroke="#10051B"
            strokeWidth="5"
          />
          <ellipse cx="152" cy="365" rx="10" ry="14" fill="#10051B" />
          <ellipse cx="188" cy="365" rx="10" ry="14" fill="#10051B" />
        </g>

        {/* ARMS */}
        <g id="arms">
          {/* Left Arm */}
          <circle cx="86" cy="226" r="10" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />
          <path d="M 86 236 L 68 300" stroke="#10051B" strokeWidth="9" strokeLinecap="round" />
          <path d="M 86 236 L 68 300" stroke="#EDE4F4" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="67" cy="304" r="8" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />
          <path d="M 64 312 L 48 372" stroke="#10051B" strokeWidth="8" strokeLinecap="round" />
          <path d="M 64 312 L 48 372" stroke="#EDE4F4" strokeWidth="3" strokeLinecap="round" />
          <path d="M 46 376 C 36 385 32 396 42 404 C 48 408 58 400 56 388 Z" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />

          {/* Right Arm */}
          <circle cx="254" cy="226" r="10" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />
          <path d="M 254 236 L 272 300" stroke="#10051B" strokeWidth="9" strokeLinecap="round" />
          <path d="M 254 236 L 272 300" stroke="#EDE4F4" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="273" cy="304" r="8" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />
          <path d="M 276 312 L 292 372" stroke="#10051B" strokeWidth="8" strokeLinecap="round" />
          <path d="M 276 312 L 292 372" stroke="#EDE4F4" strokeWidth="3" strokeLinecap="round" />
          <path d="M 294 376 C 304 385 308 396 298 404 C 292 408 282 400 284 388 Z" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />
        </g>

        {/* LEGS */}
        <g id="legs">
          {/* Left Leg */}
          <path d="M 148 400 L 138 472" stroke="#10051B" strokeWidth="11" strokeLinecap="round" />
          <path d="M 148 400 L 138 472" stroke="#EDE4F4" strokeWidth="4.5" strokeLinecap="round" />
          <circle cx="137" cy="478" r="9" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />
          <path d="M 137 487 L 134 544" stroke="#10051B" strokeWidth="10" strokeLinecap="round" />
          <path d="M 137 487 L 134 544" stroke="#EDE4F4" strokeWidth="4" strokeLinecap="round" />
          <path d="M 134 546 L 105 554 C 100 556 102 566 112 566 L 142 560 Z" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />

          {/* Right Leg */}
          <path d="M 192 400 L 202 472" stroke="#10051B" strokeWidth="11" strokeLinecap="round" />
          <path d="M 192 400 L 202 472" stroke="#EDE4F4" strokeWidth="4.5" strokeLinecap="round" />
          <circle cx="203" cy="478" r="9" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />
          <path d="M 203 487 L 206 544" stroke="#10051B" strokeWidth="10" strokeLinecap="round" />
          <path d="M 203 487 L 206 544" stroke="#EDE4F4" strokeWidth="4" strokeLinecap="round" />
          <path d="M 206 546 L 235 554 C 240 556 238 566 228 566 L 198 560 Z" fill="#EDE4F4" stroke="#10051B" strokeWidth="4" />
        </g>


        {/* ========================================================= */}
        {/* OUTFIT OVERLAYS (TRANSPARENT VECTOR - NO BACKGROUND BOX)  */}
        {/* ========================================================= */}

        {/* 1. CORONA FLORAL (FLORAL CROWN) */}
        {showCorona && (
          <g id="outfit-corona-floral">
            {/* Leaves */}
            <path d="M 112 36 Q 95 25 105 10 Q 120 22 115 35 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="2" />
            <path d="M 228 36 Q 245 25 235 10 Q 220 22 225 35 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="2" />

            {/* Left Purple Rose */}
            <circle cx="125" cy="34" r="16" fill="#8E24AA" stroke="#4A148C" strokeWidth="3" />
            <circle cx="125" cy="34" r="10" fill="#AB47BC" />
            <circle cx="123" cy="33" r="5" fill="#E1BEE7" />

            {/* Center Orange Marigold (Cempasúchil) */}
            <circle cx="170" cy="24" r="20" fill="#FF8F00" stroke="#E65100" strokeWidth="3" />
            <circle cx="170" cy="24" r="14" fill="#FFB300" />
            <circle cx="170" cy="24" r="8" fill="#FFE082" />

            {/* Right Hot Pink Rose */}
            <circle cx="215" cy="34" r="16" fill="#D81B60" stroke="#880E4F" strokeWidth="3" />
            <circle cx="215" cy="34" r="10" fill="#EC407A" />
            <circle cx="213" cy="33" r="5" fill="#F8BBD0" />
          </g>
        )}

        {/* 2. SOMBRERO CHARRO */}
        {showSombrero && (
          <g id="outfit-sombrero-charro">
            {/* Sombrero Wide Brim */}
            <path
              d="M 50 48 Q 170 5 290 48 Q 170 70 50 48 Z"
              fill="#D97706"
              stroke="#78350F"
              strokeWidth="4"
            />
            {/* Brim Embroidery Border */}
            <path
              d="M 65 47 Q 170 16 275 47"
              stroke="#FDE047"
              strokeWidth="3.5"
              strokeDasharray="6 4"
              fill="none"
            />
            {/* High Crown Dome */}
            <path
              d="M 125 40 Q 130 -15 170 -15 Q 210 -15 215 40 Z"
              fill="#B45309"
              stroke="#78350F"
              strokeWidth="4"
            />
            {/* Crown Band */}
            <path
              d="M 125 38 Q 170 48 215 38"
              stroke="#15803D"
              strokeWidth="5"
              fill="none"
            />
            <path
              d="M 125 38 Q 170 48 215 38"
              stroke="#FDE047"
              strokeWidth="2"
              strokeDasharray="4 4"
              fill="none"
            />
          </g>
        )}

        {/* 3. VESTIDO FOLKLÓRICO ROJO */}
        {showVestidoRojo && (
          <g id="outfit-vestido-rojo">
            {/* Bodice / Top */}
            <path
              d="M 120 205 
                 L 220 205 
                 L 226 270 
                 L 114 270 Z"
              fill="#D81B60"
              stroke="#880E4F"
              strokeWidth="4"
            />
            {/* Ruffled Collar */}
            <path
              d="M 120 205 Q 170 225 220 205"
              fill="none"
              stroke="#F8BBD0"
              strokeWidth="4"
            />
            {/* Black Belt */}
            <rect x="112" y="270" width="116" height="16" fill="#12051D" stroke="#000" strokeWidth="2" rx="3" />

            {/* Tier 1 Ruffle Skirt */}
            <path
              d="M 112 286 
                 Q 170 305 228 286 
                 L 245 340 
                 Q 170 365 95 340 Z"
              fill="#E91E63"
              stroke="#880E4F"
              strokeWidth="4"
            />
            {/* Tier 2 Ruffle Skirt */}
            <path
              d="M 95 340 
                 Q 170 365 245 340 
                 L 265 400 
                 Q 170 430 75 400 Z"
              fill="#C2185B"
              stroke="#880E4F"
              strokeWidth="4"
            />
            {/* Tier 3 Ruffle Skirt */}
            <path
              d="M 75 400 
                 Q 170 430 265 400 
                 L 282 460 
                 Q 170 495 58 460 Z"
              fill="#AD1457"
              stroke="#880E4F"
              strokeWidth="4"
            />
            {/* Black Trim Hem */}
            <path
              d="M 58 460 Q 170 495 282 460"
              fill="none"
              stroke="#12051D"
              strokeWidth="4"
            />
          </g>
        )}

        {/* 4. VESTIDO FOLKLÓRICO BLANCO */}
        {showVestidoBlanco && (
          <g id="outfit-vestido-blanco">
            {/* Off-Shoulder Ruffled Blouse Top */}
            <path
              d="M 100 205 
                 Q 170 230 240 205 
                 L 230 265 
                 L 110 265 Z"
              fill="#FFFFFF"
              stroke="#10051B"
              strokeWidth="4"
            />
            {/* Red & Green Ribbon Embroidered Trims */}
            <path d="M 102 210 Q 170 234 238 210" stroke="#E53935" strokeWidth="4" fill="none" />
            <path d="M 104 218 Q 170 242 236 218" stroke="#43A047" strokeWidth="4" fill="none" />

            {/* Red Waist Sash */}
            <rect x="108" y="265" width="124" height="16" fill="#D32F2F" stroke="#B71C1C" strokeWidth="2" rx="3" />

            {/* Wide Sweeping Flared Skirt Tier 1 */}
            <path
              d="M 108 281 
                 Q 170 300 232 281 
                 L 270 350 
                 Q 170 385 70 350 Z"
              fill="#FAFAFA"
              stroke="#10051B"
              strokeWidth="4"
            />
            <path d="M 72 346 Q 170 380 268 346" stroke="#43A047" strokeWidth="4" fill="none" />

            {/* Wide Sweeping Flared Skirt Tier 2 */}
            <path
              d="M 70 350 
                 Q 170 385 270 350 
                 L 310 450 
                 Q 170 495 30 450 Z"
              fill="#FFFFFF"
              stroke="#10051B"
              strokeWidth="4"
            />
            <path d="M 32 444 Q 170 488 308 444" stroke="#E53935" strokeWidth="4" fill="none" />
            <path d="M 34 452 Q 170 496 306 452" stroke="#43A047" strokeWidth="4" fill="none" />
          </g>
        )}

        {/* 5. TRAJE BLANCO TRADICIONAL */}
        {showTrajeBlanco && (
          <g id="outfit-traje-blanco">
            {/* White Shirt / Guayabera Top */}
            <path
              d="M 115 205 L 225 205 L 235 320 L 105 320 Z"
              fill="#FFFFFF"
              stroke="#10051B"
              strokeWidth="4"
            />
            {/* Red Neck Tie / Ribbon */}
            <path d="M 160 205 L 170 235 L 180 205" fill="#D32F2F" stroke="#B71C1C" strokeWidth="2" />
            <circle cx="170" cy="208" r="5" fill="#D32F2F" />

            {/* Green Zig-Zag Embroidery */}
            <path
              d="M 120 220 L 130 230 L 140 220 L 150 230 L 160 220 M 180 220 L 190 230 L 200 220 L 210 230 L 220 220"
              stroke="#2E7D32"
              strokeWidth="3.5"
              fill="none"
            />
            <path
              d="M 110 305 L 120 315 L 130 305 L 140 315 L 150 305 M 190 305 L 200 315 L 210 305 L 220 315 L 230 305"
              stroke="#2E7D32"
              strokeWidth="3.5"
              fill="none"
            />

            {/* White Pants */}
            <path
              d="M 112 320 L 164 320 L 160 540 L 118 540 Z"
              fill="#F5F5F5"
              stroke="#10051B"
              strokeWidth="4"
            />
            <path
              d="M 176 320 L 228 320 L 222 540 L 180 540 Z"
              fill="#F5F5F5"
              stroke="#10051B"
              strokeWidth="4"
            />

            {/* Green Zig-Zag Cuff Hem on Pants */}
            <path d="M 118 528 L 128 538 L 138 528 L 148 538 L 158 528" stroke="#2E7D32" strokeWidth="3" fill="none" />
            <path d="M 182 528 L 192 538 L 202 528 L 212 538 L 222 528" stroke="#2E7D32" strokeWidth="3" fill="none" />

            {/* Woven Huaraches / Shoes */}
            <ellipse cx="128" cy="554" rx="16" ry="10" fill="#8D6E63" stroke="#4E342E" strokeWidth="3" />
            <ellipse cx="212" cy="554" rx="16" ry="10" fill="#8D6E63" stroke="#4E342E" strokeWidth="3" />
          </g>
        )}

        {/* 6. JORONGO / PONCHO Y PANTALONES */}
        {showJorongo && (
          <g id="outfit-jorongo">
            {/* Jorongo / Mexican Poncho */}
            <path
              d="M 155 205 
                 L 80 230 
                 L 90 360 
                 L 170 380 
                 L 250 360 
                 L 260 230 
                 L 185 205 Z"
              fill="#E65100"
              stroke="#795548"
              strokeWidth="4"
            />
            {/* V-Neck Opening */}
            <path d="M 155 205 L 170 235 L 185 205 Z" fill="#12051D" stroke="#795548" strokeWidth="3" />

            {/* Horizontal Colorful Pattern Stripes */}
            <rect x="83" y="248" width="174" height="12" fill="#2E7D32" />
            <rect x="85" y="268" width="170" height="14" fill="#FBC02D" />
            <rect x="87" y="290" width="166" height="12" fill="#C2185B" />
            <rect x="89" y="310" width="162" height="14" fill="#0288D1" />
            <rect x="90" y="332" width="160" height="12" fill="#2E7D32" />

            {/* Poncho Fringe Hem */}
            <path
              d="M 90 360 L 170 380 L 250 360"
              stroke="#FFF"
              strokeWidth="5"
              strokeDasharray="4 4"
              fill="none"
            />

            {/* Brown Pants Underneath */}
            <path d="M 125 370 L 164 375 L 158 540 L 122 540 Z" fill="#5D4037" stroke="#3E2723" strokeWidth="4" />
            <path d="M 176 375 L 215 370 L 218 540 L 182 540 Z" fill="#5D4037" stroke="#3E2723" strokeWidth="4" />

            {/* Shoes */}
            <ellipse cx="130" cy="554" rx="16" ry="10" fill="#FBC02D" stroke="#F57F17" strokeWidth="3" />
            <ellipse cx="210" cy="554" rx="16" ry="10" fill="#FBC02D" stroke="#F57F17" strokeWidth="3" />
          </g>
        )}
      </Styled.SkeletonSvg>

      {/* .PNG / .SVG OUTFIT IMAGE OVERLAY */}
      {showImageOutfit && (
        <Styled.OutfitImageOverlay
          src={outfitImageSrc || "/vestido-catrina-negro.png"}
          alt="Vestimenta Catrina"
        />
      )}
    </Styled.SkullWrapper>
  );
}

export default Skull;
