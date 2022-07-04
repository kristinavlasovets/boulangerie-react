import React, { useState, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";
import debounce from "lodash.debounce";
import styles from "./Search.module.scss";

export const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 150),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img
        className={styles.icon}
        src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
        alt="search"
      />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Search"
      />
      {value && (
        <img
          onClick={onClickClear}
          className={styles.icon_clear}
          src="https://cdn-icons.flaticon.com/png/512/3667/premium/3667999.png?token=exp=1656311455~hmac=764886363e3498aa007525679761c748"
          alt="clear"
        />
      )}
    </div>
  );
};
