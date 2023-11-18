import { Link } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import { useState } from "react";

type CartProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function Cart({ isOpen, setIsOpen }: CartProps) {
  const { cart } = useCartContext();
  const [coupon, setCoupon] = useState("");

  function handleApplyCoupon(e: React.FormEvent) {
    e.preventDefault();
    setCoupon("");
  }

  return (
    <>
      <div className={[styles.cart, isOpen ? styles.open : ""].join(" ")}>
        <h2 className={styles.heading}>My Cart</h2>
        <div className={styles.cartItems}>
          {cart.map((cartItem) => (
            <CartItem key={cartItem.product._id} cartItem={cartItem} />
          ))}
        </div>
        <form onSubmit={handleApplyCoupon}>
          <input
            type="text"
            placeholder="Enter Coupon"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button type="submit">Apply</button>
        </form>
        <div className={styles.total}>
          <p>Total</p>
          <p>
            $
            {cart
              .reduce((curr, acc) => acc.product.price * acc.quantity + curr, 0)
              .toFixed(2)}
          </p>
        </div>
        <Link to={"/checkout"} className={styles.checkoutBtn}>
          Checkout Now
        </Link>
      </div>
      <div
        className={[styles.overlay, isOpen ? styles.open : ""].join(" ")}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
}
