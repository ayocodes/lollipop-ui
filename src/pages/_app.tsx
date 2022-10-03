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
import { SettingsProvider } from "../state/settings";
import GlobalStyle from "../styles/global";
import { darkTheme, lightTheme } from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useState("light");

  const modalState = {
    showSettings: false,
    showAdminNFT: false,
    showTerminal: false,
  };

  const sendTezState = [
    {
      amount: 0,
      to_address: "",
    },
  ];

  const SendNFTState = [
    {
      token_id: 1,
      to_address: "",
    },
  ];

  const CreateNFTState = [
    {
      token_id: 1,
      metadata_ipfs: "",
    },
  ];

  const MintNFTState = [
    {
      token_id: 1,
      to_address: "",
    },
  ];

  const CreateAndMintNFTState = [
    {
      token_id: 1,
      metadata_ipfs: "",
      to_address: "",
    },
  ];

  const SettingsState = {
    rpcUrl: "",
    publicKey: "",
    privateKey: "",
    contractAddress: "",
    pgUser: "",
    pgPassword: "",
    pgHost: "",
    pgPort: "",
    pgDatabase: "",
  };

  return (
    <ModalProvider initialState={modalState}>
      <SendTezProvider initialState={sendTezState}>
        <SendNFTProvider initialState={SendNFTState}>
          <CreateNFTProvider initialState={CreateNFTState}>
            <MintNFTProvider initialState={MintNFTState}>
              <CreateAndMintNFTProvider initialState={CreateAndMintNFTState}>
                <SettingsProvider initialState={SettingsState}>
                  <ThemeProvider
                    theme={theme === "dark" ? darkTheme : lightTheme}
                  >
                    <GlobalStyle />
                    <Scaffold>
                      <Component {...pageProps} />
                    </Scaffold>
                  </ThemeProvider>
                </SettingsProvider>
              </CreateAndMintNFTProvider>
            </MintNFTProvider>
          </CreateNFTProvider>
        </SendNFTProvider>
      </SendTezProvider>
    </ModalProvider>
  );
}

export default MyApp;
