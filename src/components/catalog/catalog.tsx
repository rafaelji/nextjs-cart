"use client";
import styles from "./catalog.module.scss";
import Filter from "@/components/catalog/filter";
import Product from "@/components/catalog/product";
import { CatalogContext } from "@/providers/catalog";
import { useContext, useEffect, useRef } from "react";

export const Catalog = () => {
  const { updatedProductList } = useContext(CatalogContext);

  return (
    <section className={styles.catalog}>
      <aside className={styles.filter}>
        <Filter />
      </aside>
      <section className={styles.productList}>
        {updatedProductList.map((product) => (
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
