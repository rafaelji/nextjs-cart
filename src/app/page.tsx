import styles from "./page.module.css";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Catalog from "@/components/catalog";
import Cart from "@/components/cart";

export default function Home() {
  return (
    <>
      <header>
        <Header />
        <Hero />
      </header>
      <main className={styles.main}>
        <Catalog />
        <Cart />
      </main>
    </>
  );
}
