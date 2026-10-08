"use client";

import React, { useEffect, useState } from "react";
import { PetalsContainer, PetalItem } from "./petals.styles";

interface PetalData {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
  blur: number;
  color: string;
}

const cempasuchilGradients = [
  "linear-gradient(135deg, #FF9100 0%, #FF6F00 60%, #E65100 100%)", // Vibrant Cempasúchil Orange
  "linear-gradient(135deg, #FFC400 0%, #FFAB00 60%, #FF8F00 100%)", // Golden Yellow
  "linear-gradient(135deg, #FF5252 0%, #FF6D00 50%, #FF9100 100%)", // Warm Crimson-Orange
  "linear-gradient(135deg, #FFE082 0%, #FFC107 50%, #FF9800 100%)", // Bright Gold
  "linear-gradient(135deg, #FFAB00 0%, #DD2C00 100%)",             // Deep Amber Red
];

export function Petals({ count = 35 }: { count?: number }) {
  const [petals, setPetals] = useState<PetalData[]>([]);

  useEffect(() => {
    const generated: PetalData[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 7 + Math.random() * 9,
      delay: Math.random() * 8,
      size: 14 + Math.random() * 14,
      blur: Math.random() > 0.75 ? 1.5 : 0, // Depth of field effect
      color: cempasuchilGradients[Math.floor(Math.random() * cempasuchilGradients.length)],
    }));
    setPetals(generated);
  }, [count]);

  return (
    <PetalsContainer>
      {petals.map((p) => (
        <PetalItem
          key={p.id}
          $left={p.left}
          $duration={p.duration}
          $delay={p.delay}
          $size={p.size}
          $blur={p.blur}
          $color={p.color}
        />
      ))}
    </PetalsContainer>
  );
}

export default Petals;
