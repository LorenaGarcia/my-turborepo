"use client";
import React from "react";
import { useTheme } from "../../lib/ThemeContext";
import * as Styled from "./theme-toggle.styles";

const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <Styled.Button onClick={toggleTheme} aria-label="Toggle Theme">
      <span className="material-icons">
        {mode === "light" ? "dark_mode" : "light_mode"}
      </span>
    </Styled.Button>
  );
};

export { ThemeToggle };
