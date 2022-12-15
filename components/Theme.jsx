import React from "react";
import { useStateContext } from "../context/contextProvider";

const Theme = () => {
  const { theme, setMode, resolvedTheme } = useStateContext();

  return (
    <div>
      <select
        value={theme}
        onChange={setMode}
        className="bg-gray-300 rounded-2xl no-underline cursor-pointer font-medium text-orange-500 p-1"
        style={{ backgroundColor: resolvedTheme === "dark" ? "#18181b" : "#ffedd5" }}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default Theme;
