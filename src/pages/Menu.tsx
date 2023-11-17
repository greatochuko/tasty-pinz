import { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import styles from "./Menu.module.css";
import { searchProducts } from "../services/productServices";
import ProductGrid from "../components/ProductGrid";
import { useSearchParams } from "react-router-dom";
import { ProductType } from "../components/Product";

function getHighlighterPosition(filterBy: string) {
  switch (filterBy) {
    case "all":
      return {
        left: 0,
        width: 53,
      };
    case "rice":
      return {
        left: 58,
        width: 53,
      };
    case "fast-food":
      return {
        left: 125,
        width: 86,
      };
    case "drinks":
      return {
        left: 228,
        width: 65,
      };
    case "steak":
      return {
        left: 310,
        width: 60,
      };
    case "cake":
      return {
        left: 385,
        width: 53,
      };

    default:
      return {
        left: 0,
        width: 53,
      };
  }
}

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterBy = searchParams.get("filterBy");
  const query = searchParams.get("query");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [highlighterPos, setHighlighterPos] = useState(
    getHighlighterPosition(filterBy as string)
  );

  let filteredProducts = products.map((a) => a);
  if (filterBy && filterBy != "all")
    filteredProducts = products.filter(
      (product) => product.category === filterBy
    );

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const data = await searchProducts(query as string);
      if (data.error) {
        console.log(data.error);

        setError(data.error);
        setLoading(false);
        return;
      }
      setProducts(data);
      setLoading(false);
    }
    getProducts();
  }, [query]);

  function handleFilterBy(filter: string) {
    searchParams.set("filterBy", filter);
    setSearchParams(searchParams);
    setHighlighterPos(getHighlighterPosition(filter));
  }

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className={styles.menu}>
      <SearchForm />
      <ul className={styles.filterHeader}>
        <li onClick={() => handleFilterBy("all")}>All</li>
        <li onClick={() => handleFilterBy("rice")}>Rice</li>
        <li onClick={() => handleFilterBy("fast-food")}>Fast Food</li>
        <li onClick={() => handleFilterBy("drinks")}>Drinks</li>
        <li onClick={() => handleFilterBy("steak")}>Steak</li>
        <li onClick={() => handleFilterBy("cake")}>Cake</li>
        <div
          className={styles.highlighter}
          style={{ left: highlighterPos.left, width: highlighterPos.width }}
        ></div>
      </ul>
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
