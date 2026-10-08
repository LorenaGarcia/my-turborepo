"use client";

import React, { createContext, useContext, useState } from "react";

export interface Memorial {
  id: string;
  name: string;
  relationship: string;
  year?: string;
  message: string;
  photoUrl?: string;
  level: "celestial" | "terrestre" | "terrenal";
}

interface ThemeContextType {
  areCandlesLit: boolean;
  toggleCandles: () => void;
  memorials: Memorial[];
  addMemorial: (memorial: Omit<Memorial, "id">) => void;
  removeMemorial: (id: string) => void;
  isMusicPlaying: boolean;
  toggleMusic: () => void;
  customCalaveritas: any[];
  addCustomCalaverita: (calaverita: any) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [areCandlesLit, setAreCandlesLit] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [customCalaveritas, setCustomCalaveritas] = useState<any[]>([]);

  const [memorials, setMemorials] = useState<Memorial[]>([
    {
      id: "1",
      name: "Abuelita Elena",
      relationship: "Abuela",
      year: "1932 - 2021",
      message: "Tu sazón, tu amor y tus oraciones guían siempre nuestros pasos.",
      level: "celestial",
    },
    {
      id: "2",
      name: "Don Mateo",
      relationship: "Padre",
      year: "1954 - 2018",
      message: "Siempre recordaremos tu risa y tu pasión por la música ranchera.",
      level: "terrestre",
    },
    {
      id: "3",
      name: "Firulais",
      relationship: "Fiel Compañero",
      year: "2010 - 2023",
      message: "El Xoloitzcuintle de nuestro corazón que nos acompaña al Mictlán.",
      level: "terrenal",
    },
  ]);

  const toggleCandles = () => setAreCandlesLit((prev) => !prev);
  const toggleMusic = () => setIsMusicPlaying((prev) => !prev);

  const addMemorial = (memorial: Omit<Memorial, "id">) => {
    const newMemorial: Memorial = {
      ...memorial,
      id: Date.now().toString(),
    };
    setMemorials((prev) => [newMemorial, ...prev]);
  };

  const removeMemorial = (id: string) => {
    setMemorials((prev) => prev.filter((m) => m.id !== id));
  };

  const addCustomCalaverita = (calaverita: any) => {
    setCustomCalaveritas((prev) => [...prev, calaverita]);
  };

  return (
    <ThemeContext.Provider
      value={{
        areCandlesLit,
        toggleCandles,
        memorials,
        addMemorial,
        removeMemorial,
        isMusicPlaying,
        toggleMusic,
        customCalaveritas,
        addCustomCalaverita,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}
