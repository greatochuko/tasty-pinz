import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";
import LogoutModal from "./LogoutModal";
import useUserContext from "../hooks/useUserContext";

export default function Navbar() {
  const { pathname } = useLocation();
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const { user } = useUserContext();

  return (
    <>
      <header>
        <nav className={styles.navbar}>
          <button
            className={styles.toggleNavBtn}
            onClick={() => setNavIsOpen(true)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <Link to={"/"}>
            <img src="/logo.png" alt="logo" className={styles.logo} />
          </Link>

          <ul className={navIsOpen ? styles.open : ""}>
            <li
              className={pathname === "/menu" ? styles.active : ""}
              onClick={() => {
                setNavIsOpen(false);
              }}
            >
              <Link to={"/menu"}>Menu</Link>
            </li>
            <li
              onClick={() => {
                setNavIsOpen(false);
              }}
              className={pathname === "/vendors" ? styles.active : ""}
            >
              <Link to={"/vendors"}>Vendors</Link>
            </li>
            <li
              onClick={() => {
                setNavIsOpen(false);
              }}
              className={pathname === "/categories" ? styles.active : ""}
            >
              <Link to={"/categories"}>Categories</Link>
            </li>
            {user ? (
              <li className={pathname === "/order" ? styles.active : ""}>
                <Link to={"/order"}>Orders</Link>
              </li>
            ) : null}
          </ul>
          <div
            className={[
              styles.mobileOverlay,
              navIsOpen ? styles.open : null,
            ].join(" ")}
            onClick={() => setNavIsOpen(false)}
          ></div>
          <div className={styles.user}>
            {user ? (
              <button onClick={() => setLogoutModal(true)}>
                <i className="fa-solid fa-right-from-bracket"></i>Logout
              </button>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </div>
        </nav>
      </header>
      {logoutModal ? (
        <LogoutModal closeModal={() => setLogoutModal(false)} />
      ) : null}
    </>
  );
}
