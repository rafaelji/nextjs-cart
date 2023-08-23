import styles from "./catalog.module.scss";
import Filter from "@/components/catalog/filter";
import Product from "@/components/catalog/product";
export const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <aside className={styles.filter}>
        <Filter />
      </aside>
      <section className={styles.productList}></section>
    </section>
  );
};
