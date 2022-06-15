import React, { useState } from "react";

export const BreadBlock = ({ title, price, imageUrl, weight, types }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeWeight, setActiveWeight] = useState(0);
  const typeNames = ["wheat", "mixed"];
  return (
    <div className="bread-block">
      <h4 className="bread-block__title">{title}</h4>
      <img className="bread-block__image" src={imageUrl} alt="Bread" />
      <div className="bread-block__selector">
        <ul>
          {types.map((typeId) => (
            <li
              key={typeId}
              onClick={() => setActiveType(typeId)}
              className={activeType === typeId ? "active" : ""}
            >
              {typeNames[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {weight.map((value, i) => (
            <li
              key={value}
              onClick={() => setActiveWeight(i)}
              className={activeWeight === i ? "active" : ""}
            >
              {value} oz.
            </li>
          ))}
        </ul>
      </div>
      <div className="bread-block__bottom">
        <div className="bread-block__price">from {price} €</div>
        <button className=" button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
          <i>0</i>
        </button>
      </div>
    </div>
  );
};