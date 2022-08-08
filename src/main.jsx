import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/Router";
import CartContextProvider from "./contexts/CartContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <Router />
    </CartContextProvider>
  </React.StrictMode>
);
