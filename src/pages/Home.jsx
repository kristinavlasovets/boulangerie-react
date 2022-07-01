import React, { useEffect, useState, useContext, useRef } from "react";
import qs from "qs";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import { fetchBread } from "../redux/slices/breadSlice";

import { Categories } from "../components/Categories";
import { SortPopup } from "../components/SortPopup";
import { BreadBlock } from "../components/BreadBlock";
import { Skeleton } from "../components/BreadBlock/Skeleton";
import { Pagination } from "../components/Pagination";
import { SearchContext } from "../App";

const list = [
  { name: "name", sortProperty: "-title" },
  { name: "popularity", sortProperty: "rating" },
  { name: "price: high to low", sortProperty: "price" },
  { name: "price: low to high", sortProperty: "-price" },
];

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef();
  const isMounted = useRef();

  const {items, status } = useSelector((state) => state.bread);
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );

  const { searchValue } = useContext(SearchContext);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchGoods = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchBread({
        currentPage,
        sortBy,
        order,
        category,
        search,
      })
    );
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId,
        sortProperty: sort.sortProperty,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      fetchGoods();
    }
    isSearch.current = false;
  }, [] );

  const breads = items.map((obj) => <BreadBlock key={obj.id} {...obj} />);
  const skeletons =  [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <SortPopup />
      </div>
      <h2 className="content__title">Products</h2>
      <div className="content__items">
        {status === 'loading'
          ? skeletons
          : breads}
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};
