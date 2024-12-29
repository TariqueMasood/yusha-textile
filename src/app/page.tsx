import { AboutUs } from "@/components/about-us/about-us";
import styles from "./page.module.css";
import { Product } from "@/components/product/product";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <AboutUs />
        <Product />
      </main>
    </div>
  );
}
