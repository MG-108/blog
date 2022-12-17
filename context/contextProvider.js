import React, { createContext, useContext, useState } from "react";
import { useTheme } from "next-themes";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const { resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

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
        open,
        setOpen,
        categories,
        setCategories,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
