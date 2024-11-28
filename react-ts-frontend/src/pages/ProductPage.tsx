import { useContext, useMemo, useState } from "react";
import { ShoppingContext } from "../store/Store";

export default function ProductPage() {
  const { products, addToCart } = useContext(ShoppingContext);

  const [search, setSearch] = useState("");

  const searchResultProducts = useMemo(() => {
    if (!search) return products;
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      <h2>Produkt Liste</h2>
      <input
        placeholder="suchen..."
        onChange={(event) => setSearch(event.target.value)}
      />
      <ul>
        {searchResultProducts.map((product) => {
          return (
            <li key={product.id}>
              Name: {product.name}
              <button onClick={() => addToCart(product)}>in den Korb</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
