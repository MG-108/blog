import React from "react";
import { Header } from "./";
import { useStateContext } from "../context/contextProvider";

const Layout = ({ children }) => {
  const { currentMode } = useStateContext();
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <Header />
      {children}

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
