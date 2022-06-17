import React, { useEffect, useState } from "react";
import { Categories } from "../components/Categories";
import { SortPopup } from "../components/SortPopup";
import { BreadBlock } from "../components/BreadBlock";
import { Skeleton } from "../components/BreadBlock/Skeleton";

export const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://62a72131bedc4ca6d7c2c681.mockapi.io/items?category=" + categoryId
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(i) => setCategoryId(i)}
        />
        <SortPopup
          value={sortType}
          onChangeSort={(i) => setSortType(i)}
        />
      </div>
      <h2 className="content__title">Products</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <BreadBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
};
