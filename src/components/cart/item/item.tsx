import styles from "./item.module.scss";
import { ItemProps } from "@/components/cart/item/item.types";
export const Item = ({ id, title, description, price }: ItemProps) => {
  return (
    <article className={styles.item}>
      <div className={styles.titleAndPrice}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>${price}</p>
      </div>
      <div className={styles.descriptionAndAction}>
        <p className={styles.description}>{description}</p>
        <button className={styles.action}>REMOVE</button>
      </div>
    </article>
  );
};
