import { DBSchema, openDB } from "idb";
import { IProduct } from "../@types";

interface MyDB extends DBSchema {
  products: { value: IProduct; key: string };
}

export const getProducts = async (): Promise<IProduct[]> => {
  const db = await openDB<MyDB>("my-db", 1, {
    upgrade(db) {
      db.createObjectStore("products", { keyPath: "id" });
    },
  });

  const products = await db.getAll("products");
  return products;
};

export const getProduct = async (id: string): Promise<IProduct> => {
  const db = await openDB<MyDB>("my-db", 1, {
    upgrade(db) {
      db.createObjectStore("products", { keyPath: "id" });
    },
  });

  const product = await db.get("products", id);
  return product || ({} as IProduct);
};

export const updateProduct = async (product: IProduct): Promise<void> => {
  const db = await openDB<MyDB>("my-db", 1, {
    upgrade(db) {
      db.createObjectStore("products", { keyPath: "id" });
    },
  });

  await db.put("products", product);
};

export const deleteProduct = async (id: string): Promise<void> => {
  const db = await openDB<MyDB>("my-db", 1, {
    upgrade(db) {
      db.createObjectStore("products", { keyPath: "id" });
    },
  });

  await db.delete("products", id);
};

export const addProduct = async (product: IProduct): Promise<void> => {
  const db = await openDB<MyDB>("my-db", 1, {
    upgrade(db) {
      db.createObjectStore("products", { keyPath: "id" });
    },
  });

  await db.add("products", product);
};
