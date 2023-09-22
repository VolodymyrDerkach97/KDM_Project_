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
  },
};
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <KdmProvider>
      <App />
    </KdmProvider>
  </ThemeProvider>

  // </React.StrictMode>
);
