import { Link } from "react-router-dom";
import styles from "./Category.module.css";

type CategoryType = {
  name: string;
  imageUrl: string;
};

type CategoryProps = {
  category: CategoryType;
};

export default function Category({ category }: CategoryProps) {
  const url = category.name.split(" ").join("-").toLowerCase();
  return (
    <Link to={`/category/${url}`} className={styles.category}>
      <img src={category.imageUrl} alt="" />
      <h3>{category.name}</h3>
    </Link>
  );
}
