import styles from "./Products.module.css";
import Product from "./Product";

const products = [
  {
    name: "Chicken Burger",
    store: "Dallas",
    price: 12.99,
    imgUrl: "/chicken-burger.jpg",
    rating: 5.0,
  },
  {
    name: "Chicken Burger",
    store: "Dallas",
    price: 12.99,
    imgUrl: "/chicken-burger.jpg",
    rating: 5.0,
  },
  {
    name: "Chicken Burger",
    store: "Dallas",
    price: 12.99,
    imgUrl: "/chicken-burger.jpg",
    rating: 5.0,
  },
  {
    name: "Chicken Burger",
    store: "Dallas",
    price: 12.99,
    imgUrl: "/chicken-burger.jpg",
    rating: 5.0,
  },
  {
    name: "Chicken Burger",
    store: "Dallas",
    price: 12.99,
    imgUrl: "/chicken-burger.jpg",
    rating: 5.0,
  },
];

export default function Products() {
  return (
    <section className={styles.products}>
      {products.map((product, i) => (
        <Product key={i} product={product} />
      ))}
    </section>
  );
}
