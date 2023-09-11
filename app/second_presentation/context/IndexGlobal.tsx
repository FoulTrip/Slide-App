"use client"

import React, { createContext, useContext, useState } from "react";

interface globalIndexProps {
    index: number;
    setIndex: (newIndex: number) => void;
  }
  
  const IndexContext = createContext<globalIndexProps | undefined>(undefined);
  
  export function useIndexContext() {
    const context = useContext(IndexContext);
    if (!context) {
      throw new Error("useIndexContext must be used within an AppProvider");
    }
    return context;
  }
  
  export function CountIndexProvider({children}: {children: React.ReactNode;}) {
    const [index, setIndex] = useState<number>(0);
  
    const handleSetIndex = (newIndex: number) => {
      setIndex(newIndex);
    };
  
    const contextValue: globalIndexProps = {
      index,
      setIndex: handleSetIndex,
    };
  
    return (
      <IndexContext.Provider value={contextValue}>{children}</IndexContext.Provider>
    )
  }
  