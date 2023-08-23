import styles from "./page.module.css";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <header>
        <Header />
        <Hero />
      </header>
      <main className={styles.main}></main>
    </>
  );
}
