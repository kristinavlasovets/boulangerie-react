import React from "react";
import { useContext } from "react";
import { SearchContext } from "../../App";
import styles from "./Search.module.scss";

export const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <div className={styles.root}>
      <img
        className={styles.icon}
        src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
        alt="search"
      />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Search"
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue("")}
          className={styles.icon_clear}
          src="https://cdn-icons.flaticon.com/png/512/2997/premium/2997911.png?token=exp=1655799115~hmac=62d0f4cc1fe5a02e2ea55b586fcb52da"
          alt="clear"
        />
      )}
    </div>
  );
};
