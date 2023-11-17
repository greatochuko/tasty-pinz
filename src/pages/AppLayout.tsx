import CartButton from "../components/CartButton";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Navbar from "../components/Navbar";

export default function AppLayout() {
  return (
    <div className={styles.AppLayout}>
      <Navbar />
      <Outlet />
      <CartButton />

      <Footer />
    </div>
  );
}
