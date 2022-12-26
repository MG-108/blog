import React from "react";
import { Layout } from "../components";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import { ContextProvider } from "../context/contextProvider";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
