import { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import styles from "./Menu.module.css";
import { searchProducts } from "../services/productServices";
import ProductGrid from "../components/ProductGrid";
import { useSearchParams } from "react-router-dom";
import { ProductType } from "../components/Product";
import FilterHeader from "../components/FilterHeader";

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterBy = searchParams.get("filterBy");
  const query = searchParams.get("query");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  let filteredProducts = [...products];
  if (filterBy && filterBy != "all")
    filteredProducts = products.filter(
      (product) => product.category === filterBy
    );

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const data = await searchProducts(query as string);
      if (data.error) {
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
  }

  const filterList = ["rice", "fast food", "drinks", "steak", "cake"];

  return (
    <div className={styles.menu}>
      <SearchForm />
      <FilterHeader optionList={filterList} onClickFunc={handleFilterBy} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : filteredProducts.length ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <p>There are currently no products that match this filter</p>
      )}
    </div>
  );
}
