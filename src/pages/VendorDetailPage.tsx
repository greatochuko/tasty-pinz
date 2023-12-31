import styles from "./VendorDetailPage.module.css";
import vendors from "../../data/vendors.json";
import { useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productServices";
import { ProductType } from "../components/Product";
import FilterHeader from "../components/FilterHeader";

export default function VendorDetailPage() {
  const { vendorName } = useParams();
  const vendor = vendors.find((v) => v.url === vendorName);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filterBy, setFilterBy] = useState("all");

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const data = await fetchProducts();
      if (data.error) {
        setError(data.error);
        setLoading(false);
        return;
      }
      setProducts(data);
      setLoading(false);
    }
    getProducts();
  }, []);

  function handleSetFilterBy(filter: string) {
    setFilterBy(filter);
  }

  let filteredProducts = products.filter(
    (product) =>
      product.vendor.name.toLowerCase() === vendor?.name.toLowerCase()
  );

  if (filterBy !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === filterBy
    );
  }

  const optionList = filteredProducts.map((fp) =>
    fp.category.split("-").join(" ")
  );

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>;

  if (vendor)
    return (
      <div className={styles.vendorDetailPage}>
        <div className={styles.banner}>
          <img src={vendor.logo} alt="" />
        </div>
        <FilterHeader optionList={optionList} onClickFunc={handleSetFilterBy} />
        {products.length ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <p>Sorry, We are Currently Out Of Stock</p>
        )}
      </div>
    );
}
