"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

// Define the shape of the context
interface ResponsiveContextType {
  isMobile: boolean;
}

interface ResponsiveProviderProps {
  children: ReactNode;
}

// Create a context
const ResponsiveContext = createContext<ResponsiveContextType | undefined>(
  undefined,
);

// Context provider component
const ResponsiveProvider: React.FC<ResponsiveProviderProps> = ({
  children,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Wrap isMobile in an object to match ResponsiveContextType
  return (
    <ResponsiveContext.Provider value={{ isMobile }}>
      {children}
    </ResponsiveContext.Provider>
  );
};

const useResponsive = () => {
  const context = useContext(ResponsiveContext);
  if (context === undefined) {
    throw new Error("useResponsive must be used within a ResponsiveProvider");
  }
  return context;
};

export { ResponsiveProvider, useResponsive };
