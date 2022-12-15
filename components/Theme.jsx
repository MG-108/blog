import React, { useState } from "react";
import { useStateContext } from "../context/contextProvider";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

const Theme = () => {
  const { currentMode, setMode } = useStateContext();

  const { theme, setTheme } = useTheme();
  return (
    <div>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <MdOutlineLightMode size={30} className="cursor-pointer" />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <MdDarkMode size={30} className="cursor-pointer" />
        </button>
      )}
    </div>

    // <div className="flex flex-col">
    //   {currentMode === "Dark" ? (
    //     <div>
    //       <label htmlFor="light">
    //         <MdOutlineLightMode size={30} className="cursor-pointer" />
    //       </label>
    //       <input
    //         type="button"
    //         id="light"
    //         name="theme"
    //         className="text-orange-500 text-xs"
    //         value="Light"
    //         onClick={setMode}
    //       />
    //     </div>
    //   ) : (
    //     <div>
    //       <label htmlFor="dark">
    //         <MdDarkMode size={30} className="cursor-pointer" />
    //       </label>
    //       <input
    //         type="button"
    //         id="dark"
    //         name="theme"
    //         className="text-orange-500 text-xs"
    //         value="Dark"
    //         onClick={setMode}
    //       />
    //     </div>
    //   )}
    // </div>
  );
};

export default Theme;
