"use client";

import React, { useMemo } from "react";
import * as Styled from "./snowfall.styles";
import { generateSnowflakes } from "./snowfall.utils";

export function Snowfall({ count = 42 }: { count?: number }) {
  const snowflakes = useMemo(() => generateSnowflakes(count), [count]);

  return (
    <Styled.SnowfallLayer aria-hidden="true">
      {snowflakes.map((flake) => (
        <Styled.SnowflakeDot
          key={flake.id}
          $left={flake.left}
          $size={flake.size}
          $duration={flake.duration}
          $delay={flake.delay}
          $opacity={flake.opacity}
        />
      ))}
    </Styled.SnowfallLayer>
  );
}

export default Snowfall;

