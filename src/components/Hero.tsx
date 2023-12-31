import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heading}>
        <h1>
          The best <span>delicious food</span>
        </h1>
        <p>that meets your needs</p>
        <div className={styles.categories}>
          <Link
            to={"/menu?filterBy=salad"}
            className={styles.category + " " + styles.active}
          >
            <img src="/salad.png" alt="salad" />
            <p>Salad</p>
          </Link>
          <Link to={"/menu?filterBy=fast-food"} className={styles.category}>
            <img src="/burger.png" alt="burger" />
            <p>Burger</p>
          </Link>
          <Link to={"/menu?filterBy=cake"} className={styles.category}>
            <img src="/cake.png" alt="cake" />
            <p>Cake</p>
          </Link>
          <Link to={"/menu?filterBy=drinks"} className={styles.category}>
            <img src="/drinks.png" alt="drinks" />
            <p>Drinks</p>
          </Link>
          <Link to={"/menu?filterBy=pizza"} className={styles.category}>
            <img src="/pizza.png" alt="pizza" />
            <p>Pizza</p>
          </Link>
        </div>
      </div>
      <img src="/salad-category.png" alt="salad" />
    </div>
  );
}
