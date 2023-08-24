"use client";
import styles from "./product.module.scss";
import { ProductProps } from "@/components/catalog/product/product.types";
import { useContext } from "react";
import { CartContext } from "@/providers/cart/cart-provider";
import cartService from "@/services/cart";

export const Product = ({ id, image, title, price }: ProductProps) => {
  const { setCart } = useContext(CartContext);

  const addToCart = async () => {
    try {
      const response = await cartService.addItem(`${id}`);
      setCart(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <article className={styles.product}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.information}>
        <h2>{title}</h2>
        <span className={styles.price}>£{price}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.add} onClick={addToCart}>
          ADD TO CART
        </button>
        <button className={styles.details} disabled>
          QUICK VIEW
        </button>
      </div>
    </article>
  );
};
