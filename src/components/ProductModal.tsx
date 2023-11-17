import { Link } from "react-router-dom";
import { useState } from "react";
import { ProductType } from "./Product";
import styles from "./ProductModal.module.css";
import { useCartContext } from "../hooks/useCartContext";

type ProductModalProps = {
  closeModal: () => void;
  product: ProductType;
};

export default function ProductModal({
  closeModal,
  product,
}: ProductModalProps) {
  const {
    cart,
    addProductToCart,
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useCartContext();
  const productInCart = cart.find(
    (cartItem) => cartItem.product._id === product._id
  );
  const [quantity, setQuantity] = useState(productInCart?.quantity || 1);

  function increaseQuantity() {
    increaseProductQuantity(product);
    setQuantity((curr) => curr + 1);
  }

  function decreaseQuantity() {
    if (quantity <= 1) return;
    decreaseProductQuantity(product);
    setQuantity((curr) => curr - 1);
  }

  function addToCart() {
    addProductToCart({ product, quantity });
  }

  function removeFromCart() {
    removeProductFromCart(product._id);
    setQuantity(1);
  }

  return (
    <div className={styles.modalContainer} onClick={closeModal}>
      <div className={styles.productModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.productInfo}>
          <div className={styles.imageContainer}>
            <img src={product.imageUrl} alt={product.name} />
          </div>
          <div className={styles.details}>
            <h3>{product.name}</h3>
            <div className={styles.rating}>
              {Array.from(Array(product.rating).keys()).map((el) => (
                <i key={el} className="fa-solid fa-star"></i>
              ))}
            </div>
            <Link to={`/vendors/${product.vendor._id}`}>
              {product.vendor.name}
            </Link>
            <p className={styles.prepTime}>Prep Time - 20 mins</p>
          </div>
          <p className={styles.price}>${product.price}</p>
        </div>
        <div className={styles.addToCart}>
          <button onClick={decreaseQuantity} disabled={quantity <= 1}>
            -
          </button>
          <p className={styles.quantity}>
            {productInCart?.quantity || quantity}
          </p>
          <button onClick={increaseQuantity}>+</button>
          <button
            className={
              productInCart ? styles.removeFromCartBtn : styles.addToCartBtn
            }
            onClick={productInCart ? removeFromCart : addToCart}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            {productInCart ? "Remove From Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
