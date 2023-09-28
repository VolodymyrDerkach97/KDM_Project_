import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "components/App/App";
import "./index.css";

import { KdmProvider } from "hooks/useKdm";
import { ThemeProvider } from "@emotion/react";

export const theme = {
  colors: {
    bgModalColor: "#EBD8FF",
    primaryColor: "#007bff",
    bgHeaderColor: "#1f00ce",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <KdmProvider>
      <App />
    </KdmProvider>
  </ThemeProvider>
);
