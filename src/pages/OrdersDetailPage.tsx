import { useState } from "react";
import styles from "./OrdersPage.module.css";
import { useParams } from "react-router-dom";

export default function OrderDetailPage() {
  const [active, setActive] = useState("all");
  const { orderId } = useParams();

  return (
    <div className={styles.ordersPage}>
      <h1>Order {orderId}</h1>
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
            <span>Order ID</span>
            <span>Product Name</span>
            <span>Date</span>
            <span>Total Price</span>
            <span>Status</span>
          </li>
          <li className={styles.row}>
            <span>1</span>
            <span>#12345678</span>
            <span>Lorem ipsum dolor...</span>
            <span>20/03/2023</span>
            <span>$399.99</span>
            <span>Complete</span>
          </li>
          <li className={styles.row}>
            <span>1</span>
            <span>#12345678</span>
            <span>Lorem ipsum dolor...</span>
            <span>20/03/2023</span>
            <span>$399.99</span>
            <span>Complete</span>
          </li>
          <li className={styles.row}>
            <span>1</span>
            <span>#12345678</span>
            <span>Lorem ipsum dolor...</span>
            <span>20/03/2023</span>
            <span>$399.99</span>
            <span>Complete</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
