import { useState } from "react";
import styles from "./OrdersPage.module.css";
import { Link } from "react-router-dom";

const orders = [
  {
    _id: "12345671",
    address: "351, Downtown, AU",
    date: "23/12/2022",
    totalPrice: 120.99,
    status: "completed",
  },
  {
    _id: "12345672",
    address: "351, Downtown, AU",
    date: "23/12/2022",
    totalPrice: 12.99,
    status: "pending",
  },
  {
    _id: "12345673",
    address: "351, Downtown, AU",
    date: "23/12/2022",
    totalPrice: 475.99,
    status: "canceled",
  },
  {
    _id: "12345674",
    address: "351, Downtown, AU",
    date: "23/12/2022",
    totalPrice: 499.99,
    status: "completed",
  },
  {
    _id: "12345675",
    address: "351, Downtown, AU",
    date: "23/12/2022",
    totalPrice: 4320.99,
    status: "pending",
  },
];

export default function OrdersPage() {
  const [active, setActive] = useState("all");

  let filteredOrders = [...orders];

  if (active !== "all") {
    filteredOrders = orders.filter((order) => order.status === active);
  }

  return (
    <div className={styles.ordersPage}>
      <h1>
        Orders <span>{orders.length} Orders Found</span>
      </h1>
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
            className={active === "canceled" ? styles.active : ""}
            onClick={() => setActive("canceled")}
          >
            Canceled
          </li>
        </ul>
      </nav>
      <div className={styles.ordersTable}>
        <ul>
          <li className={styles.tableHead}>
            <span>#</span>
            <span>Order ID</span>
            <span>Address</span>
            <span>Date</span>
            <span>Total Price</span>
            <span>Status</span>
          </li>
          {filteredOrders.map((order, i) => (
            <li key={order._id} className={styles.row}>
              <Link to={`/order/${order._id}`}>
                <span>{i + 1}</span>
                <span>#{order._id}</span>
                <span>{order.address}</span>
                <span>{order.date}</span>
                <span>${order.totalPrice}</span>
                <span className={styles[order.status]}>{order.status}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
