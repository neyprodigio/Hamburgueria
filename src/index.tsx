import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/cartContext";
import { UserProvider } from "./context/userContext";
import GlobalStyle from "./styles/global";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <CartProvider>
                    <GlobalStyle />
                    <App />
                </CartProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>
);
