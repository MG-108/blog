import React from "react";
import { Header } from "./";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
