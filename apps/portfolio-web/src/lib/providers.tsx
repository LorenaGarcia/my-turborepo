"use client";
import StyledComponentsRegistry from "./registry";
import { ThemeProvider } from "./ThemeContext";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
