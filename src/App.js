import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Categories } from "./components/Categories";
import { SortPopup } from "./components/SortPopup";
import { BreadBlock } from "./components/BreadBlock";

import "./scss/app.scss";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://62a72131bedc4ca6d7c2c681.mockapi.io/items")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <SortPopup />
          </div>
          <h2 className="content__title">Products</h2>
          <div className="content__items">
            {items.map((obj) => (
              <BreadBlock {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
