import React from "react";
import { Header } from "./components/Header";
import { Categories } from "./components/Categories";
import { SortPopup } from "./components/SortPopup";
import { BreadBlock} from "./components/BreadBlock";

import "./scss/app.scss";



function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
       <div className="container">
         <div className="content__top">
           <Categories />
           <SortPopup/>
         </div>
         <h2 className="content__title">Products</h2>
         <div className="content__items">
         <BreadBlock title='Wheat' price='5'/>
         <BreadBlock type='mixed'/>
         <BreadBlock/>
         <BreadBlock/>
         <BreadBlock/>
         <BreadBlock/>
         <BreadBlock/>
         <BreadBlock/>
         </div>
       </div>
      </div>
    </div>
  );
}

export default App;
