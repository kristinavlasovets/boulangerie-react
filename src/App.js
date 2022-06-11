import React from "react";
import { Header } from "./components/Header";
import { Categories } from "./components/Categories";
import { SortPopup } from "./components/SortPopup";
import { BreadBlock } from "./components/BreadBlock";

import breads from "./db.json"


import "./scss/app.scss";

function App() {
  console.log(breads.breads)
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
            {breads && breads.breads.map((obj) => (<BreadBlock title={obj.title} price={obj.price} />))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
