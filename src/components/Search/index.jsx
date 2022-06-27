import React, {useState, useContext, useRef} from "react";
import debounce from "lodash.debounce";
import { SearchContext } from "../../App";
import styles from "./Search.module.scss";
import { useCallback } from "react";


export const Search = () => {
  const [value, setValue] = useState('');
  const { setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();


  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  }

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    [],
  )

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  }

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
