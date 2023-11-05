import styles from "./Products.module.css";
import Product from "./Product";
import SectionHeading from "./SectionHeading";

const products = [
  {
    name: "Chicken Burger",
    vendor: "Dallas",
    price: 12.99,
    imgUrl: "/chicken-burger.jpg",
    rating: 5.0,
  },
  {
    name: "Chicken Burger 2",
    vendor: "Dallas",
    price: 12.99,
    imgUrl: "/chicken-burger.jpg",
    rating: 5.0,
  },
  {
    name: "Chicken Burger 3",
    vendor: "Dallas",
    price: 12.99,
    imgUrl: "/chicken-burger.jpg",
    rating: 5.0,
  },
  {
    name: "Chicken Burger 4",
    vendor: "Dallas",
    price: 12.99,
    imgUrl: "/chicken-burger.jpg",
    rating: 5.0,
  },
  {
    name: "Chicken Burger 5",
    vendor: "Dallas",
    price: 12.99,
    imgUrl: "/chicken-burger.jpg",
    rating: 5.0,
  },
  {
    name: "Chicken Burger 6",
    vendor: "Dallas",
    price: 12.99,
    imgUrl: "/chicken-burger.jpg",
    rating: 5.0,
  },
  {
    name: "Chicken Burger 7",
    vendor: "Dallas",
    price: 12.99,
    imgUrl: "/chicken-burger.jpg",
    rating: 5.0,
  },
];

export default function Products() {
  return (
    <section className={styles.products}>
      <SectionHeading title="Popular Meals" linkText="See All Meals" />
      <div className={styles.productList}>
        {products.map((product, i) => (
          <Product key={i} product={product} />
        ))}
      </div>
    </section>
  );
}
