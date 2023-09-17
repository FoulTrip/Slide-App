"use client"

import React, { createContext, useContext, useState, ReactNode } from "react";

interface screenProps {
  fullScreen: boolean;
  toggleFullScreen: () => void;
}

interface FullScreenProviderProps {
  children: ReactNode;
}

const FullScreenContext = createContext<screenProps | undefined>(undefined);

export function useScreenContext() {
  const context = useContext(FullScreenContext);
  if (!context) {
    throw new Error("useIndexContext must be used within an AppProvider");
  }
  return context;
}

export function FullScreenProvider({ children }: FullScreenProviderProps) {
  const [fullScreen, setFullScreen] = useState(false);

  const handleScreen = () => {
    if (!fullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      // Sale del modo de pantalla completa
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }

    setFullScreen(!fullScreen);
  };

  const contextValue: screenProps = {
    fullScreen,
    toggleFullScreen: handleScreen,
  }

  return (
    <FullScreenContext.Provider value={contextValue}>
        {children}
    </FullScreenContext.Provider>
  )
}
