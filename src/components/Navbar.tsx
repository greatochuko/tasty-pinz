import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { pathname } = useLocation();
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <button
        className={styles.toggleNavBtn}
        onClick={() => setNavIsOpen(true)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <img src="/logo.png" alt="logo" className={styles.logo} />

      <ul className={navIsOpen ? styles.open : ""}>
        <li className={pathname === "/" ? styles.active : ""}>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/vendors"}>Vendors</Link>
        </li>
        <li>
          <Link to={"/categories"}>Categories</Link>
        </li>
        {isLoggedIn ? (
          <li>
            <Link to={"/order"}>Orders</Link>
          </li>
        ) : null}
      </ul>
      <div
        className={[styles.mobileOverlay, navIsOpen ? styles.open : null].join(
          " "
        )}
        onClick={() => setNavIsOpen(false)}
      ></div>
      <div className={styles.user}>
        {isLoggedIn ? (
          <Link to={""} onClick={() => setIsLoggedIn(false)}>
            Logout
          </Link>
        ) : (
          <Link to={""} onClick={() => setIsLoggedIn(true)}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
