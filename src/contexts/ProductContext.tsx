import { DBSchema, openDB } from "idb";
import React, { ReactNode, useContext, useEffect } from "react";
import { ICategory, IProduct } from "../@types";
import { ProductsPopulator } from "../data/ProductsPopulator";

type ProductContextType = {
  getProducts: () => Promise<IProduct[]>;
  getProduct: (id: string) => Promise<IProduct>;
  updateProduct: (product: IProduct) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  addProduct: (product: IProduct) => Promise<void>;
  addCategory: (product: ICategory) => Promise<void>;
};

interface MyDB extends DBSchema {
  products: { value: IProduct; key: string };
  categories: { value: ICategory; key: string };
}

const ProductContext = React.createContext<ProductContextType>(
  {} as ProductContextType
);

export const useProductContext = (): ProductContextType =>
  useContext(ProductContext);

const ProductProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const addCategory = async (category: ICategory): Promise<void> => {
    const db = await openDB<MyDB>("my-db", 1, {
      upgrade(db) {
        db.createObjectStore("categories", { keyPath: "id" });
      },
    });
    await db.add("categories", category);
  };

  const getProducts = async (): Promise<IProduct[]> => {
    const db = await openDB<MyDB>("my-db", 1, {
      upgrade(db) {
        db.createObjectStore("products", { keyPath: "id" });
      },
    });

    const products = await db.getAll("products");
    return products;
  };

  const getProduct = async (id: string): Promise<IProduct> => {
    const db = await openDB<MyDB>("my-db", 1, {
      upgrade(db) {
        db.createObjectStore("products", { keyPath: "id" });
      },
    });

    const product = await db.get("products", id);
    return product || ({} as IProduct);
  };

  const updateProduct = async (product: IProduct): Promise<void> => {
    const db = await openDB<MyDB>("my-db", 1, {
      upgrade(db) {
        db.createObjectStore("products", { keyPath: "id" });
      },
    });

    await db.put("products", product);
  };

  const deleteProduct = async (id: string): Promise<void> => {
    const db = await openDB<MyDB>("my-db", 1, {
      upgrade(db) {
        db.createObjectStore("products", { keyPath: "id" });
      },
    });

    await db.delete("products", id);
  };

  const addProduct = async (product: IProduct): Promise<void> => {
    const db = await openDB<MyDB>("my-db", 1, {
      upgrade(db) {
        db.createObjectStore("products", { keyPath: "id" });
      },
    });

    await db.add("products", product);
  };

  useEffect(() => {
    ProductsPopulator.products.map((product: IProduct) => {
      addProduct(product);
    });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        getProducts,
        getProduct,
        updateProduct,
        deleteProduct,
        addProduct,
        addCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
