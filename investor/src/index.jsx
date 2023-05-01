import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Auth0Provider } from "@auth0/auth0-react";

import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-z6650b63ljq86ij3.us.auth0.com"
    clientId="jCxhde5MYNYNnjcXFSkKaC2yIgdIffHY"
    redirectUri={window.location.origin}
  >
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
      <Router>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </Router>
    </ThirdwebProvider>
  </Auth0Provider>
);
