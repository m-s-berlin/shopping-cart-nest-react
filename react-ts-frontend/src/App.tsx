import { useState } from "react";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>Keramik Shop</h1>
        <nav>
          <NavLink to={"/"}>Produkte</NavLink>
          <NavLink to={"/cart"}>Einkaufswagen</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ProductPage />}></Route>
          <Route path="/cart" element={<ShoppingCart />}></Route>
        </Routes>
      </main>
      <footer>&copy; Keramik Shop 2024</footer>
    </>
  );
}

export default App;
