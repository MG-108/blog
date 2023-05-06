import React from "react";
import { ThemeProvider } from "next-themes";
import { Layout } from "../components";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import { ContextProvider } from "../context/contextProvider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
