import { Link } from "react-router-dom";
import { useState } from "react";
import { Product } from "./Product";
import styles from "./ProductModal.module.css";
import { useCartContext } from "../hooks/useCartContext";

type ProductModalProps = {
  closeModal: () => void;
  product: Product;
};

export default function ProductModal({
  closeModal,
  product,
}: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useCartContext();

  function increaseQuantity() {
    setQuantity((curr) => curr + 1);
  }

  function decreaseQuantity() {
    if (quantity <= 1) return;
    setQuantity((curr) => curr - 1);
  }

  function addToCart() {
    addProductToCart({ product, quantity });
    closeModal();
  }

  return (
    <div className={styles.modalContainer} onClick={closeModal}>
      <div className={styles.productModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.productInfo}>
          <div className={styles.imageContainer}>
            <img src={product.imgUrl} alt={product.name} />
          </div>
          <div className={styles.details}>
            <h3>{product.name}</h3>
            <div className={styles.rating}>
              {Array.from(Array(product.rating).keys()).map((el) => (
                <i key={el} className="fa-solid fa-star"></i>
              ))}
            </div>
            <Link to={`/vendors/${product.vendor.toLowerCase()}`}>
              {product.vendor}
            </Link>
            <p className={styles.prepTime}>Prep Time - 20 mins</p>
          </div>
          <p className={styles.price}>${product.price}</p>
        </div>
        <div className={styles.addToCart}>
          <button onClick={decreaseQuantity} disabled={quantity <= 1}>
            -
          </button>
          <p className={styles.quantity}>{quantity}</p>
          <button onClick={increaseQuantity}>+</button>
          <button className={styles.addToCartBtn} onClick={addToCart}>
            <i className="fa-solid fa-cart-shopping"></i>Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
