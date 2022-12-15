import React, { createContext, useContext, useEffect, useState } from "react";
import { useTheme } from "next-themes";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const { theme, setTheme } = useTheme();

  return (
    <StateContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
