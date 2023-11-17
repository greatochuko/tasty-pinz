import React, { useState } from "react";
import styles from "./SearchForm.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SearchForm() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
  const [query, setQuery] = useState(searchQuery || "");
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/menu?query=${query}`);
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
