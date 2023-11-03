import styles from "./SpecialDishes.module.css";
import { useState, useRef } from "react";

const specialDishes = [
  { name: "Lobster Thermidor", imageUrl: "lobster-thermidor.jpg", price: 40 },
  { name: "Wagyu Beef Steak", imageUrl: "wagyu-beef-steak.jpg", price: 110 },
  { name: "Truffle Risotto", imageUrl: "truffle-risotto.jpg", price: 35 },
  {
    name: "Foie Gras and Fig Compote",
    imageUrl: "foie-gras-and-fig-compote.jpg",
    price: 30,
  },
  { name: "Truffle Risotto3", imageUrl: "truffle-risotto.jpg", price: 35 },
  { name: "Truffle Risotto4", imageUrl: "truffle-risotto.jpg", price: 35 },
];

export default function SpecialDishes() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const specialDishRef = useRef<HTMLDivElement | null>(null);
  const specialDishWidth: number | undefined = specialDishRef.current
    ?.clientWidth as number;

  function scrollLeft() {
    if (scrollPosition === specialDishes.length - 1) return;
    setScrollPosition((curr) => curr + 1);
  }

  function scrollRight() {
    if (scrollPosition === 0) return;
    setScrollPosition((curr) => curr - 1);
  }

  return (
    <section className={styles.specialDishes}>
      <div className={styles.overlay}>
        <div className={styles.heading}>
          <h3>Our Special Dishes</h3>
          <div className={styles.buttons}>
            <button onClick={scrollRight}>&lt;</button>
            <button onClick={scrollLeft}>&gt;</button>
          </div>
        </div>
        <div className={styles.carousel}>
          <div
            className={styles.specialDishList}
            style={{
              transform: `translateX(-${
                scrollPosition * (specialDishWidth + 20)
              }px)`,
            }}
          >
            {specialDishes.map((dish) => (
              <div
                key={dish.name}
                className={styles.specialDish}
                ref={specialDishRef}
              >
                <img src={dish.imageUrl} alt={dish.name} />
                <h4>
                  {dish.name} <span>${dish.price}</span>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
