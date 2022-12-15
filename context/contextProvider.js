import React, { createContext, useContext } from "react";
import { useTheme } from "next-themes";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const { resolvedTheme } = useTheme();

  const setMode = (e) => {
    setTheme(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  return (
    <StateContext.Provider
      value={{
        theme,
        setTheme,
        setMode,
        resolvedTheme,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
