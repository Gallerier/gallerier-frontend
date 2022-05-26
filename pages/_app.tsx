import { Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
import getLibrary from "getLibrary";
import MainApp from "_main";
import "../styles/globals.css";
import "@fontsource/inder"

function NextWeb3App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MainApp Component={Component} pageProps={pageProps} />
    </Web3ReactProvider>
  );
}

export default NextWeb3App;
