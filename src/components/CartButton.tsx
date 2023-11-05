import styles from "./CartButton.module.css";
import { useCartContext } from "../hooks/useCartContext";

export default function CartButton() {
  const { cart } = useCartContext();
  return (
    <button className={styles.cartBtn}>
      <i className="fa-solid fa-cart-shopping"></i>
      <span>{cart.length}</span>
    </button>
  );
}
