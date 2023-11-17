import { Link } from "react-router-dom";
import { useState } from "react";
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
  const [loaded, setLoaded] = useState(false);

  return (
    <Link to={`/menu?filterBy=${url}`} className={styles.category}>
      <img
        className={loaded ? styles.loaded : ""}
        src={category.imageUrl}
        onLoad={() => {
          setLoaded(true);
        }}
        alt=""
      />
      {loaded ? null : <div className={styles.img}></div>}
      <h3>{category.name}</h3>
    </Link>
  );
}
