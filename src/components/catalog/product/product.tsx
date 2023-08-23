import styles from "./product.module.scss";
import { ProductProps } from "@/components/catalog/product/product.types";
export const Product = ({ image, title, price }: ProductProps) => {
  return (
    <article className={styles.product}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.information}>
        <h2>{title}</h2>
        <span className={styles.price}>${price}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.add}>ADD TO CART</button>
        <button className={styles.details} disabled>
          QUICK VIEW
        </button>
      </div>
    </article>
  );
};
