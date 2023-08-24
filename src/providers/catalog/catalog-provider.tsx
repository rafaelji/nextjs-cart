"use client";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import productService, { Product } from "@/services/product";
import { CatalogProviderProps } from "@/providers/catalog/catalog-provider.types";

export const CatalogContext = createContext<CatalogProviderProps>({
  updatedProductList: [],
  setUpdatedProductList: () => {},
});

export const CatalogProvider = ({ children }: { children: ReactNode }) => {
  const [productList, setProductList] = useState<Product[]>([]);

  const getProducts = useCallback(async () => {
    try {
      const response = await productService.getProducts("price", "desc");
      setProductList(response);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

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
