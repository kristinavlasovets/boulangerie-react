import React, { useEffect, useState } from "react";
import { Categories } from "../components/Categories";
import { SortPopup } from "../components/SortPopup";
import { BreadBlock } from "../components/BreadBlock";
import { Skeleton } from "../components/BreadBlock/Skeleton";

export const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    fetch("https://62a72131bedc4ca6d7c2c681.mockapi.io/items")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <SortPopup />
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
