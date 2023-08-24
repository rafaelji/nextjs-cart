"use client";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { CartProviderProps } from "@/providers/cart/cart-provider.types";
import cartService, { Cart } from "@/services/cart";

export const CartContext = createContext<CartProviderProps>({
  cart: { cartItems: [], total: 0 },
  setCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart>({ cartItems: [], total: 0 });

  const getCart = useCallback(async () => {
    try {
      const response = await cartService.getCart();
      setCart(response);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getCart();
  }, [getCart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
