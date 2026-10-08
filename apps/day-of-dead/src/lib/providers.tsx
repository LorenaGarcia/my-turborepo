"use client";

import React from "react";
import StyledComponentsRegistry from "./registry";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "./theme";
import { ThemeProvider as AppContextProvider } from "./ThemeContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <StyledThemeProvider theme={theme}>
        <AppContextProvider>{children}</AppContextProvider>
      </StyledThemeProvider>
    </StyledComponentsRegistry>
  );
}
