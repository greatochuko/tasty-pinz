import React, { useState } from "react";
import styles from "./SearchForm.module.css";

export default function SearchForm() {
  const [query, setQuery] = useState("");

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Our Menu"
      />
      <button type="submit">Search</button>
    </form>
  );
}
