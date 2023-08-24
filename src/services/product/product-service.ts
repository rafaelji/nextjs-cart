import { Product } from "@/services/product/product-service.types";

export class ProductService {
  getProducts = async (param?: string, order?: string): Promise<Product[]> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}product?param=${param}&order=${order}`,
    );

    return response.json();
  };
}
