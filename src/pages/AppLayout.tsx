import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.AppLayout}>
      <Outlet />
      <Footer />
    </div>
  );
}
