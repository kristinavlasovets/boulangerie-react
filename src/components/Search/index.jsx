import React from "react";
import styles from "./Search.module.scss";

export const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <img
        className={styles.icon}
        src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/search-zoom-fit-512.png"
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
          src="https://cdn4.iconfinder.com/dataon/icons/basic-user-interface-elements/700/exit-delete-remove-close-x-512.png"
          alt="clear"
        />
      )}
    </div>
  );
};
