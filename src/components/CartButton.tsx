import styles from "./CartButton.module.css";
import { useCartContext } from "../hooks/useCartContext";
import Cart from "./Cart";
import { useState } from "react";
import useUserContext from "../hooks/useUserContext";

export default function CartButton() {
  const { state: cart } = useCartContext();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserContext();
  console.log(user);

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
