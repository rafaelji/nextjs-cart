import styles from "./cart.module.scss";
export const Cart = () => {
  return (
    <aside className={styles.cart}>
      <h2 className={styles.title}>CART 3</h2>
      <section className={styles.items}></section>
      <section className={styles.total}></section>
    </aside>
  );
};
