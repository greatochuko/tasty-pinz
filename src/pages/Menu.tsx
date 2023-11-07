import SearchForm from "../components/SearchForm";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <main className={styles.menu}>
      <SearchForm />
      <div className="menuItems">
        <ul className="filter">
          <li>All</li>
          <li>Food</li>
          <li>Rice</li>
          <li>Drinks</li>
        </ul>
      </div>
    </main>
  );
}
