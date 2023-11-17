import { Link } from "react-router-dom";
import styles from "./Categories.module.css";
import SectionHeading from "./SectionHeading";
const categories = [
  { name: "Rice", imgUrl: "/rice-category-small.jpg", url: "rice", _id: 1 },
  { name: "Meat", imgUrl: "/meat-category-small.jpg", url: "meat", _id: 2 },
  {
    name: "Soup, Stews and Curries",
    imgUrl: "/soup-category-small.jpg",
    url: "soup",
    _id: 3,
  },
  {
    name: "Vegetarian and Vegan",
    imgUrl: "/vegan-category-small.jpg",
    url: "vegan",
    _id: 4,
  },
];

export default function Categories() {
  return (
    <section className={styles.categories}>
      <SectionHeading
        title="Popular Categories"
        linkText="See More"
        link="categories"
      />
      <div className={styles.categoryList}>
        {categories.map((category) => (
          <Link
            to={`/categories/${category.url}`}
            key={category._id}
            className={styles.category}
          >
            <img src={category.imgUrl} alt={category.name} />
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
