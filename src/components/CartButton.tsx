import styles from "./CartButton.module.css";
import { useCartContext } from "../hooks/useCartContext";
import Cart from "./Cart";
import { useState } from "react";

export default function CartButton() {
  const { cart } = useCartContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={styles.cartBtn} onClick={() => setIsOpen(true)}>
        <i className="fa-solid fa-cart-shopping"></i>
        <span>{cart.length}</span>
      </button>
      <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
