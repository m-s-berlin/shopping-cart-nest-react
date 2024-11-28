export type Product = {
  id: number;
  name: string;
  color: string;
  price: number;
  category: "Seifenschale" | "Feuerschale";
  image: string
};

export type ProductNew = Omit<Product, "id">;

export type ProductUpdate = Partial<ProductNew>;    // ProductNew damit die ID wegbleibt
