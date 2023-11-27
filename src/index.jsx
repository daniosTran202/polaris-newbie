import React from "react";
import ReactDOM from "react-dom/client";
import "@shopify/polaris/build/esm/styles.css";
import { AppProvider } from "@shopify/polaris";
import { BrowserRouter } from "react-router-dom";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProviderContext } from "./context/context";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppProvider i18n={enTranslations}>
      <AppProviderContext>
        <App />
      </AppProviderContext>
    </AppProvider>
  </BrowserRouter>
);
