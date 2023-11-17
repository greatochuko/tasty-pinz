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
  }

  const optionList = filteredProducts.map((fp) =>
    fp.category.split("-").join(" ")
  );

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className={styles.menu}>
      <SearchForm />
      <FilterHeader optionList={optionList} onClickFunc={handleFilterBy} />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
