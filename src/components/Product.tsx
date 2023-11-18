import { Link } from "react-router-dom";
import React, { useState } from "react";
import styles from "./Product.module.css";
import ProductModal from "./ProductModal";

export type VendorType = {
  name: string;
  _id: string;
};

export type ProductType = {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
  vendor: VendorType;
};

type ProductProps = {
  product: ProductType;
};

export default function Product({ product }: ProductProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function closeModal() {
    setModalIsOpen(false);
  }

  function handleLikeProduct(e: React.MouseEvent) {
    e.stopPropagation();
    return;
  }

  return (
    <>
      <div className={styles.product} onClick={() => setModalIsOpen(true)}>
        <div className={styles.imgContainer}>
          <i className="fa-regular fa-heart" onClick={handleLikeProduct}></i>
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className={styles.details}>
          <h4>
            {product.name}
            <span>${product.price}</span>
          </h4>
          <Link
            to={`/vendor/${product.vendor.name
              .split(" ")
              .join("-")
              .toLowerCase()}`}
          >
            {product.vendor.name}
          </Link>
        </div>
      </div>
      {modalIsOpen && (
        <ProductModal product={product} closeModal={closeModal} />
      )}
    </>
  );
}
