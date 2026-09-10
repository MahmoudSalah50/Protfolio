"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { sound } from "@/lib/soundEngine";

export type AccentTheme = "titanium" | "emerald" | "violet" | "cyan";

interface ThemeContextType {
  accent: AccentTheme;
  setAccent: (accent: AccentTheme) => void;
  audioEnabled: boolean;
  toggleAudio: () => void;
  playHover: () => void;
  playClick: () => void;
  playWhoosh: () => void;
  playSuccess: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [accent, setAccentState] = useState<AccentTheme>("titanium");
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);

  useEffect(() => {
    // Load persisted settings from localStorage
    try {
      const savedAccent = localStorage.getItem("portfolio_accent") as AccentTheme | null;
      if (savedAccent && ["titanium", "emerald", "violet", "cyan"].includes(savedAccent)) {
        setAccentState(savedAccent);
        document.documentElement.setAttribute("data-accent", savedAccent);
      }
      const savedAudio = localStorage.getItem("portfolio_audio");
      if (savedAudio === "true") {
        setAudioEnabled(true);
        sound.setEnabled(true);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const setAccent = (newAccent: AccentTheme) => {
    setAccentState(newAccent);
    document.documentElement.setAttribute("data-accent", newAccent);
    try {
      localStorage.setItem("portfolio_accent", newAccent);
    } catch {
      // Ignore
    }
    sound.playClick();
  };

  const toggleAudio = () => {
    setAudioEnabled((prev) => {
      const next = !prev;
      sound.setEnabled(next);
      try {
        localStorage.setItem("portfolio_audio", String(next));
      } catch {
        // Ignore
      }
      if (next) {
        sound.playSuccess();
      }
      return next;
    });
  };

  const playHover = () => sound.playHover();
  const playClick = () => sound.playClick();
  const playWhoosh = () => sound.playWhoosh();
  const playSuccess = () => sound.playSuccess();

  return (
    <ThemeContext.Provider
      value={{
        accent,
        setAccent,
        audioEnabled,
        toggleAudio,
        playHover,
        playClick,
        playWhoosh,
        playSuccess,
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
