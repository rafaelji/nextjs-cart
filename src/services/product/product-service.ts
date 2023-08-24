import { Product } from "@/services/product/product-service.types";

export class ProductService {
  getProducts = async (param?: string, order?: string): Promise<Product[]> => {
    const response = await fetch(
      `http://localhost:3000/product?param=${param}&order=${order}`,
    );

    return response.json();
  };
}
