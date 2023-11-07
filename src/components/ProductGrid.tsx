import Product, { ProductType } from "./Product";
import styles from "./ProductGrid.module.css";

export default function ProductGrid({ products }: { products: ProductType[] }) {
  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
}
