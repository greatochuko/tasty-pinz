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
        onClick={() => removeProductFromCart(cartItem.product)}
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
      <div className={styles.imageContainer}>
        <img src={cartItem.product.imgUrl} alt="" />
      </div>
      <div className={styles.details}>
        <h4>{cartItem.product.name}</h4>
        <div className={styles.quantityControl}>
          <button onClick={() => decreaseProductQuantity(cartItem.product)}>
            -
          </button>
          <p className={styles.quantity}>{cartItem.quantity}</p>
          <button onClick={() => increaseProductQuantity(cartItem.product)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
