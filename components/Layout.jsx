import React from "react";
import { Header, Footer } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
