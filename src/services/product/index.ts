import { ProductService } from "@/services/product/product-service";
import { Product } from "./product-service.types";

const productService = new ProductService();
export default productService;
export type { Product };
