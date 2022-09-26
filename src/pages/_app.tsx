import type { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Scaffold from "../components/Scaffold";
import GlobalStyle from "../styles/global";
import { darkTheme, lightTheme } from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useState("light");

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Scaffold>
        <Component {...pageProps} />
      </Scaffold>
    </ThemeProvider>
  );
}

export default MyApp;
