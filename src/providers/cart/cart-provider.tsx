"use client";
import { createContext, ReactNode } from "react";

export const CartContext = createContext({});

export default function CartProvider({ children }: { children: ReactNode }) {
  return <CartContext.Provider value="dark">{children}</CartContext.Provider>;
}
