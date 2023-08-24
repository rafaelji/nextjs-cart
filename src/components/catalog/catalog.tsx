import styles from "./catalog.module.scss";
import Filter from "@/components/catalog/filter";
import Product from "@/components/catalog/product";
import productService from "@/services/product";

export const Catalog = async () => {
  const productList = await productService.getProducts();

  return (
    <section className={styles.catalog}>
      <aside className={styles.filter}>
        <Filter />
      </aside>
      <section className={styles.productList}>
        {productList.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.images[0].src}
            title={product.title}
            price={product.variants[0].price}
          />
        ))}
      </section>
    </section>
  );
};
