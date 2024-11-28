import React, { ReactNode, useEffect, useState } from "react";
import { Product } from "../types/Product";
import { Cart, CartItem } from "../types/Cart";

type ShoppingContextObj = {
  products: Product[];
  cart: Cart;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  order: (cart: Cart) => void;
};

// Startkontext ohne Implementierungen aber er muss den richtigen Type haben
export const ShoppingContext = React.createContext<ShoppingContextObj>(
  {} as ShoppingContextObj
);

type Props = { children: ReactNode };

// konkrete Implementierung der Context Logik und Daten
const ShoppingContextProvider = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart>([]);

  useEffect(() => {
    setProducts([
      {
        name: "kleine Seifenschale",
        id: 1,
        category: "Seifenschale",
        color: "blau",
        price: 8,
        image:
          "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTlpZDFlbWF1czQ5eGh5aXdhdm95ZHh2Y2p1azMwbnJmN202aXQ0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vj8muG9sIBayobsTcU/giphy.gif",
      },
      {
        name: "große Seifenschale",
        id: 5,
        category: "Seifenschale",
        color: "grün",
        price: 12,
        image:
          "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTlpZDFlbWF1czQ5eGh5aXdhdm95ZHh2Y2p1azMwbnJmN202aXQ0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vj8muG9sIBayobsTcU/giphy.gif",
      },
    ]);
  }, []);

  const addToCart = (product: Product) => {
    const cartItem: CartItem = { ...product, quantity: 1 };

    setCart((prevCart) => {
      return [cartItem, ...prevCart];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== id);
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    });
  };

  const order = (cart: Cart) => {};

  const contextValue: ShoppingContextObj = {
    products,
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    order,
  };

  return (
    <ShoppingContext.Provider value={contextValue}>
      {props.children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContextProvider;
