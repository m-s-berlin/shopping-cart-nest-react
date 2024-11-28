import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ShoppingContextProvider, { ShoppingContext } from "./store/store.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ShoppingContextProvider>
      <App />
    </ShoppingContextProvider>
  </BrowserRouter>
);
