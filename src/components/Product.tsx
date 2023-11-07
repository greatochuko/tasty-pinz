import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Product.module.css";
import ProductModal from "./ProductModal";
import { useCartContext } from "../hooks/useCartContext";

export type VendorType = {
  name: string;
  _id: string;
};

export type ProductType = {
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  vendor: VendorType;
};

type ProductProps = {
  product: ProductType;
};

export default function Product({ product }: ProductProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {
    state: cart,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useCartContext();

  const productInCart = cart.find((cartItem) => cartItem.product === product);

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <div className={styles.product}>
        <img src={product.imageUrl} alt={product.name} />
        <div className={styles.details}>
          <h3>
            {product.name}
            <span>
              <i className="fa-solid fa-star"></i>
              {product.rating}
            </span>
          </h3>
          <Link to={`/vendors/${product.vendor._id}`}>
            {product.vendor.name}
          </Link>
          <h3>${product.price}</h3>
          {productInCart ? (
            <div className={styles.quantityControl}>
              <button onClick={() => decreaseProductQuantity(product)}>
                -
              </button>
              <p className={styles.quantity}>{productInCart.quantity}</p>
              <button onClick={() => increaseProductQuantity(product)}>
                +
              </button>
            </div>
          ) : (
            <button onClick={() => setModalIsOpen(true)}>+</button>
          )}
        </div>
      </div>
      {modalIsOpen && (
        <ProductModal product={product} closeModal={closeModal} />
      )}
    </>
  );
}
