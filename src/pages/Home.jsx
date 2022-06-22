import React, { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch} from 'react-redux';

import {setCategoryId} from "../redux/slices/filterSlice"
import { Categories } from "../components/Categories";
import { SortPopup } from "../components/SortPopup";
import { BreadBlock } from "../components/BreadBlock";
import { Skeleton } from "../components/BreadBlock/Skeleton";
import { Pagination } from "../components/Pagination";
import { SearchContext } from "../App";

export const Home = () => {

  const dispatch = useDispatch();
  const categoryId = useSelector(state => state.filterSlice.categoryId)

  console.log(categoryId, 'is category id')

  const { searchValue } = useContext(SearchContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: "popularity",
    sortProperty: "rating",
  });

  const onChangeCategory = (id) => {
    console.log(id);
    dispatch(setCategoryId(id));
  };




  useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    fetch(
      `https://62a72131bedc4ca6d7c2c681.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={onChangeCategory}
        />
        <SortPopup value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Products</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <BreadBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};
