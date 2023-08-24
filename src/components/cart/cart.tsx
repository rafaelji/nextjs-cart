"use client";
import styles from "./cart.module.scss";
import Item from "@/components/cart/item";
import Total from "@/components/cart/total";
import { useContext } from "react";
import { CartContext } from "@/providers/cart/cart-provider";
import CartAmount from "@/components/cart-amount";
export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <aside className={styles.cart}>
      <section className={styles.titleContainer}>
        <h2 className={styles.title}>CART</h2>
        <CartAmount amount={cart?.cartItems?.length} />
      </section>
      <section className={styles.items}>
        {cart?.cartItems?.map((item) => (
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
