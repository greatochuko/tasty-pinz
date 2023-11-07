import {
  LinkHTMLAttributes,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import SearchForm from "../components/SearchForm";
import styles from "./Menu.module.css";
import { fetchProducts } from "../services/productServices";
import ProductGrid from "../components/ProductGrid";

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [highlighterPos, setHighlighterPos] = useState({ left: 0, width: 53 });

  useEffect(() => {
    async function getProducts() {
      const data = await fetchProducts();
      setProducts(data);
    }
    getProducts();
  }, []);
  return (
    <main className={styles.menu}>
      <SearchForm />
      <ul className={styles.filterHeader}>
        <li>All</li>
        <li>Food</li>
        <li>Rice</li>
        <li> Drinks</li>
        <div
          className={styles.highlighter}
          style={{ left: highlighterPos.left, width: highlighterPos.width }}
        ></div>
      </ul>
      <ProductGrid products={products} />
    </main>
  );
}
