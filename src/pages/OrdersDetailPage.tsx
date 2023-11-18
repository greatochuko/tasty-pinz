import { useState } from "react";
import styles from "./OrdersPage.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";

const products = [
  {
    _id: "#12345671",
    name: "Big Mac Chicken Burger",
    imgUrl: "/chicken-burger.jpg",
    quantity: 3,
    price: 128,
    status: "completed",
  },
  {
    _id: "#12345672",
    name: "Big Mac Chicken Burger",
    imgUrl: "/chicken-burger.jpg",
    quantity: 3,
    price: 128,
    status: "pending",
  },
  {
    _id: "#12345673",
    name: "Big Mac Chicken Burger",
    imgUrl: "/chicken-burger.jpg",
    quantity: 3,
    price: 128,
    status: "canceled",
  },
  {
    _id: "#12345674",
    name: "Big Mac Chicken Burger",
    imgUrl: "/chicken-burger.jpg",
    quantity: 3,
    price: 128,
    status: "completed",
  },
  {
    _id: "#12345675",
    name: "Big Mac Chicken Burger",
    imgUrl: "/chicken-burger.jpg",
    quantity: 3,
    price: 128,
    status: "pending",
  },
];

export default function OrderDetailPage() {
  const [active, setActive] = useState("all");
  const { orderId } = useParams();
  const navigate = useNavigate();

  let filteredProducts = [...products];

  if (active !== "all") {
    filteredProducts = products.filter((product) => product.status === active);
  }

  return (
    <div className={styles.ordersPage}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <i className="fa-solid fa-caret-left"></i>
        <p>Back</p>
      </button>
      <h1>Order #{orderId}</h1>
      <nav className={styles.ordersNav}>
        <ul>
          <li
            className={active === "all" ? styles.active : ""}
            onClick={() => setActive("all")}
          >
            All Orders
          </li>
          <li
            className={active === "completed" ? styles.active : ""}
            onClick={() => setActive("completed")}
          >
            Completed
          </li>
          <li
            className={active === "pending" ? styles.active : ""}
            onClick={() => setActive("pending")}
          >
            Pending
          </li>
          <li
            className={active === "cancelled" ? styles.active : ""}
            onClick={() => setActive("cancelled")}
          >
            Cancelled
          </li>
        </ul>
      </nav>
      <div className={styles.ordersTable}>
        <ul>
          <li className={styles.tableHead}>
            <span>#</span>
            <span>Product ID</span>
            <span>Product Name</span>
            <span>Quantity</span>
            <span>Total Price</span>
            <span>Status</span>
          </li>
          {filteredProducts.map((product, i) => (
            <li key={product._id} className={styles.row}>
              <Link to={""}>
                <span>{i + 1}</span>
                <span>{product._id}</span>
                <span>
                  <img src={product.imgUrl} alt="" />
                  {product.name}
                </span>
                <span>{product.quantity}</span>
                <span>${(product.price * product.quantity).toFixed(2)}</span>
                <span className={styles[product.status]}>{product.status}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
