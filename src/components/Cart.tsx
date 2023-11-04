import styles from "./Cart.module.css";

type CartProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function Cart({ isOpen, setIsOpen }: CartProps) {
  return (
    <>
      <div className={[styles.cart, isOpen ? styles.open : ""].join(" ")}>
        Cart
      </div>
      <div
        className={[styles.overlay, isOpen ? styles.open : ""].join(" ")}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
}
