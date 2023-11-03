import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { pathname } = useLocation();
  return (
    <header className={styles.header}>
      <nav>
        <img src="/logo.png" alt="logo" className={styles.logo} />
        <ul>
          <li className={pathname === "/" ? styles.active : ""}>
            <Link to={"/menu"}>Menu</Link>
          </li>
          <li>
            <Link to={"/vendors"}>Vendors</Link>
          </li>
          <li>
            <Link to={"/categories"}>Categories</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Link to={"/order"}>Orders</Link>
            </li>
          ) : null}
        </ul>
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
      <div className={styles.hero}>
        <div className={styles.heading}>
          <h1>
            The best <span>delicious food</span>
          </h1>
          <p>that meets your needs</p>
          <div className={styles.categories}>
            <Link
              to={"/categories/salad"}
              className={styles.category + " " + styles.active}
            >
              <img src="/salad.png" alt="salad" />
              <p>Salad</p>
            </Link>
            <Link to={"/categories/burger"} className={styles.category}>
              <img src="/burger.png" alt="burger" />
              <p>Burger</p>
            </Link>
            <Link to={"/categories/cake"} className={styles.category}>
              <img src="/cake.png" alt="cake" />
              <p>Cake</p>
            </Link>
            <Link to={"/categories/drinks"} className={styles.category}>
              <img src="/drinks.png" alt="drinks" />
              <p>Drinks</p>
            </Link>
            <Link to={"/categories/pizza"} className={styles.category}>
              <img src="/pizza.png" alt="pizza" />
              <p>Pizza</p>
            </Link>
          </div>
        </div>
        <img src="/salad-category.png" alt="salad" />
      </div>
    </header>
  );
}
