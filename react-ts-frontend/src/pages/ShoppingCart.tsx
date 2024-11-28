import { useContext } from "react";
import { ShoppingContext } from "../store/Store";

export default function ShoppingCart() {
  const { cart, removeFromCart, updateQuantity } = useContext(ShoppingContext);

  return (
    <>
      <h2>Einkaufswagen</h2>
      <ul>
        {cart.map((cartItem) => {
          return (
            <li key={cartItem.id}>
              <div>Name: {cartItem.name}</div>
              <div>Preis: {cartItem.price}</div>
              <div>
                Menge:{" "}
                <input
                  type="number"
                  onChange={(event) =>
                    updateQuantity(cartItem.id, event.target.valueAsNumber)
                  }
                  value={cartItem.quantity}
                />
              </div>
              <button onClick={() => removeFromCart(cartItem.id)}>
                entfernen
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
