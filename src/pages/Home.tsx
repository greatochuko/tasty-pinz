import Hero from "../components/Hero";
import Products from "../components/Products";
import SearchForm from "../components/SearchForm";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <SearchForm />
      <Products />
    </main>
  );
}
