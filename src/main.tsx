import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit demo",
  projectId: "fbe96b8c13b22e85b8136876e27abd48",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

console.log("wagmoconf " + JSON.stringify(wagmiConfig));
console.log("chains ", chains);

root.render(
  // <React.StrictMode>
  //   <WagmiConfig config={wagmiConfig}>
  //     <RainbowKitProvider chains={chains}>
  //       <App />
  //     </RainbowKitProvider>
  //   </WagmiConfig>
  // </React.StrictMode>
  <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}>
      <div style={{ height: "100vh", overflow: "auto" }}>
        <App />
      </div>
    </RainbowKitProvider>
  </WagmiConfig>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
