"use client";
import { createContext, ReactNode, useState } from "react";
import { Product } from "@/services/product";
import { CatalogProviderProps } from "@/providers/catalog/catalog-provider.types";

export const CatalogContext = createContext<CatalogProviderProps>({
  updatedProductList: [],
  setUpdatedProductList: () => {},
});

export const CatalogProvider = ({ children }: { children: ReactNode }) => {
  const [productList, setProductList] = useState<Product[]>([]);

  return (
    <CatalogContext.Provider
      value={{
        updatedProductList: productList,
        setUpdatedProductList: setProductList,
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};
