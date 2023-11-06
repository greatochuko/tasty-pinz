// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CartProvider from "./context/CartContext.tsx";
import UserProvider from "./context/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <CartProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </CartProvider>
  // </React.StrictMode>
);
