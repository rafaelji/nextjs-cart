import styles from "./item.module.scss";
import { ItemProps } from "@/components/cart/item/item.types";
import { useContext } from "react";
import { CartContext } from "@/providers/cart/cart-provider";
import cartService from "@/services/cart";
export const Item = ({ id, title, description, price }: ItemProps) => {
  const { setCart } = useContext(CartContext);

  const removeItem = async () => {
    const response = await cartService.removeItem(id);
    setCart(response);
  };

  return (
    <article className={styles.item}>
      <div className={styles.titleAndPrice}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>£{price}</p>
      </div>
      <div className={styles.descriptionAndAction}>
        <p className={styles.description}>{description}</p>
        <button className={styles.action} onClick={removeItem}>
          REMOVE
        </button>
      </div>
    </article>
  );
};
