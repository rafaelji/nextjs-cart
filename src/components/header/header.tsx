import styles from "./header.module.scss";
export const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        VF-APPAREL<sup>CO</sup>
      </div>
      <div className={styles.cart}>
        <div className={styles.total}>$105</div>
        <div className={styles.amount}>3</div>
      </div>
    </nav>
  );
};
