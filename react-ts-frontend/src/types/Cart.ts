import { Product } from "./Product";

export type CartItem = Product & { quantity: number };
export type Cart = CartItem[];

// const cart1: Cart = [
//   { category: "Feuerschale", id: 1, name: "Blau", price: 8, quantity: 1 },
//   { category: "Seifenschale", id: 1, name: "Grün", price: 8, quantity: 1 },
// ];
