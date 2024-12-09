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

export const ShoppingContext = React.createContext<ShoppingContextObj>(
  {} as ShoppingContextObj
);

type Props = { children: ReactNode };

const ShoppingContextProvider = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart>([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        console.log("data before setProducts: ", data)
        setProducts(data);
      })
      .catch((err) => {
        console.log("Error fetching products: ", err);
      });
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
