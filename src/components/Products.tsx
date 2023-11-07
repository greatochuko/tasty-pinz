import styles from "./Products.module.css";
import Product, { ProductType } from "./Product";
import SectionHeading from "./SectionHeading";
import { fetchProducts } from "../services/productServices";
import { useState, useEffect } from "react";

type ErrorType = {
  error: string;
};

export default function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<(ProductType[] & ErrorType) | null>(
    null
  );

  useEffect(() => {
    async function getProducts() {
      const products = await fetchProducts();
      setProducts(products);
      setLoading(false);
    }
    getProducts();
  }, []);

  async function getProducts() {
    setLoading(true);
    const products = await fetchProducts();
    setProducts(products);
    setLoading(false);
  }

  return (
    <section className={styles.products}>
      <SectionHeading
        title="Popular Meals"
        linkText="See All Meals"
        link="menu"
      />
      {loading ? (
        <div className={styles.loadingIndicator}>Loading...</div>
      ) : products?.error ? (
        <div className={styles.productsError}>
          Unable to Get Products <button onClick={getProducts}>Retry</button>
        </div>
      ) : (
        <div className={styles.productList}>
          {products?.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
