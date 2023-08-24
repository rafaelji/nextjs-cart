import { Dispatch, SetStateAction } from "react";
import { Product } from "@/services/product";

export interface CatalogProviderProps {
  updatedProductList: Product[];
  setUpdatedProductList: Dispatch<SetStateAction<Product[]>>;
}
