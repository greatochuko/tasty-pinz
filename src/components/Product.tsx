import { Link } from "react-router-dom";
import styles from "./Product.module.css";

type Product = {
  name: string;
  price: number;
  imgUrl: string;
  rating: number;
  vendor: string;
};

type ProductProps = {
  product: Product;
};

export default function Product({ product }: ProductProps) {
  return (
    <div className={styles.product}>
      <img src={product.imgUrl} alt={product.name} />
      <div className={styles.details}>
        <h3>
          {product.name}
          <span>
            <i className="fa-solid fa-star"></i>
            {product.rating}
          </span>
        </h3>
        <Link to={`/vendors/${product.vendor.toLowerCase()}`}>
          {product.vendor}
        </Link>
        <h3>${product.price}</h3>
        <button>+</button>
      </div>
    </div>
  );
}
