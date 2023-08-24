"use client";
import styles from "./page.module.scss";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Catalog from "@/components/catalog";
import Cart from "@/components/cart";
import CatalogProvider from "@/providers/catalog";
import { CartProvider } from "@/providers/cart/cart-provider";

export default function Home() {
  return (
    <CartProvider>
      <header>
        <Header />
        <Hero />
      </header>
      <main className={styles.main}>
        <CatalogProvider>
          <Catalog />
        </CatalogProvider>
        <Cart />
      </main>
    </CartProvider>
  );
}
