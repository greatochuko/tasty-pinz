import { useCartContext } from "../hooks/useCartContext";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

type CartProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function Cart({ isOpen, setIsOpen }: CartProps) {
  const { state: cart } = useCartContext();
  return (
    <>
      <div className={[styles.cart, isOpen ? styles.open : ""].join(" ")}>
        <h2 className={styles.heading}>My Cart</h2>
        <div className={styles.cartItems}>
          {cart.map((cartItem) => (
            <CartItem key={cartItem.product._id} cartItem={cartItem} />
          ))}
        </div>
      </div>
      <div
        className={[styles.overlay, isOpen ? styles.open : ""].join(" ")}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
}
