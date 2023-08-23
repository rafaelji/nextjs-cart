import styles from "./product.module.scss";
import { ProductProps } from "@/components/catalog/product/product.types";
export const Product = ({ image, title, price }: ProductProps) => {
  return (
    <article className={styles.product}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <span className={styles.price}>${price}</span>
      <button className={styles.add}>ADD TO CART</button>
      <button className={styles.details}>QUICK VIEW</button>
    </article>
  );
};
