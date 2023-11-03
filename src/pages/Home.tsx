import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Reviews from "../components/Reviews";
import SearchForm from "../components/SearchForm";
import SpecialDishes from "../components/SpecialDishes";
import Vendors from "../components/Vendors";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <SearchForm />
      <Products />
      <Categories />
      <SpecialDishes />
      <Vendors />
      <Reviews />
    </main>
  );
}
