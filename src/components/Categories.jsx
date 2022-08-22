import React from "react";

export const Categories = ({value, onChangeCategory}) => {
  const categories = ["All", "French traditional", "Organic", "Sourdough"];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};