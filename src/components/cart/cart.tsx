"use client";
import styles from "./cart.module.scss";
import Item from "@/components/cart/item";
import Total from "@/components/cart/total";
import { useContext } from "react";
import { CartContext } from "@/providers/cart/cart-provider";
export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <aside className={styles.cart}>
      <h2 className={styles.title}>CART {cart.cartItems.length}</h2>
      <section className={styles.items}>
        {cart.cartItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            description={`${item.option1 ?? ""}${
              item.option2 ? `/ ${item.option2}` : ""
            }`}
            price={item.price}
          />
        ))}
      </section>
      <Total value={cart.total} />
    </aside>
  );
};
