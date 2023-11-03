import styles from "./Reviews.module.css";
import { useState, useEffect } from "react";

const reviews = [
  {
    user: "John Doe",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores odit commodi labore ipsam sit voluptas cum quam quia explicabo.",
  },
  {
    user: "John Doe 2",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores odit ",
  },
  {
    user: "John Doe 3",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores odit commodi labore ipsam sit ",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentIndex((curr) => {
          if (curr === reviews.length - 1) return 0;
          return curr + 1;
        }),
      10000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.reviews}>
      <div className={styles.overlay}>
        {reviews.map((review, i) => (
          <div
            key={review.message}
            className={
              styles.review + " " + (currentIndex === i ? styles.active : "")
            }
          >
            <h3>"</h3>
            <p>{review.message}</p>
            <h4>- {review.user}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
