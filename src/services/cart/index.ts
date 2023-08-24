import { Cart, CartItem } from "./cart-service.types";
import { CartService } from "@/services/cart/cart-service";

const cartService = new CartService();
export default cartService;
export type { Cart, CartItem };
