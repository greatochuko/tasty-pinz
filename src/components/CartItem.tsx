import { Link } from "react-router-dom";
import { CartItemType } from "../context/CartContext";
import { useCartContext } from "../hooks/useCartContext";
import styles from "./CartItem.module.css";

type CartItemProps = {
  cartItem: CartItemType;
};

export default function CartItem({ cartItem }: CartItemProps) {
  const {
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProductFromCart,
  } = useCartContext();

  return (
    <div className={styles.cartItem}>
      <button
        className={styles.removeItemBtn}
        onClick={() => removeProductFromCart(cartItem.product._id)}
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
      <div className={styles.imageContainer}>
        <img src={cartItem.product.imageUrl} alt="" />
      </div>
      <div className={styles.details}>
        <h4>{cartItem.product.name}</h4>
        <Link to={"/vendor/" + cartItem.product._id}>
          {cartItem.product.vendor.name}
        </Link>
        <div className={styles.quantityControl}>
          <button onClick={() => decreaseProductQuantity(cartItem.product._id)}>
            -
          </button>
          <p className={styles.quantity}>{cartItem.quantity}</p>
          <button onClick={() => increaseProductQuantity(cartItem.product._id)}>
            +
          </button>
          <p className={styles.totalPrice}>
            ${(cartItem.product.price * cartItem.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
