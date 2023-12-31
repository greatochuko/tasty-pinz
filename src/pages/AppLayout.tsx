import CartButton from "../components/CartButton";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

export default function AppLayout() {
  return (
    <div className={styles.AppLayout}>
      <Navbar />
      <main className={styles.outlet}>
        <Outlet />
      </main>
      <CartButton />

      <Footer />
      <Toaster />
    </div>
  );
}
