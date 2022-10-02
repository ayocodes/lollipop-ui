import type { AppProps } from "next/app";
import { useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import Scaffold from "../components/Scaffold";
import { CreateAndMintNFTProvider } from "../state/createAndMintNFT";
import { CreateNFTProvider } from "../state/createNFT";
import { MintNFTProvider } from "../state/mintNFT";
import { ModalProvider } from "../state/modals";
import { SendNFTProvider } from "../state/sendNFT";
import { SendTezProvider } from "../state/sendTez";
import GlobalStyle from "../styles/global";
import { darkTheme, lightTheme } from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useState("light");

  const modalState = {
    showSettings: false,
    showAdminNFT: false,
  };

  const sendTezState = [
    {
      amount: 0,
      toAddress: "",
    },
  ];

  const SendNFTState = [
    {
      tokenID: 1,
      toAddress: "",
    },
  ];

  const CreateNFTState = [
    {
      tokenID: 1,
      metadata: "",
    },
  ];

  const MintNFTState = [
    {
      tokenID: 1,
      toAddress: "",
    },
  ];

  const CreateAndMintNFTState = [
    {
      tokenID: 1,
      metadata: "",
      toAddress: "",
    },
  ];

  return (
    <ModalProvider initialState={modalState}>
      <SendTezProvider initialState={sendTezState}>
        <SendNFTProvider initialState={SendNFTState}>
          <CreateNFTProvider initialState={CreateNFTState}>
            <MintNFTProvider initialState={MintNFTState}>
              <CreateAndMintNFTProvider initialState={CreateAndMintNFTState}>
                <ThemeProvider
                  theme={theme === "dark" ? darkTheme : lightTheme}
                >
                  <GlobalStyle />
                  <Scaffold>
                    <Component {...pageProps} />
                  </Scaffold>
                </ThemeProvider>
              </CreateAndMintNFTProvider>
            </MintNFTProvider>
          </CreateNFTProvider>
        </SendNFTProvider>
      </SendTezProvider>
    </ModalProvider>
  );
}

export default MyApp;
