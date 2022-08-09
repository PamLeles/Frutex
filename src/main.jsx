import { ThemeProvider } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./assets/theme/theme";
import Router from "./components/Router";
import CartContextProvider from "./contexts/CartContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </CartContextProvider>
);
