"use client";
import styles from "./header.module.scss";
import { useContext } from "react";
import { CartContext } from "@/providers/cart/cart-provider";
import CartAmount from "@/components/cart-amount";
export const Header = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        VF-APPAREL<sup>CO</sup>
      </div>
      <div className={styles.cart}>
        <div className={styles.total}>${cart.total}</div>
        <CartAmount amount={cart?.cartItems?.length ?? 0} />
      </div>
    </nav>
  );
};
