import Category from "../components/Category";
import styles from "./CategoriesPage.module.css";

const categories = [
  { name: "Rice", imageUrl: "/rice.jpg" },
  { name: "Fast Food", imageUrl: "/fast-food.jpg" },
  { name: "Drinks", imageUrl: "/drinks.jpg" },
  { name: "Steak", imageUrl: "/steak.jpg" },
  { name: "Cake", imageUrl: "/cake-category.png" },
  { name: "Salad", imageUrl: "/salad.jpg" },
  { name: "Pizza", imageUrl: "/pizza.jpg" },
];

export default function CategoriesPage() {
  return (
    <div className={styles.categoriesPage}>
      <h2>Categories</h2>
      <div className={styles.categoriesGrid}>
        {categories.map((category) => (
          <Category key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
}
