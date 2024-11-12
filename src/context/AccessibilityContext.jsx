import React, { createContext, useState, useContext } from 'react';

// Contexto de Acessibilidade
const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16);
  const [isHighContrast, setIsHighContrast] = useState(false);

  const increaseFontSize = () => setFontSize((prev) => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize((prev) => Math.max(prev - 2, 12));
  const toggleHighContrast = () => setIsHighContrast((prev) => !prev);

  return (
    <AccessibilityContext.Provider
      value={{ fontSize, increaseFontSize, decreaseFontSize, isHighContrast, toggleHighContrast }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

// Custom hook para acessar o contexto de acessibilidade
export const useAccessibility = () => useContext(AccessibilityContext);
