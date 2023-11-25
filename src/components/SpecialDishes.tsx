import useCarousel from "../hooks/useCarousel";
import styles from "./SpecialDishes.module.css";

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
  const {
    carouselRef,
    scrollLeft,
    scrollPosition,
    scrollRight,
    childRef,
    vendorWidth,
  } = useCarousel(specialDishes);

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
        <div className={styles.carousel} ref={carouselRef}>
          <div
            className={styles.specialDishList}
            style={{
              transform: `translateX(${scrollPosition * (vendorWidth + 16)}px)`,
            }}
          >
            <a
              key={specialDishes[0].name}
              className={styles.specialDish}
              ref={childRef}
            >
              <img
                src={specialDishes[0].imageUrl}
                alt={specialDishes[0].name}
              />
              <h4>
                {specialDishes[0].name} <span>${specialDishes[0].price}</span>
              </h4>
            </a>
            {specialDishes.map((dish) =>
              dish !== specialDishes[0] ? (
                <div key={dish.name} className={styles.specialDish}>
                  <img src={dish.imageUrl} alt={dish.name} />
                  <h4>
                    {dish.name} <span>${dish.price}</span>
                  </h4>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
