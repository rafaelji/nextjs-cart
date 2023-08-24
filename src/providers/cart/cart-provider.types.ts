import { CartItem } from "@/services/cart/cart-service.types";
import { Dispatch, SetStateAction } from "react";
import { Cart } from "@/services/cart";

export interface CartProviderProps {
  cart: Cart;
  setCart: Dispatch<SetStateAction<Cart>>;
}
