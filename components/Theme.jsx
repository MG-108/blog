import React, { useEffect } from "react";
import { useStateContext } from "../context/contextProvider";

const Theme = () => {
  const { theme, setMode, resolvedTheme } = useStateContext();

  return (
    <div>
      <select
        value={theme}
        onChange={setMode}
        className={`md:rounded-2xl no-underline cursor-pointer font-medium text-orange-500 p-1`}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default Theme;
